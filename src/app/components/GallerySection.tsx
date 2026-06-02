import { motion } from 'motion/react';
import story2020 from '../../imports/2020.jpeg';
import engagedPhoto from '../../imports/engaged.jpeg';
import prewed1 from '../../imports/prewed1.jpg';
import prewed2 from '../../imports/prewed2.jpg';
import prewed3 from '../../imports/prewed3.jpg';
import prewed4 from '../../imports/prewed4.jpg';
import prewed5 from '../../imports/prewed5.jpg';
import prewed6 from '../../imports/prewed6.jpg';
import prewed7 from '../../imports/prewed7.jpg';

interface StoryMilestone {
  year: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}

interface PreWeddingPhoto {
  image: string;
  alt: string;
  caption: string;
  className: string;
}

const milestones: StoryMilestone[] = [
  {
    year: '2020',
    eyebrow: 'First Date',
    title: 'Where It All Began',
    text: 'A simple first date became the start of more than six years of choosing each other, growing together, and building a life one ordinary day at a time.',
    image: story2020,
    alt: 'Their first date in 2020',
  },
  {
    year: '2024',
    eyebrow: 'Engaged',
    title: 'The Yes That Changed Everything',
    text: 'After years of memories, distance, milestones, and adventures, one question turned the next chapter into forever.',
    image: engagedPhoto,
    alt: 'Their engagement in 2024',
  },
];

const preWeddingPhotos: PreWeddingPhoto[] = [
  {
    image: prewed1,
    alt: 'Pre-wedding portrait in winter',
    caption: 'Proof that love survives winter.',
    className: 'md:col-span-5',
  },
  {
    image: prewed2,
    alt: 'Dramatic pre-wedding portrait',
    caption: 'She wanted dramatic photos. Mission accomplished.',
    className: 'md:col-span-7',
  },
  {
    image: prewed3,
    alt: 'Outdoor pre-wedding portrait',
    caption: 'The weather cooperated. Miraculously.',
    className: 'md:col-span-7',
  },
  {
    image: prewed4,
    alt: 'Romantic pre-wedding portrait',
    caption: "After six years together, he still laughs at her jokes. That's true commitment.",
    className: 'md:col-span-5',
  },
  {
    image: prewed5,
    alt: 'Elegant pre-wedding portrait',
    caption: 'Romance, but make it look like we did not spend ten minutes fixing the pose.',
    className: 'md:col-span-4',
  },
  {
    image: prewed6,
    alt: 'Joyful pre-wedding portrait',
    caption: 'The photographer said act natural. This was our most believable attempt.',
    className: 'md:col-span-4',
  },
  {
    image: prewed7,
    alt: 'Classic pre-wedding portrait',
    caption: 'A soft romantic moment, shortly before someone probably asked where the snacks were.',
    className: 'md:col-span-4',
  },
];

const softEase = [0.22, 1, 0.36, 1] as const;

function MilestoneCard({ milestone, index }: { milestone: StoryMilestone; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 1, ease: softEase }}
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${isReversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="relative">
        <div className="absolute -inset-4 bg-[#EDE4D9] opacity-70 blur-2xl" />
        <figure className="relative rounded-[6px] bg-white p-3 shadow-[0_30px_90px_rgba(45,36,31,0.16)]">
          <div className="flex max-h-[74vh] items-center justify-center overflow-hidden rounded-[3px] bg-[#E8E0D7]">
            <img
              src={milestone.image}
              alt={milestone.alt}
              loading="lazy"
              className="h-auto max-h-[74vh] w-full object-contain"
            />
          </div>
        </figure>
      </div>

      <div className="px-1 text-center lg:text-left">
        <p className="font-['Inter'] text-[10px] uppercase tracking-[0.38em] text-[#9A8A7A]">
          {milestone.eyebrow}
        </p>
        <div className="mt-6 flex items-center justify-center gap-5 lg:justify-start">
          <span className="font-['Bodoni_Moda'] text-7xl leading-none text-[#D8CEC2] sm:text-8xl">
            {milestone.year}
          </span>
          <span className="h-px w-20 bg-[#C9B8A6]" />
        </div>
        <h3 className="mt-6 font-['Bodoni_Moda'] text-4xl leading-tight text-[#2D241F] sm:text-5xl md:text-6xl">
          {milestone.title}
        </h3>
        <p className="mx-auto mt-7 max-w-xl font-['Cormorant_Garamond'] text-2xl leading-relaxed text-[#6F6258] md:text-[28px] lg:mx-0">
          {milestone.text}
        </p>
      </div>
    </motion.article>
  );
}

export function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] text-[#2D241F]">
      <section className="px-6 pb-12 pt-20 text-center md:px-10 md:pb-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 1.1, ease: softEase }}
          className="mx-auto max-w-5xl"
        >
          <p className="font-['Inter'] text-[10px] uppercase tracking-[0.46em] text-[#9A8A7A]">
            Our Journey Together
          </p>
          <h2 className="mt-6 font-['Bodoni_Moda'] text-6xl leading-none text-[#2D241F] sm:text-7xl md:text-8xl lg:text-9xl">
            Our Story
          </h2>
          <p className="mx-auto mt-8 max-w-3xl font-['Cormorant_Garamond'] text-3xl leading-tight text-[#4A3D35] sm:text-4xl md:text-5xl">
            Six beautiful years of dating, one unforgettable proposal, and two years later, the day we finally tie the knot.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-24 md:space-y-32">
          {milestones.map((milestone, index) => (
            <MilestoneCard key={milestone.year} milestone={milestone} index={index} />
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease: softEase }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="font-['Inter'] text-[10px] uppercase tracking-[0.42em] text-[#9A8A7A]">
            After The Yes
          </p>
          <h3 className="mt-5 font-['Bodoni_Moda'] text-5xl leading-tight text-[#2D241F] sm:text-6xl md:text-7xl">
            From Engaged To Forever
          </h3>
          <p className="mx-auto mt-7 max-w-3xl font-['Cormorant_Garamond'] text-2xl leading-relaxed text-[#6F6258] md:text-3xl">
            Two more years of planning, dreaming, laughing, and waiting for the moment we become husband and wife.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-12 md:gap-6">
          {preWeddingPhotos.map((photo, index) => (
            <motion.figure
              key={photo.caption}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: softEase }}
              className={`${photo.className} group relative overflow-hidden rounded-[6px] bg-white p-3 shadow-[0_24px_70px_rgba(45,36,31,0.14)]`}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[3px] bg-[#E8E0D7] md:aspect-[5/6]">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="px-1 pb-1 pt-4 font-['Cormorant_Garamond'] text-xl leading-snug text-[#4A3D35] md:text-2xl">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 pt-8 text-center md:px-10 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: softEase }}
          className="mx-auto max-w-4xl border-y border-[#D8CEC2] py-14"
        >
          <p className="font-['Bodoni_Moda'] text-5xl leading-tight text-[#2D241F] sm:text-6xl md:text-7xl">
            The Adventure Continues
          </p>
          <p className="mt-6 font-['Inter'] text-[11px] uppercase tracking-[0.42em] text-[#8B7B6D]">
            10.31.2026
          </p>
          <p className="mx-auto mt-7 max-w-2xl font-['Cormorant_Garamond'] text-2xl leading-relaxed text-[#6F6258] md:text-3xl">
            We cannot wait to celebrate the beginning of forever with you.
          </p>
        </motion.div>
      </section>
    </section>
  );
}
