import React from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Award className="text-turquoise-500" size={24} />,
      title: '+15 años',
      description: 'Experiencia en liderazgo empresarial internacional'
    },
    {
      icon: <Users className="text-gold-500" size={24} />,
      title: 'Gestión de Equipos',
      description: 'Dirección de equipos multiculturales en 6+ países'
    },
    {
      icon: <Target className="text-turquoise-500" size={24} />,
      title: 'Visión Estratégica',
      description: 'Optimización de procesos y control financiero'
    },
    {
      icon: <TrendingUp className="text-gold-500" size={24} />,
      title: 'Adaptabilidad',
      description: 'Transición exitosa de management a desarrollo tecnológico'
    }
  ];

  const languages = [
    { name: 'Castellano', level: 'Nativo', percentage: 100 },
    { name: 'Inglés', level: 'Basico', percentage: 50 },
    { name: 'Italiano', level: 'Básico', percentage: 30 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Sobre <span className="text-turquoise-500">Mí</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Combino una sólida experiencia en liderazgo empresarial internacional con habilidades técnicas modernas para impulsar proyectos tecnológicos de alto impacto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Mi Trayectoria</h3>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Durante más de 15 años, he liderado equipos y operaciones internacionales en España, Italia, República Checa, Perú, Brasil, Uruguay y Chile. Esta experiencia me ha proporcionado una perspectiva única sobre la gestión de proyectos complejos, la comunicación intercultural y la optimización de procesos.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Mi transición al desarrollo tecnológico representa la evolución natural de mi carrera, combinando mi visión estratégica de negocio con las habilidades técnicas necesarias para crear soluciones digitales innovadoras y escalables.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Idiomas</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-charcoal-700">{lang.name}</span>
                      <span className="text-sm text-charcoal-500">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-turquoise-500 to-turquoise-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 mb-2">{highlight.title}</h4>
                      <p className="text-sm text-charcoal-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-navy-900 to-charcoal-900 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Objetivo Profesional</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                Consolidar mi carrera en el sector tecnológico, aportando mi experiencia en liderazgo y gestión empresarial para desarrollar soluciones innovadoras que generen valor real para usuarios y organizaciones.
              </p>
              <div className="flex items-center space-x-2 text-turquoise-400">
                <Target size={20} />
                <span className="font-medium">Enfoque en tecnologías Full Stack y liderazgo técnico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;