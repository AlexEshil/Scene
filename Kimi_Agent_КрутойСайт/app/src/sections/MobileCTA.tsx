import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approximately 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/90 backdrop-blur-md shadow-elevated transition-transform duration-300 lg:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <Button 
        onClick={scrollToContact}
        className="w-full bg-sand text-charcoal hover:bg-sand/90 rounded-full py-6 text-base font-medium"
      >
        <Phone className="w-5 h-5 mr-2" />
        Забронировать
      </Button>
    </div>
  );
}
