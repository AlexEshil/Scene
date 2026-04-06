// SECTION: Rooms — Full-width alternating layout with 360° viewer
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Maximize, Wind, Wifi, Tv, ShowerHead, Utensils, Check, X, MapPin, Calendar } from 'lucide-react';
import { roomsCopy, siteConfig } from '@/content/copy';
import { useInView } from '@/hooks';

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Кондиционер': Wind,
  'Холодильник': Utensils,
  'TV': Tv,
  'Wi-Fi': Wifi,
  'Душ': ShowerHead,
  'Фен': Wind,
  'Полотенца': Check,
  'Кухня': Utensils,
};

function RoomCard({ room, index }: { room: typeof roomsCopy.rooms[0]; index: number }) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [showPanorama, setShowPanorama] = useState(false);
  const isEven = index % 2 === 0;

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Здравствуйте! Интересует номер "${room.name}". Подскажите доступность на [даты].`
    );
    window.open(`https://wa.me/${siteConfig.phoneClean}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid min-h-[500px] lg:grid-cols-[45%_55%]"
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="h-full w-full"
        >
          <img
            src={room.image}
            alt={room.name}
            className="h-full w-full object-cover"
            loading={index < 2 ? 'eager' : 'lazy'}
          />
        </motion.div>

        {/* 360° Tour button */}
        <button
          onClick={() => setShowPanorama(true)}
          className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-charcoal shadow-lg backdrop-blur-sm transition-all hover:scale-105"
        >
          <MapPin className="h-4 w-4" />
          Виртуальный тур
        </button>

        {/* Availability badge */}
        <div className={`absolute right-6 top-6 rounded-full px-3 py-1 text-sm font-medium ${
          room.availability <= 1 
            ? 'bg-amber-500 text-white' 
            : 'bg-emerald-500 text-white'
        }`}>
          {room.availability <= 1 ? 'Остался 1 номер' : `Доступно ${room.availability}`}
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center bg-cream p-6 lg:p-12 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-4 flex items-center gap-4 text-base text-warm-gray">
            <span className="flex items-center gap-1">
              <Maximize className="h-4 w-4" />
              {room.size} м²
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              до {room.guests} гостей
            </span>
          </div>

          <h3 className="font-display mb-4 text-4xl text-charcoal lg:text-5xl">{room.name}</h3>
          <p className="mb-6 text-lg text-warm-gray leading-relaxed">{room.description}</p>

          {/* Amenities */}
          <div className="mb-8 grid grid-cols-2 gap-3">
            {room.amenities.slice(0, 6).map((amenity) => {
              const Icon = amenityIcons[amenity] || Check;
              return (
                <div key={amenity} className="flex items-center gap-2 text-base text-charcoal">
                  <Icon className="h-4 w-4 text-sand" />
                  {amenity}
                </div>
              );
            })}
          </div>

          {/* Price & CTA */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-base text-warm-gray">от</p>
              <p className="font-display text-4xl text-charcoal">{room.price.toLocaleString()}₽</p>
              <p className="text-base text-warm-gray">за ночь</p>
            </div>
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 rounded-full bg-sand px-10 py-5 text-lg font-medium text-charcoal transition-all hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Забронировать
            </button>
          </div>
        </motion.div>
      </div>

      {/* Panorama Modal */}
      <AnimatePresence>
        {showPanorama && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95"
          >
            <button
              onClick={() => setShowPanorama(false)}
              className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="flex h-full items-center justify-center p-8">
              <div className="text-center text-white">
                <MapPin className="mx-auto mb-4 h-16 w-16 text-sand" />
                <h4 className="font-display mb-2 text-2xl">Виртуальный тур</h4>
                <p className="mb-4 text-white/60">360° панорама номера</p>
                <p className="text-sm text-white/40">
                  Для демонстрации требуется подключение Pannellum.js и equirectangular изображение
                </p>
                <div className="mt-6 aspect-video w-full max-w-3xl rounded-lg bg-white/10">
                  <img
                    src={room.image}
                    alt="Placeholder panorama"
                    className="h-full w-full rounded-lg object-cover opacity-50"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Rooms() {
  const [headerRef, isHeaderInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="rooms" className="bg-cream">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 text-center"
      >
        <h2 className="font-display mb-4 text-4xl text-charcoal lg:text-5xl">{roomsCopy.title}</h2>
        <p className="mx-auto max-w-xl text-warm-gray">{roomsCopy.subtitle}</p>
      </motion.div>

      {/* Rooms */}
      <div className="space-y-0">
        {roomsCopy.rooms.map((room, index) => (
          <RoomCard key={room.id} room={room} index={index} />
        ))}
      </div>
    </section>
  );
}
