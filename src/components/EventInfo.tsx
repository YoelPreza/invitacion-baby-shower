import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const EventInfo: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  
  const eventDate = new Date('2025-10-25T16:00:00')
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  return (
    <section id="event-info" className="py-20 bg-gradient-to-b from-white to-soft-pink">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-dancing text-gray-800 mb-4">
            Detalles del Evento
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center mb-16"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 text-pink-500">
              <Calendar size={22} />
              <span className="text-gray-800 font-semibold">Sábado, 25 de Octubre</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-500">
              <Clock size={22} />
              <span className="text-gray-800 font-semibold">4:00 PM</span>
            </div>
            <div className="flex items-center space-x-2 text-green-500">
              <MapPin size={22} />
              <span className="text-gray-800 font-semibold">"El Saloncito"</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-bl from-[#FF8DA1] via-[#FF1493] to-[#FF00FF] rounded-3xl p-8 text-white text-center shadow-xl"
        >
          <h3 className="text-3xl font-dancing mb-6">¡Faltan solo!</h3>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/20 rounded-xl p-4 backdrop-blur-sm"
              >
                <motion.div
                  key={value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-3xl font-bold"
                >
                  {value}
                </motion.div>
                <div className="text-sm capitalize opacity-90">
                  {unit === 'days' ? 'días' : 
                   unit === 'hours' ? 'horas' :
                   unit === 'minutes' ? 'min' : 'seg'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventInfo