import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const colorPalette = [
  { name: 'Lilac', hex: '#CBBBD8', contrast: 'text-white' },
  { name: 'Dusty Rose', hex: '#D4A5A5', contrast: 'text-white' },
  { name: 'Sage', hex: '#B8C5B0', contrast: 'text-gray-800' },
  { name: 'Taupe', hex: '#C4B5A0', contrast: 'text-white' },
  { name: 'Powder Blue', hex: '#B8D4E0', contrast: 'text-gray-800' },
  { name: 'Mauve', hex: '#C9ADA7', contrast: 'text-white' },
  { name: 'Stone', hex: '#D5C9B1', contrast: 'text-gray-800' },
  { name: 'Terracotta', hex: '#C8897C', contrast: 'text-white' },
  
];

export function RefinedDressCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 sm:py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-['Bodoni_Moda'] text-5xl sm:text-6xl text-gray-900">
              Dress Code
            </h2>
            <p className="font-['Inter'] text-xs tracking-[0.3em] uppercase text-gray-500">
              Cocktail Attire
            </p>
          </div>

          {/* Color Palette */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center">
              <p className="font-['Inter'] text-sm text-gray-600 mb-8">
                Suggested color palette for your attire
              </p>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {colorPalette.map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="group relative cursor-pointer"
                >
                  <div
                    className="aspect-square rounded-sm shadow-md border border-gray-200 group-hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: color.hex }}
                  />

                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <p className="font-['Inter'] text-[10px] text-gray-600 text-center">
                      {color.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="w-full h-px bg-gray-200 my-12" />

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid sm:grid-cols-2 gap-8"
          >
            <div className="text-center sm:text-left space-y-3">
              <h3 className="font-['Bodoni_Moda'] text-2xl text-gray-900">
                For Her
              </h3>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                Cocktail dress, midi or floor-length gown in soft tones
              </p>
            </div>

            <div className="text-center sm:text-left space-y-3">
              <h3 className="font-['Bodoni_Moda'] text-2xl text-gray-900">
                For Him
              </h3>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                Suit or dress shirt with slacks and ties are optional
              </p>
            </div>
          </motion.div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center pt-6"
          >
            <div className="inline-block bg-white border border-gray-200 rounded-sm px-8 py-4 shadow-sm">
              <p className="font-['Inter'] text-sm text-gray-600 italic">
              We kindly ask that guests avoid white or ivory attire.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
