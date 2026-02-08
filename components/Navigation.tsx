'use client'
import { motion } from 'framer-motion'
import { Home, Briefcase, Code, Mail, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react'
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

export default function Navigation() {
  const activeSection = useActiveSection()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className="sidebar-nav"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <div className="d-flex flex-column">
        {/* Navigation Items */}
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <item.icon size={20} />
            <span className="nav-tooltip">
              {item.label}
            </span>
          </motion.button>
        ))}
        
        {/* Separator Line */}
        <motion.div
          className="nav-separator"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
        />
        
        {/* Social Media Links */}
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + index * 0.1 }}
          >
            <social.icon size={18} />
            <span className="nav-tooltip">
              {social.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  )
}