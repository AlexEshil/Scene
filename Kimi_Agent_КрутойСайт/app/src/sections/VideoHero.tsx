// SECTION: VideoHero — Full-screen ambient video hero with Framer Motion
import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, type Transition } from 'framer-motion';
import { ChevronDown, Phone, MapPin } from 'lucide-react';
import { heroCopy } from '@/content/copy';

const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function VideoHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Check connection speed for mobile
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  
  useEffect(() => {
    // Check connection speed
    const connection = (navigator as Navigator & { connection?: { effectiveType: string } }).connection;
    if (connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g') {
      setIsSlowConnection(true);
      setVideoError(true);
    }
    
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const shouldShowVideo = !prefersReducedMotion && !videoError && !isSlowConnection;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background: Video or Image fallback */}
      <div className="absolute inset-0 z-0">
        {shouldShowVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={heroCopy.video.poster}
            className="h-full w-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src={heroCopy.video.webm} type="video/webm" />
            <source src={heroCopy.video.mp4} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroCopy.video.poster}
            alt="Вид на море"
            className="h-full w-full object-cover animate-ken-burns"
          />
        )}
        
        {/* Gradient overlay — bottom to top, semi-transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Location badge */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ ...springTransition, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md">
            <MapPin className="h-4 w-4" />
            {heroCopy.locationBadge}
          </span>
        </motion.div>

        {/* Headline — word by word */}
        <h1 className="mb-4 overflow-hidden">
          {heroCopy.headline[0].split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
              animate={isLoaded ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block font-display text-7xl font-medium text-white sm:text-8xl lg:text-9xl"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-display mb-4 text-xl text-white/90 sm:text-2xl lg:text-3xl"
        >
          {heroCopy.subheadline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mb-8 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          {heroCopy.description}
        </motion.p>

        {/* CTA Buttons — Glass morphism */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 2 } },
          }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.button
            variants={fadeInUp}
            transition={springTransition}
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2 rounded-full bg-white/20 px-8 py-4 text-white backdrop-blur-md transition-all hover:bg-white/30 hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            {heroCopy.ctaPrimary}
          </motion.button>
          
          <motion.button
            variants={fadeInUp}
            transition={springTransition}
            onClick={() => scrollToSection('rooms')}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
          >
            {heroCopy.ctaSecondary}
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="mt-12 flex gap-8 sm:gap-12"
        >
          {heroCopy.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl text-[#C4A574] sm:text-4xl">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 3 }}
        onClick={() => scrollToSection('story')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
