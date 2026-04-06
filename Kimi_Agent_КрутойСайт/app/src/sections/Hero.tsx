import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Phone, MapPin } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-courtyard.jpg" 
          alt="Закат над Чёрным морем в Сочи"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <MapPin className="w-4 h-4 text-sand" />
          <span className="text-white/90 text-sm font-body">Кудепста, 10 минут до моря</span>
        </div>

        {/* Main Title */}
        <h1 
          className={`font-display text-6xl sm:text-7xl lg:text-8xl text-white mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Маруся
        </h1>
        
        {/* Subtitle */}
        <p 
          className={`font-display text-xl sm:text-2xl lg:text-3xl text-white/90 mb-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Место, куда хочется возвращаться
        </p>
        
        {/* Descriptor */}
        <p 
          className={`font-body text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Уютные номера, тёплая атмосфера и забота о каждом госте. 
          Идеально для семейного отдыха у самого моря.
        </p>
        
        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <Button 
            onClick={scrollToContact}
            className="bg-sand hover:bg-sand/90 text-charcoal font-medium px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Phone className="w-4 h-4 mr-2" />
            Забронировать
          </Button>
          <Button 
            onClick={scrollToRooms}
            variant="outline"
            className="bg-transparent border-white/60 text-white hover:bg-white/20 hover:border-white font-medium px-8 py-6 text-base rounded-full transition-all duration-300"
          >
            Смотреть номера
          </Button>
        </div>

        {/* Stats */}
        <div 
          className={`flex justify-center gap-8 sm:gap-12 mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-sand">4.4</p>
            <p className="text-white/60 text-sm font-body">рейтинг</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-sand">97+</p>
            <p className="text-white/60 text-sm font-body">отзывов</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-sand">10 мин</p>
            <p className="text-white/60 text-sm font-body">до моря</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
