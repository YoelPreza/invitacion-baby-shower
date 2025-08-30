import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, Instagram, Facebook } from 'lucide-react'

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', color: 'text-pink-500' },
    { icon: Facebook, href: '#', color: 'text-blue-500' },
    { icon: Mail, href: 'mailto:maria.carlos@email.com', color: 'text-purple-500' },
    { icon: Phone, href: 'tel:+5551234567', color: 'text-green-500' }
  ]

  return (
    <footer className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-6"
          >
            <Heart size={48} className="mx-auto mb-4 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-dancing mb-4">
            ¡Gracias por ser parte de nuestra historia!
          </h2>
          
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Tu presencia y cariño significan el mundo para nosotros. 
            Juntos celebraremos la llegada de nuestro pequeño tesoro.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold mb-2">Contacto</h3>
              <p className="opacity-90 text-sm">
                📞 +52 55 1234 5678<br />
                📧 maria.carlos@email.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold mb-2">Fecha del Evento</h3>
              <p className="opacity-90 text-sm">
                🗓️ Domingo, 15 de Diciembre<br />
                🕒 3:00 PM - 7:00 PM
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
              <p className="opacity-90 text-sm">
                📍 Jardín Rosa Bella<br />
                Av. Principal #123
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/20 pt-8 mt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm opacity-75">
                Con amor, María & Carlos ❤️
              </p>
              
              <p className="text-xs opacity-60">
                Baby Shower 2024 - Hecho con 💕 para celebrar nueva vida
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Heart size={16} className="text-pink-300" />
              <span className="text-sm font-medium">
                "El amor hace que una familia crezca"
              </span>
              <Heart size={16} className="text-pink-300" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              scale: { duration: 0.2 }
            }}
          >
            ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer