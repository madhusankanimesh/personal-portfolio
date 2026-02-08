'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionContainer from '@/components/ui/SectionContainer'
import { ExternalLink, Github, X } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  color: string
  thumbnail?: string
  detailedDescription?: string
  features?: string[]
  technologies?: {
    [key: string]: string[]
  }
  githubLinks?: {
    backend?: string
    frontend?: string
    main?: string
  }
  deploymentUrl?: string
}

const projects: Project[] = [
  {
    id: 'automeet',
    title: 'Virtual City Platform',
    description: 'Enterprise-level AI-driven meeting management platform that automates the full meeting lifecycle with intelligent scheduling, calendar integrations, and analytics.',
    tech: ['SpringBoot', 'Next.js', 'Postgre SQL', 'FireBase', 'SMTP', ''],
    color: 'from-accent to-primary-dark',
    thumbnail: '/automeet.png',
    detailedDescription: `AutoMeet is an advanced, AI-driven meeting management platform that automates and optimizes the full meeting lifecycle — from scheduling to execution and post-meeting analysis. Designed to minimize administrative overhead and maximize productivity, the system combines intelligent algorithms, calendar integrations, and seamless user experiences.`,
    features: [
      'Smart Scheduling with AI optimization',
      'Calendar Integration (Google, Apple, Microsoft)',
      'Real-Time Availability tracking',
      'Analytics Dashboard with insights',
      'Meeting Lifecycle Management',
      'Automated notifications and reminders',
      'External user support via secure links',
      'Role-Based Access Control'
    ],
    technologies: {
      'Backend': ['Ballerina', 'MongoDB Atlas', 'JWT/OAuth 2.0', 'Ollama AI', 'Hugging Face'],
      'Frontend': ['Next.js', 'Bootstrap 5', 'Chart.js', 'jsPDF', 'Axios'],
      'Integrations': ['Google Calendar API', 'SMTP Services', 'Spring Boot API']
    },
    githubLinks: {
      backend: 'https://github.com/Serryudy/AutomeetBE.git',
      frontend: 'https://github.com/Serryudy/AutomeetFE.git'
    }
  },
  {
    id: 'tourism-site',
    title: 'Tourism Booking Platform – Sri Lanka',
    description: 'Comprehensive tourism booking platform for Sri Lanka with package browsing, custom tour requests, booking management, and admin dashboard with analytics.',
    tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'MongoDB', 'Firebase'],
    color: 'from-accent to-primary-dark',
    thumbnail: '/travelbookingsrilanka.png',
    detailedDescription: `A comprehensive Tourism Booking Platform for Sri Lanka that allows users to browse travel packages, customize tours, make bookings, and manage reservations. The platform includes both tourist-facing features and administrative capabilities with real-time analytics.`,
    features: [
      'Browse travel packages with filtering and search',
      'View detailed package information and itineraries',
      'Create custom tour requests with preferences',
      'Book packages and track booking status',
      'User authentication and profile management',
      'Admin dashboard with booking analytics',
      'Package management (CRUD operations)',
      'Revenue tracking and user management'
    ],
    technologies: {
      'Frontend': ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Ant Design', 'React Router'],
      'Backend': ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 'JWT', 'bcryptjs'],
      'Services': ['Firebase Storage', 'Nodemailer', 'CORS', 'Morgan Logger']
    },
    githubLinks: {
      main: 'https://github.com/Serryudy/Tourism_site.git'
    }
  },
  {
    id: 'smart-crypto-trader',
    title: 'Smart Crypto Trader – AI Trading Bot',
    description: 'Automated cryptocurrency trading bot with real-time analytics dashboard, deployed on Azure. Features 10x leverage trading, custom signal generation, and comprehensive performance tracking.',
    tech: ['Python', 'Flask', 'Binance API', 'SQLite', 'Azure', 'Pandas'],
    color: 'from-accent to-primary-dark',
    thumbnail: '/smartcryptotrader.png',
    detailedDescription: `An automated cryptocurrency trading bot with a comprehensive dashboard for monitoring and analytics. The system trades DOGEUSDT on Binance Futures using a custom signal generation algorithm and provides real-time insights through a web interface. Deployed on Azure for 24/7 operation.`,
    features: [
      'Automated futures trading with 10x leverage',
      'Custom 7-condition signal generation algorithm',
      'Real-time position monitoring and analytics',
      'Risk management with 2% stop loss and 3% take profit',
      'Performance metrics (win rate, Sharpe ratio, max drawdown)',
      'SQLite logging of all completed trades',
      'REST API for trading data and analytics',
      '24/7 Azure VM hosting with systemd services'
    ],
    technologies: {
      'Backend': ['Python 3.x', 'Flask', 'Flask-CORS', 'python-binance', 'SQLite3'],
      'Data Analysis': ['Pandas', 'NumPy', 'Real-time WebSocket APIs'],
      'Infrastructure': ['Azure VM', 'systemd services', 'Background execution'],
      'Trading': ['Binance Futures API', 'Automated signal detection', 'Risk management']
    },
    githubLinks: {
      main: 'https://github.com/Serryudy/scalperbot.git'
    },

  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <SectionContainer id="projects" className="grain-projects section-container">
        <div className="d-flex align-items-center justify-content-center h-100 px-4 py-5">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-lg mb-5 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              projects<span style={{ color: 'var(--neutral-color)' }}>.</span>
            </motion.h2>
            
            <div className="row g-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="col-12 col-md-6 col-lg-4 mb-4"
                >
                  <div 
                    className="card-primary h-100" 
                    style={{ cursor: project.detailedDescription ? 'pointer' : 'default' }}
                    onClick={() => project.detailedDescription && openModal(project)}
                  >
                    <div 
                      className="mb-3 texture-paper rounded-3"
                      style={{
                        height: '200px',
                        background: project.thumbnail 
                          ? `url(${project.thumbnail}) center/cover`
                          : `linear-gradient(135deg, var(--accent-color), var(--neutral-color))`
                      }}
                    />
                    <div className="p-3">
                      <h3 className="heading-sm mb-3" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                      <p className="mb-3" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{project.description}</p>
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex gap-3">
                        {project.detailedDescription ? (
                          <button 
                            className="btn btn-link p-0 d-flex align-items-center gap-2" 
                            style={{ color: 'var(--neutral-color)', fontWeight: 500, textDecoration: 'none' }}
                            onClick={(e) => {
                              e.stopPropagation()
                              openModal(project)
                            }}
                          >
                            <ExternalLink size={16} />
                            View Details
                          </button>
                        ) : (
                          <>
                            <button className="btn btn-link p-0 d-flex align-items-center gap-2" style={{ color: 'var(--neutral-color)', fontWeight: 500, textDecoration: 'none' }}>
                              <Github size={16} />
                              Code
                            </button>
                            <button className="btn btn-link p-0 d-flex align-items-center gap-2" style={{ color: 'var(--neutral-color)', fontWeight: 500, textDecoration: 'none' }}>
                              <ExternalLink size={16} />
                              Demo
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="modal-content bg-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <button
                className="btn btn-link p-0"
                onClick={closeModal}
                style={{ color: 'var(--text-secondary)' }}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              {selectedProject.thumbnail && (
                <div className="modal-image-container">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="img-fluid"
                  />
                </div>
              )}
              
              <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                {selectedProject.detailedDescription}
              </p>

              {selectedProject.features && (
                <div className="mb-4">
                  <h4 className="h5 mb-3" style={{ color: 'var(--text-primary)' }}>🚀 Key Features</h4>
                  <ul className="list-unstyled">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <li key={index} className="mb-2 d-flex align-items-start">
                        <span className="me-2" style={{ color: 'var(--accent-color)' }}>•</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.technologies && (
                <div className="mb-4">
                  <h4 className="h5 mb-3" style={{ color: 'var(--text-primary)' }}>🛠️ Technologies</h4>
                  {Object.entries(selectedProject.technologies).map(([category, techs]: [string, string[]]) => (
                    <div key={category} className="mb-3">
                      <h6 className="mb-2" style={{ color: 'var(--neutral-color)', fontWeight: 600 }}>{category}:</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {techs.map((tech: string, index: number) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedProject.githubLinks && (
                <div className="modal-footer pt-4 border-top">
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    {selectedProject.githubLinks.backend && (
                      <a
                        href={selectedProject.githubLinks.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary d-flex align-items-center gap-2"
                      >
                        <Github size={16} />
                        Backend Repo
                      </a>
                    )}
                    {selectedProject.githubLinks.frontend && (
                      <a
                        href={selectedProject.githubLinks.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary d-flex align-items-center gap-2"
                      >
                        <Github size={16} />
                        Frontend Repo
                      </a>
                    )}
                    {selectedProject.githubLinks.main && (
                      <a
                        href={selectedProject.githubLinks.main}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary d-flex align-items-center gap-2"
                      >
                        <Github size={16} />
                        View Repository
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}