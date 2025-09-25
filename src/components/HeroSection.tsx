import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-pink-100">
      {/* Estrellas flotantes */}
      <div>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-4 h-4 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      {/* Nubes decorativas */}
      <motion.img
        src="/public/nubes2.png"
        alt="cloud"
        className="absolute top-0 left-0 w-40 opacity-80"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src="/public/nubes2.png"
        alt="cloud"
        className="absolute top-5 right-0 w-48 opacity-80"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 text-center bottom-16 px-4 max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl md:text-4xl font-poppins text-gray-700 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Te invitamos a celebrar el <br />
          <span className="text-pink-500 font-dancing text-5xl">Baby Shower</span>
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          de nuestra pequeña princesa que viene en camino
        </p>
      </div>

      <motion.img
        src="/public/conejita.png"
        alt="bunny"
        className="absolute bottom-10 mx-auto w-52 md:w-64"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  )
}

export default HeroSection
