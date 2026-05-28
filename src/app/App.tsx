import { useState, useEffect, useRef } from 'react';
import { SnowEffect } from './components/SnowEffect';
import { ModernHero } from './components/ModernHero';
import { ModernDateSection } from './components/ModernDateSection';
import { CountdownSection } from './components/CountdownSection';
import { UniqueVenueSection } from './components/UniqueVenueSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { ConciseDetails } from './components/ConciseDetails';
import { RefinedDressCode } from './components/RefinedDressCode';
import { EntourageSection } from './components/EntourageSection';
import { GallerySection } from './components/GallerySection';
import { RSVPSectionNew } from './components/RSVPSectionNew';
import { FinalSectionNew } from './components/FinalSectionNew';
import { MusicPlayerNew } from './components/MusicPlayerNew';
import weddingSong from '../imports/song.mp3';

export default function App() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handlePlayMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (!musicPlaying) {
        await audioRef.current.play();
        setMusicPlaying(true);
      } else {
        audioRef.current.pause();
        setMusicPlaying(false);
      }
    } catch (err) {
      console.log('Playback blocked by browser:', err);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (!musicPlaying) {
        await audioRef.current.play();
        setMusicPlaying(true);
      } else {
        audioRef.current.pause();
        setMusicPlaying(false);
      }
    } catch (err) {
      console.log('Playback blocked by browser:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SnowEffect />
      <MusicPlayerNew isPlaying={musicPlaying} onToggle={toggleMusic} />

      {/* HTML5 Audio Element - Your Wedding Song */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        className="hidden"
      >
        <source
          src={weddingSong}
          type="audio/mpeg"
        />
      </audio>

      <main className="relative">
            <ModernHero onPlayMusic={handlePlayMusic} musicPlaying={musicPlaying} />
            <ModernDateSection />
            <CountdownSection />
            <UniqueVenueSection />
            <EventDetailsSection />
            <ConciseDetails />
            <RefinedDressCode />
            <EntourageSection />
            <GallerySection />
            <RSVPSectionNew />
            <FinalSectionNew />
          </main>
    </div>
  );
}