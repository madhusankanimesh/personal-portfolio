'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionContainerProps {
  id: string
  children: ReactNode
  className?: string
}

export default function SectionContainer({ id, children, className = '' }: SectionContainerProps) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen w-full relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  )
}