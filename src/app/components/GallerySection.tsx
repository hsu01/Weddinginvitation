import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import image1 from '../../imports/Hein_Soe___Thinzar-34.jpg';
import image2 from '../../imports/Hein_Soe___Thinzar-2.jpg';
import image3 from '../../imports/Hein_Soe___Thinzar-155.jpg';

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { src: image1, alt: 'Mountain winter portrait' },
  { src: image2, alt: 'Red dress in snow' },
  { src: image3, alt: 'Beach wedding' },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#FAFAF9] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-['Inter'] text-[10px] tracking-[0.4em] text-gray-400 uppercase mb-4">
              Our Journey Together
            </p>
            <h2 className="font-['Bodoni_Moda'] text-5xl md:text-7xl text-gray-900">
              Our Story
            </h2>
          </motion.div>

          {/* Clean 3-Photo Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer overflow-hidden rounded-2xl shadow-lg group relative aspect-[3/4]"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
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
            className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" strokeWidth={1.5} />
          </button>

          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            src={photos[selectedImage].src}
            alt={photos[selectedImage].alt}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </motion.div>
      )}
    </>
  );
}
