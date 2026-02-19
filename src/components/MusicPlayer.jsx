import { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  // List of available music files
  const musicFiles = [
    '/music/disco-kana.mp3',
    '/music/gangstas.mp3',
    '/music/radha-govaldi.mp3',
    '/music/thakar-kare.mp3'
  ];

  // Select a random song on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    setCurrentSong(musicFiles[randomIndex]);
  }, []); // Empty dependency array - only run on mount

  // Try to play music immediately on page load (may be blocked by browser)
  useEffect(() => {
    if (!currentSong) return; // Wait for song to be selected

    const tryAutoPlay = async () => {
      if (audioRef.current && !hasInteracted) {
        try {
          // Set volume to a reasonable level
          audioRef.current.volume = 0.5;
          // Try to play
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (error) {
          // Autoplay was prevented - will wait for user interaction
          // This is normal - browsers block autoplay with sound
        }
      }
    };

    // Try multiple times with delays to catch different loading states
    const timers = [
      setTimeout(tryAutoPlay, 300),
      setTimeout(tryAutoPlay, 1000),
      setTimeout(tryAutoPlay, 2000),
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [hasInteracted, currentSong]);

  // Try to play music when user first interacts with the page
  // Note: Browsers require a direct user interaction (click/touch) for audio playback
  useEffect(() => {
    const handleFirstInteraction = async (event) => {
      // Only allow direct user interactions (click, touch, keydown) - not scroll
      const allowedEvents = ['click', 'touchstart', 'keydown', 'mousedown', 'pointerdown'];
      if (!allowedEvents.includes(event.type) && !hasInteracted) {
        return;
      }

      if (!hasInteracted && audioRef.current) {
        try {
          // Ensure audio is loaded
          if (audioRef.current.readyState === 0) {
            audioRef.current.load();
            // Wait a bit for loading
            await new Promise(resolve => setTimeout(resolve, 100));
          }
          
          audioRef.current.volume = 0.5;
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true);
          
          // Remove all listeners once playing successfully
          allEvents.forEach(eventName => {
            document.removeEventListener(eventName, handleFirstInteraction);
          });
          window.removeEventListener('focus', handleFirstInteraction);
        } catch (error) {
          // Keep trying on next valid interaction
          // Don't log every failed attempt to avoid console spam
        }
      }
    };

    // Listen for direct user interactions (click, touch, key press)
    // These are the events browsers accept for audio playback
    const directInteractionEvents = [
      'click', 
      'touchstart', 
      'keydown', 
      'mousedown',
      'pointerdown'
    ];
    
    // Also listen to scroll/move to show that interaction is happening
    // but these won't trigger audio (browser restriction)
    const allEvents = [
      ...directInteractionEvents,
      'scroll',
      'mousemove',
      'pointermove',
      'wheel'
    ];
    
    allEvents.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { passive: true });
    });
    
    // Also try on window focus
    window.addEventListener('focus', handleFirstInteraction);

    return () => {
      allEvents.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
      window.removeEventListener('focus', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch((error) => {
            console.log('Play failed:', error);
          });
      }
    }
  };

  // Don't render until a song is selected
  if (!currentSong) {
    return null;
  }

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        key={currentSong} // Force reload when song changes
      >
        <source src={currentSong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {!hasInteracted && (
        <div className="music-prompt">Click to play music</div>
      )}
      <button
        className={`music-toggle-btn ${isPlaying ? 'playing' : ''} ${!hasInteracted ? 'pulsing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;

