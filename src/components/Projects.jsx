import { AnimatedReveal } from './ui/AnimatedReveal'
import { ProjectCard } from './ProjectCard'
import { portfolioData } from '../data/portfolioData'

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedReveal direction="fade">
            <p className="text-sm font-semibold text-purple-400 mb-2 uppercase tracking-wider">
              FEATURED WORK
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Recent Projects
            </h2>
          </AnimatedReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
