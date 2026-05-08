export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

export const gentleHover = {
  y: -6,
  scale: 1.015,
  transition: {
    duration: 0.2,
    ease: 'easeOut',
  },
}
