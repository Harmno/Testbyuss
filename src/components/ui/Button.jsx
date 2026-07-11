import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const prefersReducedMotion = useReducedMotion()

  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50',
    secondary: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white',
    ghost: 'text-white hover:bg-white/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <motion.button
      className={buttonClasses}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
