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
import { PageLoader } from '@/components/page-loader'
import { Analytics } from '@vercel/analytics/next'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aayush Kumar',
    jobTitle: 'System Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'CGI',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'IIIT Dharwad',
    },
    url: 'https://aayushkumar.dev',
    image: 'https://aayushkumar.dev/Aayush.png',
    description: 'System Engineer at CGI specializing in AWS cloud solutions, full-stack development with React, Next.js, Node.js. Hackathon winner with 10+ production-ready projects.',
    knowsAbout: [
      'Web Development',
      'Cloud Computing',
      'AWS',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Python',
      'Full Stack Development',
      'Software Engineering',
    ],
    sameAs: [
      'https://github.com/Aayush-Kr-13',
      'https://linkedin.com/in/aayush-kumar',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background text-foreground scroll-smooth">
        <PageLoader />
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
    </>
  )
}
