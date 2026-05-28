import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Mountain, Heart, Camera, Calendar } from 'lucide-react';
import venueImage from '../../imports/Hein_Soe___Thinzar-150.jpg';

export function VenueSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const addToCalendar = () => {
    const eventDetails = {
      text: 'Hein Soe & Thinzar Swe Htet Wedding',
      dates: '20261031T160000/20261031T220000',
      details: 'Join us for our wedding celebration at Casa Real at Ruby Hill Winery',
      location: '410 Vineyard Ave, Pleasanton, CA 94566',
    };
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.text
    )}&dates=${eventDetails.dates}&details=${encodeURIComponent(
      eventDetails.details
    )}&location=${encodeURIComponent(eventDetails.location)}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#E8F4F8] to-[#F6F5F3]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <p className="font-['Great_Vibes'] text-4xl text-gray-700">Our Venue</p>
            <h2 className="font-['Bodoni_Moda'] text-5xl md:text-6xl text-gray-900 leading-tight">
              CASA REAL
              <br />
              AT RUBY HILL
              <br />
              WINERY
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <img src={venueImage} alt="Venue" className="w-full h-auto" />
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.a
              href="https://www.google.com/maps/dir/?api=1&destination=410+Vineyard+Ave,+Pleasanton,+CA+94566"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -2 }}
              className="py-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-['Inter'] text-gray-800 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Directions</span>
            </motion.a>

            <motion.button
              onClick={addToCalendar}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -2 }}
              className="py-4 bg-gray-900 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-['Inter'] flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Add to Calendar</span>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 space-y-4"
          >
            {[
              { icon: Mountain, text: 'Stunning vineyard views' },
              { icon: Heart, text: 'Romantic winery atmosphere' },
              { icon: Camera, text: 'Beautiful garden photo opportunities' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <Icon className="w-5 h-5 text-[#8B4545]" />
                  <p className="font-['Inter'] text-gray-700">{feature.text}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
