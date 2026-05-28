import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Clock,
  MapPin,
  Camera,
  Wine,
  Music2,
  Sparkles,
  Cake,
  GlassWater,
  Heart,
} from 'lucide-react';

const events = [
  {
    icon: GlassWater,
    time: '3:30 PM',
    title: 'Guests Arrival',
    description:
      'Welcome drinks, soft music, and seating before the ceremony begins.',
    mood: 'from-[#D9C7B8] to-[#C7B1A0]',
  },
  {
    icon: Heart,
    time: '4:30 PM',
    title: 'Wedding Ceremony',
    description:
      'Join us as we exchange vows surrounded by snowy mountains and loved ones.',
    mood: 'from-[#B7C9D6] to-[#8DA9BA]',
  },
  {
    icon: Wine,
    time: '5:00 PM',
    title: 'Cocktails & Appetizers',
    description:
      'Enjoy cocktails, appetizers, conversations, and beautiful sunset moments.',
    mood: 'from-[#D8B4A0] to-[#C88E7B]',
  },
  {
    icon: Sparkles,
    time: '6:00 PM',
    title: 'Reception Begins',
    description:
      'Guests will be seated as the evening celebration officially begins.',
    mood: 'from-[#B8C5B1] to-[#8CA384]',
  },
  {
    icon: Wine,
    time: '6:10 PM',
    title: 'Introductions & Blessing',
    description:
      'A warm welcome followed by blessings, speeches, and heartfelt moments.',
    mood: 'from-[#D4A574] to-[#B8967D]',
  },
  {
    icon: Camera,
    time: '6:40 PM',
    title: 'Table Visits',
    description:
      'We’ll visit each table to celebrate and capture memories with everyone.',
    mood: 'from-[#D7C4D1] to-[#BCA7B4]',
  },
  {
    icon: Wine,
    time: '7:00 PM',
    title: 'Dinner Service',
    description:
      'A curated dinner experience shared with family and friends.',
    mood: 'from-[#8B4545] to-[#5E2F2F]',
  },
  {
    icon: GlassWater,
    time: '7:15 PM',
    title: 'Champagne Toast',
    description:
      'Raise a glass with us as we celebrate love, joy, and new beginnings.',
    mood: 'from-[#E3C9A8] to-[#D4A574]',
  },
  {
    icon: Sparkles,
    time: '7:25 PM',
    title: 'Toasts',
    description:
      'Heartfelt speeches and meaningful words from those closest to us.',
    mood: 'from-[#D6BFAF] to-[#B89482]',
  },
  {
    icon: Cake,
    time: '7:35 PM',
    title: 'Cake Cutting',
    description:
      'A sweet moment shared together before the dance floor opens.',
    mood: 'from-[#EBC8C8] to-[#D9A8A8]',
  },
  {
    icon: Heart,
    time: '7:40 PM',
    title: 'First Dance',
    description:
      'Our first dance together as husband and wife under the evening lights.',
    mood: 'from-[#6B7A8F] to-[#4A5568]',
  },
  {
    icon: Music2,
    time: '7:55 PM',
    title: 'Open Dancing',
    description:
      'Dance, celebrate, laugh, and enjoy the rest of the evening with us.',
    mood: 'from-[#4A2C2A] to-[#2C1817]',
  },
];

export function EventDetailsSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section className="relative overflow-hidden py-28 md:py-36 bg-gradient-to-b from-[#F8F6F2] via-[#F4EFE9] to-[#EFE7DF]">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4A574]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="font-['Inter'] uppercase tracking-[0.35em] text-[11px] text-[#8B7B6D] mb-5">
            Wedding Celebration
          </p>

          <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#2D1F1B] leading-none mb-6">
            The Timeline
          </h2>

          <div className="w-24 h-[1px] bg-[#B8967D] mx-auto mb-6" />

          <p className="font-['Cormorant_Garamond'] italic text-2xl md:text-3xl text-[#6A5A4E]">
            October 31st, 2026
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#D8CFC7]" />

          <div className="space-y-8 md:space-y-14">
            {events.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex ${
                    index % 2 === 0
                      ? 'md:justify-start'
                      : 'md:justify-end'
                  }`}
                >
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.01,
                    }}
                    className="group relative w-full md:w-[46%]"
                  >
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${event.mood} rounded-[32px] opacity-90`}
                    />

                    {/* Blur */}
                    <div className="absolute inset-0 rounded-[32px] bg-black/10 backdrop-blur-[2px]" />

                    {/* Floating orb */}
                    <motion.div
                      animate={{
                        rotate: [0, 10, 0],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute -top-16 -right-16 w-52 h-52 bg-white/10 blur-3xl rounded-full"
                    />

                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-4 border-[#D4A574] shadow-xl z-20
                      left-[calc(100%+32px)] group-even:right-[calc(100%+32px)]"
                    />

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-10">
                      <div className="flex items-start justify-between mb-10">
                        <div>
                          <p className="font-['Inter'] text-[10px] uppercase tracking-[0.3em] text-white/70 mb-3">
                            Wedding Event
                          </p>

                          <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white leading-tight">
                            {event.title}
                          </h3>
                        </div>

                        <motion.div
                          whileHover={{
                            rotate: 8,
                            scale: 1.08,
                          }}
                          className="bg-white/15 border border-white/20 backdrop-blur-md rounded-2xl p-4"
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>

                      <div className="space-y-5">
                        <div className="flex items-center gap-4">
                          <div className="h-[1px] flex-1 bg-white/30" />

                          <p className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-white">
                            {event.time}
                          </p>
                        </div>

                        <p className="font-['Inter'] text-sm md:text-base leading-relaxed text-white/85">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Ending Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="mt-28 text-center"
        >
          <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-md border border-white/50 rounded-[40px] p-10 md:p-14 shadow-2xl">
            <p className="font-['Inter'] uppercase tracking-[0.35em] text-[11px] text-[#8B7B6D] mb-5">
              Celebration Continues
            </p>

            <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#2D1F1B] mb-6">
              Dance The Night Away
            </h3>

            <p className="font-['Cormorant_Garamond'] text-2xl text-[#6A5A4E] leading-relaxed">
              Thank you for being part of our story and celebrating this unforgettable evening with us.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}