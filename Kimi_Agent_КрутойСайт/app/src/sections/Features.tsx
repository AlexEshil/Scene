// SECTION: Features — With animated counters
import { motion } from 'framer-motion';
import { Waves, UtensilsCrossed, Sparkles, Trees, Users, Store, Car, Flame } from 'lucide-react';
import { featuresCopy } from '@/content/copy';
import { useInView, useCountUp } from '@/hooks';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  waves: Waves,
  utensils: UtensilsCrossed,
  sparkles: Sparkles,
  trees: Trees,
  users: Users,
  store: Store,
  car: Car,
  flame: Flame,
};

// Counter component that animates from 0
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [ref, count, isInView] = useCountUp(end, 2000);
  
  return (
    <span ref={ref} className="font-display text-3xl text-sand">
      {isInView ? count : 0}{suffix}
    </span>
  );
}

export function Features() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="features" className="bg-charcoal py-20 text-white lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display mb-4 text-4xl lg:text-5xl">{featuresCopy.title}</h2>
        </motion.div>

        {/* Counters row */}
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <Counter end={10} suffix=" мин" />
            <p className="mt-2 text-sm text-white/60">до моря</p>
          </div>
          <div className="text-center">
            <Counter end={4} suffix=".9" />
            <p className="mt-2 text-sm text-white/60">рейтинг</p>
          </div>
          <div className="text-center">
            <Counter end={120} suffix="+" />
            <p className="mt-2 text-sm text-white/60">отзывов</p>
          </div>
          <div className="text-center">
            <Counter end={8} />
            <p className="mt-2 text-sm text-white/60">лет опыта</p>
          </div>
        </div>

        {/* Features grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featuresCopy.features.map((feature) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="group rounded-2xl bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <div className="mb-4 inline-flex rounded-full bg-sand/20 p-3 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-sand" />
                </div>
                <h3 className="mb-2 font-display text-xl">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
