import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import dateImage from '../../imports/Hein_Soe___Thinzar-100.jpg';

export function ModernDateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 sm:py-32 px-6 bg-gradient-to-b from-white to-[#F6F5F3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={dateImage}
                alt="Wedding portrait"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 order-1 md:order-2"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="font-['Bodoni_Moda'] text-8xl sm:text-9xl md:text-[140px] leading-none text-gray-900">
                  31
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-['Inter'] text-xs tracking-[0.3em] uppercase text-gray-600"
              >
                October 2026
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-3"
            >
              <p className="font-['Bodoni_Moda'] text-2xl sm:text-3xl text-gray-900">
                Casa Real at Ruby Hill Winery
              </p>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                410 Vineyard Ave<br />
                Pleasanton, CA 94566
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="h-px w-24 bg-gray-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
