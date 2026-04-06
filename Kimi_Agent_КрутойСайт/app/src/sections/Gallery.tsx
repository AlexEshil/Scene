// SECTION: Gallery — Masonry image gallery
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks';
import { galleryCopy } from '@/content/copy';

const galleryImages = galleryCopy.images;

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="bg-cream py-20 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display mb-4 text-4xl text-charcoal lg:text-5xl">Галерея</h2>
          <p className="mx-auto max-w-xl text-warm-gray">Моменты из жизни нашего дома</p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="columns-2 gap-4 md:columns-3"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-xl"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-6 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <p className="absolute bottom-6 text-center text-white/80">
              {galleryImages[selectedImage].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
