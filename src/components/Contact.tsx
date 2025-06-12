import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Configuración de EmailJS
      const serviceID = 'service_bgy90tb'; // Reemplaza con tu Service ID
      const templateID = 'template_t97gzkk'; // Reemplaza con tu Template ID
      const publicKey = 'md9V4iCCu99l0ZWpj'; // Reemplaza con tu Public Key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'francisco_javier_lavin@hotmail.com'
      };

      // Cargar EmailJS si no está cargado
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        document.head.appendChild(script);
        await new Promise(resolve => script.onload = resolve);
        window.emailjs.init(publicKey);
      }

      const response = await window.emailjs.send(serviceID, templateID, templateParams);
      
      if (response.status === 200) {
        setSubmitMessage('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }
  };

  // Función para descargar CV desde OneDrive
  const downloadCV = () => {
    const downloadUrl = 'https://onedrive.live.com/?cid=BAA6913BE7C34956&sb=name&sd=1&id=BAA6913BE7C34956%21s4c95cff01d8f4f598e9025648cdc07aa&parId=BAA6913BE7C34956%21s769c9ab932994316b534bee9184ab8a4&o=OneUp';
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Francisco_Javier_Lavin_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-turquoise-500" size={24} />,
      title: 'Email',
      value: 'francisco_javier_lavin@hotmail.com',
      href: 'mailto:francisco_javier_lavin@hotmail.com'
    },
    {
      icon: <Phone className="text-gold-500" size={24} />,
      title: 'Teléfono',
      value: '+34 685 33 59 96',
      href: 'tel:+34685335996'
    },
    {
      icon: <MapPin className="text-navy-500" size={24} />,
      title: 'Ubicación',
      value: 'Madrid - España',
      href: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/francisco-javier-lavin-carpanetti-ab4072205/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      href: 'https://github.com/FranciscoLavinCarpanetti',
      color: 'hover:text-gray-900'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      href: 'mailto:francisco_javier_lavin@hotmail.com',
      color: 'hover:text-turquoise-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-charcoal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-turquoise-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trabajemos <span className="text-turquoise-500">Juntos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto interesante? ¿Buscas un desarrollador con experiencia internacional? Me encantaría conocer más sobre tu visión y cómo puedo ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-turquoise-400 hover:text-turquoise-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-300">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Sígueme</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white/10 backdrop-blur-sm rounded-lg text-gray-300 transition-all transform hover:scale-110 hover:bg-white/20 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Download className="text-turquoise-500" size={24} />
                <span>Descarga mi CV</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Obtén información detallada sobre mi experiencia profesional y habilidades técnicas.
              </p>
              <button 
                onClick={downloadCV}
                className="bg-turquoise-500 hover:bg-turquoise-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Descargar CV (PDF)</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <MessageCircle className="text-turquoise-500" size={28} />
              <span>Envíame un mensaje</span>
            </h3>

            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitMessage.includes('error') || submitMessage.includes('Error') 
                  ? 'bg-red-500/20 border border-red-500 text-red-200' 
                  : 'bg-turquoise-500/20 border border-turquoise-500 text-turquoise-200'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                  Empresa (Opcional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto o cómo puedo ayudarte..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-turquoise-500 hover:bg-turquoise-600 disabled:bg-turquoise-400 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;