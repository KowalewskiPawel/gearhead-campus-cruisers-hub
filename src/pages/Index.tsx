
import React from 'react';
import { Car, Users, Calendar, Trophy, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
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
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-red-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">AutoClub</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-red-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-red-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('events')} className="hover:text-red-400 transition-colors">Events</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-red-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent animate-fade-in">
            AutoClub
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-fade-in">
            University Automotive Enthusiasts
          </p>
          <p className="text-lg mb-8 text-red-400 italic animate-fade-in">
            "The passion for cars starts here"
          </p>
          <Button 
            onClick={() => scrollToSection('about')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg animate-fade-in"
          >
            Discover More
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-red-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Who We Are</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We are a passionate community of automotive enthusiasts at the university, united by our love for cars, 
                engineering excellence, and the thrill of speed. From classic muscle cars to modern supercars, 
                we celebrate all aspects of automotive culture.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our club provides a platform for students to share knowledge, work on projects, 
                and connect with like-minded individuals who share the same passion for automotive innovation.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80" 
                alt="Car meet" 
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400">Our Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <Trophy className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Formula Student</h3>
                <p className="text-gray-300">
                  Building and racing our own formula-style car in international competitions.
                </p>
              </div>
            </Card>
            
            <Card className="bg-gray-800 border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <Car className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Restoration Projects</h3>
                <p className="text-gray-300">
                  Bringing classic cars back to life through collaborative restoration efforts.
                </p>
              </div>
            </Card>
            
            <Card className="bg-gray-800 border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <Users className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Car Meets</h3>
                <p className="text-gray-300">
                  Regular gatherings to showcase members' vehicles and share automotive knowledge.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-red-500/20 p-6 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-red-400 mr-3" />
                <span className="text-red-400 font-semibold">March 15, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Annual Car Show</h3>
              <p className="text-gray-300">
                Showcase the best vehicles from our members and local enthusiasts. Awards for various categories.
              </p>
            </Card>
            
            <Card className="bg-gray-800 border-red-500/20 p-6 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-red-400 mr-3" />
                <span className="text-red-400 font-semibold">April 2, 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Track Day Experience</h3>
              <p className="text-gray-300">
                Professional racing circuit experience for members to test their vehicles safely.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-400">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Join Our Community</h3>
              <p className="text-gray-300 text-lg mb-8">
                Ready to fuel your passion for automotive excellence? Connect with us and become part of our growing community.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-red-400 mr-4" />
                  <span className="text-gray-300">autoclub@university.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-red-400 mr-4" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-400 mr-4" />
                  <span className="text-gray-300">Engineering Building, Room 201</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-gray-800 border-red-500/20 p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Meeting Schedule</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-red-400">General Meetings:</strong> Every Friday 6:00 PM</p>
                <p><strong className="text-red-400">Workshop Sessions:</strong> Saturdays 10:00 AM</p>
                <p><strong className="text-red-400">Car Meets:</strong> First Sunday of each month</p>
              </div>
              <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">
                Join the Club
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-red-500/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Car className="h-6 w-6 text-red-500" />
            <span className="text-lg font-bold">AutoClub</span>
          </div>
          <p className="text-gray-400">
            © 2025 University AutoClub. Fueling passion, building community.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
