import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/Button'
import { AnimatedReveal } from './ui/AnimatedReveal'
import { portfolioData } from '../data/portfolioData'

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion()

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <AnimatedReveal direction="fade" delay={0}>
              <p className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                AVAILABLE FOR CREATIVE PROJECTS
              </p>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Harman</span>.
              </h1>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                I build digital experiences that feel alive.
              </h2>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.3}>
              <p className="text-gray-400 text-lg leading-relaxed">
                {portfolioData.description}
              </p>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.4}>
              <div className="flex gap-4 flex-wrap">
                <Button onClick={scrollToProjects}>View My Work</Button>
                <Button variant="secondary" onClick={scrollToContact}>
                  Let's Talk
                </Button>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex items-center justify-center relative h-[400px]">
            {/* Glowing Avatar */}
            <motion.div
              className="relative w-64 h-64"
              animate={prefersReducedMotion ? {} : { y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Outer glow rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500/30 glow"
                animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1], rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[-20px] rounded-full border-2 border-pink-500/20 glow"
                animate={prefersReducedMotion ? {} : { scale: [1.1, 1, 1.1], rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />

              {/* Avatar Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center glow">
                <div className="w-56 h-56 rounded-full bg-dark-900 flex items-center justify-center text-6xl font-bold gradient-text">
                  H
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            {['React', 'UI Design', 'Motion'].map((tech, index) => (
              <motion.div
                key={tech}
                className="absolute glass px-4 py-2 rounded-lg text-sm font-semibold"
                animate={prefersReducedMotion ? {} : { 
                  y: [0, -15, 0],
                  x: [0, Math.random() * 20 - 10, 0]
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                style={{
                  top: `${20 + index * 30}%`,
                  left: index % 2 === 0 ? '-50px' : 'auto',
                  right: index % 2 !== 0 ? '-50px' : 'auto',
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="scroll-indicator text-purple-400" size={32} />
      </motion.div>
    </section>
  )
}
