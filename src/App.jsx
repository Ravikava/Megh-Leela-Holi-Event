import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventInfo from './components/EventInfo';
import Gallery from './components/Gallery';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

const MOBILE_BREAKPOINT = 768;

function App() {
  useEffect(() => {
    const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;
    if (!isMobile()) return;

    const timer = setTimeout(() => {
      const el = document.getElementById('booking');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <EventInfo /> */}
      <Gallery />
      <BookingSection />
      <ContactSection />
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
