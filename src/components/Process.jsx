import { motion } from 'framer-motion'
import { AnimatedReveal } from './ui/AnimatedReveal'
import { GlassCard } from './ui/GlassCard'
import { portfolioData } from '../data/portfolioData'
import * as Icons from 'lucide-react'

export const Process = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedReveal direction="fade">
            <p className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wider">
              HOW I WORK
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              My Creative Process
            </h2>
          </AnimatedReveal>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {portfolioData.process.map((step, index) => {
            const IconComponent = Icons[step.icon]
            return (
              <div key={step.number} className="relative">
                {/* Connecting Line */}
                {index < portfolioData.process.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[55%] right-0 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                )}

                <GlassCard delay={index * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 text-xl font-bold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.div>

                    {IconComponent && (
                      <IconComponent className="text-purple-400 mb-3" size={28} />
                    )}

                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </GlassCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
