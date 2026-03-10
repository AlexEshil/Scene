import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero2026 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  // Particle animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 0, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 107, 0, ${0.1 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const stats = statsRef.current;

    if (!section || !title || !subtitle || !cta || !stats) return;

    // Initial states
    gsap.set(title, { opacity: 0, y: 100, scale: 0.9 });
    gsap.set(subtitle, { opacity: 0, y: 50 });
    gsap.set(cta.children, { opacity: 0, y: 30 });
    gsap.set(stats.children, { opacity: 0, y: 40 });

    // Entrance timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power4.out' },
      delay: 0.5,
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
    })
      .to(subtitle, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .to(cta.children, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
      .to(stats.children, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, '-=0.3');

    // Scroll parallax
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        gsap.set(title, { y: p * 150 });
        gsap.set(subtitle, { y: p * 100 });
        gsap.set(cta, { y: p * 80 });
      },
    });
    triggersRef.current.push(scrollTrigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
      tl.kill();
    };
  }, []);

  // Text scramble effect for title
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const originalText = 'СТРОЙМАСТЕР';
    const chars = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let iteration = 0;

    const interval = setInterval(() => {
      title.innerText = originalText
        .split('')
        .map((_, index) => {
          if (index < iteration) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,0,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,0,0.1)_0%,_transparent_50%)]" />
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/50 to-transparent animate-pulse delay-75" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse delay-150" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 border border-orange-500/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-orange-500/20 rotate-12 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-500/10 rotate-45 animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black text-white tracking-tighter">
            СТРОЙ<span className="text-orange-500">МАСТЕР</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-white/70 hover:text-orange-500 transition-colors text-sm font-medium">Главная</a>
            <a href="/projects.html" className="text-white/70 hover:text-orange-500 transition-colors text-sm font-medium">Проекты</a>
            <a href="/services.html" className="text-white/70 hover:text-orange-500 transition-colors text-sm font-medium">Услуги</a>
            <a href="/#contact" className="text-white/70 hover:text-orange-500 transition-colors text-sm font-medium">Контакты</a>
          </div>
          <a
            href="tel:+74951234567"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-black font-bold text-sm rounded-full hover:bg-orange-400 transition-colors"
          >
            Позвонить
          </a>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Badge */}
        <div className="mb-6 px-4 py-2 border border-orange-500/50 rounded-full">
          <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
            Строим с 2008 года
          </span>
        </div>

        {/* Main title with glitch effect */}
        <h1
          ref={titleRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6"
          style={{
            textShadow: '0 0 40px rgba(255,107,0,0.3), 0 0 80px rgba(255,107,0,0.1)',
          }}
        >
          СТРОЙМАСТЕР
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mb-10 font-light"
        >
          Строительство и ремонт любой сложности.
          <br />
          <span className="text-orange-500 font-medium">500+ проектов</span> за 15 лет
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
          <a
            href="/projects.html"
            className="group flex items-center gap-3 px-8 py-4 bg-orange-500 text-black font-bold rounded-full hover:bg-orange-400 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)]"
          >
            Смотреть проекты
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/services.html"
            className="flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:border-orange-500 hover:text-orange-500 transition-all"
          >
            Наши услуги
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="absolute bottom-24 left-0 right-0 flex justify-center gap-8 sm:gap-16 px-6"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white">500+</div>
            <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-1">Проектов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-orange-500">15</div>
            <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-1">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white">50+</div>
            <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-1">Специалистов</div>
          </div>
          <div className="text-center hidden sm:block">
            <div className="text-3xl sm:text-4xl font-black text-orange-500">98%</div>
            <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-1">Довольных</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs uppercase tracking-widest">Листай вниз</span>
        <ChevronDown className="w-5 h-5 text-orange-500 animate-bounce" />
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-orange-500/50 to-transparent" />
        <span className="text-white/30 text-xs -rotate-90 whitespace-nowrap origin-center translate-x-[-20px]">
          СТРОЙМАСТЕР 2024
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-orange-500/50 to-transparent" />
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-4">
        <a href="#" className="text-white/30 hover:text-orange-500 transition-colors text-xs">Instagram</a>
        <a href="#" className="text-white/30 hover:text-orange-500 transition-colors text-xs">Telegram</a>
        <a href="#" className="text-white/30 hover:text-orange-500 transition-colors text-xs">WhatsApp</a>
      </div>
    </section>
  );
};

export default Hero2026;
