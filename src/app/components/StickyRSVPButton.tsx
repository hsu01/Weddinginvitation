import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export function StickyRSVPButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > window.innerHeight * 0.5);
    });
  }, [scrollY]);

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp');
    rsvpSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      onClick={scrollToRSVP}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 left-8 z-40 bg-gradient-to-r from-[#D4A574] to-[#B8967D] text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 font-['Inter']"
    >
      <Calendar className="w-5 h-5" />
      <span>RSVP</span>
    </motion.button>
  );
}
