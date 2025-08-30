import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Camera, Heart } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const PhotoGallery: React.FC = () => {
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=600&fit=crop&crop=center',
      caption: 'Primer ultrasonido - ¡Ahí estás pequeñito!'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop&crop=center',
      caption: 'Anunciando la gran noticia'
    },
    {
      src: 'https://images.unsplash.com/photo-1558804492-b8e8fbfaaa80?w=400&h=600&fit=crop&crop=center',
      caption: 'Preparando el cuarto del bebé'
    },
    {
      src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=600&fit=crop&crop=center',
      caption: 'Comprando los primeros regalitos'
    },
    {
      src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=600&fit=crop&crop=center',
      caption: 'Sesión de fotos de maternidad'
    },
    {
      src: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=400&h=600&fit=crop&crop=center',
      caption: '¡Ya casi listos para conocerte!'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-soft-blue to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-dancing text-gray-800 mb-4">
            Momentos Especiales
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Un vistazo a nuestro hermoso viaje hacia la paternidad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="gallery-swiper"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index} className="max-w-sm">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <Camera size={16} />
                          <span className="text-sm opacity-90">Momento especial</span>
                        </div>
                        <p className="text-sm font-medium">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            </motion.div>
            
            <h3 className="text-2xl font-dancing text-gray-800 mb-4">
              Cada foto cuenta una historia
            </h3>
            
            <p className="text-gray-600">
              Estos momentos nos recuerdan que el amor crece día a día, 
              y pronto tendremos un nuevo capítulo lleno de aventuras por escribir.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .gallery-swiper {
          padding: 50px 0;
        }
        
        .gallery-swiper .swiper-slide {
          width: 320px;
          height: 400px;
        }
        
        .gallery-swiper .swiper-pagination-bullet {
          background: rgba(255, 182, 193, 0.7);
          width: 12px;
          height: 12px;
        }
        
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #ec4899;
        }
      `}</style>
    </section>
  )
}

export default PhotoGallery