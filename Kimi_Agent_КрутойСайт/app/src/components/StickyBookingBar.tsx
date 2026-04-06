// SECTION: StickyBookingBar — Glass morphism booking bar
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ChevronDown, Phone } from 'lucide-react';
import { useStickyBar, useAvailability } from '@/hooks';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { siteConfig } from '@/content/copy';

const roomOptions = [
  { id: '', name: 'Любой номер', price: 2500 },
  { id: 'standard', name: 'Стандарт', price: 2500 },
  { id: 'triple', name: 'Трёхместный', price: 3200 },
  { id: 'family', name: 'Семейный', price: 4000 },
];

export function StickyBookingBar() {
  const isVisible = useStickyBar({ triggerOffset: 600 });
  const [isDismissed, setIsDismissed] = useState(false);
  const [showRoomSelect, setShowRoomSelect] = useState(false);
  
  const {
    checkIn,
    checkOut,
    selectedRoom,
    nights,
    totalPrice,
    setSelectedRoom,
  } = useAvailability();

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Здравствуйте! Хочу забронировать номер ${selectedRoom || 'любой'} с ${checkIn ? format(checkIn, 'dd.MM') : '...'} по ${checkOut ? format(checkOut, 'dd.MM') : '...'}.`
    );
    window.open(`https://wa.me/${siteConfig.phoneClean}?text=${message}`, '_blank');
  };

  const selectedRoomData = roomOptions.find((r) => r.id === selectedRoom) || roomOptions[0];

  return (
    <>
      {/* Desktop: Top bar */}
      <AnimatePresence>
        {isVisible && !isDismissed && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed left-0 right-0 top-0 z-50 hidden border-b border-white/10 bg-charcoal/80 backdrop-blur-xl lg:block"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
              {/* Dates & Room */}
              <div className="flex items-center gap-4">
                {/* Date range display */}
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2">
                  <Calendar className="h-4 w-4 text-sand" />
                  <span className="text-sm text-white">
                    {checkIn && checkOut
                      ? `${format(checkIn, 'd MMM', { locale: ru })} — ${format(checkOut, 'd MMM', { locale: ru })}`
                      : 'Выберите даты'}
                  </span>
                </div>

                {/* Room selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowRoomSelect(!showRoomSelect)}
                    className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                  >
                    {selectedRoomData.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${showRoomSelect ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {showRoomSelect && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full mt-2 w-48 rounded-xl bg-white p-2 shadow-xl"
                      >
                        {roomOptions.map((room) => (
                          <button
                            key={room.id}
                            onClick={() => {
                              setSelectedRoom(room.id);
                              setShowRoomSelect(false);
                            }}
                            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                              selectedRoom === room.id ? 'bg-sand/20 text-charcoal' : 'text-warm-gray hover:bg-cream'
                            }`}
                          >
                            {room.name}
                            <span className="ml-2 text-xs text-warm-gray">от {room.price.toLocaleString()}₽</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center gap-4">
                {totalPrice > 0 && (
                  <div className="text-right">
                    <p className="text-xs text-white/60">{nights} {nights === 1 ? 'ночь' : 'ночи'}</p>
                    <p className="font-display text-xl text-white">{totalPrice.toLocaleString()}₽</p>
                  </div>
                )}
                
                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-2 rounded-lg bg-sand px-6 py-2 font-medium text-charcoal transition-all hover:scale-105"
                >
                  <Phone className="h-4 w-4" />
                  Забронировать
                </button>

                <button
                  onClick={() => setIsDismissed(true)}
                  className="ml-2 text-white/60 hover:text-white"
                  aria-label="Закрыть"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile: Bottom bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-charcoal/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-4 py-3">
              {/* Price */}
              <div>
                <p className="text-xs text-white/60">
                  {checkIn && checkOut
                    ? `${format(checkIn, 'd MMM')} — ${format(checkOut, 'd MMM')}`
                    : 'Выберите даты'}
                </p>
                <p className="font-display text-xl text-white">
                  {totalPrice > 0 ? `${totalPrice.toLocaleString()}₽` : 'от 2 500₽'}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-2 rounded-lg bg-sand px-6 py-3 font-medium text-charcoal"
              >
                <Phone className="h-4 w-4" />
                Забронировать
              </button>
            </div>

            {/* Safe area padding for iOS */}
            <div className="h-safe-area-inset-bottom bg-charcoal/95" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
