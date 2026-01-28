import { useState, useEffect } from 'react'
import OmoriMenu from './components/OmoriMenu'
import OmoriWindow from './components/OmoriWindow'
import {
  AboutContent,
  ProjectsContent,
  TechStackContent,
  JourneyContent,
  ContactContent,
} from './components/windows'

type WindowType = 'about' | 'projects' | 'skills' | 'journey' | 'contact' | null

function App() {
  const [activeWindow, setActiveWindow] = useState<WindowType>(null)
  const [showTitle, setShowTitle] = useState(false)
  const [floatingElements, setFloatingElements] = useState<{ id: number; x: number; y: number; delay: number }[]>([])

  useEffect(() => {
    // Animate title on load
    setTimeout(() => setShowTitle(true), 500)

    // Create floating doodle elements
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setFloatingElements(elements)
  }, [])

  const openWindow = (type: WindowType) => {
    setActiveWindow(type)
  }

  const closeWindow = () => {
    setActiveWindow(null)
  }

  const getWindowContent = () => {
    switch (activeWindow) {
      case 'about':
        return { title: 'ABOUT ME', content: <AboutContent /> }
      case 'projects':
        return { title: 'PROJECTS', content: <ProjectsContent /> }
      case 'skills':
        return { title: 'SKILLS', content: <TechStackContent /> }
      case 'journey':
        return { title: 'JOURNEY', content: <JourneyContent /> }
      case 'contact':
        return { title: 'CONTACT', content: <ContactContent /> }
      default:
        return null
    }
  }

  const windowData = getWindowContent()

  return (
    <div className="h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Floating doodle elements */}
      {floatingElements.map((el) => (
        <div
          key={el.id}
          className="absolute text-white/10 text-4xl float-animation pointer-events-none"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            animationDelay: `${el.delay}s`,
          }}
        >
          {['✦', '○', '△', '□', '◇', '✧', '☆', '◎'][el.id % 8]}
        </div>
      ))}

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Title */}
        <div
          className={`transition-all duration-1000 ${
            showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-white mb-2 glitch-text flicker tracking-wider">
            MAZA
          </h1>
          <p className="text-white/60 text-xl sm:text-2xl tracking-[0.3em] mb-12">
            CREATIVE DEVELOPER
          </p>

          {/* Decorative line under title */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-16 h-px bg-red-500" />
            <div className="w-2 h-2 bg-red-500 rotate-45" />
            <div className="w-16 h-px bg-red-500" />
          </div>
        </div>

        {/* Menu */}
        <OmoriMenu onSelect={openWindow} />

        {/* Blinking cursor at bottom */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2">
          <span className="text-red-500 text-2xl blink-animation">_</span>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 text-white/20">
        <div className="text-xs tracking-widest">001</div>
        <div className="w-8 h-px bg-white/20 mt-2" />
      </div>
      <div className="absolute top-8 right-8 text-white/20">
        <div className="text-xs tracking-widest text-right">PORTFOLIO</div>
        <div className="w-8 h-px bg-white/20 mt-2 ml-auto" />
      </div>
      <div className="absolute bottom-8 left-8 text-white/20">
        <div className="w-8 h-px bg-white/20 mb-2" />
        <div className="text-xs tracking-widest">2024</div>
      </div>
      <div className="absolute bottom-8 right-8 text-white/20">
        <div className="w-8 h-px bg-white/20 mb-2 ml-auto" />
        <div className="text-xs tracking-widest text-right">v1.0</div>
      </div>

      {/* Window */}
      {windowData && (
        <OmoriWindow
          title={windowData.title}
          onClose={closeWindow}
        >
          {windowData.content}
        </OmoriWindow>
      )}
    </div>
  )
}

export default App
