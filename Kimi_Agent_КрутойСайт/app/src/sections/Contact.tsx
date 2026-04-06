// SECTION: Contact — Premium contact section
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/content/copy';
import { AvailabilityWidget } from '@/components/AvailabilityWidget';
import { useInView } from '@/hooks';

export function Contact() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="contact" className="bg-charcoal py-20 text-white lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display mb-6 text-4xl lg:text-5xl">
              Забронируйте свой отдых
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Оставьте заявку — мы перезвоним в течение 15 минут
            </p>

            <div className="space-y-6">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand/20">
                  <Phone className="h-5 w-5 text-sand" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Телефон</p>
                  <p className="font-medium">{siteConfig.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand/20">
                  <Mail className="h-5 w-5 text-sand" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-medium">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand/20">
                  <MapPin className="h-5 w-5 text-sand" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Адрес</p>
                  <p className="font-medium">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand/20">
                  <Clock className="h-5 w-5 text-sand" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Режим работы</p>
                  <p className="font-medium">Круглосуточно</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm"
          >
            <AvailabilityWidget variant="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
