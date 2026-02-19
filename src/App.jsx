import Header from './components/Header';
import Hero from './components/Hero';
import EventInfo from './components/EventInfo';
import Gallery from './components/Gallery';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

function App() {
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
