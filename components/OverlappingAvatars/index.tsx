import { useEffect, useState } from "react";
import styles from "@/styles/Event.module.scss";

interface IProps {
  amIRegistered: boolean;
  impUsers:
    | {
        avatar: string;
        name: string;
      }[]
    | null;
  totalRegisteredUsers: number;
}

const OverlappingAvatars = ({
  amIRegistered,
  impUsers,
  totalRegisteredUsers,
}: IProps) => {
  const [str, setStr] = useState("");

  console.log(impUsers);

  useEffect(() => {
    let str = "";

    if (impUsers) {
      if (amIRegistered) {
        str += "You, ";
      }

      str += impUsers[0]?.name + ", ";
      str += impUsers[1]?.name + ", ";

      str += `${totalRegisteredUsers - 3} other${
        totalRegisteredUsers - 3 === 1 ? "" : "s"
      }`;

      setStr(str);
    }
  }, [impUsers]);

  return (
    <div className="flex items-center mt-2">
      <div className={styles["overlapping-avatars"]}>
        <ul>
          {impUsers?.map((user) => (
            <li key={user.name}>
              <img src={user.avatar} alt="" />
            </li>
          ))}
        </ul>
      </div>
      {totalRegisteredUsers >= 3 && (
        <div className="ml-2 text-gray-300 text-sm mt-2">{str}</div>
      )}
      {totalRegisteredUsers === 1 && amIRegistered && (
        <div className="ml-2 text-gray-300 text-sm mt-2">You</div>
      )}
    </div>
  );
};

export default OverlappingAvatars;
