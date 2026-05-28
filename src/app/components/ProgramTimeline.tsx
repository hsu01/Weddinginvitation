import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart } from 'lucide-react';

const timelineEvents = [
  { time: '3:30 PM', title: 'GUESTS ARRIVAL', description: 'Welcome drinks and warm greetings' },
  { time: '4:00 PM', title: 'CEREMONY', description: 'Exchange of vows by the lakeside' },
  { time: '5:00 PM', title: 'COCKTAIL HOUR & PHOTO SESSION', description: 'Celebrate with cocktails and capture memories' },
  { time: '6:00 PM', title: 'RECEPTION DINNER', description: 'Elegant dinner with loved ones' },
  { time: '7:00 PM', title: 'CAKE CUTTING', description: 'Sweet moment to share' },
  { time: '7:30 PM', title: 'CHAMPAGNE TOAST', description: 'Raise a glass to love and happiness' },
  { time: '8:00 PM', title: 'OPEN DANCE FLOOR', description: 'Dance the night away' },
  { time: '10:00 PM', title: 'GRAND EXIT', description: 'Sparkler send-off under the stars' },
];

export function ProgramTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 px-6 bg-[#F6F5F3]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Bodoni_Moda'] text-5xl md:text-6xl text-gray-900">
            The Program
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute left-8 top-0 w-0.5 h-full bg-gray-300 origin-top"
          />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className="relative pl-20"
              >
                <motion.div
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{
                    duration: 2,
                    delay: 0.4 + index * 0.15,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="absolute left-6 top-2 bg-[#8B4545] rounded-full p-2"
                >
                  <Heart className="w-4 h-4 text-white" fill="currentColor" />
                </motion.div>

                <div className="space-y-1">
                  <p className="font-['Playfair_Display'] text-2xl text-gray-900">
                    {event.time}
                  </p>
                  <h3 className="font-['Inter'] text-sm tracking-widest text-gray-800 font-medium">
                    {event.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
