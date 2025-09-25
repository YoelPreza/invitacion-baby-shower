import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock } from 'lucide-react'

const LocationMap: React.FC = () => {
  const venueDetails = {
    name: 'El Saloncito',
    address: 'Flor de Líz 6, Lomas de San Lorenzo, Iztapalapa, 09780',
    city: 'Ciudad de México, CDMX',
  }


  return (
    <section className="pt-0 pb-10 bg-gradient-to-b from-soft-pink to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-dancing text-gray-800 mb-4">
            Ubicación del Evento
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6">
            Te esperamos en este hermoso lugar para celebrar juntos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-pink-500" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {venueDetails.name}
                  </h3>
                  <p className="text-gray-600">Lugar del evento</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Dirección</p>
                    <p className="text-gray-600">{venueDetails.address}</p>
                    <p className="text-gray-600">{venueDetails.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">Horario</p>
                    <p className="text-gray-600">4:00 PM</p>
                  </div>
                </div>
              </div>

              <motion.a
                href="https://maps.app.goo.gl/vzUUeTviXByeAykh7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center bg-[#FF1493] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin size={18} />
                Ver en Google Maps
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationMap