'use client'
import { motion } from 'framer-motion'
import SectionContainer from '@/components/ui/SectionContainer'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
  { name: 'React', level: 90, logo: '/logos/react.png' },
  { name: 'Next.js', level: 85, logo: '/logos/nextjs.png' },
  { name: 'TypeScript', level: 80, logo: '/logos/typescript.png' },
  { name: 'Bootstrap CSS', level: 85, logo: '/logos/bootstrap.png' },

    ],
    color: 'skill-card-primary'
  },
  {
    title: 'Backend Development',
    skills: [
  { name: 'Node.js', level: 70, logo: '/logos/nodejs.png' },
  { name: 'Python', level: 80, logo: '/logos/python.png' },
  { name: 'SpringBoot', level: 80, logo: '/logos/springboot.png' },
  { name: 'PostgreSQL', level: 65, logo: '/logos/postgresql.png' },
  { name: 'MongoDB', level: 82, logo: '/logos/mongodb.png' },
    ],
    color: 'skill-card-secondary'
  },
  {
    title: 'Design & Tools',
    skills: [
  { name: 'GIMP', level: 92, logo: '/logos/gimp.png' },
  { name: 'Git', level: 85, logo: '/logos/git.png' },
  { name: 'Postman', level: 85, logo: '/logos/Postman.png' },
  { name: 'VS Code', level: 90, logo: '/logos/vscode.png' }
    ],
    color: 'skill-card-neutral'
  },
  {
    title: 'Cloud & DevOps',
    skills: [
  { name: 'Azure', level: 75, logo: '/logos/azure.png' },
  { name: 'Docker', level: 60, logo: '/logos/docker.png' }
    ],
    color: 'skill-card-primary'
  }
]

export default function Skills() {
  return (
    <SectionContainer id="skills" className="section-container">
      <div className="d-flex align-items-center justify-content-center min-vh-100 px-4 py-5">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-lg mb-5 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            skills<span style={{ color: 'var(--neutral-color)' }}>.</span>
          </motion.h2>
          
          <div className="row g-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="col-lg-6 col-md-6"
              >
                <div className={`${category.color} p-4 rounded-3 h-100`}>
                  <h3 className="heading-sm mb-4 text-center" style={{ color: 'var(--text-primary)' }}>
                    {category.title}
                  </h3>
                  <div className="d-flex flex-column gap-4">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.15) + (i * 0.1) }}
                        className="skill-item"
                      >
                        <div className="d-flex align-items-center gap-3 mb-2">
                          <span className="skill-icon">
                            <img src={skill.logo} alt={skill.name + ' logo'} style={{ width: 28, height: 28 }} />
                          </span>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="skill-name">{skill.name}</span>
                              <span className="skill-percentage">{skill.level}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (index * 0.15) + (i * 0.1) + 0.3 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-5"
          >
            <div className="skill-summary p-4 rounded-3">
              <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>
                Always Learning & Growing
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                Passionate about staying up-to-date with the latest technologies and continuously expanding my skill set through hands-on projects and learning new frameworks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}