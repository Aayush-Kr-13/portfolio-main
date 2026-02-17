import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Resume } from '@/components/resume'
import { Education } from '@/components/education'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { Analytics } from '@vercel/analytics/next'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Resume />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
      <Analytics />
    </main>
  )
}
