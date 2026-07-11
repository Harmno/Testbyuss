import { motion } from 'framer-motion'
import { AnimatedReveal } from './ui/AnimatedReveal'
import { GlassCard } from './ui/GlassCard'

export const About = () => {
  const stats = [
    { label: '19 Years Old', value: 'Young & Energetic' },
    { label: 'Creative Mindset', value: 'Always Innovating' },
    { label: 'Always Learning', value: 'Growth-Oriented' },
  ]

  const specialties = [
    'Frontend Development',
    'UI/UX Design',
    'Motion Design',
    'Responsive Web Design',
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedReveal direction="fade">
            <p className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wider">
              WHO I AM
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              More than just code.
            </h2>
          </AnimatedReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Description */}
          <AnimatedReveal direction="left" delay={0.1}>
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Harman, a 19-year-old developer who enjoys transforming ideas into polished digital experiences. I combine clean frontend code, thoughtful design, and purposeful animation to create websites people remember.
              </p>
              <p className="text-gray-400">
                With a passion for modern technologies and a eye for detail, I'm constantly exploring new ways to improve user experiences through code and design.
              </p>
            </div>
          </AnimatedReveal>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <GlassCard key={stat.label} delay={0.2 + index * 0.1}>
                <h3 className="text-xl font-bold gradient-text mb-2">{stat.label}</h3>
                <p className="text-gray-400">{stat.value}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <AnimatedReveal direction="up" delay={0.3}>
          <GlassCard>
            <h3 className="text-2xl font-bold mb-6">My Specialties</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {specialties.map((specialty) => (
                <div key={specialty} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  <span className="text-gray-300">{specialty}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </AnimatedReveal>
      </div>
    </section>
  )
}
