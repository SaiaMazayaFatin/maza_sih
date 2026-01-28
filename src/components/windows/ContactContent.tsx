import { useState } from 'react'
import type { FormEvent } from 'react'


const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const data = {
      access_key: '893e7876-6fe9-424e-9cca-bb4e67fe90c2`',
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: 'New Contact Message',
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        console.error(result)
        alert('Gagal mengirim pesan')
      }
    } catch (error) {
      console.error(error)
      alert('Terjadi kesalahan jaringan')
    }
  }

  const socialLinks = [
    { name: 'GITHUB', url: 'https://github.com/SaiaMazayaFatin' },
    { name: 'LINKEDIN', url: 'https://linkedin.com/in/saiamazayafatin' },
    { name: 'INSTAGRAM', url: 'https://instagram.com/maza_sih' },
    { name: 'EMAIL', url: 'mailto:saiavivymaza@your.email.com' },
  ]

  return (
    <div className="space-y-6">
      {submitted ? (
        <div className="text-center py-8 border border-white/20">
          <div className="text-4xl mb-4 text-red-500">▶</div>
          <h3 className="text-xl tracking-wider text-white mb-2">
            MESSAGE SENT
          </h3>
          <p className="text-white/60">I'll get back to you soon.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-red-500 hover:text-white transition-colors tracking-wider"
          >
            [ SEND ANOTHER ]
          </button>
        </div>
      ) : (
        <>
          <p className="text-white/60 text-lg">// let's connect</p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/30 text-white/80 hover:border-red-500 hover:text-red-500 transition-all tracking-wider text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Anti-spam */}
            <input type="checkbox" name="botcheck" className="hidden" />

            <div>
              <label
                htmlFor="name"
                className="block text-sm text-white/40 tracking-wider mb-2"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 bg-transparent border ${
                  focusedField === 'name'
                    ? 'border-red-500'
                    : 'border-white/30'
                } text-white outline-none transition-colors`}
                placeholder="> enter your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-white/40 tracking-wider mb-2"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 bg-transparent border ${
                  focusedField === 'email'
                    ? 'border-red-500'
                    : 'border-white/30'
                } text-white outline-none transition-colors`}
                placeholder="> enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-white/40 tracking-wider mb-2"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 bg-transparent border ${
                  focusedField === 'message'
                    ? 'border-red-500'
                    : 'border-white/30'
                } text-white outline-none transition-colors resize-none`}
                placeholder="> type your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-transparent border-2 border-red-500 text-red-500 tracking-widest hover:bg-red-500 hover:text-black transition-all"
            >
              SEND MESSAGE
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default ContactContent