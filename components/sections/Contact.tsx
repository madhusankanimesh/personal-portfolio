'use client'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { emailConfig } from '@/lib/emailConfig'
import SectionContainer from '@/components/ui/SectionContainer'
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Replace these with your EmailJS configuration
    emailjs.sendForm(
      emailConfig.serviceId,
      emailConfig.templateId,
      form.current!,
      emailConfig.publicKey
    )
    .then((result) => {
      console.log(result.text)
      setMessage('Message sent successfully!')
      setMessageType('success')
      form.current!.reset()
      setIsLoading(false)
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage('')
        setMessageType('')
      }, 5000)
    }, (error) => {
      console.log(error.text)
      setMessage('Failed to send message. Please try again.')
      setMessageType('error')
      setIsLoading(false)
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage('')
        setMessageType('')
      }, 5000)
    })
  }

  return (
    <SectionContainer id="contact" className="grain-contact section-container">
      <div className="d-flex align-items-center justify-content-center h-100 px-4 py-5">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-lg mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            let&apos;s talk<span style={{ color: 'var(--neutral-color)' }}>.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5"
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.25rem',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 3rem auto'
            }}
          >
            Have a project in mind? Let&apos;s collaborate and create something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="d-flex justify-content-center gap-4 mb-5"
          >
            {[
              { icon: Mail, label: 'Email', href: 'mailto:madhusankan19@gmail.com' },
              { icon: Github, label: 'GitHub', href: 'https://github.com/madhusankanimesh' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/nimeshmadhusankaka' },
              { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/nimeshmadhusanka' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon-btn d-flex align-items-center justify-content-center"
                style={{ textDecoration: 'none' }}
              >
                <social.icon size={24} />
                <span className="visually-hidden">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-5"
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form bg-gradient p-4 rounded-3 shadow-sm">
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control contact-input"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control contact-input"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control contact-input"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  className="form-control contact-input"
                  rows={5}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-3`}
                >
                  {message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn contact-btn d-flex align-items-center justify-content-center gap-2 mx-auto"
              >
                {isLoading ? (
                  <>
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}
          >
            © 2024 Nimesh Madhusanka. All rights reserved.
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}