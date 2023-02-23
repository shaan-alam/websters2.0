import { useEffect, useRef } from "react";
import styles from "./EventCard.module.scss";
import { motion, useInView, useAnimationControls } from "framer-motion";

const EventCard = () => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef);
  const cardControls = useAnimationControls();

  const eventNameRef = useRef(null);
  const isEventNameInView = useInView(eventNameRef);
  const eventNameControls = useAnimationControls();

  const eventDescriptionRef = useRef(null);
  const isEventDescriptionInView = useInView(eventDescriptionRef);
  const eventDescriptionControls = useAnimationControls();

  const eventImageRef = useRef(null);
  const isEventImageInView = useInView(eventImageRef);
  const eventImageControls = useAnimationControls();

  useEffect(() => {
    if (isCardInView) {
      cardControls.start({ y: 0, opacity: 1 });
    } else {
      cardControls.start({ y: "10%", opacity: 0 });
    }
  }, [isCardInView, cardControls]);

  useEffect(() => {
    if (isEventNameInView) {
      eventNameControls.start({ y: 0, opacity: 1 });
    } else {
      eventNameControls.start({ y: "44%", opacity: 0 });
    }
  }, [isEventNameInView, eventNameControls]);

  useEffect(() => {
    if (isEventDescriptionInView) {
      eventDescriptionControls.start({ y: 0, opacity: 1 });
    } else {
      eventDescriptionControls.start({ y: "24%", opacity: 0 });
    }
  }, [isEventDescriptionInView, eventDescriptionControls]);

  useEffect(() => {
    if (isEventImageInView) {
      eventImageControls.start({ opacity: 1 });
    } else {
      eventImageControls.start({ opacity: 0 });
    }
  }, [isEventImageInView, eventImageControls]);

  return (
    <motion.div
      ref={cardRef}
      className={styles.crosshair_card}
      initial={{ y: "10%", opacity: 0 }}
      animate={cardControls}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <div className={styles.card_body}>
        <div className="img_container">
          <motion.img
            ref={eventImageRef}
            src="/event.jpeg"            
            initial={{ opacity: 0 }}
            animate={eventImageControls}
            transition={{ ease: "easeInOut", duration: 1.2 }}
          />
        </div>
        {/* <div className={styles.card_content}>
          <h1 ref={eventNameRef} className={styles.event_name}>
            <motion.div
              initial={{ y: "44%", opacity: 0 }}
              animate={eventNameControls}
              transition={{ duration: "1" }}
            >
              Googler
            </motion.div>
          </h1>
          <div className="relative overflow-hidden">
            <motion.p
              ref={eventDescriptionRef}
              initial={{ y: "24%", opacity: 0 }}
              animate={eventDescriptionControls}
              transition={{ duration: "1" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dicta laborum dolore! Est quo qui accusantium placeat iste ea,
              odio fuga veritatis quam minima eligendi sint asperiores
              architecto nobis vel!
            </motion.p>
          </div> */}
        {/* </div> */}
      </div>
    </motion.div>
  );
};

export default EventCard;
