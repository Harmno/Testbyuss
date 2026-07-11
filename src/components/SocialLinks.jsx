import { Github, Linkedin, Instagram, Mail, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

export const SocialLinks = ({ className = '' }) => {
  const icons = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    twitter: Twitter,
    email: Mail,
  }

  const links = [
    { key: 'github', icon: Github, url: portfolioData.social.github },
    { key: 'linkedin', icon: Linkedin, url: portfolioData.social.linkedin },
    { key: 'instagram', icon: Instagram, url: portfolioData.social.instagram },
    { key: 'twitter', icon: Twitter, url: portfolioData.social.twitter },
    { key: 'email', icon: Mail, url: portfolioData.social.email },
  ]

  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.a
            key={link.key}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${link.key}`}
            className="p-3 rounded-lg glass hover:glow transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Icon size={20} />
          </motion.a>
        )
      })}
    </div>
  )
}
