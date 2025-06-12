import React from 'react';
import { MapPin, Calendar, Users, TrendingUp, Globe } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: '2024 - Presente',
      role: 'Full Stack Developer',
      company: 'Transición Tecnológica',
      location: 'España',
      type: 'Desarrollo',
      description: 'Enfoque intensivo en tecnologías modernas de desarrollo web, creación de proyectos full stack y consolidación de habilidades técnicas.',
      achievements: [
        'Dominio de Angular, React, Node.js y MongoDB',
        'Desarrollo de múltiples proyectos full stack',
        'Implementación de arquitecturas escalables',
        'Certificaciones en tecnologías cloud (AWS)'
      ],
      technologies: ['Angular', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
      color: 'from-turquoise-500 to-turquoise-600'
    },
    
    {
      period: '2022 - 2024',
      role: 'Gerente Regional España',
      company: 'Corporación Internacional',
      location: 'Madrid, Tenerife Norte, Tenerife Sur',
      type: 'Management',
      description: 'Responsabilidad sobre mercados, desarrollo de estrategias comerciales y expansión regional.',
      achievements: [
        'Expansión exitosa a 2 regiones',
        'Crecimiento de ingresos del 180% en la región',
        'Establecimiento de partnerships estratégicos',
        'Desarrollo de equipos locales autónomos'
      ],
      technologies: ['Gestión Internacional', 'Análisis de Mercados', 'Strategic Planning'],
      color: 'from-navy-500 to-navy-600'
    },
    {
      period: '2021 - 2022',
      role: 'Roles Progresivos en Management',
      company: 'Diversas Organizaciones',
      location: 'España, Internacional',
      type: 'Desarrollo Profesional',
      description: 'Progresión desde roles operativos hasta posiciones de liderazgo, construyendo experiencia en gestión de equipos y operaciones complejas.',
      achievements: [
        'Desarrollo de habilidades de liderazgo',
        'Gestión de P&L de múltiples unidades',
        'Implementación de mejoras operativas',
        'Formación en gestión internacional'
      ],
      technologies: ['Leadership', 'P&L Management', 'Process Optimization'],
      color: 'from-gold-500 to-navy-500'
    },
    {
      period: '2018 - 2021',
      role: 'Director de Operaciones BCN - MAD - TFN - TFS',
      company: 'Multinacional de Servicios',
      location: 'España, (Barcelona, Madrid, Tnerife norte y Tenerife sur)',
      type: 'Liderazgo',
      description: 'Liderazgo de equipos multiculturales y gestión de operaciones comerciales en múltiples países europeos.',
      achievements: [
        'Gestión de equipos de +50 personas distribuidas',
        'Incremento del 35% en eficiencia operativa',
        'Implementación de procesos digitales',
        'Reducción de costos operativos del 25%'
      ],
      technologies: ['Gestión de Equipos', 'Procesos Digitales', 'CRM', 'Analytics'],
      color: 'from-gold-500 to-gold-600'
    },
    {
      period: '2010 - 2018',
      role: 'Jefe de Ventas Internacionales',
      company: 'Empresa de Tecnología',
      location: 'España, Italia, Argentina, Brasil, Uruguay',
      type: 'Ventas',
      description: 'Desarrollo de canales de venta internacionales y gestión de cuentas estratégicas en mercados europeos.',
      achievements: [
        'Establecimiento de red de distribución europea',
        'Superación de objetivos anuales en 140%',
        'Implementación de CRM personalizado',
        'Formación de equipos de ventas especializados'
      ],
      technologies: ['CRM Systems', 'Sales Analytics', 'Digital Marketing'],
      color: 'from-turquoise-500 to-navy-500'
    }
    
  ];

  const countries = [
    { name: 'España', flag: '🇪🇸' },
    { name: 'Italia', flag: '🇮🇹' },
    { name: 'Rep. Checa', flag: '🇨🇿' },
    { name: 'Perú', flag: '🇵🇪' },
    { name: 'Brasil', flag: '🇧🇷' },
    { name: 'Uruguay', flag: '🇺🇾' },
    { name: 'Chile', flag: '🇨🇱' }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Experiencia <span className="text-turquoise-500">Internacional</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Más de 15 años liderando equipos y proyectos internacionales, construyendo la base perfecta para mi carrera en tecnología.
          </p>
        </div>

        {/* Countries worked */}
        <div className="mb-16 bg-gradient-to-r from-navy-900 to-charcoal-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-6">
            <Globe className="text-turquoise-500 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">Experiencia Global</h3>
            <p className="text-gray-200">Países donde he liderado operaciones y equipos</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2"
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="font-medium">{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-turquoise-500 via-gold-500 to-navy-500"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                    <span className="text-sm font-medium text-turquoise-600 bg-turquoise-50 px-3 py-1 rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{exp.role}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-charcoal-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-navy-700 mb-3">{exp.company}</h4>
                  <p className="text-charcoal-600 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-navy-900 mb-2">Logros Principales:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-sm">
                          <TrendingUp size={12} className="text-turquoise-500 mt-1 flex-shrink-0" />
                          <span className="text-charcoal-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-50 text-charcoal-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-turquoise-500 rounded-full flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <Users className="text-turquoise-500 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Liderazgo Transformacional</h3>
          <p className="text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Mi experiencia internacional me ha enseñado que la tecnología trasciende fronteras, y que liderar equipos diversos es clave para crear soluciones innovadoras que impacten globalmente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;