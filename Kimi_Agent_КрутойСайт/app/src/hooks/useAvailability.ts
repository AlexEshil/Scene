// SECTION: useAvailability — Mock availability logic with seeded random
import { useState, useCallback, useMemo } from 'react';
import { differenceInDays, format } from 'date-fns';

interface AvailabilityResult {
  available: number;
  isLow: boolean;
  isLastOne: boolean;
  message: string;
  price: number;
}

// Seeded random generator for consistent results
function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const x = Math.sin(hash) * 10000;
  return x - Math.floor(x);
}

export function useAvailability() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string>('');

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    return differenceInDays(checkOut, checkIn);
  }, [checkIn, checkOut]);

  const getAvailability = useCallback((roomId: string, date: Date): AvailabilityResult => {
    const seed = format(date, 'yyyy-MM-dd') + roomId;
    const random = seededRandom(seed);
    
    // Base availability 1-5 rooms
    const baseAvailable = Math.floor(random * 5) + 1;
    
    // Weekend adjustment (Friday, Saturday)
    const day = date.getDay();
    const isWeekend = day === 5 || day === 6;
    const available = isWeekend ? Math.max(1, baseAvailable - 2) : baseAvailable;
    
    const isLow = available <= 2;
    const isLastOne = available === 1;
    
    let message: string;
    if (isLastOne) {
      message = 'Остался последний номер!';
    } else if (isLow) {
      message = `Доступно ${available} номера`;
    } else {
      message = `Доступно ${available} номеров`;
    }

    // Price calculation
    const basePrice = roomId === 'family' ? 4000 : roomId === 'triple' ? 3200 : 2500;
    const weekendMultiplier = isWeekend ? 1.2 : 1;
    const price = Math.round(basePrice * weekendMultiplier);

    return { available, isLow, isLastOne, message, price };
  }, []);

  const currentAvailability = useMemo(() => {
    if (!checkIn || !selectedRoom) return null;
    return getAvailability(selectedRoom, checkIn);
  }, [checkIn, selectedRoom, getAvailability]);

  const totalPrice = useMemo(() => {
    if (!currentAvailability || nights === 0) return 0;
    return currentAvailability.price * nights;
  }, [currentAvailability, nights]);

  const whatsappMessage = useMemo(() => {
    if (!checkIn || !checkOut) return '';
    const roomName = selectedRoom || 'любой';
    const dates = `с ${format(checkIn, 'dd.MM')} по ${format(checkOut, 'dd.MM')}`;
    return `Здравствуйте! Хочу забронировать номер ${roomName} ${dates} (${nights} ночей). Подскажите, пожалуйста, доступность.`;
  }, [checkIn, checkOut, selectedRoom, nights]);

  return {
    checkIn,
    checkOut,
    selectedRoom,
    nights,
    currentAvailability,
    totalPrice,
    whatsappMessage,
    setCheckIn,
    setCheckOut,
    setSelectedRoom,
    getAvailability,
  };
}
