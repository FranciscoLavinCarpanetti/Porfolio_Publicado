import React from 'react';
import { ArrowDown, Code, Users, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-950 via-navy-900 to-charcoal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-turquoise-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="w-full h-full bg-gradient-to-br from-turquoise-500 to-navy-600 rounded-full flex items-center justify-center animate-float">
                <Code size={64} className="text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Francisco Lavin
            <span className="block text-turquoise-500 text-4xl md:text-5xl mt-2">
              Carpanetti
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer con <span className="text-turquoise-500 font-semibold">+15 años</span> de experiencia en liderazgo empresarial internacional y tecnologías modernas
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <Code className="text-turquoise-500" size={24} />
              <span className="text-lg font-medium">Full Stack Development</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <Users className="text-gold-500" size={24} />
              <span className="text-lg font-medium">Liderazgo Tecnológico</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <Globe className="text-turquoise-500" size={24} />
              <span className="text-lg font-medium">Experiencia Internacional</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="bg-turquoise-500 hover:bg-turquoise-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Conoce más sobre mí
            </button>
            <a
              href="#projects"
              className="border-2 border-white/30 hover:border-turquoise-500 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Ver mis proyectos
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-white/70 hover:text-turquoise-500 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;