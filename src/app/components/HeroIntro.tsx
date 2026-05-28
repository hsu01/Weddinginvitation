import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronDown, Play, Pause } from 'lucide-react';
import heroImage from '../../imports/Hein_Soe___Thinzar-98.jpg';

interface HeroIntroProps {
  onPlayMusic: () => void;
  musicPlaying: boolean;
}

export function HeroIntro({ onPlayMusic, musicPlaying }: HeroIntroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div ref={ref} style={{ scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="space-y-6"
        >
          <motion.h1
            className="font-['Bodoni_Moda'] text-5xl sm:text-6xl md:text-8xl tracking-wider text-gray-800 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            YOU'RE
            <br />
            CORDIALLY
            <br />
            INVITED
          </motion.h1>

          <motion.p
            className="font-['Great_Vibes'] text-2xl sm:text-3xl md:text-4xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            to celebrate
            <br />
            the joyous union of
          </motion.p>

          <motion.div
            className="pt-8 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Hein Soe
            </h2>
            <p className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl text-gray-700">&</p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-gray-900">
              Thinzar Swe Htet
            </h2>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={onPlayMusic}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center border border-gray-200"
        >
          {musicPlaying ? (
            <Pause className="w-6 h-6 text-gray-800" fill="currentColor" />
          ) : (
            <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
          )}
        </motion.button>

        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 2.5 }}
        >
          <ChevronDown className="w-8 h-8 text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
