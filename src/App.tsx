import { FC } from 'react'
import HeroSection from './components/HeroSection'
import EventInfo from './components/EventInfo'
import ParentsStory from './components/ParentsStory'
import InteractiveGames from './components/InteractiveGames'
import PhotoGallery from './components/PhotoGallery'
import RSVPForm from './components/RSVPForm'
import LocationMap from './components/LocationMap'
import Footer from './components/Footer'

const App: FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EventInfo />
      <InteractiveGames />
      <PhotoGallery />
      <RSVPForm />
      <LocationMap />
      <Footer />
    </div>
  )
}

export default App