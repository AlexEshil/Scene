import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, MapPin, Calendar, ExternalLink } from 'lucide-react';
import useLenis from '../hooks/useLenis';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Жилой комплекс 'Новые горизонты'",
    category: "Жилое строительство",
    location: "Москва, район Сокол",
    year: "2023",
    description: "Современный жилой комплекс бизнес-класса с панорамным остеклением и подземным паркингом. Площадь застройки: 45 000 м².",
    image: "/images/work-1.jpg",
  },
  {
    id: 2,
    title: "Дизайнерский ремонт пентхауса",
    category: "Ремонт и отделка",
    location: "Москва, Москва-Сити",
    year: "2023",
    description: "Полная реконструкция пентхауса площадью 320 м² с авторским дизайн-проектом и использованием премиальных материалов.",
    image: "/images/work-2.jpg",
  },
  {
    id: 3,
    title: "Бизнес-центр 'Премьер Плаза'",
    category: "Коммерческое строительство",
    location: "Москва, ТТК",
    year: "2022",
    description: "Строительство многофункционального бизнес-центра класса А. 15 этажей, общая площадь 62 000 м².",
    image: "/images/work-3.jpg",
  },
  {
    id: 4,
    title: "Офисный центр 'Сити Тауэр'",
    category: "Коммерческое строительство",
    location: "Москва, Деловой центр",
    year: "2022",
    description: "Уникальный архитектурный проект с фасадом из стекла и стали. 28 этажей, интеллектуальные системы управления.",
    image: "/images/work-4.jpg",
  },
  {
    id: 5,
    title: "Торговый центр 'Галерея Парк'",
    category: "Коммерческое строительство",
    location: "Подмосковье, Красногорск",
    year: "2021",
    description: "Современный торгово-развлекательный комплекс с кинотеатром, фуд-кортом и детской зоной. Площадь: 35 000 м².",
    image: "/images/work-5.jpg",
  },
  {
    id: 6,
    title: "Коттеджный поселок 'Лесная Роща'",
    category: "Индивидуальное строительство",
    location: "Московская область, Одинцово",
    year: "2021",
    description: "Строительство 25 коттеджей премиум-класса. Полный цикл работ от фундамента до ландшафтного дизайна.",
    image: "/images/work-7.jpg",
  },
];

function ProjectsPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useLenis();

  useEffect(() => {
    document.documentElement.lang = 'ru';
    document.title = 'Проекты - СтройМастер';
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.projects-header',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      // Project cards animation
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      cards.forEach((card, index) => {
        const trigger = ScrollTrigger.create({
          trigger: card,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 60 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                delay: index % 2 * 0.15,
                ease: 'power3.out' 
              }
            );
          },
          once: true,
        });
        triggersRef.current.push(trigger);
      });
    }, mainRef);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#050505]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white tracking-tight">
            СТРОЙ<span className="text-[#8c8c91]">МАСТЕР</span>
          </a>
          <div className="flex items-center gap-8">
            <a href="/" className="text-white/70 hover:text-white transition-colors text-sm">Главная</a>
            <a href="/projects.html" className="text-white font-medium text-sm">Проекты</a>
            <a href="/services.html" className="text-white/70 hover:text-white transition-colors text-sm">Услуги</a>
            <a href="/#contact" className="text-white/70 hover:text-white transition-colors text-sm">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="projects-header pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-[#8c8c91] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">На главную</span>
          </a>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Наши проекты
          </h1>
          <p className="text-xl text-[#8c8c91] max-w-2xl">
            Более 500 успешно выполненных проектов за 15 лет работы. 
            Каждый объект — это история качества и профессионализма.
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article 
                key={project.id} 
                className="project-card group bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#252525] transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#8c8c91] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#8c8c91] bg-white/5 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-3 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#8c8c91] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-white text-sm hover:text-[#8c8c91] transition-colors">
                    Подробнее о проекте
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-[#8c8c91] text-sm">Выполненных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15</div>
              <div className="text-[#8c8c91] text-sm">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">2М+</div>
              <div className="text-[#8c8c91] text-sm">м² построено</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-[#8c8c91] text-sm">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Хотите такой же результат?
          </h2>
          <p className="text-[#8c8c91] mb-8">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#050505] font-medium rounded-lg hover:bg-[#f0f0f0] transition-colors"
            >
              Обсудить проект
            </a>
            <a 
              href="/services.html" 
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-white">
              СТРОЙ<span className="text-[#8c8c91]">МАСТЕР</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="/" className="text-[#8c8c91] hover:text-white transition-colors text-sm">Главная</a>
              <a href="/projects.html" className="text-[#8c8c91] hover:text-white transition-colors text-sm">Проекты</a>
              <a href="/services.html" className="text-[#8c8c91] hover:text-white transition-colors text-sm">Услуги</a>
            </div>
            <div className="text-[#8c8c91] text-sm">
              © 2024 СтройМастер. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProjectsPage;
