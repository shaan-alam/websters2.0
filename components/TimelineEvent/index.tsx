import { useRef, useEffect } from "react";
import type { IEvent } from "@/pages/techelons";
import { motion, useAnimationControls, useInView } from "framer-motion";
import Link from "next/link";
import styles from "./TimelineEvent.module.scss";

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
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        February 2022
      </time>
      <h3 className="md:text-2xl  text-xl font-semibold text-white my-4">
        {event.name}
      </h3>
      <Link
        href={`events/${event.slug}`}
        className={styles.register_btn}
      >
        Register
        <svg
          className="w-3 h-3 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Link>
      <p className="my-6 font-normal text-gray-500 dark:text-gray-400 text-sm leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quos
        similique in eaque laudantium pariatur incidunt debitis nisi natus
        ipsum!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sapiente quos similique in eaque laudantium .
      </p>
      <img src={event.poster} alt={event.name} className="my-4" />
    </motion.li>
  );
};

export default TimelineEvent;
