import { useState, useRef, useEffect } from 'react'
import type { ReactNode } from 'react'

interface WindowProps {
  title: string
  onClose: () => void
  children: ReactNode

  // optional props
  isOpen?: boolean
  onFocus?: () => void
  zIndex?: number
  defaultOffset?: { x: number; y: number }
}

const Window = ({
  title,
  onClose,
  children,
  isOpen = true,
  onFocus = () => {},
  zIndex = 50,
  defaultOffset = { x: 0, y: 0 },
}: WindowProps) => {
  const [position, setPosition] = useState(defaultOffset)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [hasBeenOpened, setHasBeenOpened] = useState(false)
  const windowRef = useRef<HTMLDivElement>(null)

  // set default position only once
  useEffect(() => {
    if (isOpen && !hasBeenOpened) {
      setPosition(defaultOffset)
      setHasBeenOpened(true)
    }
  }, [isOpen, hasBeenOpened, defaultOffset])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!windowRef.current) return

    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
    onFocus()
  }

  const handleWindowClick = () => {
    onFocus()
  }

  // global mouse listeners (smooth drag)
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!isDragging) return
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      })
    }

    const handleUp = () => setIsDragging(false)

    if (isDragging) {
      window.addEventListener('mousemove', handleMove)
      window.addEventListener('mouseup', handleUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [isDragging, dragOffset])

  if (!isOpen) return null

  return (
    <div
      ref={windowRef}
      className="fixed bg-white rounded-2xl shadow-2xl w-[85%] sm:w-[400px] md:w-[450px] max-h-[60vh] overflow-hidden"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
        cursor: isDragging ? 'grabbing' : 'default',
        zIndex,
      }}
      onMouseDown={handleWindowClick}
    >
      {/* Title Bar */}
      <div
        className="bg-gray-700 px-4 py-2 flex items-center justify-between rounded-t-2xl select-none"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <span className="text-white font-medium text-sm">{title}</span>
        <button
          onClick={onClose}
          onMouseDown={(e) => e.stopPropagation()}
          className="w-5 h-5 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors group"
          aria-label="Close window"
        >
          <svg
            className="w-2.5 h-2.5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 overflow-y-auto max-h-[calc(60vh-44px)] text-sm">
        {children}
      </div>
    </div>
  )
}

export default Window
