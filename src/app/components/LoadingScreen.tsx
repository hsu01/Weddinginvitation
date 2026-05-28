import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 bg-[#F6F5F3] z-50 flex items-center justify-center"
    >
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-2"
        >
          <h1 className="font-['Bodoni_Moda'] text-6xl md:text-8xl text-gray-900">
            H & T
          </h1>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-px bg-gray-400 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-['Cormorant_Garamond'] text-2xl text-gray-700 italic"
        >
          October 31st, 2026
        </motion.p>
      </div>
    </motion.div>
  );
}
