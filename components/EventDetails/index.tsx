import { IEvent } from "@/pages/techelons";
import { FaCalendar, FaClock, FaGlobe, FaUsers } from "react-icons/fa";
import Moment from "react-moment";
import OverlappingAvatars from "../OverlappingAvatars";
import styles from "./EventDetails.module.scss";

interface IProps {
  event: IEvent;
  totalRegisteredUsers: number;
  impUsers:
    | {
        avatar: string;
        name: string;
      }[]
    | null;
  amIRegistered: boolean;
}

const EventDetails = ({
  event,
  totalRegisteredUsers,
  impUsers,
  amIRegistered,
}: IProps) => {
  return (
    <>
      <h1 className="mb-4 text-2xl">Details:</h1>
      <div className={styles["live-status-block"]}>
        <div className="block">
          {totalRegisteredUsers > 3 && (
            <OverlappingAvatars
              amIRegistered={amIRegistered}
              impUsers={impUsers}
              totalRegisteredUsers={totalRegisteredUsers}
            />
          )}
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center my-6">
            <FaCalendar className="text-gray-400 mr-4" size={25} />
            <div>
              <h1 className="text-lg font-medium font-secondary text-white">
                Deadline
              </h1>
              <p className="text-gray-400 text-sm">
                <Moment fromNow>{event.deadline}</Moment>
              </p>
            </div>
          </div>
          <div className="flex items-center my-6">
            <FaClock className="text-gray-400 mr-4" size={25} />
            <div>
              <h1 className="text-lg font-medium font-secondary text-white">
                Event Date
              </h1>
              <p className="text-gray-400 text-sm">
                <Moment format="DD/MM/YYYY">{event.eventDate}</Moment>
              </p>
            </div>
          </div>
          <div className="flex items-center my-4">
            <FaUsers className="text-gray-400 mr-4" size={25} />
            <div>
              <h1 className="text-lg font-medium font-secondary text-white">
                Team size
              </h1>
              <p className="text-gray-400 text-sm">
                {event.participationType === "individual"
                  ? "Individual "
                  : `${event.minTeamSize} - ${event.maxTeamSize}`}
              </p>
            </div>
          </div>
          <div className="flex items-center my-4">
            <FaGlobe className="text-gray-400 mr-4" size={25} />
            <div>
              <h1 className="text-lg font-medium font-secondary text-white">
                Venue
              </h1>
              <p className="text-gray-400 text-sm">{event.venue}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
