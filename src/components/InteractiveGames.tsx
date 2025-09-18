import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Gamepad2, Trophy, Sparkles, Gift } from 'lucide-react'

const InteractiveGames: React.FC = () => {
  const [selectedPredictions, setSelectedPredictions] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const games = [
    {
      title: 'Color de Ojos',
      options: ['Marrones', 'Azules', 'Verdes', 'Color Miel'],
      key: 'eyes',
      icon: '👁️'
    },
    {
      title: 'Primera Palabra',
      options: ['Mamá', 'Papá', 'Agua', 'Hola'],
      key: 'word',
      icon: '💬'
    },
    {
      title: 'Peso al Nacer',
      options: ['2.5-3.0 kg', '3.0-3.5 kg', '3.5-4.0 kg', 'Más de 4.0 kg'],
      key: 'weight',
      icon: '⚖️'
    }
  ]

  const handlePrediction = (gameKey: string, prediction: string) => {
    setSelectedPredictions(prev => ({
      ...prev,
      [gameKey]: prediction
    }))
    console.log(selectedPredictions)
  }

  const submitPredictions = () => {
    setShowResults(true)
    setTimeout(() => setShowResults(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-soft-blue">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-dancing text-gray-800 mb-4">
            Juegos Interactivos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            ¡Haz tus predicciones sobre nuestro pequeño tesoro y diviértete con nosotros!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-3xl"
                >
                  {game.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {game.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {game.options.map((option, optionIndex) => (
                  <motion.button
                    key={optionIndex}
                    onClick={() => handlePrediction(game.key, option)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedPredictions[game.key] === option
                        ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={submitPredictions}
            disabled={Object.keys(selectedPredictions).length < games.length}
            className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
              Object.keys(selectedPredictions).length < games.length
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:shadow-xl'
            }`}
            whileHover={Object.keys(selectedPredictions).length >= games.length ? { scale: 1.05 } : {}}
            whileTap={Object.keys(selectedPredictions).length >= games.length ? { scale: 0.95 } : {}}
          >
            <div className="flex items-center gap-2">
              <Gamepad2 size={20} />
              Enviar Predicciones
            </div>
          </motion.button>

          {showResults && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-2xl inline-block"
            >
              <div className="flex items-center gap-2">
                <Trophy size={24} />
                <span className="text-lg font-semibold">¡Predicciones guardadas!</span>
              </div>
              <p className="mt-2 opacity-90">
                Veremos qué tan acertadas fueron después del nacimiento 🎉
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveGames