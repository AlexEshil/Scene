import { Calendar, ArrowRight, Tag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const featuredNews = {
    image: '/images/project-5.jpg',
    title: 'СтройПрофи отмечает завершение строительства ЖК «Солнечный» в Екатеринбурге',
    date: '9 марта 2026',
    category: 'Событие',
    description: 'Состоялась торжественная церемония завершения строительства крупнейшего жилого комплекса в регионе.',
  };

  const newsItems = [
    {
      image: '/images/project-2.jpg',
      title: 'СтройПрофи признана «Строительной компанией года»',
      date: '5 марта 2026',
      category: 'Новость',
      author: 'Пресс-служба',
    },
    {
      image: '/images/project-3.jpg',
      title: 'СтройПрофи достигла рекордной выручки в 2025 году',
      date: '3 марта 2026',
      category: 'Новость',
      author: 'Финансовый отдел',
    },
    {
      image: '/images/project-1.jpg',
      title: 'Новогоднее поздравление от команды СтройПрофи',
      date: '27 февраля 2026',
      category: 'Событие',
      author: 'HR отдел',
    },
    {
      image: '/images/project-4.jpg',
      title: 'Открытие нового медицинского центра в Новосибирске',
      date: '20 февраля 2026',
      category: 'Проект',
      author: 'Пресс-служба',
    },
    {
      image: '/images/project-6.jpg',
      title: 'СтройПрофи запускает программу стажировки для студентов',
      date: '15 февраля 2026',
      category: 'Карьера',
      author: 'HR отдел',
    },
    {
      image: '/images/about-hero.jpg',
      title: 'СтройПрофи подписала соглашение о строительстве нового логистического центра',
      date: '10 февраля 2026',
      category: 'Проект',
      author: 'Пресс-служба',
    },
  ];

  const categories = [
    { name: 'Все', count: 156 },
    { name: 'Новости', count: 89 },
    { name: 'События', count: 34 },
    { name: 'Проекты', count: 45 },
    { name: 'Карьера', count: 23 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gray-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Новости и события
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Будьте в курсе последних новостей и событий компании СтройПрофи
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-500'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                    {featuredNews.category}
                  </span>
                  <span className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {featuredNews.date}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredNews.description}
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-600 transition-colors"
                >
                  Читать далее <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Последние новости</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1 text-blue-500 text-sm">
                      <Tag className="w-3 h-3" />
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <User className="w-3 h-3" />
                    {item.author}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium">
              1
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-500 transition-colors">
              2
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-500 transition-colors">
              3
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-500 transition-colors">
              ...
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-500 transition-colors flex items-center gap-2">
              Далее <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
