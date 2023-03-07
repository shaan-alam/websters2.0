export const containerVariants = {
  initial: {
    opacity: 0,
    y: "10%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
export const itemVariant = {
  initial: {
    opacity: 0,
    y: "10%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

export const subtitleContainerVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.025,
      ease: "easeInOut",
    },
  },
};

export const subtitleCharVariant = {
  initial: {
    y: "100%",
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
    },
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
    },
  },
};