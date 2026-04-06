// SECTION: WhatsAppFloat — Floating conversion button with slide-up panel
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Calendar, HelpCircle, DollarSign } from 'lucide-react';
import { whatsappCopy, siteConfig } from '@/content/copy';

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [, setScrollProgress] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    // Show after 10s OR 40% scroll
    timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
      
      if (progress > 0.4) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOptionClick = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${siteConfig.phoneClean}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-40 lg:bottom-8"
          >
            {/* Slide-up panel */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="absolute bottom-full right-0 mb-4 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl"
                >
                  {/* Header */}
                  <div className="bg-[#25D366] p-4 text-white">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{whatsappCopy.title}</h4>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-full p-1 hover:bg-white/20"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-white/80">Обычно отвечаем за 5 минут</p>
                  </div>

                  {/* Options */}
                  <div className="p-2">
                    {whatsappCopy.options.map((option) => {
                      const icons: Record<string, React.ComponentType<{ className?: string }>> = {
                        dates: Calendar,
                        prices: DollarSign,
                        question: HelpCircle,
                      };
                      const Icon = icons[option.id] || MessageCircle;
                      
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleOptionClick(option.message)}
                          className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-cream"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sand/10">
                            <Icon className="h-5 w-5 text-sand" />
                          </div>
                          <span className="text-sm font-medium text-charcoal">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl"
              aria-label="Открыть WhatsApp"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MessageCircle className="h-6 w-6" />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
