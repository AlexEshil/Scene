// SECTION: About — Fade in with slight rotation
import { motion } from 'framer-motion';
import { useInView } from '@/hooks';

export function About() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="about" className="bg-cream py-20 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, rotate: 2 }}
          animate={isInView ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/about-interior.jpg"
                alt="Интерьер гостевого дома"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-sand/20 lg:block" />
          </div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block text-sm uppercase tracking-widest text-sand"
            >
              О нас
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display mb-6 text-4xl text-charcoal lg:text-5xl"
            >
              Дом, где вас ждут
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-6 text-lg leading-relaxed text-warm-gray"
            >
              Маруся — это не просто гостевой дом. Это место, где тёплое гостеприимство 
              встречается с южным солнцем Кудепсты. Мы создали уголок, где можно забыть 
              о суете и по-настоящему отдохнуть.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mb-8 text-warm-gray"
            >
              Чистота, уют и внимание к деталям — то, что гости отмечают снова и снова. 
              Здесь не просто останавливаются — сюда возвращаются.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-charcoal shadow-sm">
                <span className="text-sand">✦</span>
                10 минут до моря
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-charcoal shadow-sm">
                <span className="text-sand">✦</span>
                Семейный отдых
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-charcoal shadow-sm">
                <span className="text-sand">✦</span>
                Завтраки включены
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
