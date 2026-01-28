const JourneyContent = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Current Role',
      description: 'Working as a freelance illustrator and developer',
    },
    {
      year: '2023',
      title: 'Started Freelancing',
      description: 'Began taking on client projects',
    },
    {
      year: '2022',
      title: 'Learned Web Development',
      description: 'Discovered React and fell in love with frontend',
    },
    {
      year: '2021',
      title: 'Started Digital Art',
      description: 'Began creating illustrations and animations',
    },
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started my creative journey',
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-white/60 text-lg">// my journey so far</p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-white/20" />

        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex gap-6 group">
              {/* Dot */}
              <div className="relative z-10">
                <div className="w-6 h-6 border border-white/40 flex items-center justify-center bg-black group-hover:border-red-500 transition-colors">
                  <div className="w-2 h-2 bg-red-500" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-red-500 tracking-wider">[{item.year}]</span>
                  <span className="text-white tracking-wider group-hover:text-red-500 transition-colors">
                    {item.title}
                  </span>
                </div>
                <p className="text-white/50">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JourneyContent
