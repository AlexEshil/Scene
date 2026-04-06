// SECTION: AvailabilityWidget — Date picker with live availability
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, AlertCircle, Check } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useAvailability } from '@/hooks';
import { siteConfig } from '@/content/copy';

export function AvailabilityWidget({ variant = 'hero' }: { variant?: 'hero' | 'bar' }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeInput, setActiveInput] = useState<'checkin' | 'checkout' | null>(null);
  const [guests, setGuests] = useState(2);
  
  const {
    checkIn,
    checkOut,
    nights,
    currentAvailability,
    totalPrice,
    whatsappMessage,
    setCheckIn,
    setCheckOut,
  } = useAvailability();

  const handleDateSelect = (date: Date) => {
    if (activeInput === 'checkin') {
      setCheckIn(date);
      if (!checkOut || checkOut <= date) {
        setCheckOut(addDays(date, 1));
      }
      setActiveInput('checkout');
    } else if (activeInput === 'checkout') {
      if (date > (checkIn || new Date())) {
        setCheckOut(date);
        setShowCalendar(false);
        setActiveInput(null);
      }
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(whatsappMessage || 'Здравствуйте! Хочу забронировать номер в Марусе.');
    window.open(`https://wa.me/${siteConfig.phoneClean}?text=${message}`, '_blank');
  };

  // Generate next 60 days for calendar
  const days = Array.from({ length: 60 }, (_, i) => addDays(new Date(), i));

  const isHero = variant === 'hero';

  return (
    <div className={`${isHero ? 'w-full max-w-4xl' : 'flex-1'}`}>
      <div className={`${isHero ? 'rounded-2xl bg-white/10 p-6 backdrop-blur-lg' : 'flex items-center gap-4'}`}>
        {/* Date inputs */}
        <div className={`${isHero ? 'grid gap-4 sm:grid-cols-2' : 'flex items-center gap-4'}`}>
          {/* Check-in */}
          <button
            onClick={() => {
              setActiveInput('checkin');
              setShowCalendar(true);
            }}
            className={`flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-left transition-colors hover:bg-white/20 ${
              isHero ? '' : 'border-charcoal/20 bg-white'
            }`}
          >
            <Calendar className="h-5 w-5 text-sand" />
            <div>
              <p className="text-xs text-white/60">Заезд</p>
              <p className={`font-medium ${isHero ? 'text-white' : 'text-charcoal'}`}>
                {checkIn ? format(checkIn, 'd MMMM', { locale: ru }) : 'Выбрать дату'}
              </p>
            </div>
          </button>

          {/* Check-out */}
          <button
            onClick={() => {
              setActiveInput('checkout');
              setShowCalendar(true);
            }}
            className={`flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-left transition-colors hover:bg-white/20 ${
              isHero ? '' : 'border-charcoal/20 bg-white'
            }`}
          >
            <Calendar className="h-5 w-5 text-sand" />
            <div>
              <p className="text-xs text-white/60">Выезд</p>
              <p className={`font-medium ${isHero ? 'text-white' : 'text-charcoal'}`}>
                {checkOut ? format(checkOut, 'd MMMM', { locale: ru }) : 'Выбрать дату'}
              </p>
            </div>
          </button>
        </div>

        {/* Guests selector */}
        <div className={`flex items-center gap-3 ${isHero ? 'mt-4' : ''}`}>
          <Users className="h-5 w-5 text-sand" />
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className={`rounded-xl border border-white/20 bg-white/10 px-4 py-3 ${
              isHero ? 'text-white' : 'border-charcoal/20 bg-white text-charcoal'
            }`}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}
              </option>
            ))}
          </select>
        </div>

        {/* Availability indicator */}
        <AnimatePresence>
          {currentAvailability && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`${isHero ? 'mt-4' : ''}`}
            >
              <div className={`flex items-center gap-2 ${
                currentAvailability.isLastOne 
                  ? 'text-amber-400' 
                  : currentAvailability.isLow 
                    ? 'text-amber-300' 
                    : 'text-emerald-400'
              }`}>
                {currentAvailability.isLastOne ? (
                  <AlertCircle className="h-5 w-5 animate-pulse" />
                ) : (
                  <Check className="h-5 w-5" />
                )}
                <span className="font-medium">
                  {currentAvailability.message}
                </span>
              </div>
              
              {totalPrice > 0 && (
                <p className={`mt-1 text-sm ${isHero ? 'text-white/60' : 'text-warm-gray'}`}>
                  {nights} {nights === 1 ? 'ночь' : nights < 5 ? 'ночи' : 'ночей'} × {currentAvailability.price.toLocaleString()}₽ = {' '}
                  <span className="font-medium text-sand">{totalPrice.toLocaleString()}₽</span>
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button */}
        <button
          onClick={openWhatsApp}
          disabled={!checkIn || !checkOut}
          className={`rounded-xl bg-sand px-6 py-3 font-medium text-charcoal transition-all hover:scale-105 hover:bg-sand/90 disabled:opacity-50 disabled:hover:scale-100 ${
            isHero ? 'mt-4 w-full' : ''
          }`}
        >
          Забронировать
        </button>
      </div>

      {/* Calendar modal */}
      <AnimatePresence>
        {showCalendar && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCalendar(false)}
              className="fixed inset-0 z-40 bg-black/50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 shadow-2xl"
            >
              <p className="mb-4 text-center text-sm text-warm-gray">
                {activeInput === 'checkin' ? 'Выберите дату заезда' : 'Выберите дату выезда'}
              </p>
              
              <div className="grid grid-cols-7 gap-1">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d) => (
                  <div key={d} className="p-2 text-center text-xs text-warm-gray">
                    {d}
                  </div>
                ))}
                {days.map((date) => {
                  const isSelected = 
                    (activeInput === 'checkin' && checkIn && date.toDateString() === checkIn.toDateString()) ||
                    (activeInput === 'checkout' && checkOut && date.toDateString() === checkOut.toDateString());
                  
                  return (
                    <button
                      key={date.toISOString()}
                      onClick={() => handleDateSelect(date)}
                      className={`rounded-lg p-2 text-sm transition-colors ${
                        isSelected
                          ? 'bg-sand text-white'
                          : 'hover:bg-cream'
                      }`}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
