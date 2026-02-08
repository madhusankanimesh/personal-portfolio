import Navigation from '@/components/Navigation'
import MobileNavigation from '@/components/MobileNavigation'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
        <MobileNavigation />
      </header>
      <main className="position-relative d-flex">
        <div className="content-area w-100">
          <section aria-label="Hero Section">
            <Hero />
          </section>
          <section aria-label="Projects Section">
            <Projects />
          </section>
          <section aria-label="Skills Section">
            <Skills />
          </section>
          <section aria-label="Contact Section">
            <Contact />
          </section>
        </div>
      </main>
    </>
  )
}