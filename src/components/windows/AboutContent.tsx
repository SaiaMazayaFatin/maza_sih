import mzImage from '../../assets/mz.png'

const AboutContent = () => {
  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative">
          <img 
            src={mzImage} 
            alt="Maza" 
            className="w-24 h-24 sm:w-28 sm:h-28 object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white/50"
          />
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-red-500" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-red-500" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-red-500" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-red-500" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl tracking-wider text-white">MAZA</h2>
          <p className="text-red-500 text-sm tracking-widest">AI ENGINEER</p>
        </div>
      </div>

      {/* Bio */}
      <div className="border-l-2 border-red-500 pl-4">
        <p className="text-white/70 leading-relaxed text-lg">
          I’m an AI Engineer focused on building end-to-end intelligent systems that work with language and knowledge. With a background in machine learning, deep learning, computer vision, and natural language processing, I enjoy turning complex ideas into practical, scalable solutions that can be applied in real-world settings.
        </p>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-white/20 p-4">
          <p className="text-white/40 text-sm tracking-wider">LOCATION</p>
          <p className="text-white">Purwakarta, Indonesia</p>
        </div>
        <div className="border border-white/20 p-4">
          <p className="text-white/40 text-sm tracking-wider">STATUS</p>
          <p className="text-red-500">▶ Available for opportunities</p>
        </div>
      </div>

      {/* Interests */}
      <div>
        <h3 className="text-white/40 text-sm tracking-wider mb-3">INTERESTS</h3>
        <div className="flex flex-wrap gap-2">
          {['Anime', 'Manga', 'Gaming', 'Music', 'Coding', 'Studying'].map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 border border-white/30 text-white/80 text-sm hover:border-red-500 hover:text-red-500 transition-colors"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutContent
