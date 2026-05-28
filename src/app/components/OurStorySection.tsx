import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import transitionImage from '../../imports/Hein_Soe___Thinzar-2.jpg';

export function OurStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#FAF9F6] to-[#FFFBF0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#4A2C2A] mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A574] to-[#B8967D] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#4A2C2A]">
              Where It All Began
            </h3>
            <p className="font-['Inter'] text-lg text-gray-700 leading-relaxed">
              In a world filled with fleeting moments, we found something eternal.
              Our journey began with a simple conversation that turned into endless hours
              of laughter, dreams, and understanding.
            </p>
            <p className="font-['Inter'] text-lg text-gray-700 leading-relaxed">
              Every moment spent together has been a chapter in our love story,
              written with patience, trust, and an unbreakable bond that grows stronger
              with each passing day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/20 to-[#8B4545]/20 rounded-lg transform rotate-3" />
            <img
              src={transitionImage}
              alt="Hein Soe and Thinzar"
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-[#D4A574]/20"
        >
          <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#4A2C2A] text-center mb-8">
            The Promise
          </h3>
          <p className="font-['Inter'] text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto italic">
            "As we stand at the beginning of forever, we promise to cherish every sunrise,
            weather every storm together, and build a love that transcends time.
            This is not just a wedding—it's the celebration of two souls becoming one."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
