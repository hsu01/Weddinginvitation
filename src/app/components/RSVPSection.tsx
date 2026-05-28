import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';

export function RSVPSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    dietary: '',
    attending: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#FAF9F6] via-[#FFFBF0] to-[#FFF5F0]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#4A2C2A] mb-4">
            RSVP
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A574] to-[#8B4545] mx-auto mb-6" />
          <p className="font-['Inter'] text-xl text-gray-600">
            Please let us know if you'll be joining us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-[#D4A574]/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-['Inter'] text-sm text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/70 border border-[#D4A574]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all font-['Inter']"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-['Inter'] text-sm text-gray-700 mb-2">
                Will you be attending?
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['Yes, I will be there', 'Sorry, I cannot attend'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: option })}
                    className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 font-['Inter'] ${
                      formData.attending === option
                        ? 'bg-[#D4A574] border-[#D4A574] text-white'
                        : 'bg-white/50 border-[#D4A574]/30 text-gray-700 hover:border-[#D4A574]'
                    }`}
                  >
                    {option.split(',')[0]}
                  </button>
                ))}
              </div>
            </div>

            {formData.attending === 'Yes, I will be there' && (
              <>
                <div>
                  <label className="block font-['Inter'] text-sm text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 bg-white/70 border border-[#D4A574]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all font-['Inter']"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-['Inter'] text-sm text-gray-700 mb-2">
                    Dietary Restrictions
                  </label>
                  <textarea
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    className="w-full px-4 py-3 bg-white/70 border border-[#D4A574]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all resize-none h-24 font-['Inter']"
                    placeholder="Let us know about any dietary restrictions..."
                  />
                </div>
              </>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-[#D4A574] to-[#B8967D] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-['Inter'] flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <Check className="w-5 h-5" />
                  Thank You!
                </>
              ) : (
                'Submit RSVP'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
