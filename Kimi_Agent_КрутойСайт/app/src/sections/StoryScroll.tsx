// SECTION: StoryScroll — Horizontal scroll "Ваш день в Марусе"
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { storyMoments } from '@/content/copy';

export function StoryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const x = useTransform(smoothProgress, [0, 1], ['0%', `-${(storyMoments.length - 1) * 100}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  if (isMobile) {
    return (
      <section id="story" className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display mb-12 text-center text-4xl text-charcoal lg:text-5xl">
            Ваш день в Марусе
          </h2>
          
          <div className="space-y-8">
            {storyMoments.map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[16/10] w-full">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 inline-block font-display text-5xl text-white/30">
                    {moment.time}
                  </span>
                  <h3 className="font-display mb-2 text-3xl text-white">{moment.title}</h3>
                  <p className="font-display text-xl italic text-white/80 leading-relaxed">{moment.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="story" ref={containerRef} className="relative bg-cream" style={{ height: `${storyMoments.length * 100}vh` }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header */}
        <div className="absolute left-0 right-0 top-0 z-20 p-8">
          <h2 className="font-display text-center text-4xl text-charcoal lg:text-5xl">
            Ваш день в Марусе
          </h2>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-8 left-1/2 z-20 w-48 -translate-x-1/2">
          <div className="h-0.5 w-full bg-charcoal/10">
            <motion.div
              className="h-full bg-terracotta"
              style={{ width: progressWidth }}
            />
          </div>
        </div>

        {/* Horizontal scroll container */}
        <motion.div
          className="flex h-full items-center"
          style={{ x }}
        >
          {storyMoments.map((moment, index) => (
            <div
              key={moment.id}
              className="flex h-full w-screen flex-shrink-0 items-center justify-center px-8"
            >
              <div className="grid max-w-6xl grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl ${index % 2 === 1 ? 'order-2' : ''}`}>
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="h-full w-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'order-1 text-right' : ''}`}>
                  <span className="font-display mb-4 block text-8xl text-charcoal/10">
                    {moment.time}
                  </span>
                  <h3 className="font-display mb-4 text-5xl text-charcoal">{moment.title}</h3>
                  <p className="font-display text-2xl italic text-warm-gray leading-relaxed">{moment.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
