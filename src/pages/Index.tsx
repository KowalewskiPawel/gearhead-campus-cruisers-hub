
import React from 'react';
import { Car, Users, Trophy, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-red-500/20 rounded-b-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a631496e-b1a6-4451-8247-55e1391809cd.png" 
                alt="Studenckie Koło Naukowe Samodziarzy Logo" 
                className="h-10 w-10 rounded-full border-2 border-red-500/30"
              />
              <span className="text-xl font-bold">AutoClub</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-400 transition-colors px-3 py-1 rounded-md hover:bg-red-500/10">Strona główna</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-red-400 transition-colors px-3 py-1 rounded-md hover:bg-red-500/10">O nas</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-red-400 transition-colors px-3 py-1 rounded-md hover:bg-red-500/10">Projekty</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-red-400 transition-colors px-3 py-1 rounded-md hover:bg-red-500/10">Kontakt</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-gray-900 rounded-3xl m-4"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 rounded-3xl m-4"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent animate-fade-in">
            AutoClub
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-fade-in">
            Uniwersyteccy Miłośnicy Motoryzacji
          </p>
          <p className="text-lg mb-8 text-red-400 italic animate-fade-in">
            "Pasja do samochodów zaczyna się tutaj"
          </p>
          <Button 
            onClick={() => scrollToSection('about')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg animate-fade-in rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Dowiedz się więcej
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-red-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400">O Nas</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm border border-red-500/20">
              <h3 className="text-2xl font-bold mb-6">Kim jesteśmy</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Jesteśmy pasjonatami motoryzacji na uniwersytecie, zjednoczeni miłością do samochodów, 
                doskonałości inżynieryjnej i emocji związanych z prędkością. Od klasycznych muscle cars po 
                nowoczesne supersamochody - celebrujemy wszystkie aspekty kultury motoryzacyjnej.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nasz klub zapewnia platformę dla studentów do dzielenia się wiedzą, pracy nad projektami 
                i nawiązywania kontaktów z podobnie myślącymi osobami, które podzielają tę samą pasję do 
                innowacji motoryzacyjnych.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80" 
                alt="Spotkanie miłośników samochodów" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-red-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400">Nasze Projekty</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/70 border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-105 rounded-2xl backdrop-blur-sm">
              <div className="p-6">
                <Trophy className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Formula Student</h3>
                <p className="text-gray-300">
                  Budujemy i ścigamy się naszym własnym samochodem typu formuła w międzynarodowych zawodach.
                </p>
              </div>
            </Card>
            
            <Card className="bg-gray-800/70 border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-105 rounded-2xl backdrop-blur-sm">
              <div className="p-6">
                <Car className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Projekty Renowacji</h3>
                <p className="text-gray-300">
                  Przywracamy klasyczne samochody do życia poprzez wspólne wysiłki renowacyjne.
                </p>
              </div>
            </Card>
            
            <Card className="bg-gray-800/70 border-red-500/30 hover:border-red-500/70 transition-all duration-300 hover:scale-105 rounded-2xl backdrop-blur-sm">
              <div className="p-6">
                <Users className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Spotkania Motoryzacyjne</h3>
                <p className="text-gray-300">
                  Regularne spotkania, aby zaprezentować pojazdy członków i dzielić się wiedzą motoryzacyjną.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400">Skontaktuj się z nami</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm border border-red-500/20">
              <h3 className="text-2xl font-bold mb-6">Dołącz do naszej społeczności</h3>
              <p className="text-gray-300 text-lg mb-8">
                Gotowy do rozpalenia swojej pasji do doskonałości motoryzacyjnej? Skontaktuj się z nami i zostań częścią naszej rosnącej społeczności.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center bg-gray-700/30 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-red-400 mr-4" />
                  <span className="text-gray-300">autoclub@uniwersytet.edu.pl</span>
                </div>
                <div className="flex items-center bg-gray-700/30 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-red-400 mr-4" />
                  <span className="text-gray-300">+48 123 456 789</span>
                </div>
                <div className="flex items-center bg-gray-700/30 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-red-400 mr-4" />
                  <span className="text-gray-300">Budynek Inżynierski, Sala 201</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-gray-800/70 border-red-500/30 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-white">Harmonogram Spotkań</h3>
              <div className="space-y-3 text-gray-300">
                <p className="bg-gray-700/30 p-3 rounded-lg"><strong className="text-red-400">Spotkania ogólne:</strong> Każdy piątek 18:00</p>
                <p className="bg-gray-700/30 p-3 rounded-lg"><strong className="text-red-400">Sesje warsztatowe:</strong> Soboty 10:00</p>
                <p className="bg-gray-700/30 p-3 rounded-lg"><strong className="text-red-400">Spotkania motoryzacyjne:</strong> Pierwsza niedziela każdego miesiąca</p>
              </div>
              <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Dołącz do Klubu
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-red-500/20 bg-gray-800/30 rounded-t-2xl mt-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Car className="h-6 w-6 text-red-500" />
            <span className="text-lg font-bold">AutoClub</span>
          </div>
          <p className="text-gray-400">
            © 2025 Uniwersytecki AutoClub. Rozpalamy pasję, budujemy społeczność.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
