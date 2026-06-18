import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Camera, Music2, Sparkles, Cake, GlassWater, Heart, Wine, Mic } from 'lucide-react';

const events = [
  {
    icon: GlassWater,
    time: '4:00 PM',
    title: 'Guests Arrival',
    description: 'Welcome drinks, soft music, and seating before the ceremony begins.',
    mood: 'from-[#D9C7B8] to-[#C7B1A0]',
  },
  {
    icon: Heart,
    time: '4:30 PM',
    title: 'Wedding Ceremony',
    description: 'Join us as we exchange vows in the sun garden.',
    mood: 'from-[#B7C9D6] to-[#8DA9BA]',
  },
  {
    icon: Wine,
    time: '5:00 PM',
    title: 'Cocktail Hour',
    description: 'Enjoy unlimited alcohols, cocktails, appetizers, and conversations.',
    mood: 'from-[#D8B4A0] to-[#C88E7B]',
  },
  {
    icon: Sparkles,
    time: '6:00 PM',
    title: 'Reception Begins',
    description: 'Guests will be seated indoor as the evening celebration officially begins.',
    mood: 'from-[#B8C5B1] to-[#8CA384]',
  },
  {
    icon: Mic,
    time: '6:15 PM',
    title: 'Welcome Speech & Introductions',
    description: 'Welcome remarks, family introductions, and the opening of the evening reception.',
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
    time: '6:30 PM',
    title: 'Dinner Service',
    description: 'A curated dinner experience shared with family and friends.',
    mood: 'from-[#8B4545] to-[#5E2F2F]',
  },
  {
    icon: Music2,
    time: '6:45 PM',
    title: 'First Dance',
    description: 'The bride and groom share their first dance as newlyweds.',
    mood: 'from-[#E3C9A8] to-[#D4A574]',
  },
 {
    icon: Sparkles,
    time: '7:00 PM',
    title: 'Toasts & Blessings',
    description: 'Raise a glass with us as we celebrate love, joy, and new beginnings.',
    mood: 'from-[#D6BFAF] to-[#B89482]',
  },
  {
    icon: Music2,
    time: '7:30 PM',
    title: 'Entertainment',
    description: 'Enjoy the special performance prepared by bride and groom.',
    mood: 'from-[#4A2C2A] to-[#2C1817]',
  },
  {
    icon: Cake,
    time: '8:00 PM',
    title: 'Cake Cutting & Bouquet Toss',
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
  
];

export function EventDetailsSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F6F2] via-[#F4EFE9] to-[#EFE7DF] px-0 pb-10 pt-20 md:pb-14 md:pt-28">
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
          <div className="absolute left-[23px] lg:left-1/2 top-3 bottom-3 w-[1px] bg-[#D8CFC7]" />

          <div className="space-y-5 md:space-y-6">
            {events.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25, margin: '0px 0px -12% 0px' }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.04, 0.18),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
                >
                  <div className="absolute left-0 lg:left-1/2 top-7 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/70 bg-white/60 shadow-lg backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-[#7A5D49]" />
                  </div>

                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group relative w-full lg:w-[46%]"
                  >
                    <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${event.mood} opacity-95`} />
                    <div className="absolute inset-0 rounded-[28px] bg-black/12" />

                    <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-white/12 blur-2xl" />

                    <div className="relative z-10 p-6 md:p-7">
                      <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                        <h3 className="min-w-0 font-['Playfair_Display'] text-[26px] md:text-[30px] leading-tight text-white">
                          {event.title}
                        </h3>

                        <p className="whitespace-nowrap font-['Cormorant_Garamond'] text-[28px] md:text-[32px] leading-none text-white/95">
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
      </div>
    </section>
  );
}
