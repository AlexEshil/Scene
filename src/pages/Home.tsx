import { ArrowRight, Building2, Users, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home-hero.jpg"
            alt="Строительная площадка"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold tracking-wide uppercase">
                Строим будущее
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Меняем мир
              <br />
              к лучшему
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light">
              Как строительная компания, мы берём на себя крупные сложные проекты, 
              способствуем инновациям и вносим вклад в развитие сообщества.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg group"
                >
                  Наши проекты
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/careers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"
                >
                  Карьера
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Three Columns Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3]">
                <img
                  src="/images/project-2.jpg"
                  alt="Проект"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Building2 className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Проект</h3>
                <p className="text-white/80 mb-4">
                  Как строительная компания, мы берём на себя крупные сложные проекты, 
                  способствуем инновациям и вносим вклад в развитие сообщества.
                </p>
                <Link to="/projects" className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2">
                  Смотреть проекты <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Career */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3]">
                <img
                  src="/images/careers-hero.jpg"
                  alt="Карьера"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Users className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Карьера</h3>
                <p className="text-white/80 mb-4">
                  В СтройПрофи сотрудники участвуют в увлекательных проектах в разных локациях. 
                  Доступны возможности для инженеров, рабочих, ветеранов и многих других.
                </p>
                <Link to="/careers" className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2">
                  Вакансии <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Future */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3]">
                <img
                  src="/images/about-hero.jpg"
                  alt="Будущее"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Leaf className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Лучшее будущее</h3>
                <p className="text-white/80 mb-4">
                  Наши общие ценности объединяют нашу команду и клиентов, позволяя нам 
                  каждый день выполнять значимую работу.
                </p>
                <Link to="/about" className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2">
                  Узнать больше <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-500 mb-2">25+</div>
              <div className="text-white/80">лет на рынке</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-500 mb-2">500+</div>
              <div className="text-white/80">проектов</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-500 mb-2">2000+</div>
              <div className="text-white/80">сотрудников</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-500 mb-2">15</div>
              <div className="text-white/80">регионов</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
