import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import heroImage from '../../imports/Hein_Soe___Thinzar-34.jpg';

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

export function HeroSection({ onOpenInvitation }: HeroSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: 'scale(1.1)',
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="space-y-6"
        >
          <motion.h1
            className="font-['Playfair_Display'] text-6xl md:text-8xl text-white tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hein Soe
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl text-white/90 font-['Cormorant_Garamond']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            &
          </motion.div>

          <motion.h1
            className="font-['Playfair_Display'] text-6xl md:text-8xl text-white tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Thinzar Swe Htet
          </motion.h1>

          <motion.div
            className="pt-8 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <p className="text-xl md:text-2xl text-white/80 font-['Cormorant_Garamond'] italic">
              Wedding Invitation
            </p>
            <p className="text-lg md:text-xl text-white/70 font-['Inter']">
              October 31st, 2026
            </p>
          </motion.div>

          <motion.button
            onClick={onOpenInvitation}
            className="mt-12 px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-['Inter'] hover:bg-white/20 transition-all duration-500 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Open Invitation
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { repeat: Infinity, duration: 2 },
          }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
