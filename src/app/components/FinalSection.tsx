import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import finalImage from '../../imports/Hein_Soe___Thinzar-155.jpg';

export function FinalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${finalImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="space-y-8"
        >
          <motion.p
            className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-white/90 italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Thank you for celebrating with us
          </motion.p>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-white">
              Hein Soe
            </h2>
            <p className="font-['Cormorant_Garamond'] text-3xl text-white/80">&</p>
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-white">
              Thinzar Swe Htet
            </h2>
          </motion.div>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="font-['Inter'] text-lg text-white/70">
              October 31st, 2026
            </p>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-8" />
          </motion.div>

          <motion.p
            className="font-['Cormorant_Garamond'] text-xl text-white/60 italic pt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Forever begins here
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
