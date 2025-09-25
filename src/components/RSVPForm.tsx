import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle, User, Users, MessageSquare } from 'lucide-react'

interface FormData {
  name: string
  email: string
  attendance: 'yes' | 'no' 
  guests: number
  message?: string
}

const RSVPForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const templateParams = {
        from_name: data.name,
        attendance: data.attendance === 'yes' ? 'Sí asistiré' : 'No podré asistir',
        guest_count: data.guests,
        message: data.message || 'Sin mensaje adicional',
        reply_to: data.email
      }

      // Reemplaza estos valores con tu configuración de EmailJS
      await emailjs.send(
        'baby_shower',  // Service ID
        'template_88xc2qr', // Template ID
        templateParams,
        'b99Px5IeD2_za2bEi'   // Public Key
      )

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const attendanceOptions = [
    { value: 'yes', label: '¡Sí, estaré ahí! 🎉', color: 'from-green-500 to-emerald-500' },
    { value: 'no', label: 'No podré asistir 😔', color: 'from-gray-500 to-gray-600' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-soft-pink">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-dancing text-gray-800 mb-4">
            Confirma tu Asistencia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            ¡Tu presencia haría este momento aún más especial! Por favor confirma tu asistencia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'El nombre es requerido' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-4">
                Confirma tu asistencia *
              </label>
              <div className="grid gap-3">
                {attendanceOptions.map((option) => (
                  <motion.label
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    className="relative cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={option.value}
                      {...register('attendance', { required: 'Selecciona una opción' })}
                      className="sr-only peer"
                    />
                    <div
                      className={`
                        p-4 rounded-xl border-2 transition-all duration-300 
                        peer-checked:text-white
                        peer-checked:bg-gradient-to-r ${option.color} 
                        ${option.value === 'yes' ? 'border-green-500' : 'border-gray-500'}
                        text-gray-800 bg-white
                      `}
                    >
                      <span className="font-medium">{option.label}</span>
                    </div>
                  </motion.label>
                ))}
              </div>

              {errors.attendance && (
                <p className="text-red-500 text-sm mt-1">{errors.attendance.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <Users className="inline w-4 h-4 mr-2" />
                  Número de Acompañantes
                </label>
                <select
                  {...register('guests')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="0">Solo yo</option>
                  <option value="1">1 acompañante</option>
                  <option value="2">2 acompañantes</option>
                  <option value="3">3 acompañantes</option>
                  <option value="4">4+ acompañantes</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <MessageSquare className="inline w-4 h-4 mr-2" />
                Mensaje para los Papás (opcional)
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Comparte tus buenos deseos o algún consejo especial..."
              />
            </div>

            <div className="text-center pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center gap-2 px-8 py-4 min-w-[280px] rounded-full font-semibold text-base transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#FF1493] text-white hover:shadow-xl'
                }`}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Confirmar Asistencia
                  </>
                )}
              </motion.button>
            </div>
          </form>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-xl flex items-center gap-2 ${
                submitStatus === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {submitStatus === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  <span>¡Confirmación enviada exitosamente! Gracias por acompañarnos.</span>
                </>
              ) : (
                <>
                  <AlertCircle size={20} />
                  <span>Hubo un error al enviar la confirmación. Por favor intenta de nuevo.</span>
                </>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default RSVPForm