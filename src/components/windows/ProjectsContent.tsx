import { useState } from 'react'

const ProjectsContent = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'PROJECT_01',
      description: 'A cool project description goes here.',
      tags: ['React', 'TypeScript'],
    },
    {
      id: 2,
      title: 'PROJECT_02',
      description: 'Another awesome project description.',
      tags: ['Animation', 'Illustration'],
    },
    {
      id: 3,
      title: 'PROJECT_03',
      description: 'Something creative and fun.',
      tags: ['Design', 'UI/UX'],
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-white/60 text-lg">// recent works</p>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white/20 p-4 hover:border-red-500 transition-all cursor-pointer group"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-2xl">
                {hoveredId === project.id ? '▶' : '○'}
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl tracking-wider group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 mt-1">{project.description}</p>
                <div className="flex gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 border border-white/20 text-white/60 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-white/30 text-sm tracking-wider">... more coming soon ...</p>
    </div>
  )
}

export default ProjectsContent
