import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const photographers = [
    {
      name: "Влад Красников",
      specialty: "Фотограф",
      experience: "6 лет",
      image: "/img/c58b63e0-e8f8-427b-8712-30bd491cea0c.jpg",
      style: "Эмоциональные портреты"
    },
    {
      name: "Зайцева Дарья",
      specialty: "Арт-дизайнер",
      experience: "8 лет",
      image: "/img/2e221378-f7e5-4fed-b092-371c7f4d1681.jpg",
      style: "Творческие эксперименты"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-teal/10"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-coral/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-teal/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-coral/15 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 text-black leading-tight">
              CHERRY
              <span className="block bg-gradient-to-r from-coral to-teal bg-clip-text text-transparent">
                STUDIO
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-montserrat leading-relaxed">
              Захватываем моменты, создаём искусство
            </p>
            <Button 
              size="lg" 
              className="bg-coral hover:bg-coral/90 text-white px-8 py-6 text-lg font-montserrat font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Посмотреть портфолио
              <Icon name="Camera" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Photographers Portfolio Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-black mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 font-montserrat">
              Талантливые фотографы с уникальным видением
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographers.map((photographer, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden animate-fade-in hover:scale-105" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={photographer.image} 
                    alt={photographer.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-playfair text-2xl font-bold text-black">
                      {photographer.name}
                    </h3>
                    <Badge variant="secondary" className="bg-teal/10 text-teal font-montserrat">
                      {photographer.experience}
                    </Badge>
                  </div>
                  
                  <p className="text-coral font-montserrat font-semibold mb-2">
                    {photographer.specialty}
                  </p>
                  
                  <p className="text-gray-600 font-montserrat text-sm mb-4">
                    {photographer.style}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-coral text-coral hover:bg-coral hover:text-white font-montserrat transition-all duration-300"
                  >
                    <Icon name="Eye" size={16} className="mr-2" />
                    Смотреть работы
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-coral to-teal text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Готовы создать что-то особенное?
          </h2>
          <p className="text-xl mb-8 font-montserrat opacity-90">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-coral hover:bg-gray-100 px-8 py-6 font-montserrat font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-coral px-8 py-6 font-montserrat font-semibold rounded-full transition-all duration-300"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;