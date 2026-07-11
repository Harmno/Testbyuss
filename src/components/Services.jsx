import { motion } from 'framer-motion'
import { AnimatedReveal } from './ui/AnimatedReveal'
import { GlassCard } from './ui/GlassCard'
import { portfolioData } from '../data/portfolioData'
import * as Icons from 'lucide-react'

export const Services = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedReveal direction="fade">
            <p className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wider">
              WHAT I OFFER
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Services
            </h2>
          </AnimatedReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.services.map((service, index) => {
            const IconComponent = Icons[service.icon]
            return (
              <GlassCard key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full flex flex-col"
                >
                  {IconComponent && (
                    <div className="mb-4 p-3 bg-purple-500/20 rounded-lg w-fit">
                      <IconComponent className="text-purple-400" size={28} />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm flex-grow">{service.description}</p>
                </motion.div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
