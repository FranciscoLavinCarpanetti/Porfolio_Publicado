import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;