import { motion } from 'framer-motion'
import { AnimatedReveal } from './ui/AnimatedReveal'
import { GlassCard } from './ui/GlassCard'
import { Button } from './ui/Button'
import { ExternalLink, Github } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export const ProjectCard = ({ project, index }) => {
  return (
    <GlassCard delay={index * 0.1}>
      <motion.div
        className="h-full flex flex-col"
        whileHover={{ y: -5 }}
      >
        {/* Gradient Background */}
        <div className={`w-full h-40 rounded-lg mb-4 bg-gradient-to-br ${project.gradient} opacity-20`} />

        {/* Content */}
        <div className="flex-grow">
          <div className="mb-3">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          <a href={project.liveUrl} className="flex-1">
            <Button size="sm" className="w-full justify-center gap-2">
              <ExternalLink size={16} /> Live
            </Button>
          </a>
          <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="flex-1">
            <Button size="sm" variant="secondary" className="w-full justify-center gap-2">
              <Github size={16} /> Code
            </Button>
          </a>
        </div>
      </motion.div>
    </GlassCard>
  )
}
