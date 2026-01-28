const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 85 },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate developer with experience in building web
              applications. I love creating clean, efficient code and designing
              intuitive user interfaces that provide excellent user experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through writing and mentoring.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <p className="text-gray-500 text-sm">Name</p>
                <p className="text-gray-900 font-medium">Your Name</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-gray-900 font-medium">your@email.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-gray-900 font-medium">Your City, Country</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Availability</p>
                <p className="text-green-600 font-medium">Available for hire</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
