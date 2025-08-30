import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Car } from 'lucide-react'

const LocationMap: React.FC = () => {
  const venueDetails = {
    name: 'Jardín Rosa Bella',
    address: 'Av. Principal #123, Colonia Centro',
    city: 'Ciudad de México, CDMX',
    phone: '+52 55 1234 5678',
    features: ['Estacionamiento gratuito', 'Área de juegos', 'Jardín al aire libre', 'Salón climatizado']
  }

  const directions = [
    'Desde el centro: Tomar Av. Principal hacia el norte',
    'Buscar el letrero "Jardín Rosa Bella" del lado derecho',
    'Entrada por el portón principal con globos rosados',
    'Estacionamiento disponible en la parte trasera'
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
                    <p className="text-gray-600">3:00 PM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="font-medium text-gray-800">Estacionamiento</p>
                    <p className="text-gray-600">Gratuito en las instalaciones</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Características del lugar
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {venueDetails.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg p-3 text-sm text-gray-700"
                    >
                      ✨ {feature}
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin size={18} />
                Ver en Google Maps
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-pink-200 to-blue-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p className="text-lg font-medium">Mapa del Lugar</p>
                  <p className="text-sm opacity-75">Click en "Ver en Google Maps" para direcciones</p>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Cómo llegar
                </h4>
                <ol className="space-y-3">
                  {directions.map((direction, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{direction}</p>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Información Adicional
              </h4>
              <div className="space-y-3 text-gray-700">
                <p>• El lugar cuenta con aire acondicionado y ventilación natural</p>
                <p>• Área de juegos segura para niños</p>
                <p>• Acceso para personas con discapacidad</p>
                <p>• Servicios sanitarios amplios y limpios</p>
              </div>
              
              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Contacto del lugar:</strong><br />
                  Teléfono: {venueDetails.phone}<br />
                  Para cualquier consulta adicional
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationMap