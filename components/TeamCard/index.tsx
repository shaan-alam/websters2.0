import { useEffect, useRef } from "react";
import styles from "./TeamCard.module.scss";
import { motion, useInView, useAnimationControls } from "framer-motion";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";
import AnimatedLine from "../AnimatedLine";

const boxVariants = {
  initial: {
    y: "20%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
};

const TeamCard = () => {
  // Card controls
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef);
  const cardControls = useAnimationControls();

  // Event Name controls
  const eventNameRef = useRef(null);
  const isEventNameInView = useInView(eventNameRef);
  const eventNameControls = useAnimationControls();

  // Event Description controls
  const eventDescriptionRef = useRef(null);
  const isEventDescriptionInView = useInView(eventDescriptionRef);
  const eventDescriptionControls = useAnimationControls();

  // Event Image Controls
  const eventImageRef = useRef(null);
  const isEventImageInView = useInView(eventImageRef);
  const eventImageControls = useAnimationControls();

  // social links controls
  const socialRef = useRef(null);
  const areSocialsInView = useInView(socialRef);
  const socialsControls = useAnimationControls();

  // Card controls
  useEffect(() => {
    // if (isCardInView) {
    //   cardControls.start({ y: 0, opacity: 1 });
    // } else {
    //   cardControls.start({ y: "10%", opacity: 0 });
    // }
  }, [isCardInView, cardControls]);

  // event name controls
  useEffect(() => {
    if (isEventNameInView) {
      eventNameControls.start({ y: 0, opacity: 1 });
    } else {
      eventNameControls.start({ y: "44%", opacity: 0 });
    }
  }, [isEventNameInView, eventNameControls]);

  // event description controls
  useEffect(() => {
    if (isEventDescriptionInView) {
      eventDescriptionControls.start({ y: 0, opacity: 1 });
    } else {
      eventDescriptionControls.start({ y: "24%", opacity: 0 });
    }
  }, [isEventDescriptionInView, eventDescriptionControls]);

  // event image controls
  useEffect(() => {
    if (isEventImageInView) {
      eventImageControls.start({ opacity: 1 });
    } else {
      eventImageControls.start({ opacity: 0 });
    }
  }, [isEventImageInView, eventImageControls]);

  // socials controls
  useEffect(() => {
    if (areSocialsInView) {
      socialsControls.start({ opacity: 1 });
    } else {
      socialsControls.start({ opacity: 0 });
    }
  }, [areSocialsInView, socialsControls]);

  return (
    <div
      ref={cardRef}
      className={styles.crosshair_card}
    >
      <div className={styles.card_body}>
        <div className="img_container">
          <img
            src="/shaan.png"
            className="object-cover"
          />
        </div>
        <div className={styles.card_content}>
          <h1 ref={eventNameRef} className={styles.event_name}>
            <motion.div
              initial={{ y: "44%", opacity: 0 }}
              animate={eventNameControls}
              transition={{ duration: "1" }}
            >
              Shaan Alam
            </motion.div>
          </h1>
          <div className="relative overflow-hidden">
            <motion.h2
              ref={eventDescriptionRef}
              initial={{ y: "24%", opacity: 0 }}
              animate={eventDescriptionControls}
              transition={{ duration: "1" }}
            >
              Technical Head
            </motion.h2>
          </div>
          <motion.div
            ref={socialRef}
            initial={{ opacity: 0 }}
            animate={socialsControls}
            className="socials flex items-center justify-between w-1/3 mt-4"
          >
            <a
              href="#!"
              target="_blank"
              rel="noreferrer"
              className="text-[#a1a1a1] hover:text-primary transition-colors"
            >
              <IoLogoFacebook size={25} />
            </a>
            <a
              href="#!"
              target="_blank"
              rel="noreferrer"
              className="text-[#a1a1a1] hover:text-primary transition-colors"
            >
              <IoLogoInstagram size={25} />
            </a>
            <a
              href="#!"
              target="_blank"
              rel="noreferrer"
              className="text-[#a1a1a1] hover:text-primary transition-colors"
            >
              <IoLogoLinkedin size={25} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
