import { ArrowRight, Heart, Users, Award, TrendingUp, Globe, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const employees = [
    {
      image: '/images/employee-1.jpg',
      name: 'Алексей Смирнов',
      position: 'Директор проекта',
      quote: 'Моя любимая роль в СтройПрофи — это руководитель проектов. Я всегда интересовался связями и отношениями. Эта роль позволяет мне лучше понять, как работает наш бизнес в масштабе.',
    },
    {
      image: '/images/employee-2.jpg',
      name: 'Мария Иванова',
      position: 'Инженер-строитель',
      quote: 'Люди — лучшая часть СтройПрофи. Наставники и учителя направляли меня на протяжении всего пути.',
    },
    {
      image: '/images/employee-3.jpg',
      name: 'Дмитрий Петров',
      position: 'Менеджер проекта',
      quote: 'Для меня было важно работать в компании, которая заботится о своих сотрудниках, о своём влиянии на мир и имеет амбициозные цели в области устойчивого развития.',
    },
    {
      image: '/images/employee-4.jpg',
      name: 'Елена Козлова',
      position: 'Старший вице-президент',
      quote: 'СтройПрофи дал мне возможность расти профессионально и лично. Здесь ценят инициативу и поддерживают новые идеи.',
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Забота о здоровье',
      description: 'Медицинская страховка и программы оздоровления',
    },
    {
      icon: Users,
      title: 'Инклюзивность',
      description: 'Программы против дискриминации и домогательств',
    },
    {
      icon: Award,
      title: 'Развитие',
      description: 'Обучение и наставничество для всех сотрудников',
    },
    {
      icon: TrendingUp,
      title: 'Карьерный рост',
      description: 'Прозрачные возможности для продвижения',
    },
    {
      icon: Globe,
      title: 'Международные проекты',
      description: 'Работа в разных регионах и странах',
    },
  ];

  const news = [
    {
      title: 'СтройПрофи признана лучшим работодателем 2026',
      date: '1 марта 2026',
    },
    {
      title: 'Запуск программы менторства для молодых специалистов',
      date: '15 февраля 2026',
    },
    {
      title: 'СтройПрофи поддерживает инициативы LGBTQ+',
      date: '10 февраля 2026',
    },
    {
      title: 'Наш московский офис — лучшее место для работы',
      date: '5 февраля 2026',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/careers-hero.jpg"
            alt="Карьера в СтройПрофи"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Жизнь в СтройПрофи
            </h1>
            <p className="text-2xl sm:text-3xl text-white/90 font-light mb-8">
              Вместе мы делаем
              <br />
              <span className="text-blue-400 font-semibold">великие</span> дела
            </p>
            <p className="text-lg text-white/80 mb-8">
              Мы много работаем, чтобы каждый чувствовал себя физически и психологически 
              в безопасности. Чтобы создать команду и инклюзивную среду, наши сотрудники 
              проходят обучение против расизма, дискриминации и домогательств.
            </p>
            <Link to="/labor">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg group"
              >
                Смотреть вакансии
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Systems */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Отличная система поддержки внутри СтройПрофи
            </h2>
            <p className="text-lg text-gray-600">
              для повышения осведомлённости, уважения и инклюзивности.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Сеть молодых профессионалов
              </h3>
              <p className="text-gray-600">
                Сеть молодых профессионалов способствует укреплению связей и вовлеченности 
                в непрерывное обучение для продвижения по карьерной лестнице. Мы создаём 
                правильную среду, поощряя наставничество и прозрачность для построения 
                будущего нашей организации.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Женская сеть
              </h3>
              <p className="text-gray-600">
                Женская сеть расширяет возможности и защищает интересы женщин для 
                повышения их профессионального роста и видимости. Мы бросаем вызов 
                неосознанным предубеждениям и создаём правильную среду для успеха.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our People */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Познакомьтесь с нашими <span className="text-blue-500">людьми</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employees.map((employee, index) => (
              <div key={index} className="text-center">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{employee.name}</h3>
                <p className="text-blue-500 text-sm mb-3">{employee.position}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <Quote className="w-12 h-12 text-blue-500 mb-6" />
            <blockquote className="text-xl lg:text-2xl text-gray-700 italic mb-6">
              «Люди — лучшая часть СтройПрофи. Наставники и учителя направляли меня 
              на протяжении всего пути.»
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="/images/employee-3.jpg"
                  alt="Натан Инглиш"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Дмитрий Петров</div>
                <div className="text-gray-500 text-sm">Старший инженер проекта, 10 лет в СтройПрофи</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Почему СтройПрофи?
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-500 transition-all duration-300"
              >
                <benefit.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            СтройПрофи в сообществе
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Найдите своё место в СтройПрофи
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам профессионалов, которые строят будущее вместе с нами.
          </p>
          <Link to="/labor">
            <Button
              size="lg"
              className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Смотреть открытые позиции
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;
