import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

interface MusicContextValue {
  isPlaying: boolean;
  isMuted: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
}

const MusicContext = createContext<MusicContextValue | undefined>(undefined);

export function useMusicContext() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusicContext must be used within MusicProvider');
  }
  return context;
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/assets/music/romantic-instrumental.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Load saved preferences
    const savedMuted = sessionStorage.getItem('music-muted');
    const savedPlaying = sessionStorage.getItem('music-playing');

    if (savedMuted !== null) {
      setIsMuted(savedMuted === 'true');
      audio.muted = savedMuted === 'true';
    }

    if (savedPlaying === 'true' && savedMuted !== 'true') {
      // Only auto-resume if was playing and not muted
      audio.play().catch(() => {
        // Autoplay blocked, user needs to interact
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      sessionStorage.setItem('music-playing', 'false');
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Failed to play audio:', error);
      });
      setIsPlaying(true);
      sessionStorage.setItem('music-playing', 'true');
      // Unmute when playing
      if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
        sessionStorage.setItem('music-muted', 'false');
      }
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMuted = !isMuted;
    setIsMuted(newMuted);
    audioRef.current.muted = newMuted;
    sessionStorage.setItem('music-muted', String(newMuted));
  };

  return (
    <MusicContext.Provider value={{ isPlaying, isMuted, togglePlay, toggleMute }}>
      {children}
    </MusicContext.Provider>
  );
}
