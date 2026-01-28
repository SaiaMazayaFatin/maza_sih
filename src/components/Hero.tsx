import { useState } from 'react'
import Window from './Window'
import {
  AboutContent,
  ProjectsContent,
  TechStackContent,
  JourneyContent,
  ContactContent,
} from './windows'

type WindowType = 'about' | 'projects' | 'techstack' | 'journey' | 'contact'

interface WindowState {
  isOpen: boolean
  zIndex: number
}

const Hero = () => {
  const [windows, setWindows] = useState<Record<WindowType, WindowState>>({
    about: { isOpen: false, zIndex: 50 },
    projects: { isOpen: false, zIndex: 50 },
    techstack: { isOpen: false, zIndex: 50 },
    journey: { isOpen: false, zIndex: 50 },
    contact: { isOpen: false, zIndex: 50 },
  })
  const [topZIndex, setTopZIndex] = useState(50)

  const openWindow = (key: WindowType) => {
    const newZIndex = topZIndex + 1
    setTopZIndex(newZIndex)
    setWindows(prev => ({
      ...prev,
      [key]: { isOpen: true, zIndex: newZIndex }
    }))
  }

  const closeWindow = (key: WindowType) => {
    setWindows(prev => ({
      ...prev,
      [key]: { ...prev[key], isOpen: false }
    }))
  }

  const focusWindow = (key: WindowType) => {
    const newZIndex = topZIndex + 1
    setTopZIndex(newZIndex)
    setWindows(prev => ({
      ...prev,
      [key]: { ...prev[key], zIndex: newZIndex }
    }))
  }

  const navItems = [
    {
      name: 'about',
      windowKey: 'about' as WindowType,
      icon: (
        <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'projects',
      windowKey: 'projects' as WindowType,
      icon: (
        <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      name: 'tech stack',
      windowKey: 'techstack' as WindowType,
      icon: (
        <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'journey',
      windowKey: 'journey' as WindowType,
      icon: (
        <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'contact',
      windowKey: 'contact' as WindowType,
      icon: (
        <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
          <circle cx="17" cy="11" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ]

  // Offset positions for each window so they don't stack exactly
  const windowOffsets: Record<WindowType, { x: number; y: number }> = {
    about: { x: -100, y: -50 },
    projects: { x: -50, y: -25 },
    techstack: { x: 0, y: 0 },
    journey: { x: 50, y: 25 },
    contact: { x: 100, y: 50 },
  }

  return (
    <>
      <section className="bg-white rounded-b-2xl px-4 sm:px-8 py-6 sm:py-10 flex flex-col items-center justify-center">
        {/* Main Text */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">
            <span className="text-gray-800">hi! </span>
            <span className="text-orange-500">i'm Maza</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-lg">
            illustrator, animator, and developer
          </p>
        </div>

        {/* Icon Navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => openWindow(item.windowKey)}
              className="flex flex-col items-center group"
            >
              <div className="text-gray-600 group-hover:text-orange-500 transition-colors duration-200">
                {item.icon}
              </div>
              <span className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 group-hover:text-orange-500 transition-colors duration-200">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Windows */}
      <Window 
        title="about" 
        isOpen={windows.about.isOpen} 
        onClose={() => closeWindow('about')}
        onFocus={() => focusWindow('about')}
        zIndex={windows.about.zIndex}
        defaultOffset={windowOffsets.about}
      >
        <AboutContent />
      </Window>

      <Window 
        title="projects" 
        isOpen={windows.projects.isOpen} 
        onClose={() => closeWindow('projects')}
        onFocus={() => focusWindow('projects')}
        zIndex={windows.projects.zIndex}
        defaultOffset={windowOffsets.projects}
      >
        <ProjectsContent />
      </Window>

      <Window 
        title="tech stack" 
        isOpen={windows.techstack.isOpen} 
        onClose={() => closeWindow('techstack')}
        onFocus={() => focusWindow('techstack')}
        zIndex={windows.techstack.zIndex}
        defaultOffset={windowOffsets.techstack}
      >
        <TechStackContent />
      </Window>

      <Window 
        title="journey" 
        isOpen={windows.journey.isOpen} 
        onClose={() => closeWindow('journey')}
        onFocus={() => focusWindow('journey')}
        zIndex={windows.journey.zIndex}
        defaultOffset={windowOffsets.journey}
      >
        <JourneyContent />
      </Window>

      <Window 
        title="contact" 
        isOpen={windows.contact.isOpen} 
        onClose={() => closeWindow('contact')}
        onFocus={() => focusWindow('contact')}
        zIndex={windows.contact.zIndex}
        defaultOffset={windowOffsets.contact}
      >
        <ContactContent />
      </Window>
    </>
  )
}

export default Hero
