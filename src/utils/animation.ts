import { Variants } from "framer-motion";

export const containerVarinant: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.3,
    },
  },
};
export const childVariant: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      delay: 0.4,
      duration: 1.3,
    },
  },
};

export const slideInViewVariant: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
