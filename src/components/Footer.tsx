import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer: React.FC = () => {

  return (
    <footer className="bg-gradient-to-br from-pink-100 via-pink-200 to-pink-100 text-white py-8">
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
            <Heart size={48} className="mx-auto mb-4 text-[#FF1493]" />
          </motion.div>

          <h2 className="text-3xl text-[#EC4899] md:text-4xl font-dancing mb-4">
            ¡Gracias por ser parte de nuestra historia!
          </h2>
          
          <p className="text-lg text-[#4B5563] opacity-90 max-w-2xl mx-auto mb-8">
            Tu presencia y cariño significan el mundo para nosotros. 
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-[#4B5563] opacity-75">
                Con amor, Jessi & Yoel ❤️
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  )
}

export default Footer