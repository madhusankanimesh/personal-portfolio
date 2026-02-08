'use client'
import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'

// CUSTOM ANIMATION VARIANTS
const slideUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.2 }
}

export default function About() {
  return (
    <SectionContainer id="about" className="grain-about texture-dots section-container">
      <div className="d-flex align-items-center justify-content-center h-100 px-4">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <motion.div
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="row align-items-center g-5"
          >
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="col-md-6"
            >
              <h2 className="heading-lg mb-4" style={{ color: 'var(--text-primary)' }}>
                about<span style={{ color: 'var(--neutral-color)' }}>.</span>
              </h2>
              <p className="fs-5 mb-3" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                I&apos;m a passionate developer who believes in creating meaningful digital experiences. 
                With a background in both design and development, I bridge the gap between 
                beautiful interfaces and robust functionality.
              </p>
              <p className="fs-5 mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open source projects, or sketching ideas for the next big thing.
              </p>
              <motion.button
                className="btn-primary-custom"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.button>
            </motion.div>
            <div className="col-md-6">
              <div className="position-relative">
                <div 
                  className="w-100 texture-paper rounded-4"
                  style={{
                    height: '320px',
                    background: 'linear-gradient(135deg, var(--primary-dark), var(--neutral-color))',
                    opacity: 0.9,
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
                  }}
                />
                <div 
                  className="position-absolute rounded-3"
                  style={{
                    top: '16px',
                    left: '16px',
                    right: '16px',
                    bottom: '16px',
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                />
                <div 
                  className="position-absolute rounded-2"
                  style={{
                    top: '32px',
                    left: '32px',
                    right: '32px',
                    bottom: '32px',
                    background: 'linear-gradient(135deg, rgba(241, 204, 174, 0.5), rgba(247, 221, 200, 0.5))'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}