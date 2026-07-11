import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

export const AnimatedReveal = ({ children, delay = 0, direction = 'up' }) => {
  const prefersReducedMotion = useReducedMotion()

  const directions = {
    up: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } },
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  }

  const variant = directions[direction] || directions.up

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : variant.initial}
      whileInView={prefersReducedMotion ? {} : variant.animate}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
