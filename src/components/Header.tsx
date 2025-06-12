import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Tecnologías', href: '#technologies' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
   // Función para descargar CV desde OneDrive
  const downloadCV = () => {
    // Enlace directo de descarga de OneDrive
    const downloadUrl = 'https://onedrive.live.com/?id=BAA6913BE7C34956%21s4c95cff01d8f4f598e9025648cdc07aa&cid=BAA6913BE7C34956&parId=BAA6913BE7C34956%21s769c9ab932994316b534bee9184ab8a4&o=OneUp&ls=true';
    
    // Crear elemento temporal para descarga
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Francisco_Lavin_CV.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-navy-900">
            Francisco<span className="text-turquoise-500">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-charcoal-700 hover:text-turquoise-500 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-4 ml-6">
              <a
                href="mailto:francisco_javier_lavin@hotmail.com"
                className="text-charcoal-600 hover:text-turquoise-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-javier-lavin-carpanetti-ab4072205/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-600 hover:text-turquoise-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/FranciscoLavinCarpanetti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-600 hover:text-turquoise-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <button className="bg-turquoise-500 text-white px-4 py-2 rounded-lg hover:bg-turquoise-600 transition-colors flex items-center space-x-2">
                <Download size={16} />
                <span>CV</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-charcoal-700 hover:text-turquoise-500 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t">
              <a
                href="mailto:francisco.lavin@example.com"
                className="text-charcoal-600 hover:text-turquoise-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/franciscolavin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-600 hover:text-turquoise-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/franciscolavin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-600 hover:text-turquoise-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <button className="bg-turquoise-500 text-white px-4 py-2 rounded-lg hover:bg-turquoise-600 transition-colors flex items-center space-x-2">
                <Download size={16} />
                <span>CV</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;