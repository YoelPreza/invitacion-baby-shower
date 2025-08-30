import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const EventInfo: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  
  const eventDate = new Date('2024-12-15T15:00:00')
  
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
  
  const eventDetails = [
    {
      icon: Calendar,
      title: 'Fecha',
      value: 'Domingo, 15 de Diciembre',
      color: 'text-pink-500'
    },
    {
      icon: Clock,
      title: 'Hora',
      value: '3:00 PM - 7:00 PM',
      color: 'text-blue-500'
    },
    {
      icon: MapPin,
      title: 'Lugar',
      value: 'Jardín Rosa Bella\nAv. Principal #123',
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Código de Vestimenta',
      value: 'Casual Elegante\nColores pasteles',
      color: 'text-purple-500'
    }
  ]
  
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 ${detail.color} mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <detail.icon size={24} />
              </motion.div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {detail.title}
              </h3>
              
              <p className="text-gray-600 whitespace-pre-line">
                {detail.value}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl p-8 text-white text-center shadow-xl"
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