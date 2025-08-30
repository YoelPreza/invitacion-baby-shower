# 🎉 Baby Shower Invitation

Una invitación de baby shower moderna y elegante construida con React, Vite, y Tailwind CSS.

## ✨ Características

- 🎨 **Diseño moderno** con animaciones fluidas usando Framer Motion
- 📱 **Completamente responsive** - se ve perfecto en todos los dispositivos
- ⏰ **Contador regresivo** en tiempo real hasta el evento
- 🎮 **Juegos interactivos** para que los invitados hagan predicciones
- 📧 **Formulario RSVP** integrado con EmailJS
- 📸 **Galería de fotos** con carousel elegante
- 🗺️ **Información de ubicación** con indicaciones detalladas
- 💫 **Animaciones increíbles** que dan vida a cada sección

## 🚀 Tecnologías Utilizadas

- **React 18** + TypeScript
- **Vite** para desarrollo rápido
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **EmailJS** para formularios sin backend
- **Swiper** para carousels
- **React Hook Form** para manejo de formularios
- **Lucide React** para iconos

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## 🔧 Configuración de EmailJS

Para que funcione el formulario RSVP, necesitas configurar EmailJS:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea un template para recibir confirmaciones
4. Actualiza las credenciales en `src/components/RSVPForm.tsx`:
   ```typescript
   await emailjs.send(
     'tu_service_id',     // Service ID
     'tu_template_id',    // Template ID  
     templateParams,
     'tu_public_key'      // Public Key
   )
   ```

## 🎨 Personalización

### Colores del tema
Los colores están definidos en `tailwind.config.js` y pueden ser personalizados:
- `baby-pink`, `baby-blue`, `baby-yellow`, `baby-green`
- `soft-pink`, `soft-blue`

### Información del evento
Actualiza los detalles del evento en:
- `src/components/EventInfo.tsx` - Fecha, hora, lugar
- `src/components/ParentsStory.tsx` - Historia de los padres
- `src/components/LocationMap.tsx` - Ubicación y direcciones

### Fotos
Las fotos en `src/components/PhotoGallery.tsx` usan Unsplash por defecto. 
Reemplaza las URLs con tus propias fotos.

## 🚀 Deploy en Vercel

1. Haz push de tu código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente la configuración de Vite
4. ¡Tu invitación estará lista en minutos!

## 📱 Secciones Incluidas

1. **Hero Section** - Portada con animaciones de partículas
2. **Event Info** - Detalles del evento y countdown
3. **Parents Story** - Timeline de la historia de amor
4. **Interactive Games** - Juegos de predicciones
5. **Photo Gallery** - Carousel de momentos especiales
6. **RSVP Form** - Formulario de confirmación
7. **Location Map** - Información del lugar
8. **Footer** - Información de contacto

## 💝 Créditos

Hecho con 💕 para celebrar nuevas vidas y momentos especiales.

---

¡Disfruta creando memorias hermosas! 🎊