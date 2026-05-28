import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const timelineScenes = [
  {
    time: '3:30 PM',
    title: 'Guest Arrival',
    description: 'Welcome drinks and warm greetings',
    atmosphere: 'from-white to-[#F0F0F5]',
    accentColor: 'text-gray-800',
  },
  {
    time: '4:00 PM',
    title: 'Ceremony',
    description: 'Exchange of vows in the garden',
    atmosphere: 'from-[#F0F0F5] to-[#E8EBF0]',
    accentColor: 'text-slate-700',
  },
  {
    time: '5:00 PM',
    title: 'Cocktail Hour',
    description: 'Celebrate with cocktails and capture memories',
    atmosphere: 'from-[#E8EBF0] to-[#F5EBE0]',
    accentColor: 'text-amber-900',
  },
  {
    time: '6:00 PM',
    title: 'Reception Dinner',
    description: 'Elegant dinner with loved ones',
    atmosphere: 'from-[#F5EBE0] to-[#EBD5C8]',
    accentColor: 'text-amber-800',
  },
  {
    time: '7:00 PM',
    title: 'Cake Cutting',
    description: 'Sweet moment to share',
    atmosphere: 'from-[#EBD5C8] to-[#E5D0C0]',
    accentColor: 'text-rose-900',
  },
  {
    time: '7:30 PM',
    title: 'Champagne Toast',
    description: 'Raise a glass to love and happiness',
    atmosphere: 'from-[#E5D0C0] to-[#D8C5B8]',
    accentColor: 'text-amber-900',
  },
  {
    time: '8:00 PM',
    title: 'Open Dance Floor',
    description: 'Dance the night away',
    atmosphere: 'from-[#D8C5B8] to-[#C8B8A8]',
    accentColor: 'text-stone-800',
  },
  {
    time: '10:00 PM',
    title: 'Grand Exit',
    description: 'Sparkler send-off under the stars',
    atmosphere: 'from-[#C8B8A8] to-[#2D2D3A]',
    accentColor: 'text-slate-300',
  },
];

export function SceneTimeline() {
  return (
    <section className="relative">
      {timelineScenes.map((scene, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: '-20%' });

        return (
          <div
            key={index}
            ref={ref}
            className={`relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b ${scene.atmosphere} transition-all duration-1000`}
          >
            <div className="max-w-4xl mx-auto px-6 sm:px-12 py-20 sm:py-32">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-center sm:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className={`font-['Bodoni_Moda'] text-6xl sm:text-7xl md:text-8xl ${scene.accentColor}`}>
                    {scene.time}
                  </p>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`font-['Inter'] text-xs tracking-[0.3em] uppercase ${scene.accentColor}`}
                >
                  {scene.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={`font-['Inter'] text-base sm:text-lg max-w-md ${scene.accentColor} opacity-70`}
                >
                  {scene.description}
                </motion.p>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
