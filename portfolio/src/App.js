import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'contact':
        return <Contact />;
      case 'home':
        return (
          <>
            <About />
            <SocialLinks />
            <Timeline />
          </>
        );
      case 'projects':
        return <Projects />;
      default:
        return (
          <>
            <About />
            <SocialLinks />
            <Timeline />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
