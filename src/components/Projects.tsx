import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Smartphone, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con gestión de inventario, pagos y dashboard administrativo.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      type: 'Full Stack',
      icon: <Globe className="text-turquoise-500" size={24} />,
      features: [
        'Autenticación y autorización completa',
        'Carrito de compras dinámico',
        'Panel de administración',
        'Integración de pagos',
        'Gestión de inventario en tiempo real'
      ],
      github: 'https://github.com/FranciscoLavinCarpanetti/proyecto_green_shop',
      demo: 'https://ecommerce-demo.franciscolavin.dev'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Sistema de gestión de tareas para equipos con metodologías ágiles, similar a Jira pero simplificado.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Tailwind CSS'],
      type: 'Full Stack',
      icon: <Code className="text-gold-500" size={24} />,
      features: [
        'Tableros Kanban interactivos',
        'Gestión de sprints',
        'Asignación de tareas por equipo',
        'Reportes de productividad',
        'Notificaciones en tiempo real'
      ],
      github: 'https://github.com/FranciscoLavinCarpanetti/api-store',
      demo: 'https://tasks.franciscolavin.dev'
    },
    {
      id: 3,
      title: 'Real Estate Dashboard',
      description: 'Dashboard para gestión inmobiliaria con análisis de mercado, visualización de datos y CRM integrado.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Chart.js', 'AWS S3'],
      type: 'Full Stack',
      icon: <Database className="text-navy-500" size={24} />,
      features: [
        'Visualización avanzada de datos',
        'CRM para clientes y propiedades',
        'Análisis de tendencias de mercado',
        'Subida de imágenes a la nube',
        'Reportes automatizados'
      ],
      github: 'https://github.com/franciscolavin/realestate-dashboard',
      demo: 'https://realestate.franciscolavin.dev'
    },
    {
      id: 4,
      title: 'Mobile Finance Tracker',
      description: 'Aplicación móvil para seguimiento de finanzas personales con categorización automática y análisis predictivo.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Express.js', 'MongoDB', 'JWT', 'Chart.js'],
      type: 'Mobile',
      icon: <Smartphone className="text-turquoise-500" size={24} />,
      features: [
        'Sincronización bancaria',
        'Categorización inteligente',
        'Análisis de gastos',
        'Alertas personalizadas',
        'Exportación de reportes'
      ],
      github: 'https://github.com/franciscolavin/finance-tracker',
      demo: 'https://finance.franciscolavin.dev'
    },
    {
      id: 5,
      title: 'International Sales CRM',
      description: 'CRM especializado para ventas internacionales con gestión multimoneda y equipos distribuidos.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'NestJS', 'MySQL', 'Docker', 'AWS'],
      type: 'Enterprise',
      icon: <Globe className="text-gold-500" size={24} />,
      features: [
        'Gestión multimoneda',
        'Pipeline de ventas visual',
        'Integración con APIs de terceros',
        'Reportes ejecutivos',
        'Gestión de territorios globales'
      ],
      github: 'https://github.com/FranciscoLavinCarpanetti/python',
      demo: 'https://crm.franciscolavin.dev'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Mis <span className="text-turquoise-500">Proyectos</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Una selección de proyectos que demuestran mi experiencia en desarrollo Full Stack, desde aplicaciones web hasta soluciones empresariales complejas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 bg-navy-900/80 text-white text-xs px-3 py-1 rounded-full">
                  {project.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">{project.title}</h3>
                <p className="text-charcoal-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-turquoise-50 text-turquoise-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-charcoal-600 text-xs px-3 py-1 rounded-full">
                      +{project.technologies.length - 3} más
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-charcoal-600 hover:text-navy-900 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-turquoise-500 hover:text-turquoise-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={16} className="rotate-45" />
                      </button>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        {project.icon}
                        <h3 className="text-3xl font-bold text-navy-900">{project.title}</h3>
                      </div>

                      <p className="text-charcoal-600 mb-6 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-navy-900 mb-3">Características Principales</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-turquoise-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-charcoal-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-navy-900 mb-3">Tecnologías Utilizadas</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-turquoise-50 text-turquoise-700 px-4 py-2 rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-navy-900 text-white px-6 py-3 rounded-lg hover:bg-navy-800 transition-colors"
                        >
                          <Github size={20} />
                          <span>Ver Código</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-turquoise-500 text-white px-6 py-3 rounded-lg hover:bg-turquoise-600 transition-colors"
                        >
                          <ExternalLink size={20} />
                          <span>Ver Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;