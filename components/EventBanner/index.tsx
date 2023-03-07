import type { IEvent } from "@/pages/techelons";
import { motion } from "framer-motion";
import Link from "next/link";

const EventBanner = ({
  event,
}: {
  event: IEvent;
}) => {
  return (
    <div className="event-banner w-full text-white my-12">
      <Link href={`/events/${event.slug}`}>
        <div className="">
          <motion.img
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            exit={{ scale: 2, y: '-100' }}
            src={event?.poster}
            alt={event?.name}
            className="w-[100%] cursor-pointer"
          />
        </div>
      </Link>
    </div>
  );
};

export default EventBanner;
