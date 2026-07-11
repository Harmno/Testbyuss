import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

export const GlassCard = ({ children, className = '', delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={`glass p-6 rounded-2xl ${className}`}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
