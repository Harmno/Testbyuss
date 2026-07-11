import { motion } from 'framer-motion'
import { AnimatedReveal } from './ui/AnimatedReveal'

export const SectionHeading = ({ title, subtitle = '', align = 'center' }) => {
  return (
    <div className={`text-${align} mb-12`}>
      <AnimatedReveal direction="fade">
        {subtitle && (
          <p className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          {title}
        </h2>
      </AnimatedReveal>
    </div>
  )
}
