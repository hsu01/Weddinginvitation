import { motion } from "motion/react";
import finalImage from "../../imports/Hein_Soe___Thinzar-24.jpg";

export function FinalSectionNew() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-[#F9F8F6] to-[#F0EDE8]">
      {/* Subtle background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${finalImage})` }}
      />

      {/* Content positioned at top */}
      <div className="relative z-10 pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Small elegant heading */}
          <p className="font-['Inter'] text-[10px] tracking-[0.4em] text-gray-900 uppercase">
            A Note of Gratitude
          </p>

          {/* Main message - smaller and elegant */}
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-gray-900 leading-relaxed">
            We can't wait to celebrate with you
          </p>

          {/* Names - refined size */}
          <div className="space-y-4 pt-4">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-gray-900">
              Hein Soe
            </h2>
            <p className="font-['Cormorant_Garamond'] text-2xl text-gray-900">
              &
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-gray-900">
              Thinzar Swe Htet
            </h2>
          </div>

          {/* Date */}
          <div className="pt-6">
            <p className="font-['Inter'] text-sm tracking-[0.2em] text-gray-900 uppercase">
              October 31st, 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}