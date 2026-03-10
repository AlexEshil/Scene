import { MapPin, ArrowRight, Building2, Home, Landmark, Hospital, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      image: '/images/project-1.jpg',
      location: 'Москва',
      title: 'Торговый центр «Европейский»',
      category: 'Коммерческая недвижимость',
      icon: Building2,
    },
    {
      image: '/images/project-2.jpg',
      location: 'Санкт-Петербург',
      title: 'Бизнес-центр «Нева Тауэр»',
      category: 'Офисная недвижимость',
      icon: Building2,
    },
    {
      image: '/images/project-3.jpg',
      location: 'Казань',
      title: 'Стадион «Ак Барс Арена»',
      category: 'Спортивные сооружения',
      icon: Landmark,
    },
    {
      image: '/images/project-4.jpg',
      location: 'Новосибирск',
      title: 'Медицинский центр «Здоровье»',
      category: 'Здравоохранение',
      icon: Hospital,
    },
    {
      image: '/images/project-5.jpg',
      location: 'Екатеринбург',
      title: 'Жилой комплекс «Солнечный»',
      category: 'Жилая недвижимость',
      icon: Home,
    },
    {
      image: '/images/project-6.jpg',
      location: 'Ростов-на-Дону',
      title: 'Логистический центр «Юг»',
      category: 'Логистика',
      icon: Warehouse,
    },
  ];

  const categories = [
    { name: 'Все проекты', count: 500 },
    { name: 'Коммерческая', count: 120 },
    { name: 'Жилая', count: 150 },
    { name: 'Инфраструктура', count: 80 },
    { name: 'Здравоохранение', count: 45 },
    { name: 'Образование', count: 35 },
    { name: 'Спорт', count: 25 },
    { name: 'Промышленность', count: 45 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/projects-hero.jpg"
            alt="Наши проекты"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Наши проекты
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light">
              Реализуем то, что важно
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-500'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-blue-500 mb-3">
                    <project.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <Link
                    to="#"
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-500 mb-2">500+</div>
              <div className="text-white/80">завершённых проектов</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-500 mb-2">50М+</div>
              <div className="text-white/80">кв. м. построено</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-500 mb-2">15</div>
              <div className="text-white/80">регионов присутствия</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-500 mb-2">98%</div>
              <div className="text-white/80">довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Хотите построить что-то великое?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, чтобы обсудить ваш проект. Мы готовы воплотить ваши идеи в жизнь.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Связаться с нами <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
