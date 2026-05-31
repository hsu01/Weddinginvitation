import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Camera, Music2, Sparkles, Cake, GlassWater, Heart, Wine } from 'lucide-react';

const events = [
  {
    icon: GlassWater,
    time: '3:30 PM',
    title: 'Guests Arrival',
    description: 'Welcome drinks, soft music, and seating before the ceremony begins.',
    mood: 'from-[#D9C7B8] to-[#C7B1A0]',
  },
  {
    icon: Heart,
    time: '4:30 PM',
    title: 'Wedding Ceremony',
    description: 'Join us as we exchange vows surrounded by snowy mountains and loved ones.',
    mood: 'from-[#B7C9D6] to-[#8DA9BA]',
  },
  {
    icon: Wine,
    time: '5:00 PM',
    title: 'Cocktails & Appetizers',
    description: 'Enjoy cocktails, appetizers, conversations, and beautiful sunset moments.',
    mood: 'from-[#D8B4A0] to-[#C88E7B]',
  },
  {
    icon: Sparkles,
    time: '6:00 PM',
    title: 'Reception Begins',
    description: 'Guests will be seated as the evening celebration officially begins.',
    mood: 'from-[#B8C5B1] to-[#8CA384]',
  },
  {
    icon: Wine,
    time: '6:10 PM',
    title: 'Introductions & Blessing',
    description: 'A warm welcome followed by blessings, speeches, and heartfelt moments.',
    mood: 'from-[#D4A574] to-[#B8967D]',
  },
  // {
  //   icon: Camera,
  //   time: '6:40 PM',
  //   title: 'Table Visits',
  //   description: 'We’ll visit each table to celebrate and capture memories with everyone.',
  //   mood: 'from-[#D7C4D1] to-[#BCA7B4]',
  // },
  {
    icon: Wine,
    time: '7:00 PM',
    title: 'Dinner Service',
    description: 'A curated dinner experience shared with family and friends.',
    mood: 'from-[#8B4545] to-[#5E2F2F]',
  },
  // {
  //   icon: GlassWater,
  //   time: '7:15 PM',
  //   title: 'Champagne Toast',
  //   description: 'Raise a glass with us as we celebrate love, joy, and new beginnings.',
  //   mood: 'from-[#E3C9A8] to-[#D4A574]',
  // },
  // {
  //   icon: Sparkles,
  //   time: '7:25 PM',
  //   title: 'Toasts',
  //   description: 'Heartfelt speeches and meaningful words from those closest to us.',
  //   mood: 'from-[#D6BFAF] to-[#B89482]',
  // },
  {
    icon: Cake,
    time: '7:35 PM',
    title: 'Cake Cutting',
    description: 'A sweet moment shared together before the dance floor opens.',
    mood: 'from-[#EBC8C8] to-[#D9A8A8]',
  },
  // {
  //   icon: Heart,
  //   time: '7:40 PM',
  //   title: 'First Dance',
  //   description: 'Our first dance together as husband and wife under the evening lights.',
  //   mood: 'from-[#6B7A8F] to-[#4A5568]',
  // },
  {
    icon: Music2,
    time: '7:55 PM',
    title: 'Open Dancing',
    description: 'Dance, celebrate, laugh, and enjoy the rest of the evening with us.',
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
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-[#F8F6F2] via-[#F4EFE9] to-[#EFE7DF]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4A574]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
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

        <div className="relative">
          <div className="absolute left-[23px] md:left-1/2 top-3 bottom-3 w-[1px] bg-[#D8CFC7]" />

          <div className="space-y-5 md:space-y-6">
            {events.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 35 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex pl-12 md:pl-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className="absolute left-0 md:left-1/2 top-7 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/70 bg-white/60 shadow-lg backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-[#7A5D49]" />
                  </div>

                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group relative w-full md:w-[46%]"
                  >
                    <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${event.mood} opacity-95`} />
                    <div className="absolute inset-0 rounded-[28px] bg-black/12" />

                    <motion.div
                      animate={{ rotate: [0, 8, 0], scale: [1, 1.06, 1] }}
                      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-white/12 blur-2xl"
                    />

                    <div className="relative z-10 p-6 md:p-7">
                      <div className="mb-3 flex items-end justify-between gap-4">
                        <h3 className="font-['Playfair_Display'] text-[30px] md:text-[34px] leading-tight text-white">
                          {event.title}
                        </h3>

                        <p className="shrink-0 font-['Cormorant_Garamond'] text-[28px] md:text-[32px] leading-none text-white/95">
                          {event.time}
                        </p>
                      </div>

                      <p className="font-['Inter'] text-sm md:text-[15px] leading-relaxed text-white/85">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-white/55 backdrop-blur-md border border-white/60 rounded-[32px] p-8 md:p-10 shadow-xl">
            <p className="font-['Inter'] uppercase tracking-[0.35em] text-[11px] text-[#8B7B6D] mb-4">
              Celebration Continues
            </p>

            <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#2D1F1B] mb-4">
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
