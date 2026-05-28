import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Clock, MapPin, Camera, Utensils, Cake, Wine, Music, Sparkles } from 'lucide-react';

const roadmapEvents = [
  {
    time: '3:30 PM',
    title: 'Guest Arrival',
    description: 'Welcome drinks and warm greetings as you arrive',
    icon: MapPin,
    color: 'from-slate-100 to-slate-200',
    textColor: 'text-slate-800',
    borderColor: 'border-slate-300',
    hoverColor: 'hover:border-slate-500',
  },
  {
    time: '4:00 PM',
    title: 'Ceremony',
    description: 'Exchange of vows in the beautiful garden',
    icon: Clock,
    color: 'from-blue-50 to-blue-100',
    textColor: 'text-blue-900',
    borderColor: 'border-blue-300',
    hoverColor: 'hover:border-blue-500',
  },
  {
    time: '5:00 PM',
    title: 'Cocktail Hour & Photos',
    description: 'Celebrate with cocktails while we capture memories',
    icon: Camera,
    color: 'from-amber-50 to-amber-100',
    textColor: 'text-amber-900',
    borderColor: 'border-amber-300',
    hoverColor: 'hover:border-amber-500',
  },
  {
    time: '6:00 PM',
    title: 'Reception Dinner',
    description: 'Elegant dinner service with loved ones',
    icon: Utensils,
    color: 'from-orange-50 to-orange-100',
    textColor: 'text-orange-900',
    borderColor: 'border-orange-300',
    hoverColor: 'hover:border-orange-500',
  },
  {
    time: '7:00 PM',
    title: 'Cake Cutting',
    description: 'A sweet moment to share together',
    icon: Cake,
    color: 'from-rose-50 to-rose-100',
    textColor: 'text-rose-900',
    borderColor: 'border-rose-300',
    hoverColor: 'hover:border-rose-500',
  },
  {
    time: '7:30 PM',
    title: 'Champagne Toast',
    description: 'Raise a glass to love and happiness',
    icon: Wine,
    color: 'from-yellow-50 to-yellow-100',
    textColor: 'text-yellow-900',
    borderColor: 'border-yellow-400',
    hoverColor: 'hover:border-yellow-600',
  },
  {
    time: '8:00 PM',
    title: 'Open Dance Floor',
    description: 'Dance the night away under the stars',
    icon: Music,
    color: 'from-purple-50 to-purple-100',
    textColor: 'text-purple-900',
    borderColor: 'border-purple-300',
    hoverColor: 'hover:border-purple-500',
  },
  {
    time: '10:00 PM',
    title: 'Grand Exit',
    description: 'Sparkler send-off to end the perfect evening',
    icon: Sparkles,
    color: 'from-indigo-50 to-indigo-100',
    textColor: 'text-indigo-900',
    borderColor: 'border-indigo-300',
    hoverColor: 'hover:border-indigo-500',
  },
];

export function InteractiveRoadmap() {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-20 sm:py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="font-['Bodoni_Moda'] text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-4">
            The Journey
          </h2>
          <p className="font-['Inter'] text-xs tracking-[0.3em] uppercase text-gray-600">
            A Day to Remember
          </p>
        </motion.div>

        {/* Desktop Roadmap - Hidden on Mobile */}
        <div className="hidden lg:block relative">
          {/* Animated Path Line */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ height: '100%' }}>
            <motion.path
              d={`M 100 0 Q 200 ${roadmapEvents.length * 80}, ${roadmapEvents.length % 2 === 0 ? 'calc(100% - 100)' : '100'} ${roadmapEvents.length * 160}`}
              stroke="#D1D5DB"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </svg>

          {/* Events Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {roadmapEvents.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setActiveCard(index)}
                  onHoverEnd={() => setActiveCard(null)}
                  className={`relative ${isLeft ? 'text-right pr-8' : 'text-left pl-8 col-start-2'}`}
                >
                  {/* Connecting Dot */}
                  <div
                    className={`absolute top-0 w-4 h-4 rounded-full bg-white border-2 ${event.borderColor} ${
                      isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    } transition-all duration-300 ${
                      activeCard === index ? 'scale-150 shadow-lg' : ''
                    }`}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`relative bg-gradient-to-br ${event.color} rounded-2xl p-6 border-2 ${event.borderColor} ${event.hoverColor} transition-all duration-300 cursor-pointer group`}
                  >
                    <div className="flex items-start gap-4">
                      {isLeft && (
                        <div className="flex-1 space-y-2">
                          <p className={`font-['Bodoni_Moda'] text-3xl ${event.textColor}`}>
                            {event.time}
                          </p>
                          <h3 className={`font-['Inter'] text-sm tracking-wider uppercase ${event.textColor} font-medium`}>
                            {event.title}
                          </h3>
                          <p className={`font-['Inter'] text-sm ${event.textColor} opacity-70`}>
                            {event.description}
                          </p>
                        </div>
                      )}

                      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-white border ${event.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 ${event.textColor}`} />
                      </div>

                      {!isLeft && (
                        <div className="flex-1 space-y-2">
                          <p className={`font-['Bodoni_Moda'] text-3xl ${event.textColor}`}>
                            {event.time}
                          </p>
                          <h3 className={`font-['Inter'] text-sm tracking-wider uppercase ${event.textColor} font-medium`}>
                            {event.title}
                          </h3>
                          <p className={`font-['Inter'] text-sm ${event.textColor} opacity-70`}>
                            {event.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? 10 : -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        isLeft ? '-right-6' : '-left-6'
                      }`}
                    >
                      <div className={`w-4 h-4 border-t-2 border-r-2 ${event.borderColor} transform ${
                        isLeft ? 'rotate-45' : '-rotate-135'
                      }`} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Roadmap - Single Column */}
        <div className="lg:hidden relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-slate-400 via-blue-400 to-purple-400 origin-top"
            style={{ scaleY: pathProgress }}
          />

          <div className="space-y-8">
            {roadmapEvents.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Icon Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-6 top-4 w-8 h-8 rounded-full bg-white border-2 ${event.borderColor} flex items-center justify-center shadow-md -translate-x-1/2`}
                  >
                    <Icon className={`w-4 h-4 ${event.textColor}`} />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className={`bg-gradient-to-br ${event.color} rounded-2xl p-6 border-2 ${event.borderColor} ${event.hoverColor} transition-all duration-300 shadow-sm`}
                  >
                    <div className="space-y-2">
                      <p className={`font-['Bodoni_Moda'] text-2xl ${event.textColor}`}>
                        {event.time}
                      </p>
                      <h3 className={`font-['Inter'] text-xs tracking-wider uppercase ${event.textColor} font-medium`}>
                        {event.title}
                      </h3>
                      <p className={`font-['Inter'] text-sm ${event.textColor} opacity-70 leading-relaxed`}>
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
