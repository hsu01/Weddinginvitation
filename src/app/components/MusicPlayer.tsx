import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <div className="relative group">
        <motion.button
          onClick={toggleMute}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-full p-4 shadow-2xl hover:bg-white/20 transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4A574]/20 to-[#8B4545]/20 blur-xl" />

          <AnimatePresence mode="wait">
            {isPlaying && (
              <motion.div
                key="vinyl"
                initial={{ rotate: 0 }}
                animate={{ rotate: isMuted ? 0 : 360 }}
                transition={{
                  duration: 3,
                  repeat: isMuted ? 0 : Infinity,
                  ease: 'linear',
                }}
                className="relative"
              >
                <Music className={`w-6 h-6 ${isMuted ? 'text-gray-400' : 'text-[#D4A574]'}`} />
              </motion.div>
            )}
          </AnimatePresence>

          {!isMuted && (
            <motion.div
              className="absolute -inset-2 rounded-full"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-full h-full rounded-full border-2 border-[#D4A574]" />
            </motion.div>
          )}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <p className="font-['Inter'] text-sm text-gray-700">
            {isMuted ? 'Click to play music' : 'Our Song'}
          </p>
        </motion.div>

        <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2">
          {!isMuted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-1 items-end h-8"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-gradient-to-t from-[#D4A574] to-[#8B4545] rounded-full"
                  animate={{
                    height: ['40%', '100%', '40%'],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <iframe
        src="https://www.youtube.com/embed/videoseries?list=PLYJscpF0ae2o9C6nNY_n0HqAWU-oL0jYZ&autoplay=1&mute=0&loop=1"
        allow="autoplay; encrypted-media"
        className="hidden"
        title="Wedding music"
      />
    </motion.div>
  );
}
