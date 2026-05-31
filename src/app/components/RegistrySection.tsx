import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import registryImage from '../../imports/Hein_Soe___Thinzar-100.jpg';

const registry = {
  venmo: '@[Your Venmo Handle]',
  zelle: '[Your Email or Phone]',
};

export function RegistrySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[#ECE8DF]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[30px] border border-[#D9D1C7] bg-[#F4F0E8] shadow-[0_22px_50px_-35px_rgba(26,18,13,0.45)]"
        >
          <img
            src={registryImage}
            alt="Wedding rings"
            className="w-full h-[260px] md:h-[340px] object-cover"
          />

          <div className="p-7 md:p-10">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#2D1F1B] leading-none">
                Registry
              </h2>

              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full bg-[#2D1F1B] px-4 py-2 font-['Inter'] text-[11px] tracking-[0.18em] uppercase text-white transition-colors hover:bg-[#412D28]"
              >
                {isOpen ? 'Hide' : 'Open'}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            <p className="mt-5 font-['Inter'] text-lg md:text-[30px] leading-relaxed text-[#5E5249] max-w-3xl">
              Your presence at our wedding is the greatest gift of all. If you would like to honor us with a gift, a contribution towards our future together would mean a lot.
            </p>

            <motion.div
              initial={false}
              animate={{
                height: isOpen ? 'auto' : 0,
                opacity: isOpen ? 1 : 0,
                marginTop: isOpen ? 28 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-10 border-t border-[#D9D1C7] pt-8">
                <div>
                  <p className="font-['Inter'] text-xs tracking-[0.18em] uppercase text-[#9B9188] mb-3">
                    For U.S. Guests
                  </p>
                  <h3 className="font-['Inter'] text-3xl font-semibold text-[#3C3129] mb-3">
                    Venmo
                  </h3>
                  <p className="font-['Inter'] text-base md:text-[28px] leading-relaxed text-[#5E5249]">
                    We gratefully accept contributions via Venmo at {registry.venmo}.
                  </p>
                </div>

                <div>
                  <p className="font-['Inter'] text-xs tracking-[0.18em] uppercase text-[#9B9188] mb-3">
                    Alternate Option
                  </p>
                  <h3 className="font-['Inter'] text-3xl font-semibold text-[#3C3129] mb-3">
                    Zelle
                  </h3>
                  <p className="font-['Inter'] text-base md:text-[28px] leading-relaxed text-[#5E5249]">
                    If preferred, contributions can also be sent by Zelle to {registry.zelle}.
                  </p>
                </div>

                <div>
                  <p className="font-['Inter'] text-xs tracking-[0.18em] uppercase text-[#9B9188] mb-3">
                    A Note on Gifts
                  </p>
                  <h3 className="font-['Inter'] text-3xl font-semibold text-[#3C3129] mb-3">
                    Thank You
                  </h3>
                  <p className="font-['Inter'] text-base md:text-[28px] leading-relaxed text-[#5E5249]">
                    We are incredibly thankful for your love and support. Having you there matters most.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
