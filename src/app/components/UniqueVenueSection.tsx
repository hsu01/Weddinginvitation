import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Camera, Car, Home, MapPin, Sun, type LucideIcon } from 'lucide-react';
import venueImage from '../../imports/Hein_Soe___Thinzar-150.jpg';

interface VenueDetail {
  icon: LucideIcon;
  label: string;
  text: string;
}

const venueDetails: VenueDetail[] = [
  {
    icon: Home,
    label: 'Venue',
    text: 'Our ceremony will take place in the gardens, followed by an evening of food, laughter, and dancing inside.',
  },
  {
    icon: Camera,
    label: 'Photos',
    text: "Don't forget to stop by our photo booth - we can't wait to see your photos!",
  },
  {
    icon: Sun,
    label: 'Weather',
    text: 'Our ceremony will be outdoors. California evenings can get chilly, so a light jacket or shawl is a good idea.',
  },
  {
    icon: Car,
    label: 'Parking',
    text: 'Plenty of complimentary parking is available right at the venue.',
  },
];

export function UniqueVenueSection() {
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
    <section className="relative py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12"
        >
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative overflow-hidden">
              {/* Image with overlay gradient */}
              <img
                src={venueImage}
                alt="Venue"
                className="w-full h-auto rounded-sm shadow-2xl"
              />

              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-sm p-6 shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-['Inter'] text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-2">
                      Location
                    </p>
                    <h3 className="font-['Bodoni_Moda'] text-2xl text-gray-900 mb-1">
                      Casa Real
                    </h3>
                    <p className="font-['Inter'] text-sm text-gray-600">
                      Ruby Hill Winery
                    </p>
                  </div>

                  <motion.a
                    href="https://www.google.com/maps/dir/?api=1&destination=410+Vineyard+Ave,+Pleasanton,+CA+94566"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <p className="font-['Inter'] text-[10px] tracking-[0.3em] uppercase text-gray-500">
                Our Venue
              </p>

              <h2 className="font-['Bodoni_Moda'] text-4xl sm:text-5xl text-gray-900 leading-tight">
                Where Our Forever
                <br />
                Begins
              </h2>

              <div className="w-12 h-px bg-gray-300" />

              <p className="font-['Inter'] text-base text-gray-600 leading-relaxed">
              We fell in love with Casa Real's beautiful vineyards and gardens, and we're so excited to celebrate our wedding with you in such a special place.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {venueDetails.map((detail, index) => {
                const Icon = detail.icon;

                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.55 + index * 0.08 }}
                    className="aspect-square rounded-2xl border border-[#E8E2D8] bg-[#FAFAF9] p-4 shadow-[0_14px_34px_rgba(45,31,27,0.06)]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2D1F1B] text-white">
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-['Inter'] text-[10px] font-medium uppercase tracking-[0.22em] text-[#2D1F1B]">
                        {detail.label}
                      </h3>
                      <p className="mt-2 font-['Inter'] text-[12px] leading-relaxed text-gray-600">
                        {detail.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-gray-200 pt-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-['Inter'] text-[10px] uppercase tracking-[0.22em] text-gray-500">
                    Address
                  </p>
                  <p className="mt-2 font-['Inter'] text-sm leading-relaxed text-gray-700">
                    410 Vineyard Ave<br />
                    Pleasanton, CA 94566
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-[10px] uppercase tracking-[0.22em] text-gray-500">
                    Accommodations
                  </p>
                  <p className="mt-2 font-['Inter'] text-sm leading-relaxed text-gray-700">
                  Traveling from out of town? We'll share our favorite nearby hotel options after you RSVP.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.google.com/maps/dir/?api=1&destination=410+Vineyard+Ave,+Pleasanton,+CA+94566"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="flex-1 py-3 px-4 bg-gray-900 text-white text-center rounded-sm hover:bg-gray-800 transition-colors font-['Inter'] text-sm"
              >
                Get Directions
              </motion.a>

              <motion.button
                onClick={addToCalendar}
                whileHover={{ y: -2 }}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-900 text-center rounded-sm hover:bg-gray-50 transition-colors font-['Inter'] text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Save Date
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
