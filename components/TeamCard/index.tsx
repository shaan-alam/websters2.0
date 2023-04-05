import { useEffect, useRef } from "react";
import styles from "./TeamCard.module.scss";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { ITeam } from "@/pages/about";

const TeamCard = ({ member }: { member: ITeam }) => {
  // Card controls
  const cardRef = useRef(null);

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

  // event name controls
  useEffect(() => {
    if (isEventNameInView) {
      eventNameControls.start({ y: 0, opacity: 1 });
    }
  }, [isEventNameInView, eventNameControls]);

  // event description controls
  useEffect(() => {
    if (isEventDescriptionInView) {
      eventDescriptionControls.start({ y: 0, opacity: 1 });
    }
  }, [isEventDescriptionInView, eventDescriptionControls]);

  // event image controls
  useEffect(() => {
    if (isEventImageInView) {
      eventImageControls.start({ opacity: 1 });
    }
  }, [isEventImageInView, eventImageControls]);

  // socials controls
  useEffect(() => {
    if (areSocialsInView) {
      socialsControls.start({ opacity: 1 });
    }
  }, [areSocialsInView, socialsControls]);

  return (
    <div ref={cardRef} className={styles.crosshair_card}>
      <div className={styles.card_body}>
        <div className="img_container">
          {/* {member.photo != null ? (
            <img
              src={member.photo?.url}
              className="h-[400px] w-[400px] object-contain"
            />
          ) : (
            <h1 className="text-white text-6xl">INSECURE CHUTIYA</h1>
          )}
          {member.photo === null && (
            <p className="text-white">Inhone photo ni bheji apni</p>
          )} */}
        </div>
        <div className={styles.card_content}>
          <h1 ref={eventNameRef} className={styles.event_name}>
            <motion.div
              initial={{ y: "44%", opacity: 0 }}
              animate={eventNameControls}
              transition={{ duration: "1" }}
            >
              {member.name}
            </motion.div>
          </h1>
          <div className="relative overflow-hidden">
            <motion.h2
              ref={eventDescriptionRef}
              initial={{ y: "24%", opacity: 0 }}
              animate={eventDescriptionControls}
              transition={{ duration: "1" }}
            >
              {member.post}
            </motion.h2>
          </div>
          <motion.div
            ref={socialRef}
            initial={{ opacity: 0 }}
            animate={socialsControls}
            className="socials flex items-center justify-between w-1/3 mt-4"
          >
            <a
              href={member.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#a1a1a1] hover:text-primary transition-colors"
            >
              <IoLogoInstagram size={25} />
            </a>
            <a
              href={member.linkedInUrl}
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
