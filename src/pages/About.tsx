import { Target, Heart, Shield, Users, Leaf, Lightbulb, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const cultureItems = [
    { icon: Leaf, title: 'ESG', description: 'Экология, социальная ответственность и управление' },
    { icon: Users, title: 'Сообщество', description: 'Вклад в развитие местных сообществ' },
    { icon: Heart, title: 'Разнообразие', description: 'Инклюзивность и равные возможности' },
    { icon: Shield, title: 'Экология', description: 'Устойчивое строительство' },
    { icon: Lightbulb, title: 'Инновации', description: 'Новые технологии в строительстве' },
    { icon: TrendingUp, title: 'Lean', description: 'Оптимизация процессов' },
    { icon: Award, title: 'Безопасность', description: 'Приоритет безопасности труда' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="О компании"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-blue-500" />
              <span className="text-white/80 text-lg tracking-wide">Команда | Честность | Приверженность</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Меняем жизнь наших людей, клиентов и сообщества
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Кто мы есть
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Наше <span className="font-semibold text-blue-500">видение</span> — быть поставщиком 
                строительных услуг и технической экспертизы высочайшей ценности. Мы планируем и 
                реализуем строительные проекты всех типов и размеров — школы и больницы, стадионы 
                и музеи, аэропорты, дата-центры, офисы и многое другое — по всей России и в 15 регионах.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Наша репутация честности, безопасной работы, реализации сложных проектов и внедрения 
                инноваций была завоевана на протяжении многих лет.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/services-hero.jpg"
                  alt="Наша команда"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/project-1.jpg"
                  alt="Наше наследие"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Наследие, основанное на доверии
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold text-gray-900">Александр Стройков</span> основал 
                компанию «СтройПрофи» в 1998 году, опираясь на основные ценности: командная работа, 
                честность и приверженность делу.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Наша работа привела к трансформации городских пейзажей, сообществ и строительной 
                отрасли. СтройПрофи впервые произвела фурор в отрасли, став пионером в использовании 
                железобетона для общего строительства, что позволило нашей компании создавать для 
                клиентов более безопасные, прочные и эффективные здания.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-6 py-2">
                <p className="text-xl italic text-gray-700">
                  «Обещание, данное — обещание, выполненное» — звучит так же верно сегодня, 
                  как и в 1998 году.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Наша культура
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed">
              На протяжении всей истории СтройПрофи мы ставили амбициозные цели и брали на себя 
              официальные обязательства по повышению безопасности, заботе о людях, увеличению 
              разнообразия и влияния на сообщество, соблюдению высоких стандартов деловой этики 
              и строительству всё более устойчивых зданий.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureItems.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-blue-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-4xl font-bold text-blue-500 group-hover:text-white mb-4">
                  0{index + 1}
                </div>
                <item.icon className="w-8 h-8 text-blue-500 group-hover:text-white mb-4 transition-colors" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Экология, социальная ответственность и управление
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8" />
              <p className="text-lg text-white/80 leading-relaxed">
                Мы понимаем экологическое, социальное и экономическое влияние нашей деятельности 
                и считаем своей ответственностью вести бизнес прозрачно и этично.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Leaf className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Экология</h3>
                <p className="text-white/70">Устойчивое строительство и забота о природе</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Социальная</h3>
                <p className="text-white/70">Забота о сотрудниках и сообществах</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Управление</h3>
                <p className="text-white/70">Прозрачность и подотчётность</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Target className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Стратегия</h3>
                <p className="text-white/70">Долгосрочное планирование</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
