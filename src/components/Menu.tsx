import { useState } from 'react'

type WindowType = 'about' | 'projects' | 'skills' | 'journey' | 'contact'

interface MenuProps {
  onSelect: (type: WindowType) => void
}

const Menu = ({ onSelect }: MenuProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const menuItems: { key: WindowType; label: string; description: string }[] = [
    { key: 'about', label: 'ABOUT', description: 'who am i?' },
    { key: 'projects', label: 'PROJECTS', description: 'things i made' },
    { key: 'skills', label: 'SKILLS', description: 'what i know' },
    { key: 'journey', label: 'JOURNEY', description: 'where i\'ve been' },
    { key: 'contact', label: 'CONTACT', description: 'reach out' },
  ]

  return (
    <nav className="flex flex-col items-center gap-2 relative">
      {menuItems.map((item, index) => (
        <button
          key={item.key}
          onClick={() => onSelect(item.key)}
          onMouseEnter={() => setHoveredItem(item.key)}
          onMouseLeave={() => setHoveredItem(null)}
          className="group relative text-white/80 hover:text-red-500 transition-all duration-200"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-center relative">
            {/* Selection indicator - absolute positioned */}
            <span
              className={`absolute -left-8 text-red-500 transition-all duration-200 ${
                hoveredItem === item.key ? 'opacity-100' : 'opacity-0'
              }`}
            >
              ▶
            </span>

            {/* Menu text - always centered */}
            <span className="text-2xl sm:text-3xl tracking-[0.2em] font-bold whitespace-nowrap px-3 py-3">
              {item.label}
            </span>

            {/* Description - absolute positioned */}
            <span
              className={`absolute left-full ml-4 text-sm text-white/40 tracking-wider transition-all duration-200 whitespace-nowrap ${
                hoveredItem === item.key ? 'opacity-100' : 'opacity-0'
              }`}
            >
              — {item.description}
            </span>
          </div>

          {/* Underline effect */}
          <div
            className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-px bg-red-500 transition-all duration-300 ${
              hoveredItem === item.key ? 'w-20' : 'w-0'
            }`}
          />
        </button>
      ))}

      {/* Decorative brackets around menu */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[280px] pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20" />
      </div>
    </nav>
  )
}

export default Menu
