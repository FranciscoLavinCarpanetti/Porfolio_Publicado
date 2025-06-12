import React from 'react';
import { Code, Database, Server, Wrench, Users as TeamIcon, Zap } from 'lucide-react';

const Technologies: React.FC = () => {
  const techCategories = [
    {
      title: 'Frontend',
      icon: <Code className="text-turquoise-500" size={24} />,
      color: 'from-turquoise-500 to-turquoise-600',
      technologies: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'TypeScript', level: 82 },
        { name: 'Angular', level: 85 },
        { name: 'React', level: 75 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="text-gold-500" size={24} />,
      color: 'from-gold-500 to-gold-600',
      technologies: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Express.js', level: 82 },
        { name: 'NestJS', level: 78 },
        { name: 'APIs RESTful', level: 88 },
        { name: 'JWT Authentication', level: 85 },
        { name: 'OAuth2', level: 75 },
        { name: 'Multer', level: 70 },
        { name: 'AWS S3', level: 72 }
      ]
    },
    {
      title: 'Bases de Datos',
      icon: <Database className="text-navy-500" size={24} />,
      color: 'from-navy-500 to-navy-600',
      technologies: [
        { name: 'MySQL', level: 92 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Microsoft SQL Server', level: 78 },
        { name: 'MariaDB', level: 45 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 60 },
        { name: 'Cassandra', level: 80 },
        { name: 'Amazon DynamoDB', level: 60 },
      ]
    },
    {
      title: 'Herramientas',
      icon: <Wrench className="text-turquoise-500" size={24} />,
      color: 'from-turquoise-500 to-navy-500',
      technologies: [
        { name: 'Git', level: 88 },
        { name: 'GitHub', level: 85 },
        { name: 'GitHub Actions', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Kubernetes', level: 52 },
        { name: 'AWS / GCP / Azure', level: 50 },
        { name: 'GraphQL', level: 67 },
        { name: 'Next.js / Nuxt.js', level: 70 },
        { name: 'Jest / Cypress / Playwright', level: 72 }
      ]
    },
    {
      title: 'Metodologías',
      icon: <TeamIcon className="text-gold-500" size={24} />,
      color: 'from-gold-500 to-gold-600',
      technologies: [
        { name: 'Scrum', level: 90 },
        { name: 'Kanban', level: 85 },
        { name: 'Jira', level: 80 },
        { name: 'Trello', level: 82 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Zap className="text-navy-500" size={24} />,
      color: 'from-navy-500 to-charcoal-700',
      technologies: [
        { name: 'Liderazgo', level: 95 },
        { name: 'Gestión de Equipos', level: 92 },
        { name: 'Pensamiento Estratégico', level: 90 },
        { name: 'Adaptabilidad', level: 88 },
        { name: 'Comunicación Internacional', level: 85 }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Stack <span className="text-turquoise-500">Tecnológico</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Domino un amplio conjunto de tecnologías modernas y metodologías ágiles, respaldado por años de experiencia en liderazgo y gestión de proyectos complejos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-charcoal-700">{tech.name}</span>
                      <span className="text-sm text-charcoal-500 font-medium">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${tech.level}%`,
                          animationDelay: `${techIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy-900 to-charcoal-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">En Constante Aprendizaje</h3>
          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
            La tecnología evoluciona rápidamente, y mantengo mi stack actualizado a través del aprendizaje continuo y la práctica constante con proyectos reales y desafiantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;