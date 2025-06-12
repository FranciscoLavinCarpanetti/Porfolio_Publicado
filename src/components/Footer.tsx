import React from 'react';
import { Heart, Code, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="text-2xl font-bold mb-4">
              Francisco<span className="text-turquoise-500">.</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer con experiencia internacional, combinando tecnología moderna con liderazgo empresarial.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tecnologías Principales</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {['Angular', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="bg-white/10 text-turquoise-400 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Disponibilidad</h3>
            <p className="text-gray-300 mb-2">
              <span className="text-turquoise-500">✓</span> Proyectos freelance
            </p>
            <p className="text-gray-300 mb-2">
              <span className="text-turquoise-500">✓</span> Posiciones full-time
            </p>
            <p className="text-gray-300">
              <span className="text-turquoise-500">✓</span> Consultoría técnica
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Hecho con</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>y</span>
              <Code className="text-turquoise-500" size={16} />
              <span>en España</span>
              <Globe className="text-gold-500" size={16} />
            </div>

            <p className="text-gray-300 text-sm">
              © {currentYear} Francisco Lavin Carpanetti. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;