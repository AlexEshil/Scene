import { ArrowRight, ClipboardList, HardHat, FolderKanban, Recycle, Factory, Truck, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: ClipboardList,
      title: 'Предпроектная подготовка',
      description: 'Совместный подход к предпроектной подготовке СтройПрофи, основанный на прозрачности и подотчётности, является самым надёжным и комплексным в отрасли.',
      link: '#',
    },
    {
      icon: HardHat,
      title: 'Строительный менеджмент',
      description: 'Имея проверенную историю успеха, охватывающую более четверти века, СтройПрофи является ведущим поставщиком строительных услуг в России.',
      link: '#',
    },
    {
      icon: FolderKanban,
      title: 'Управление проектами',
      description: 'Мы уникально позиционированы для использования нашего обширного опыта в предоставлении комплексных услуг по управлению проектами.',
      link: '#',
    },
    {
      icon: Recycle,
      title: 'Lean Construction',
      description: 'Lean — это философия, подчёркивающая устранение отходов для создания плавно текущего производственного процесса.',
      link: '#',
    },
  ];

  const expertiseAreas = [
    {
      icon: Factory,
      title: 'Производственный цех',
      description: 'Собственное производство строительных элементов',
    },
    {
      icon: Truck,
      title: 'Внеплощадочное строительство',
      description: 'Модульное строительство и префабрикация',
    },
    {
      icon: FolderKanban,
      title: 'Управление цепочками поставок',
      description: 'Оптимизация логистики и поставок',
    },
    {
      icon: Monitor,
      title: 'Виртуальное проектирование',
      description: 'BIM и цифровое моделирование',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services-hero.jpg"
            alt="Наши услуги"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Делаем это возможным
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light">
              Наши услуги
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8 lg:p-10">
                  <service.icon className="w-12 h-12 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-600 transition-colors"
                  >
                    Подробнее <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Области экспертизы
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
            <p className="text-xl text-white/80">
              Удовлетворяем ваши строительные потребности
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-500 transition-all duration-300"
              >
                <area.icon className="w-10 h-10 text-blue-500 group-hover:text-white mb-4 transition-colors" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 text-sm transition-colors">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Наш подход
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                В СтройПрофи мы верим, что успех проекта закладывается на этапе планирования. 
                Наш совместный подход к предпроектной подготовке обеспечивает прозрачность 
                на всех этапах работы.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Мы используем передовые технологии и методологии, чтобы гарантировать, что 
                каждый проект завершается в срок, в рамках бюджета и с превосходным качеством.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Планирование</h4>
                    <p className="text-gray-600">Детальный анализ и разработка стратегии</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Реализация</h4>
                    <p className="text-gray-600">Профессиональное выполнение работ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Контроль качества</h4>
                    <p className="text-gray-600">Постоянный мониторинг и проверка</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Сдача проекта</h4>
                    <p className="text-gray-600">Финальная приёмка и передача</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/project-3.jpg"
                  alt="Наш подход"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
