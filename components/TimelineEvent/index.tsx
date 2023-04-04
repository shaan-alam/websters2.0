import { useRef, useEffect } from "react";
import type { IEvent } from "@/pages/techelons";
import { motion, useAnimationControls, useInView } from "framer-motion";
import Link from "next/link";
import styles from "./TimelineEvent.module.scss";
import Moment from "react-moment";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Truncate from "react-truncate";

const TimelineEvent = ({ event }: { event: IEvent }) => {
  const eventRef = useRef(null);
  const isEventInView = useInView(eventRef);
  const eventControls = useAnimationControls();

  useEffect(() => {
    if (isEventInView) {
      eventControls.start({ y: 0, opacity: 1 });
    }
  }, [isEventInView, eventControls]);

  return (
    <motion.li
      className={styles.event}
      ref={eventRef}
      initial={{ y: "10%", opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.112, 0.13] }}
      animate={eventControls}
    >
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <img src={event.poster.url} alt={event.eventHeading} className="my-4" />
      <h3 className="md:text-3xl text-xl font-semibold text-white my-4 uppercase">
        {event.eventHeading}
      </h3>
      <div className="mt-4 mb-6 text-lg font-normal leading-none text-gray-400">
        <Moment format="DD/MM/YYYY">{event.date}</Moment>
      </div>
      <p className="my-6 font-secondary text-gray-500  leading-9">
        <ReactMarkdown>
          {event.caption.markdown && event.caption.markdown}
        </ReactMarkdown>
      </p>
      <Link href={`events/${event.id}`} className={styles.register_btn}>
        Register
        <svg
          className="w-3 h-3 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </motion.li>
  );
};

export default TimelineEvent;
