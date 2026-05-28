import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const timelineEvents = [
  {
    time: '3:30 PM',
    title: 'Arrival',
    description: 'Welcome & Reception',
  },
  {
    time: '4:00 PM',
    title: 'Ceremony',
    description: 'Exchange of Vows',
  },
  {
    time: '5:00 PM',
    title: 'Cocktail Hour',
    description: 'Photos & Celebration',
  },
  {
    time: '6:00 PM',
    title: 'Dinner',
    description: 'Reception Service',
  },
  {
    time: '7:00 PM',
    title: 'Cake Cutting',
    description: 'Sweet Moments',
  },
  {
    time: '7:30 PM',
    title: 'Toasts',
    description: 'Champagne & Speeches',
  },
  {
    time: '8:00 PM',
    title: 'Dancing',
    description: 'Open Floor',
  },
  {
    time: '10:00 PM',
    title: 'Grand Exit',
    description: 'Sparkler Send-Off',
  },
];

export function ElegantTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-['Bodoni_Moda'] text-5xl sm:text-6xl text-gray-900 mb-4">
            The Timeline
          </h2>
          <p className="font-['Inter'] text-xs tracking-[0.3em] uppercase text-gray-500">
            October 31st, 2026
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="bg-white rounded-sm p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                {/* Number indicator */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-['Inter'] text-xs">
                  {index + 1}
                </div>

                <div className="space-y-3">
                  {/* Time */}
                  <div className="flex items-baseline gap-3">
                    <p className="font-['Bodoni_Moda'] text-3xl text-gray-900">
                      {event.time}
                    </p>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-['Inter'] text-sm tracking-wider uppercase text-gray-900 font-medium mb-1">
                      {event.title}
                    </h3>
                    <p className="font-['Inter'] text-sm text-gray-500">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-['Inter'] text-sm text-gray-500 italic">
            Detailed schedule cards will be available at the venue
          </p>
        </motion.div>
      </div>
    </section>
  );
}
