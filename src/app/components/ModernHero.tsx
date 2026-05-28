import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '../../imports/Hein_Soe___Thinzar-94.jpg';

interface ModernHeroProps {
  onPlayMusic: () => void;
  musicPlaying: boolean;
}

export function ModernHero({ onPlayMusic, musicPlaying }: ModernHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <motion.div ref={ref} style={{ scale, y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </motion.div>

      {/* Luxury Content Overlay */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center px-6 sm:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-8 max-w-4xl"
        >
          {/* Elegant Date Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-block"
          >
            <div className="px-6 py-2 border border-white/30 backdrop-blur-sm bg-white/10 rounded-full">
              <p className="font-['Inter'] text-[10px] tracking-[0.4em] text-white uppercase">
                October 31, 2026
              </p>
            </div>
          </motion.div>

          {/* Names with Glass Morphism */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-['Bodoni_Moda'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-tight"
              style={{ fontWeight: 400 }}
            >
              Hein Soe
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex justify-center"
            >
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-['Bodoni_Moda'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-tight"
              style={{ fontWeight: 400 }}
            >
              Thinzar Swe Htet
            </motion.h1>
          </div>

          {/* Elegant Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="font-['Inter'] text-xs sm:text-sm tracking-[0.3em] text-white/80 uppercase pt-8"
          >
            Request the honor of your presence
          </motion.p>

          {/* Luxury Audio Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            onClick={onPlayMusic}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 mt-4"
          >
            {musicPlaying ? (
              <>
                <div className="flex gap-1">
                  <motion.div
                    className="w-0.5 h-4 bg-white"
                    animate={{ height: ['16px', '8px', '16px'] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-0.5 h-4 bg-white"
                    animate={{ height: ['8px', '16px', '8px'] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-0.5 h-4 bg-white"
                    animate={{ height: ['12px', '10px', '12px'] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
                <span className="font-['Inter'] text-xs tracking-[0.2em] uppercase text-white">
                  Now Playing
                </span>
              </>
            ) : (
              <>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M1 1L11 7L1 13V1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <span className="font-['Inter'] text-xs tracking-[0.2em] uppercase text-white">
                  Play Our Song
                </span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          className="absolute bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 12, 0] }}
          transition={{
            opacity: { delay: 2.5, duration: 1 },
            y: { repeat: Infinity, duration: 2.5, delay: 2.5 },
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="font-['Inter'] text-[9px] tracking-[0.3em] uppercase text-white/60">
              Scroll
            </p>
            <ChevronDown className="w-5 h-5 text-white/60" strokeWidth={1.5} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
