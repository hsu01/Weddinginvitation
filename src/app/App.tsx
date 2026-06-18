import { useState, useEffect, useRef } from 'react';
import { SnowEffect } from './components/SnowEffect';
import { ModernHero } from './components/ModernHero';
import { ModernDateSection } from './components/ModernDateSection';
import { CountdownSection } from './components/CountdownSection';
import { UniqueVenueSection } from './components/UniqueVenueSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { RefinedDressCode } from './components/RefinedDressCode';
import { EntourageSection } from './components/EntourageSection';
import { GallerySection } from './components/GallerySection';
import { RSVPSectionNew } from './components/RSVPSectionNew';
import { FinalSectionNew } from './components/FinalSectionNew';
import { MusicPlayerNew } from './components/MusicPlayerNew';
import { TopNavbar } from './components/TopNavbar';
import { RegistrySection } from './components/RegistrySection';
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

  useEffect(() => {
    const stopMusic = () => {
      if (!audioRef.current) return;

      audioRef.current.pause();
      setMusicPlaying(false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopMusic();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', stopMusic);
    window.addEventListener('beforeunload', stopMusic);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', stopMusic);
      window.removeEventListener('beforeunload', stopMusic);
      stopMusic();
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
      <TopNavbar />
      <MusicPlayerNew isPlaying={musicPlaying} onToggle={toggleMusic} />

      {/* HTML5 Audio Element - Your Wedding Song */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        playsInline
        className="hidden"
      >
        <source
          src={weddingSong}
          type="audio/mpeg"
        />
      </audio>

      <main className="relative pt-16 md:pt-[72px]">
        <div id="home" className="scroll-mt-24">
          <ModernHero onPlayMusic={handlePlayMusic} musicPlaying={musicPlaying} />
        </div>
        <div id="date" className="scroll-mt-24">
          <ModernDateSection />
        </div>
        <div id="countdown" className="scroll-mt-24">
          <CountdownSection />
        </div>
        <div id="venue" className="scroll-mt-24">
          <UniqueVenueSection />
        </div>
        <div id="timeline" className="scroll-mt-24">
          <EventDetailsSection />
        </div>
        <div id="rsvp" className="scroll-mt-24">
          <RSVPSectionNew />
        </div>
        <div id="registry" className="scroll-mt-24">
          <RegistrySection />
        </div>
        <div id="dress-code" className="scroll-mt-24">
          <RefinedDressCode />
        </div>
        <div id="entourage" className="scroll-mt-24">
          <EntourageSection />
        </div>
        <div id="gallery" className="scroll-mt-24">
          <GallerySection />
        </div>
        <div id="final" className="scroll-mt-24">
          <FinalSectionNew />
        </div>
      </main>
    </div>
  );
}
