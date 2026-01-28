const StarMascot = () => {
  return (
    <div className="absolute -top-10 sm:-top-12 left-2 sm:left-4 z-10">
      {/* Cute Star Character */}
      <svg width="50" height="50" viewBox="0 0 60 60" className="animate-bounce sm:w-[60px] sm:h-[60px]">
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD93D" />
            <stop offset="100%" stopColor="#FF9500" />
          </linearGradient>
        </defs>
        {/* Star shape */}
        <path
          d="M30 5 L35 20 L50 20 L38 30 L42 45 L30 37 L18 45 L22 30 L10 20 L25 20 Z"
          fill="url(#starGradient)"
          stroke="#FF9500"
          strokeWidth="1"
        />
        {/* Face - Eyes */}
        <circle cx="24" cy="24" r="2" fill="#333" />
        <circle cx="36" cy="24" r="2" fill="#333" />
        {/* Face - Blush */}
        <ellipse cx="20" cy="28" rx="3" ry="2" fill="#FFB6C1" opacity="0.6" />
        <ellipse cx="40" cy="28" rx="3" ry="2" fill="#FFB6C1" opacity="0.6" />
        {/* Face - Smile */}
        <path
          d="M26 30 Q30 34 34 30"
          fill="none"
          stroke="#333"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default StarMascot
