import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Header = ({ text }: { text: string }) => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef);
  const headingControls = useAnimationControls();

  useEffect(() => {
    if (isHeadingInView) {
      headingControls.start({ scaleX: 0 });
    } else {
      headingControls.start({ scaleX: 1 });
    }
  }, [isHeadingInView]);

  return (
    <h1
      ref={headingRef}
      className="heading__container uppercase text-5xl md:text-7xl font-bold text-primary relative inline-block"
    >
      <motion.div
        className="heading__slide absolute inset-0 bg-primary origin-right"
        initial={{ scaleX: 1 }}
        animate={headingControls}
        transition={{ delay: 0.4, ease: "easeInOut" }}
      ></motion.div>
      {text}
    </h1>
  );
};

export default Header;
