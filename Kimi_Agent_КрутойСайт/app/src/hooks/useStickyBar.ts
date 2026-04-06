// SECTION: useStickyBar — Controls visibility of sticky booking bar
import { useState, useEffect } from 'react';

interface UseStickyBarOptions {
  triggerOffset?: number; // Pixels to scroll before showing bar
}

export function useStickyBar(options: UseStickyBarOptions = {}): boolean {
  const { triggerOffset = 600 } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Show bar after scrolling past hero
        if (scrollY > triggerOffset && scrollY > lastScrollY) {
          setIsVisible(true);
        } else if (scrollY < 100) {
          setIsVisible(false);
        }
        
        lastScrollY = scrollY;
        rafId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [triggerOffset]);

  return isVisible;
}
