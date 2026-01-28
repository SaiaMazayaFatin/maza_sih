const TechStackContent = () => {
  const techCategories = [
    {
      category: 'FRONTEND',
      items: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 75 },
      ],
    },
    {
      category: 'DESIGN & ART',
      items: [
        { name: 'Figma', level: 85 },
        { name: 'Photoshop', level: 80 },
        { name: 'Illustrator', level: 85 },
        { name: 'After Effects', level: 70 },
      ],
    },
    {
      category: 'OTHER',
      items: [
        { name: 'Git', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'Python', level: 65 },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-white/60 text-lg">// technologies & tools</p>

      {techCategories.map((category) => (
        <div key={category.category}>
          <h3 className="text-red-500 text-sm tracking-widest mb-3">■ {category.category}</h3>
          <div className="space-y-3">
            {category.items.map((item) => (
              <div key={item.name} className="group">
                <div className="flex justify-between mb-1">
                  <span className="text-white/80 tracking-wider">{item.name}</span>
                  <span className="text-white/40">[{item.level}%]</span>
                </div>
                <div className="w-full bg-white/10 h-1">
                  <div
                    className="bg-red-500 h-1 transition-all duration-500 group-hover:bg-white"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TechStackContent
