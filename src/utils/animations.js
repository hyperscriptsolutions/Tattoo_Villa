// Luxury easing curves and Framer Motion animation presets
export const LUXURY_EASE = [0.22, 1, 0.36, 1]; // Custom cubic-bezier for smooth editorial flow
export const SOFT_SPRING = { type: 'spring', damping: 25, stiffness: 200 };

export const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.1,
      ease: LUXURY_EASE,
    },
  }),
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: LUXURY_EASE,
    },
  }),
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: LUXURY_EASE,
    },
  }),
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: LUXURY_EASE,
    },
  }),
};

export const clipPathReveal = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(12% 0 12% 0 round 24px)',
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0 0% 0 round 24px)',
    scale: 1,
    transition: {
      duration: 1.1,
      ease: LUXURY_EASE,
    },
  },
};

export const staggerContainer = (staggerDelay = 0.12, initialDelay = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    },
  },
});
