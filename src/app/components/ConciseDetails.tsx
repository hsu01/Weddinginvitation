import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function ConciseDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 sm:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          {/* Header */}
          <div>
            <h2 className="font-['Bodoni_Moda'] text-5xl sm:text-6xl text-gray-900 mb-4">
              Details
            </h2>
            <p className="font-['Inter'] text-xs tracking-[0.3em] uppercase text-gray-500">
              Important Information
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-['Inter'] text-xs tracking-wider uppercase text-gray-900 font-medium">
                Venue
              </h3>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                Garden ceremony, indoor & outdoor reception
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-['Inter'] text-xs tracking-wider uppercase text-gray-900 font-medium">
                Photos
              </h3>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                Unplugged ceremony, feel free after
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-['Inter'] text-xs tracking-wider uppercase text-gray-900 font-medium">
                Weather
              </h3>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                Outdoor setting, bring a coat or jacket or a towel to keep yourself warm
              </p>
            </motion.div>
          </div>

          {/* Additional Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gray-50 rounded-sm p-8 border border-gray-200">
              <div className="font-['Inter'] text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  <strong className="font-medium">Parking:</strong> Ample on-site parking available.
                </p>
                <p>
                  <strong className="font-medium">Accommodations:</strong> Hotel recommendations will be sent with your RSVP confirmation.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
