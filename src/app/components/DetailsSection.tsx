import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function DetailsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          <h2 className="font-['Great_Vibes'] text-5xl text-gray-800">
            Details
          </h2>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-['Playfair_Display'] text-2xl text-gray-900">
                Reception
              </h3>
              <div className="w-24 h-px bg-gray-300 mx-auto" />
              <p className="font-['Inter'] text-gray-700 leading-relaxed">
                Join us for an elegant reception dinner following the ceremony.
                Enjoy a carefully curated menu featuring seasonal dishes and fine wines.
              </p>
            </motion.div>

            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-auto" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="font-['Playfair_Display'] text-2xl text-gray-900">
                Directions
              </h3>
              <div className="w-24 h-px bg-gray-300 mx-auto" />
              <p className="font-['Inter'] text-gray-700 leading-relaxed">
                Casa Real at Ruby Hill Winery is located at 410 Vineyard Ave, Pleasanton, CA 94566.
                Ample parking is available on-site. Detailed directions and parking information
                will be sent with your RSVP confirmation.
              </p>
            </motion.div>

            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-auto" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="font-['Playfair_Display'] text-2xl text-gray-900">
                Additional Information
              </h3>
              <div className="w-24 h-px bg-gray-300 mx-auto" />
              <p className="font-['Inter'] text-gray-700 leading-relaxed">
                The ceremony will be held in the beautiful winery gardens. We recommend
                bringing a wrap or jacket for the evening. The reception will feature
                both indoor and outdoor spaces with stunning vineyard views.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
