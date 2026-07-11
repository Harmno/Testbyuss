import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedReveal } from './ui/AnimatedReveal'
import { GlassCard } from './ui/GlassCard'
import { Button } from './ui/Button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'burjharman8@gmail.com',
      href: 'mailto:burjharman8@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9876543210',
      href: 'tel:+919876543210',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Punjab, India',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedReveal direction="fade">
            <p className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wider">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss it and create something amazing together.
            </p>
          </AnimatedReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={info.label}
                href={info.href}
                className="no-underline"
              >
                <GlassCard delay={index * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-purple-500/20 rounded-lg mb-3 w-fit">
                      <Icon className="text-purple-400" size={28} />
                    </div>
                    <h3 className="font-bold mb-1">{info.label}</h3>
                    <p className="text-gray-400 text-sm break-all hover:text-purple-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </GlassCard>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <AnimatedReveal direction="up" delay={0.3}>
          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg glass focus:ring-2 focus:ring-purple-500 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg glass focus:ring-2 focus:ring-purple-500 outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg glass focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="Project topic"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg glass focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="w-full justify-center gap-2 disabled:opacity-50">
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.button>
            </form>
          </GlassCard>
        </AnimatedReveal>
      </div>
    </section>
  )
}
