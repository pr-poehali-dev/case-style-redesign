import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const cases = [
    {
      id: 1,
      title: "Веб-платформа для финтеха",
      description: "Разработка современного интерфейса для финансовой платформы с акцентом на UX и безопасность",
      image: "img/629128c6-4a7d-49f4-8188-eba0128998f1.jpg",
      category: "Web Design",
      year: "2024"
    },
    {
      id: 2,
      title: "Брендинг для стартапа",
      description: "Создание фирменного стиля и визуальной айдентики для технологического стартапа",
      image: "img/86170f3f-10a1-4784-8e70-017826d5d2ee.jpg",
      category: "Branding",
      year: "2024"
    },
    {
      id: 3,
      title: "Мобильное приложение",
      description: "Дизайн интуитивного мобильного приложения для управления проектами",
      image: "img/3c36f92b-7c99-427c-a155-e164a937b64b.jpg",
      category: "Mobile App",
      year: "2023"
    }
  ];

  const services = [
    {
      icon: "Palette",
      title: "Веб-дизайн",
      description: "Создаем современные и функциональные веб-интерфейсы"
    },
    {
      icon: "Smartphone",
      title: "Мобильные приложения",
      description: "Разрабатываем интуитивные мобильные интерфейсы"
    },
    {
      icon: "Zap",
      title: "Брендинг",
      description: "Создаем уникальную визуальную айдентику"
    },
    {
      icon: "Code",
      title: "Разработка",
      description: "Воплощаем дизайн в функциональный код"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900">Студия</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#cases" className="text-slate-700 hover:text-blue-600 transition-colors">Кейсы</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Обсудить проект
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Создаем
                <span className="text-blue-600 block">дизайн будущего</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Мы — креативная студия, которая превращает идеи в выдающиеся цифровые продукты. 
                Наша команда создает современные решения для брендов завтрашнего дня.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                  Посмотреть работы
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Обсудить проект
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="img/3c36f92b-7c99-427c-a155-e164a937b64b.jpg" 
                alt="Creative Design" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600 rounded-2xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-indigo-500 rounded-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Наши кейсы
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Каждый проект — это уникальная история успеха. Мы гордимся результатами, 
              которые помогают нашим клиентам достигать новых высот.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card 
                key={caseItem.id} 
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseItem.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseItem.year}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {caseItem.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Смотреть все проекты
              <Icon name="Grid3X3" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                О нашей студии
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Мы — команда креативных профессионалов с 8-летним опытом в создании цифровых продуктов. 
                Наша философия заключается в том, что хороший дизайн должен не только красиво выглядеть, 
                но и решать реальные бизнес-задачи.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                За время работы мы помогли более 150 компаниям создать уникальные цифровые решения, 
                которые приносят результат и выделяют их среди конкурентов.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-sm text-slate-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                  <div className="text-sm text-slate-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-sm text-slate-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <Icon name="Users" size={32} className="text-blue-600 mb-2" />
                    <div className="text-sm font-semibold">Команда</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <Icon name="Award" size={32} className="text-blue-600 mb-2" />
                    <div className="text-sm font-semibold">Награды</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <Icon name="Target" size={32} className="text-blue-600 mb-2" />
                    <div className="text-sm font-semibold">Цели</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <Icon name="Rocket" size={32} className="text-blue-600 mb-2" />
                    <div className="text-sm font-semibold">Инновации</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мы предлагаем полный цикл создания цифровых продуктов — от идеи до запуска и поддержки.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon 
                    name={service.icon} 
                    size={32} 
                    className="text-blue-600 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Расскажите нам о своей идее, и мы поможем воплотить её в жизнь. 
              Свяжитесь с нами любым удобным способом.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              Обсудить проект
              <Icon name="MessageCircle" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-300">hello@studio.com</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Телефон</h3>
              <p className="text-slate-300">+7 (999) 123-45-67</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Офис</h3>
              <p className="text-slate-300">Москва, Россия</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl text-white">Студия</span>
            </div>
            <p className="text-slate-400 text-center md:text-right">
              © 2024 Креативная Студия. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;