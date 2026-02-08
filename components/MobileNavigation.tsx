'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Home, Briefcase, Code, Mail, Menu, X, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'contact', icon: Mail, label: 'Contact' },
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/nimesh_madhusanka/' },
  { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/nimesh.madhusanka' },
  { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@nimeshmadhusanka' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/nimesh-madhusanka/' },
]

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="mobile-nav-toggle"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        aria-label="Toggle mobile navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="mobile-nav-menu"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="mobile-nav-content">
                {/* Navigation Items */}
                <div className="mobile-nav-items">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mobile-nav-social">
                  <h4 className="mobile-nav-social-title">Connect</h4>
                  <div className="mobile-nav-social-items">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-nav-social-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(false)}
                      >
                        <social.icon size={20} />
                        <span>{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar for Mobile */}
      <motion.div
        className="mobile-bottom-nav"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`mobile-bottom-nav-item ${activeSection === item.id ? 'active' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <item.icon size={20} />
            <span className="mobile-bottom-nav-label">{item.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </>
  )
}
