const ProjectsContent = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-6">
      {/* Loading/Processing Animation */}
      <div className="relative">
        <div className="w-16 h-16 border-2 border-white/20 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-red-500 animate-pulse" />
        </div>
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-red-500" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-red-500" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-red-500" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-red-500" />
      </div>

      {/* Message */}
      <div className="text-center space-y-3">
        <h3 className="text-white text-2xl tracking-widest">WORK IN PROGRESS</h3>
        <p className="text-white/50 tracking-wider">// masih dalam proses</p>
        <div className="flex items-center justify-center gap-2 text-red-500">
          <span className="animate-pulse">●</span>
          <span className="text-sm tracking-wider">loading projects...</span>
        </div>
      </div>

      {/* Decorative element */}
      <div className="flex items-center gap-4 mt-8">
        <div className="w-12 h-px bg-white/20" />
        <span className="text-white/30 text-xs tracking-widest">COMING SOON</span>
        <div className="w-12 h-px bg-white/20" />
      </div>
    </div>
  )
}

export default ProjectsContent