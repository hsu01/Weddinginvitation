import { motion, AnimatePresence } from 'motion/react';

interface MusicPlayerNewProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicPlayerNew({ isPlaying, onToggle }: MusicPlayerNewProps) {
  return (
    <motion.button
      onClick={onToggle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 group"
    >
      <div className="relative">
        {/* Outer circle */}
        <div className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-white/90">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="playing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-1"
              >
                <motion.div
                  className="w-0.5 h-3 bg-gray-800"
                  animate={{ height: ['12px', '6px', '12px'] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
                <motion.div
                  className="w-0.5 h-3 bg-gray-800"
                  animate={{ height: ['6px', '12px', '6px'] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-0.5 h-3 bg-gray-800"
                  animate={{ height: ['12px', '8px', '12px'] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="paused"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-0 h-0 border-l-[5px] border-l-gray-800 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Subtle label */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <p className="font-['Inter'] text-[10px] tracking-wider uppercase text-gray-600 whitespace-nowrap bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200">
            {isPlaying ? 'Pause' : 'Play'}
          </p>
        </motion.div>
      </div>
    </motion.button>
  );
}
