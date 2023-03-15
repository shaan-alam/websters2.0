import { useRef, useEffect } from "react";
import {
  animate,
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion";
import classNames from "classnames";

const AnimatedLine = ({
  text,
  className,
  isHeading,
}: {
  text: string;
  className?: string;
  isHeading?: boolean;
}) => {
  if (isHeading === undefined) isHeading = true;

  const arraySub = text.split("");

  const animatedHeaderRef = useRef(null);
  const isAnimatedHeaderInView = useInView(animatedHeaderRef);
  const animatedHeaderControls = useAnimationControls();

  useEffect(() => {
    if (isAnimatedHeaderInView) {
      animatedHeaderControls.start("animate");
    }
  }, [isAnimatedHeaderInView, animatedHeaderControls]);

  const headerContainerVariant = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.02,
        ease: "easeInOut",
      },
    },
  };

  const headerCharVariant = {
    initial: {
      y: "100%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.2 },
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
      },
    },
  };

  return (
    <motion.h1
      variants={headerContainerVariant}
      initial="initial"
      animate={animatedHeaderControls}
      className={classNames("font-bold font-horizon relative", className)}
      ref={animatedHeaderRef}
    >
      <span>
        {arraySub.map((char, index) => (
          <span
            className={classNames(
              "overflow-hidden inline-block",
              char === " " && !isHeading ? "mr-1" : "",
              char === " " && isHeading ? "mr-6" : ""
            )}
            key={index}
          >
            <motion.span className="inline-block" variants={headerCharVariant}>
              {char}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.h1>
  );
};

export default AnimatedLine;
