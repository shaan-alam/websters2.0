import { IUser } from "@/context/GlobalContext";
import { auth, db } from "@/firebase";
import { IEvent } from "@/pages/techelons";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Parser } from '@json2csv/plainjs';

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
  const docsRef = collection(db, event.eventHeading);
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
    collection(db, event.eventHeading),
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


export const exportCSVDocument = (csvString, fileName: string) => {
  const hiddenElement = document.createElement('a');  
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvString);  
    hiddenElement.target = '_blank';  
      
    //provide the name for the CSV file to be downloaded  
    hiddenElement.download = `${fileName}.csv`  
    hiddenElement.click();  
}

const getTeamMembers = (members: { name: string, email: string} []) => {
  const length = members.length;
  const result = {};

  for (let i = 0; i < length; i++) {
    result[`Team member ${i + 1} Name`] = members[i].name;
    result[`Team member ${i + 1} Email`] = members[i].email;
  }

  return result
}

export const fetchRegistrations = async (eventName: string) => {
  const docsRef = collection(db, eventName);
  const docsSnap = await getDocs(docsRef);

  let registrations = [{}];

  docsSnap.forEach((doc) => {
    registrations.push({
      name: doc.data().name as string,
      rollNo: doc.data().rollNo as string,
      course: doc.data().course as string,
      college: doc.data().college as string,
      phone: doc.data().phone as string,
      email: doc.data().email as string,
      ...getTeamMembers(doc.data().members)
    });
  });

  const parser = new Parser();
  const csv = parser.parse(registrations);
  console.log(csv);
  exportCSVDocument(csv, `${eventName} Registrations`)

}