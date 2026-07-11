import { motion } from 'framer-motion'
import { AnimatedReveal } from './ui/AnimatedReveal'
import { GlassCard } from './ui/GlassCard'
import { portfolioData } from '../data/portfolioData'
import * as Icons from 'lucide-react'

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedReveal direction="fade">
            <p className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wider">
              TECHNICAL EXPERTISE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Skills & Technologies
            </h2>
          </AnimatedReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioData.skills.map((skill, index) => {
            const IconComponent = Icons[skill.icon]
            return (
              <GlassCard key={skill.name} delay={index * 0.1}>
                <div className="flex items-center gap-3 mb-4">
                  {IconComponent && <IconComponent className="text-purple-400" size={24} />}
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">{skill.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Proficiency</span>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
