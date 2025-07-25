import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeScreen, setActiveScreen] = useState('login');

  // Данные для демонстрации
  const userStats = {
    steps: 8547,
    calories: 342,
    distance: 6.2,
    activeMinutes: 45
  };

  const workoutTypes = [
    { id: 1, name: 'Бег', icon: 'Zap', color: 'bg-blue-500', duration: '30 мин' },
    { id: 2, name: 'Йога', icon: 'Heart', color: 'bg-purple-500', duration: '45 мин' },
    { id: 3, name: 'Силовые', icon: 'Dumbbell', color: 'bg-red-500', duration: '60 мин' },
    { id: 4, name: 'Велосипед', icon: 'Bike', color: 'bg-green-500', duration: '90 мин' }
  ];

  const weeklyProgress = [
    { day: 'Пн', steps: 7200 },
    { day: 'Вт', steps: 8500 },
    { day: 'Ср', steps: 6800 },
    { day: 'Чт', steps: 9200 },
    { day: 'Пт', steps: 8547 },
    { day: 'Сб', steps: 0 },
    { day: 'Вс', steps: 0 }
  ];

  const renderLoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-emerald-500 rounded-3xl mx-auto mb-4 flex items-center justify-center">
            <Icon name="Activity" size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">FitTracker</h1>
          <p className="text-gray-600">Ваш персональный фитнес-помощник</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input id="password" type="password" />
                </div>
                <Button 
                  className="w-full bg-emerald-500 hover:bg-emerald-600" 
                  onClick={() => setActiveScreen('dashboard')}
                >
                  Войти
                </Button>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-reg">Email</Label>
                  <Input id="email-reg" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-reg">Пароль</Label>
                  <Input id="password-reg" type="password" />
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  Зарегистрироваться
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">или</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button variant="outline" className="w-full">
                  <Icon name="Chrome" size={20} className="mr-2" />
                  Войти через Google
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="Facebook" size={20} className="mr-2" />
                  Войти через Facebook
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Привет, Анна! 👋</h1>
            <p className="text-gray-600">Готова к новым достижениям?</p>
          </div>
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
            <Icon name="User" size={24} className="text-white" />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-20">
        {/* Основные метрики */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="shadow-lg border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Шаги</p>
                  <p className="text-2xl font-bold text-emerald-600">{userStats.steps.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">из 10,000</p>
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Icon name="Footprints" size={24} className="text-emerald-600" />
                </div>
              </div>
              <Progress value={85} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Калории</p>
                  <p className="text-2xl font-bold text-orange-600">{userStats.calories}</p>
                  <p className="text-xs text-gray-500">ккал</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <Icon name="Flame" size={24} className="text-orange-600" />
                </div>
              </div>
              <Progress value={68} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Расстояние</p>
                  <p className="text-2xl font-bold text-blue-600">{userStats.distance}</p>
                  <p className="text-xs text-gray-500">км</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Активность</p>
                  <p className="text-2xl font-bold text-purple-600">{userStats.activeMinutes}</p>
                  <p className="text-xs text-gray-500">мин</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Быстрые действия */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">Начать тренировку</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid grid-cols-2 gap-3">
              {workoutTypes.map((workout) => (
                <Button
                  key={workout.id}
                  variant="ghost"
                  className="h-20 flex flex-col items-center justify-center space-y-2 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50"
                  onClick={() => setActiveScreen('workout')}
                >
                  <div className={`w-8 h-8 ${workout.color} rounded-xl flex items-center justify-center`}>
                    <Icon name={workout.icon} size={16} className="text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{workout.name}</p>
                    <p className="text-xs text-gray-500">{workout.duration}</p>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Прогресс за неделю */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">Прогресс за неделю</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-end justify-between h-32">
              {weeklyProgress.map((day, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div 
                    className="w-6 bg-emerald-500 rounded-t-lg"
                    style={{ height: `${(day.steps / 10000) * 100}px` }}
                  />
                  <span className="text-xs text-gray-600">{day.day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1 text-emerald-600">
            <Icon name="Home" size={20} />
            <span className="text-xs">Главная</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1" onClick={() => setActiveScreen('stats')}>
            <Icon name="BarChart3" size={20} />
            <span className="text-xs">Статистика</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1" onClick={() => setActiveScreen('workout')}>
            <Icon name="Plus" size={20} />
            <span className="text-xs">Добавить</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1" onClick={() => setActiveScreen('profile')}>
            <Icon name="User" size={20} />
            <span className="text-xs">Профиль</span>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderWorkoutScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => setActiveScreen('dashboard')}>
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <h1 className="text-xl font-semibold">Добавить тренировку</h1>
        <div className="w-8"></div>
      </div>

      <div className="p-4 space-y-6 pb-20">
        {/* Выбор типа тренировки */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">Тип тренировки</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid grid-cols-2 gap-3">
              {workoutTypes.map((workout) => (
                <Button
                  key={workout.id}
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center space-y-3 hover:border-emerald-300 hover:bg-emerald-50"
                >
                  <div className={`w-10 h-10 ${workout.color} rounded-2xl flex items-center justify-center`}>
                    <Icon name={workout.icon} size={20} className="text-white" />
                  </div>
                  <span className="text-sm font-medium">{workout.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Параметры тренировки */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">Параметры</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Длительность (мин)</Label>
                <Input id="duration" type="number" placeholder="30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="calories">Калории</Label>
                <Input id="calories" type="number" placeholder="250" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="distance">Расстояние (км)</Label>
              <Input id="distance" type="number" step="0.1" placeholder="5.0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Заметки</Label>
              <Input id="notes" placeholder="Отличная пробежка в парке" />
            </div>
          </CardContent>
        </Card>

        {/* Кнопка сохранения */}
        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 h-12">
          <Icon name="Check" size={20} className="mr-2" />
          Сохранить тренировку
        </Button>
      </div>
    </div>
  );

  const renderStatsScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => setActiveScreen('dashboard')}>
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <h1 className="text-xl font-semibold">Статистика</h1>
        <Button variant="ghost" size="sm">
          <Icon name="Calendar" size={20} />
        </Button>
      </div>

      <div className="p-4 space-y-6 pb-20">
        {/* Фильтры */}
        <div className="flex space-x-2">
          <Badge variant="default" className="bg-emerald-500">Неделя</Badge>
          <Badge variant="outline">Месяц</Badge>
          <Badge variant="outline">Год</Badge>
        </div>

        {/* Общая статистика */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">За эту неделю</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-emerald-600">12</p>
                <p className="text-sm text-gray-600">Тренировок</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">2,450</p>
                <p className="text-sm text-gray-600">Калорий</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">28.5</p>
                <p className="text-sm text-gray-600">км</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* График активности */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">Активность по дням</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="space-y-3">
              {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'].map((day, index) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 w-20">{day.slice(0, 2)}</span>
                  <div className="flex-1 mx-3">
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${Math.random() * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium w-12 text-right">{Math.floor(Math.random() * 60)}м</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Топ тренировок */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">Любимые тренировки</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="space-y-3">
              {workoutTypes.slice(0, 3).map((workout, index) => (
                <div key={workout.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${workout.color} rounded-2xl flex items-center justify-center`}>
                      <Icon name={workout.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{workout.name}</p>
                      <p className="text-sm text-gray-600">{index + 3} тренировок</p>
                    </div>
                  </div>
                  <Icon name="TrendingUp" size={16} className="text-emerald-600" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderProfileScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={() => setActiveScreen('dashboard')}>
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <h1 className="text-xl font-semibold">Профиль</h1>
        <Button variant="ghost" size="sm">
          <Icon name="Settings" size={20} />
        </Button>
      </div>

      <div className="p-4 space-y-6 pb-20">
        {/* Профиль пользователя */}
        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
                <Icon name="User" size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">Анна Петрова</h2>
                <p className="text-gray-600">25 лет • Москва</p>
                <Badge className="mt-2 bg-emerald-100 text-emerald-700">Активный пользователь</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Цели */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">Моя цель</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-medium">Поддержание формы</p>
                  <p className="text-sm text-gray-600">10,000 шагов в день</p>
                </div>
              </div>
              <Icon name="ChevronRight" size={16} className="text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Достижения */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">Достижения</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-yellow-50 rounded-xl">
                <div className="w-12 h-12 bg-yellow-500 rounded-2xl mx-auto mb-2 flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-white" />
                </div>
                <p className="text-sm font-medium">Марафонец</p>
                <p className="text-xs text-gray-600">100 км</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-2xl mx-auto mb-2 flex items-center justify-center">
                  <Icon name="Flame" size={20} className="text-white" />
                </div>
                <p className="text-sm font-medium">Огонёк</p>
                <p className="text-xs text-gray-600">7 дней</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-2xl mx-auto mb-2 flex items-center justify-center">
                  <Icon name="Trophy" size={20} className="text-white" />
                </div>
                <p className="text-sm font-medium">Чемпион</p>
                <p className="text-xs text-gray-600">30 тр.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Настройки */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">Настройки</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-3">
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer">
              <div className="flex items-center space-x-3">
                <Icon name="Bell" size={20} className="text-gray-600" />
                <span>Уведомления</span>
              </div>
              <Icon name="ChevronRight" size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer">
              <div className="flex items-center space-x-3">
                <Icon name="Shield" size={20} className="text-gray-600" />
                <span>Приватность</span>
              </div>
              <Icon name="ChevronRight" size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer">
              <div className="flex items-center space-x-3">
                <Icon name="HelpCircle" size={20} className="text-gray-600" />
                <span>Помощь</span>
              </div>
              <Icon name="ChevronRight" size={16} className="text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Выход */}
        <Button 
          variant="outline" 
          className="w-full text-red-600 border-red-200 hover:bg-red-50"
          onClick={() => setActiveScreen('login')}
        >
          <Icon name="LogOut" size={20} className="mr-2" />
          Выйти из аккаунта
        </Button>
      </div>
    </div>
  );

  // Основная логика рендеринга
  const renderScreen = () => {
    switch (activeScreen) {
      case 'login':
        return renderLoginScreen();
      case 'dashboard':
        return renderDashboard();
      case 'workout':
        return renderWorkoutScreen();
      case 'stats':
        return renderStatsScreen();
      case 'profile':
        return renderProfileScreen();
      default:
        return renderDashboard();
    }
  };

  return renderScreen();
};

export default Index;