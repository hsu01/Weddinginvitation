import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X } from 'lucide-react';
import image1 from '../../imports/Hein_Soe___Thinzar-34.jpg';
import image2 from '../../imports/Hein_Soe___Thinzar-2.jpg';
import image3 from '../../imports/Hein_Soe___Thinzar-155.jpg';

const photos = [
  { src: image1, alt: 'Lakeside winter portrait' },
  { src: image2, alt: 'Red dress in the snow' },
  { src: image3, alt: 'Beach wedding moment' },
  { src: image1, alt: 'Mountain romance' },
  { src: image2, alt: 'Winter elegance' },
  { src: image3, alt: 'Sunset celebration' },
];

export function PhotoGallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#FFE8E8] to-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#4A2C2A] mb-4">
              Our Moments
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B4545] to-[#D4A574] mx-auto" />
          </motion.div>

          <Masonry columnsCount={1} gutter="1.5rem" className="md:hidden">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </Masonry>

          <Masonry columnsCount={2} gutter="1.5rem" className="hidden md:block lg:hidden">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </Masonry>

          <Masonry columnsCount={3} gutter="1.5rem" className="hidden lg:block">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>

          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={photos[selectedImage].src}
            alt={photos[selectedImage].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </motion.div>
      )}
    </>
  );
}
