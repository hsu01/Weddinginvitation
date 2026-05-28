import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const colors = [
  { name: 'Powder Blue', hex: '#B8D4E0' },
  { name: 'Dusty Peach', hex: '#E8C9B8' },
  { name: 'Champagne', hex: '#F5E6D3' },
  { name: 'Powder Gray', hex: '#D4D4D4' },
  { name: 'Soft Ivory', hex: '#F9F6F0' },
];

export function DressCodeSection() {
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
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="font-['Bodoni_Moda'] text-5xl md:text-6xl text-gray-900">
              Dress Code
            </h2>
            <p className="font-['Cormorant_Garamond'] text-2xl text-gray-700 italic">
              Guests
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            {colors.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="group relative"
              >
                <div
                  className="w-16 h-16 rounded-full shadow-lg border-2 border-white"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <p className="font-['Inter'] text-xs text-gray-600">{color.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-8 text-center"
          >
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl text-gray-900 mb-3">
                Ladies
              </h3>
              <p className="font-['Inter'] text-gray-700">
                Elegant long gown in soft neutral colors
              </p>
            </div>

            <div>
              <h3 className="font-['Playfair_Display'] text-2xl text-gray-900 mb-3">
                Gentlemen
              </h3>
              <p className="font-['Inter'] text-gray-700">
                Formal dark suit or smart elegant attire
              </p>
            </div>
          </motion.div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="font-['Inter'] text-sm text-gray-600 text-center italic"
          >
            We kindly ask guests to avoid wearing white
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
