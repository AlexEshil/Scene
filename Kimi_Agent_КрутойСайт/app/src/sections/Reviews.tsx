// SECTION: Reviews — Masonry grid with filter tabs
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviewsCopy } from '@/content/copy';
import { useInView } from '@/hooks';

const platformColors: Record<string, string> = {
  booking: 'bg-blue-600',
  google: 'bg-emerald-600',
  direct: 'bg-sand',
};

const platformLabels: Record<string, string> = {
  booking: 'Booking.com',
  google: 'Google',
  direct: 'Сайт',
};

function ReviewCard({ review, index }: { review: typeof reviewsCopy.reviews[0]; index: number }) {
  const initials = review.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="mb-6 break-inside-avoid rounded-2xl bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sand/20 text-sm font-medium text-charcoal">
            {initials}
          </div>
          <div>
            <p className="font-medium text-charcoal">{review.name}</p>
            <p className="text-xs text-warm-gray">{review.city}</p>
          </div>
        </div>
        
        {/* Platform badge */}
        <span className={`rounded px-2 py-0.5 text-xs text-white ${platformColors[review.platform]}`}>
          {platformLabels[review.platform]}
        </span>
      </div>

      {/* Rating */}
      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
        <span className="ml-2 text-xs text-warm-gray capitalize">{review.type}</span>
      </div>

      {/* Text */}
      <p className="mb-4 text-sm leading-relaxed text-charcoal">{review.text}</p>

      {/* Date */}
      <p className="text-xs text-warm-gray">{new Date(review.date).toLocaleDateString('ru-RU')}</p>
    </motion.div>
  );
}

export function Reviews() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [headerRef, isHeaderInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  const filteredReviews = reviewsCopy.reviews.filter(
    (review) => activeFilter === 'all' || review.type === activeFilter
  );

  return (
    <section id="reviews" className="bg-cream py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display mb-4 text-4xl text-charcoal lg:text-5xl">{reviewsCopy.title}</h2>
          <p className="mx-auto max-w-xl text-warm-gray">{reviewsCopy.subtitle}</p>
        </motion.div>

        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {reviewsCopy.filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-charcoal hover:bg-charcoal/5'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div 
          layout
          className="columns-1 gap-6 md:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
