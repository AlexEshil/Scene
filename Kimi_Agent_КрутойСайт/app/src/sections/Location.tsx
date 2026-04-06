// SECTION: Location — Premium redesign with interactive map
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Footprints, ChevronDown, ExternalLink } from 'lucide-react';
import { locationCopy } from '@/content/copy';
import { useInView } from '@/hooks';

// Icon mapping available for future use
// const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
//   waves: MapPin,
//   train: MapPin,
//   plane: MapPin,
//   mountain: MapPin,
// };

export function Location() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [headerRef, isHeaderInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const openDirections = (dest: string) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}`, '_blank');
  };

  return (
    <section id="location" className="bg-cream py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display mb-4 text-4xl text-charcoal lg:text-5xl">{locationCopy.title}</h2>
          <p className="mx-auto max-w-xl text-warm-gray">{locationCopy.subtitle}</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[55%_45%]">
          {/* Map side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Map embed */}
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-warm-gray/10 lg:aspect-video">
              <iframe
                src={locationCopy.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения"
                className="h-full w-full"
              />
            </div>

            {/* Distance cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {locationCopy.distances.map((dist, index) => {
                const Icon = dist.mode === 'walk' ? Footprints : Car;
                return (
                  <motion.div
                    key={dist.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="rounded-xl bg-white p-4 text-center shadow-sm"
                  >
                    <Icon className="mx-auto mb-2 h-5 w-5 text-sand" />
                    <p className="font-medium text-charcoal">{dist.distance}</p>
                    <p className="text-xs text-warm-gray">{dist.name}</p>
                    <p className="text-xs text-warm-gray/70">{dist.time}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Address card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand/10">
                  <MapPin className="h-6 w-6 text-sand" />
                </div>
                <div>
                  <h3 className="font-display mb-1 text-xl text-charcoal">Адрес</h3>
                  <p className="text-warm-gray">{locationCopy.address}</p>
                </div>
              </div>
              <button
                onClick={() => openDirections(locationCopy.address)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-charcoal py-3 text-sm font-medium text-white transition-colors hover:bg-charcoal/90"
              >
                <ExternalLink className="h-4 w-4" />
                Построить маршрут
              </button>
            </div>

            {/* Directions accordion */}
            <div className="space-y-3">
              <h3 className="font-display mb-4 text-xl text-charcoal">Как добраться</h3>
              {locationCopy.directions.map((dir) => (
                <div
                  key={dir.id}
                  className="overflow-hidden rounded-xl bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(dir.id)}
                    className="flex w-full items-center justify-between p-4 text-left"
                  >
                    <span className="font-medium text-charcoal">{dir.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-warm-gray transition-transform ${
                        openAccordion === dir.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openAccordion === dir.id ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-sm leading-relaxed text-warm-gray">
                      {dir.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
