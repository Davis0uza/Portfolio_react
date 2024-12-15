import React, { useEffect, useState } from 'react';
import './styles/Header.css';

const Header = ({ setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <h1 className="logo" onClick={() => setActiveSection('home')}>Portfólio</h1>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection('home');
              }}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection('projects');
              }}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection('contact');
              }}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
