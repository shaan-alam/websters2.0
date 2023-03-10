import styles from "@/styles/Event.module.scss";

interface IProps {
  amIRegistered: boolean;
  impUsers: {
    avatar: string;
    name: string;
  }[];
  totalRegisteredUsers: number;
}

const OverlappingAvatars = ({
  amIRegistered,
  impUsers,
  totalRegisteredUsers,
}: IProps) => {
  console.log(impUsers);
  return (
    <div className="flex items-center mt-2">
      <div className={styles["overlapping-avatars"]}>
        <ul>
          {impUsers.map((user) => (
            <li key={user.name}>
              <img src={user.avatar} alt="" />
            </li>
          ))}
        </ul>
      </div>
      {totalRegisteredUsers >= 3 && (
        <div className="ml-2 text-gray-300 text-sm mt-2">
          {amIRegistered && "You,"} {impUsers[0].name}, and&nbsp;
          {amIRegistered ? totalRegisteredUsers - 3 : totalRegisteredUsers - 2}
        </div>
      )}
      {totalRegisteredUsers && totalRegisteredUsers < 3 && (
        <div className="ml-2 text-gray-300 text-sm mt-2">{impUsers[0].name}</div>
      )}
    </div>
  );
};

export default OverlappingAvatars;
