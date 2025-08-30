import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Baby } from 'lucide-react'

const ParentsStory: React.FC = () => {
  const timeline = [
    {
      title: 'Nuestro Amor Creció',
      date: 'Enero 2020',
      description: 'Comenzamos nuestra hermosa historia de amor, sabiendo que algo especial estaba por venir.',
      side: 'left'
    },
    {
      title: '¡Dijimos Sí!',
      date: 'Junio 2022',
      description: 'Nos comprometimos a construir una familia llena de amor, risas y sueños compartidos.',
      side: 'right'
    },
    {
      title: 'La Gran Noticia',
      date: 'Marzo 2024',
      description: 'Descubrimos que nuestro pequeño milagro venía en camino. ¡Qué momento tan emocionante!',
      side: 'left'
    },
    {
      title: 'Preparando el Nido',
      date: 'Ahora',
      description: 'Estamos listos para recibir a nuestro bebé con todo el amor del mundo.',
      side: 'right'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-soft-pink to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-dancing text-gray-800 mb-4">
            Nuestra Historia de Amor
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Cada capítulo de nuestra historia nos ha llevado a este momento especial
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-blue-300 rounded-full"></div>
          
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: event.side === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                event.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`w-full md:w-5/12 ${
                event.side === 'left' ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`inline-flex items-center gap-2 text-sm font-semibold mb-3 ${
                    index % 2 === 0 ? 'text-pink-500' : 'text-blue-500'
                  }`}>
                    <Heart size={16} />
                    {event.date}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-pink-400 shadow-lg z-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute inset-0 bg-pink-300 rounded-full opacity-60"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-3xl p-8 max-w-2xl mx-auto">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Baby size={48} className="text-pink-500 mx-auto mb-4" />
            </motion.div>
            
            <h3 className="text-2xl font-dancing text-gray-800 mb-4">
              "Y ahora, el capítulo más hermoso está por comenzar..."
            </h3>
            
            <p className="text-gray-600 italic">
              Con amor, María & Carlos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ParentsStory