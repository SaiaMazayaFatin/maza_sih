import { useRef, useState } from 'react'
// Import your music file here - replace with your actual file name
import musicFile from '../assets/music.mp3'

const FrogMascot = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        // If playing, pause and reset
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        setIsPlaying(false)
      } else {
        // If not playing, start from beginning
        audioRef.current.currentTime = 0
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleEnded = () => {
    // This won't trigger because loop is enabled, but just in case
    setIsPlaying(false)
  }

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-10">
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src={musicFile} 
        loop 
        onEnded={handleEnded}
      />
      
      {/* Clickable Frog Character */}
      <button
        onClick={handleClick}
        className={`cursor-pointer transition-transform hover:scale-110 active:scale-95 ${isPlaying ? 'animate-pulse' : ''}`}
        aria-label="Play music"
      >
        <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 80 80">
          {/* Lily pad */}
          <ellipse cx="40" cy="70" rx="30" ry="8" fill="#4CAF50" />
          <ellipse cx="40" cy="68" rx="25" ry="6" fill="#66BB6A" />
          
          {/* Frog body */}
          <ellipse cx="40" cy="50" rx="22" ry="18" fill="#8BC34A" />
          
          {/* Frog head */}
          <circle cx="40" cy="35" r="18" fill="#8BC34A" />
          
          {/* Eyes */}
          <circle cx="32" cy="28" r="8" fill="white" />
          <circle cx="48" cy="28" r="8" fill="white" />
          <circle cx="32" cy="28" r="4" fill="#333" />
          <circle cx="48" cy="28" r="4" fill="#333" />
          <circle cx="33" cy="27" r="1.5" fill="white" />
          <circle cx="49" cy="27" r="1.5" fill="white" />
          
          {/* Blush */}
          <ellipse cx="25" cy="38" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.6" />
          <ellipse cx="55" cy="38" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.6" />
          
          {/* Mouth */}
          <path
            d="M32 42 Q40 48 48 42"
            fill="none"
            stroke="#5D8C3A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Hat/Accessory */}
          <ellipse cx="40" cy="20" rx="10" ry="4" fill="#FF6B6B" />
          <rect x="35" y="12" width="10" height="8" rx="2" fill="#FF6B6B" />
          <circle cx="40" cy="10" r="4" fill="white" />
          
          {/* Music notes when playing */}
          {isPlaying && (
            <>
              <text x="60" y="20" fontSize="12" className="animate-bounce">♪</text>
              <text x="65" y="30" fontSize="10" className="animate-bounce" style={{ animationDelay: '0.2s' }}>♫</text>
            </>
          )}
        </svg>
      </button>
    </div>
  )
}

export default FrogMascot
