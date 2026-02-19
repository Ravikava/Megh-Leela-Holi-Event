import { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Try to play music immediately on page load (may be blocked by browser)
  useEffect(() => {
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
  }, [hasInteracted]);

  // Try to play music when user first interacts with the page
  useEffect(() => {
    const handleFirstInteraction = async () => {
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
          events.forEach(event => {
            document.removeEventListener(event, handleFirstInteraction);
          });
          window.removeEventListener('focus', handleFirstInteraction);
        } catch (error) {
          // Keep trying on next interaction
          console.log('Play failed, will retry on next interaction:', error);
        }
      }
    };

    // Listen for any user interaction - removed 'once: true' so it keeps trying
    const events = [
      'click', 
      'touchstart', 
      'keydown', 
      'scroll', 
      'mousemove',
      'pointerdown',
      'pointermove',
      'wheel',
      'mousedown'
    ];
    
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { passive: true });
    });
    
    // Also try on window focus
    window.addEventListener('focus', handleFirstInteraction);

    return () => {
      events.forEach(event => {
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

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music/background-music.mp3" type="audio/mpeg" />
        <source src="/music/background-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      <button
        className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
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

