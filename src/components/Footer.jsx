import { motion } from 'framer-motion'
import { SocialLinks } from './SocialLinks'
import { portfolioData } from '../data/portfolioData'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 py-12 px-4 md:px-8 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold gradient-text mb-2">Harman</h3>
            <p className="text-gray-400 text-sm">
              Creating digital experiences that inspire and engage.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-start md:items-end">
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <SocialLinks />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Harman. All rights reserved. Crafted with ❤️ and code.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-lg glass hover:glow transition-all text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
