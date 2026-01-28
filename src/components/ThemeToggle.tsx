import { useState } from 'react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="fixed top-4 left-4 flex items-center space-x-3 z-50">
      {/* Sun/Moon Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="text-gray-700 hover:text-orange-500 transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>

      {/* Sound Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="text-gray-700 hover:text-orange-500 transition-colors"
        aria-label="Toggle sound"
      >
        {isMuted ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.889 16H2a1 1 0 01-1-1V9a1 1 0 011-1h3.889l5.294-4.332a.5.5 0 01.817.387v15.89a.5.5 0 01-.817.387L5.89 16z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.889 16H2a1 1 0 01-1-1V9a1 1 0 011-1h3.889l5.294-4.332a.5.5 0 01.817.387v15.89a.5.5 0 01-.817.387L5.89 16zM17.5 12a4.5 4.5 0 00-2.5-4.03v8.06A4.5 4.5 0 0017.5 12zM15 3.65v2.09a6.5 6.5 0 010 12.52v2.09a8.5 8.5 0 000-16.7z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default ThemeToggle
