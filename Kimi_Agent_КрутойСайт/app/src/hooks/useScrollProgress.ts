// SECTION: useScrollProgress — Returns scroll progress 0-1 for animations
import { useState, useEffect } from 'react';

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    let isActive = true;

    const updateProgress = () => {
      if (!isActive) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      
      setProgress(Math.min(1, Math.max(0, newProgress)));
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => {
      isActive = false;
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return progress;
}

// Hook for element-specific scroll progress
export function useElementProgress(ref: React.RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    let rafId: number;
    const element = ref.current;

    const updateProgress = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Progress from when element enters viewport to when it leaves
      const start = windowHeight;
      const end = -elementHeight;
      const current = elementTop;
      
      const newProgress = (start - current) / (start - end);
      setProgress(Math.min(1, Math.max(0, newProgress)));
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [ref]);

  return progress;
}
