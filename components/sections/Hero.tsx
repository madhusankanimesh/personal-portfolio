'use client'
import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'

export default function Hero() {
  return (
    <SectionContainer id="hero" className="grain-hero section-container">
      <div className="d-flex align-items-center justify-content-center min-vh-100 px-5">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="row g-0 justify-content-center">
            <div className="col-11">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-card p-5 position-relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="hero-bg-pattern position-absolute top-0 end-0"></div>
                
                <div className="row align-items-center g-4">
                  {/* Left Content */}
                  <div className="col-lg-6 col-md-12 order-lg-1 order-2">
                    {/* Home Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mb-4 text-lg-start text-center"
                    >
                      <div className="hero-icon d-inline-flex align-items-center justify-content-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                          <polyline points="9,22 9,12 15,12 15,22"/>
                        </svg>
                      </div>
                    </motion.div>
                    
                    {/* Name */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="hero-name mb-4 text-lg-start text-center"
                    >
                      NIMESH <span className="fw-bold">MADHUSANKA</span>
                    </motion.h1>
                    
                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="hero-description text-lg-start text-center"
                    >
                      <p className="mb-4">
                        Full Stack Developer & Creative Technologist passionate about building innovative digital solutions. Specializing in React, Next.js, TypeScript, and modern web technologies. Transforming ideas into exceptional user experiences with clean code and creative problem-solving.
                      </p>
                      
                      {/* Feature Icons */}
                      <div className="d-flex flex-column gap-3">
                        <div className="d-flex align-items-center gap-3">
                          <div className="feature-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2L2 7h20L12 2z"/>
                              <path d="M2 17h20v-1H2v1z"/>
                              <path d="M2 21h20v-1H2v1z"/>
                            </svg>
                          </div>
                          <span className="feature-text">Full Stack Development</span>
                        </div>
                        
                        <div className="d-flex align-items-center gap-3">
                          <div className="feature-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                              <line x1="8" y1="21" x2="16" y2="21"/>
                              <line x1="12" y1="17" x2="12" y2="21"/>
                            </svg>
                          </div>
                          <span className="feature-text">React & Next.js Expert</span>
                        </div>
                        
                        <div className="d-flex align-items-center gap-3">
                          <div className="feature-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                              <circle cx="9" cy="7" r="4"/>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                          </div>
                          <span className="feature-text">DevOps Engineer</span>
                        </div>
                      </div>
                      
                      {/* View Resume Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="mt-4"
                      >
                        <motion.a
                          href="/Nimesh-Madhusanka-CV.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary-custom d-inline-flex align-items-center gap-2 text-decoration-none"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10,9 9,9 8,9"/>
                          </svg>
                          View Resume
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Right Content - Profile Image */}
                  <div className="col-lg-6 col-md-12 text-center order-lg-2 order-1">
                    <motion.div
                      initial={{ opacity: 0, scale: 1.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="hero-profile-container position-relative"
                    >
                      <div className="hero-profile-image">
                        <img 
                          src="/profile1.png" 
                          alt="Nimesh Madhusanka - Full Stack Developer and Creative Technologist" 
                          title="Nimesh Madhusanka - Professional Developer Portfolio"
                          className="w-100 h-100" 
                          style={{ objectFit: 'cover' }} 
                          loading="eager"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}