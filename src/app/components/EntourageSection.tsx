import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const entourage = [
  {
    category: "Parents of the Groom",
    names: ["Khin Maung Lwin", "Mya Mya Yee"],
  },
  {
    category: "Parents of the Bride",
    names: ["Swe Myint", "Aye Aye Thant"],
  },
  {
    category: "Maid of Honour & Ring Bearer",
    names: ["Hsu Wai Hnin Kyaw"],
  },
  {
    category: "Groomsmen",
    names: [
      "Win Paing",
      "Arthur Kyaw",
      "Thaung Hein",
    ],
  },
  {
    category: "Bridesmaids",
    names: [
      "Hay Man Tin Soe",
      "Htake Htar Nay Min",
      "Naw Day Day Soe Win",
    ],
  },
  {
    category: "Flower Girl",
    names: ["Little Tris Huang"],
  },
  {
    category: "MC",
    names: ["Swan Aung"],
  },
];

export function EntourageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative py-20 px-6 bg-[#F6F5F3]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Bodoni_Moda'] text-5xl md:text-6xl text-gray-900">
            Entourage
          </h2>
        </motion.div>

        <div className="space-y-12">
          {entourage.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
              }}
              className="text-center space-y-4"
            >
              <h3 className="font-['Playfair_Display'] text-xl text-gray-800">
                {group.category}
              </h3>
              <div className="space-y-2">
                {group.names.map((name, nameIndex) => (
                  <p
                    key={nameIndex}
                    className="font-['Cormorant_Garamond'] text-2xl text-gray-700"
                  >
                    {name}
                  </p>
                ))}
              </div>

              {index < entourage.length - 1 && (
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-auto mt-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}