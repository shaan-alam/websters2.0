import { motion } from "framer-motion";
import classNames from "classnames";

const headerContainerVariants = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.025,
      ease: "easeInOut",
    },
  },
};

const headerCharVariant = {
  initial: {
    y: "50%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  animate: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const arraySub = text.split(" ").map((s) => s + " ");

  return (
    <motion.h1
      variants={headerContainerVariants}
      initial="initial"
      animate="animate"
      className={classNames(
        "font-bold font-horizon relative overflow-hidden",
        className
      )}
    >
      <span>
        {arraySub.map((char, index) => (
          <span className="overflow-hidden inline-block mr-4" key={index}>
            <motion.span className="inline-block" variants={headerCharVariant}>
              {char}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.h1>
  );
};

export default AnimatedText;
