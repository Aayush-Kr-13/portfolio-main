export function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Technology',
      school: 'Indian Institute of Information Technology (IIIT), Dharwad',
      location: 'Dharwad, Karnataka',
      year: 'Jun. 2025',
      description: 'CGPA: 7.09/10.0 - Specialized in algorithms, cloud computing, and full-stack development',
    },
    {
      degree: 'Senior Secondary (PCM)',
      school: 'The Tribhuvan School',
      location: 'Patna, Bihar',
      year: 'Mar. 2021',
      description: 'Percentage: 93% - Focused on Physics, Chemistry, and Mathematics',
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-primary text-sm font-mono uppercase tracking-wider">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-pretty">My learning journey</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-secondary rounded-lg p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="mb-4">
                <p className="text-primary font-mono text-sm uppercase tracking-wider mb-2">{edu.year}</p>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                <p className="text-lg text-foreground/70">{edu.school}</p>
                {edu.location && <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>}
              </div>
              <p className="text-foreground/80">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
