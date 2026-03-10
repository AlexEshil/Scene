import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowLeft, 
  Home, 
  Building2, 
  Paintbrush, 
  Warehouse, 
  Ruler, 
  HardHat, 
  CheckCircle,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import useLenis from '../hooks/useLenis';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Строительство домов",
    subtitle: "от 3 месяцев",
    description: "Полный цикл строительства частных домов и коттеджей любой сложности. От фундамента до кровли — берем на себя все этапы работ.",
    features: [
      "Проектирование и согласование",
      "Возведение фундамента любого типа",
      "Строительство стен и перекрытий",
      "Кровельные работы",
      "Подключение коммуникаций",
    ],
    icon: Home,
    image: "/images/work-7.jpg",
  },
  {
    id: 2,
    title: "Ремонт квартир",
    subtitle: "от 2 месяцев",
    description: "Качественный ремонт квартир под ключ. Дизайн-проект, черновая и чистовая отделка с гарантией на все виды работ.",
    features: [
      "Дизайн-проект интерьера",
      "Демонтажные работы",
      "Электрика и сантехника",
      "Черновая отделка",
      "Чистовая отделка премиум-класса",
    ],
    icon: Paintbrush,
    image: "/images/work-6.jpg",
  },
  {
    id: 3,
    title: "Коммерческое строительство",
    subtitle: "от 6 месяцев",
    description: "Строительство офисных зданий, торговых центров и других коммерческих объектов с соблюдением всех норм и стандартов.",
    features: [
      "Проектирование коммерческих объектов",
      "Возведение каркасных зданий",
      "Фасадные работы",
      "Внутренняя инфраструктура",
      "Благоустройство территории",
    ],
    icon: Building2,
    image: "/images/work-5.jpg",
  },
  {
    id: 4,
    title: "Промышленные объекты",
    subtitle: "от 8 месяцев",
    description: "Возведение складских комплексов, логистических центров и производственных зданий с учетом специфики вашего бизнеса.",
    features: [
      "Проектирование складов и цехов",
      "Монтаж металлоконструкций",
      "Устройство промышленных полов",
      "Системы вентиляции и кондиционирования",
      "Пожарная безопасность",
    ],
    icon: Warehouse,
    image: "/images/work-8.jpg",
  },
];

const additionalServices = [
  {
    title: "Проектирование",
    description: "Разработка архитектурных и инженерных проектов любой сложности",
    icon: Ruler,
  },
  {
    title: "Инженерные сети",
    description: "Прокладка и подключение всех видов коммуникаций",
    icon: HardHat,
  },
  {
    title: "Ландшафтный дизайн",
    description: "Благоустройство территории и озеленение",
    icon: Paintbrush,
  },
];

function ServicesPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useLenis();

  useEffect(() => {
    document.documentElement.lang = 'ru';
    document.title = 'Услуги - СтройМастер';
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.services-header',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      // Service cards animation
      const cards = gsap.utils.toArray<HTMLElement>('.service-card');
      cards.forEach((card, index) => {
        const trigger = ScrollTrigger.create({
          trigger: card,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(
              card,
              { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
              { 
                opacity: 1, 
                x: 0, 
                duration: 0.8, 
                ease: 'power3.out' 
              }
            );
          },
          once: true,
        });
        triggersRef.current.push(trigger);
      });

      // Additional services animation
      const additionalCards = gsap.utils.toArray<HTMLElement>('.additional-service');
      additionalCards.forEach((card, index) => {
        const trigger = ScrollTrigger.create({
          trigger: card,
          start: 'top 90%',
          onEnter: () => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 30 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.6, 
                delay: index * 0.1,
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
            <a href="/projects.html" className="text-white/70 hover:text-white transition-colors text-sm">Проекты</a>
            <a href="/services.html" className="text-white font-medium text-sm">Услуги</a>
            <a href="/#contact" className="text-white/70 hover:text-white transition-colors text-sm">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="services-header pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-[#8c8c91] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">На главную</span>
          </a>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Наши услуги
          </h1>
          <p className="text-xl text-[#8c8c91] max-w-2xl">
            Полный спектр строительных услуг — от проектирования до сдачи объекта под ключ. 
            Работаем с любыми задачами и бюджетами.
          </p>
        </div>
      </header>

      {/* Main Services */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <article 
              key={service.id} 
              className={`service-card grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#8c8c91]" />
                  </div>
                  <span className="text-sm text-[#8c8c91] uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-[#8c8c91] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#8c8c91] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#050505] font-medium rounded-lg hover:bg-[#f0f0f0] transition-colors">
                  Получить расчет
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Дополнительные услуги
          </h2>
          <p className="text-[#8c8c91] text-center mb-12 max-w-2xl mx-auto">
            Предоставляем полный комплекс сопутствующих услуг для вашего комфорта
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="additional-service p-6 bg-[#050505] rounded-lg hover:bg-[#0a0a0a] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#8c8c91]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#8c8c91] text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Как мы работаем
          </h2>
          <p className="text-[#8c8c91] text-center mb-12 max-w-2xl mx-auto">
            Прозрачный процесс работы на каждом этапе вашего проекта
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Консультация", desc: "Бесплатная встреча и обсуждение проекта" },
              { step: "02", title: "Проектирование", desc: "Разработка детального проекта и сметы" },
              { step: "03", title: "Строительство", desc: "Выполнение всех строительных работ" },
              { step: "04", title: "Сдача", desc: "Финальная приемка и передача объекта" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#8c8c91]/30 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[#8c8c91] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы начать строительство?
          </h2>
          <p className="text-[#8c8c91] mb-8">
            Получите бесплатную консультацию и расчет стоимости вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="tel:+74951234567" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#050505] font-medium rounded-lg hover:bg-[#f0f0f0] transition-colors"
            >
              <Phone className="w-5 h-5" />
              +7 (495) 123-45-67
            </a>
            <a 
              href="mailto:info@stroymaster.ru" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Написать нам
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8c8c91]">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Пн-Пт: 9:00 - 18:00
            </span>
            <span>г. Москва, ул. Строителей, 25</span>
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

export default ServicesPage;
