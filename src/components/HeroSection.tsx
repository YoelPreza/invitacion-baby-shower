import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-soft-pink via-baby-pink to-soft-blue">
      <div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 2 === 0 ? (
              <Heart className="w-6 h-6 text-pink-300" />
            ) : (
              <Star className="w-4 h-4 text-blue-300" />
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-dancing text-pink-600 mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Baby Shower
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-4xl font-poppins font-light text-gray-700">
              ¡Celebremos la llegada de nuestro pequeño tesoro!
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Te invitamos a compartir este momento especial lleno de amor, alegría y bendiciones
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8"
          >
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('event-info')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Ver Detalles del Evento
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection