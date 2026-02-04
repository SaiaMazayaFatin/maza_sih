import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  originalX: number
  originalY: number
}

const InteractiveParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 5000)

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particlesRef.current.push({
          x,
          y,
          vx: 0,
          vy: 0,
          size: Math.random() * 2 + 0.5,
          originalX: x,
          originalY: y,
        })
      }
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          // Gravitational pull towards mouse
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          particle.vx += Math.cos(angle) * force * 0.3
          particle.vy += Math.sin(angle) * force * 0.3
        }

        // Return to original position slowly
        const returnForceX = (particle.originalX - particle.x) * 0.01
        const returnForceY = (particle.originalY - particle.y) * 0.01
        particle.vx += returnForceX
        particle.vy += returnForceY

        // Apply velocity with damping
        particle.vx *= 0.95
        particle.vy *= 0.95
        particle.x += particle.vx
        particle.y += particle.vy

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.random() * 0.2})`
        ctx.fill()

        // Draw connections
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(255, 0, 0, ${(1 - distance / 100) * 0.1})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default InteractiveParticles
