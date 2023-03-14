import { IUser } from "@/context/GlobalContext";
import { auth, db } from "@/firebase";
import { IEvent } from "@/pages/techelons";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

interface GetImpUsersInterface {
  event: IEvent,
  setTotalRegisteredUsers: React.Dispatch<React.SetStateAction<number>>
  setImpUsers: React.Dispatch<React.SetStateAction<  { name: string; avatar: string }[] | null>>
}

/**
 * @desc Gets the important user to show in the event details card
 * @param  - event objects and callbacks functions
 * @returns Promise<void>
 */
export const getImpUsers = async ({event, setTotalRegisteredUsers, setImpUsers}: GetImpUsersInterface) => {
  const docsRef = collection(db, event.name);
  const docsSnap = await getDocs(docsRef);

  let importantUsers: { avatar: string; name: string }[] = [];

  docsSnap.forEach((doc) => {
    importantUsers.push({
      avatar: doc.data().avatar as string,
      name: doc.data().name as string,
    });
  });

  setTotalRegisteredUsers(importantUsers.length);
  setImpUsers(
    importantUsers.length > 3 ? importantUsers.slice(0, 3) : importantUsers
  );
};


interface CheckIfUserAlreadyRegisteredInterface {
  event: IEvent;
  email: string 
}

/**
 * @desc Check if the current logged in user has already register for this event
 * @param  - Object containing email and event
 * @returns Promise
 */
export const checkIfUserAlreadyRegistered = ({email, event}: CheckIfUserAlreadyRegisteredInterface) => {
  const eventQuery = query(
    collection(db, event.name),
    where("email", "==", email)
  );
  return getDocs(eventQuery).then((snap) => {
    return snap.docs.map((doc) => ({ ...doc.data() }));
  });
};

interface GoogleLoginInterface {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

/**
 * @desc Google Registration
 * @param  - Object containing callback functions
 * @returns Promise<void>
 */
export const googleLogin = async ({setIsLoggedIn, setUser }: GoogleLoginInterface) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then((user) => {
    const {
      user: { email, displayName, photoURL },
    } = user;

    let newUser = {
      email: email as string,
      name: displayName as string,
      avatar: photoURL as string,
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(newUser));
      setIsLoggedIn(true);
      setUser(newUser);
    }
  });
};