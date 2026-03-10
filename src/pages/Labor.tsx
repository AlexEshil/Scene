import { ArrowRight, Hammer, Wrench, Zap, Truck, HardHat, Drill, Shield, CheckCircle, Users, AlertTriangle, MessageSquare, Heart, DollarSign, Briefcase, PiggyBank, Calendar, TrendingUp, Plane, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Labor = () => {
  const positions = [
    { icon: Hammer, label: 'Плотники-столярщики' },
    { icon: Wrench, label: 'Бетонщики' },
    { icon: HardHat, label: 'Плотники-общестроители' },
    { icon: Truck, label: 'Разнорабочие' },
    { icon: Drill, label: 'Гипсокартонщики' },
    { icon: Zap, label: 'Сварщики и монтажники' },
    { icon: Zap, label: 'Электрики' },
    { icon: HardHat, label: 'Арматурщики' },
    { icon: Wrench, label: 'Монтажники металлоконструкций' },
    { icon: Truck, label: 'Машинисты строительной техники' },
  ];

  const safetyPrinciples = [
    { icon: Shield, text: 'Все травмы можно предотвратить.' },
    { icon: Users, text: 'Обучайте и практикуйте безопасное поведение.' },
    { icon: CheckCircle, text: 'Вовлекайте команды для правильного планирования работ.' },
    { icon: AlertTriangle, text: 'Выполняйте задачу только если это безопасно.' },
    { icon: MessageSquare, text: 'Говорите и останавливайте работу при опасных условиях.' },
  ];

  const benefits = [
    { icon: Heart, title: 'Программа Building L.I.F.E', description: 'Приверженность безопасности и благополучию' },
    { icon: DollarSign, title: 'Конкурентная зарплата', description: 'Достойная оплата труда' },
    { icon: Briefcase, title: 'Комплексные льготы', description: 'Медицинская страховка и соцпакет' },
    { icon: PiggyBank, title: 'Пенсионный план', description: 'Накопительная пенсионная программа' },
    { icon: Calendar, title: 'Оплачиваемый отпуск', description: 'Ежегодный отпуск и больничные' },
    { icon: TrendingUp, title: 'Карьерный рост', description: 'Возможности профессионального развития' },
    { icon: Plane, title: 'Командировки', description: 'Работа в различных регионах' },
    { icon: GraduationCap, title: 'Обучение и наставничество', description: 'Практическое обучение на рабочем месте' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/labor-hero.jpg"
            alt="Рабочие и специалисты"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold tracking-wide uppercase">
                Рабочие и специалисты
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Рабочие и
              <br />
              специалисты
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-4 font-light">
              Отличная карьера для умелых и увлечённых.
            </p>
            <div className="mb-8">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg group"
              >
                Стройте вместе с нами
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              Мы ищем людей, которые стремятся развивать свои навыки и применять их
              для создания зданий, где люди{' '}
              <span className="text-blue-400 font-semibold">живут</span>,{' '}
              <span className="text-blue-400 font-semibold">отдыхают</span>,{' '}
              <span className="text-blue-400 font-semibold">работают</span> и{' '}
              <span className="text-blue-400 font-semibold">учатся</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Build with the Best */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Стройте с лучшими
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold text-gray-900">СтройПрофи</span> — крупнейший
                генеральный подрядчик в стране и лидер во всех основных сегментах рынка.
                Применяйте свои навыки в различных должностях, включая:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <position.icon className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 font-medium">{position.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">25+</div>
              <div className="text-gray-600">лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">500+</div>
              <div className="text-gray-600">выполненных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">2000+</div>
              <div className="text-gray-600">сотрудников</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">15</div>
              <div className="text-gray-600">регионов присутствия</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Safe */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/worker-1.jpg"
                  alt="Безопасность на рабочем месте"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-xl shadow-lg">
                <Shield className="w-12 h-12 mb-2" />
                <div className="text-2xl font-bold">#1</div>
                <div className="text-sm">Приоритет</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Работайте безопасно
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                В <span className="font-semibold text-gray-900">СтройПрофи</span> безопасность
                — наш приоритет №1. Когда вы работаете с нами, вы являетесь частью культуры,
                которая способствует созданию среды без происшествий и обеспечивает
                максимально безопасное рабочее место каждый день.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Наши усилия направлены следующими ключевыми принципами безопасности:
                </h3>
              </div>

              <ul className="space-y-4">
                {safetyPrinciples.map((principle, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <principle.icon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{principle.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Что мы предлагаем
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed">
              В <span className="font-semibold text-gray-900">СтройПрофи</span> мы стремимся
              ставить благополучие наших сотрудников и ваших семей на первое место. Наш
              комплексный пакет льгот разработан для обеспечения гибкости и выбора.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-blue-500 transition-all duration-300 hover:shadow-xl"
              >
                <benefit.icon className="w-10 h-10 text-blue-500 group-hover:text-white mb-4 transition-colors" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-20 bg-gray-900 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <img
                  src="/images/worker-2.jpg"
                  alt="Сотрудник"
                  className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-blue-500"
                />
              </div>
              <div className="lg:col-span-2">
                <blockquote className="text-xl lg:text-2xl text-white italic mb-6">
                  "Работа в СтройПрофи изменила мою жизнь. Я начал как разнорабочий 5 лет
                  назад, а сейчас являюсь бригадиром. Компания действительно заботится о
                  своих сотрудниках и предоставляет отличные возможности для роста."
                </blockquote>
                <div className="text-blue-400 font-semibold">Анна Петрова</div>
                <div className="text-gray-400">Бригадир, работает с 2019 года</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 lg:py-28 bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-white" />
                <span className="text-white/80 text-lg">Присоединяйтесь к нам</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Станьте частью команды
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Мы всегда ищем талантливых и преданных своему делу специалистов, которые
                хотят строить будущее вместе с нами. Присоединяйтесь к тысячам
                профессионалов, которые уже выбрали СтройПрофи.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-6 text-lg font-semibold group"
              >
                Смотреть вакансии
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src="/images/worker-1.jpg"
                  alt="Сотрудник 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="/images/worker-2.jpg"
                  alt="Сотрудник 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="/images/worker-3.jpg"
                  alt="Сотрудник 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src="/images/worker-4.jpg"
                  alt="Сотрудник 4"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-white/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">150+</div>
                <div className="text-white/80">открытых вакансий</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">3 дня</div>
                <div className="text-white/80">среднее время отклика</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">95%</div>
                <div className="text-white/80">довольных сотрудников</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">поддержка HR</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Labor;
