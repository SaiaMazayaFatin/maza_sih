import { ReactNode, useEffect, useState } from 'react'

interface OmoriWindowProps {
  title: string
  onClose: () => void
  children: ReactNode
}

const OmoriWindow = ({ title, onClose, children }: OmoriWindowProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Animate in
    setTimeout(() => setIsVisible(true), 50)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${
          isVisible && !isClosing ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Window */}
      <div
        className={`relative w-[90%] max-w-2xl max-h-[80vh] bg-black border-2 border-white/80 
          transition-all duration-300 ${
            isVisible && !isClosing
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}
      >
        {/* Corner decorations */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500" />

        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/30">
          <div className="flex items-center gap-3">
            <span className="text-red-500">■</span>
            <h2 className="text-xl sm:text-2xl tracking-[0.2em] text-white">{title}</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-red-500 transition-colors text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-60px)] text-white/90">
          {children}
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </div>

      {/* Instruction */}
      <div className={`absolute bottom-8 text-white/40 text-sm tracking-wider transition-opacity duration-300 ${
        isVisible && !isClosing ? 'opacity-100' : 'opacity-0'
      }`}>
        Press ESC or click outside to close
      </div>
    </div>
  )
}

export default OmoriWindow
