import React from 'react';
import './styles/SocialLinks.css';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <section className="social-links-section">
      <div className="social-links-container">
        <a href="https://github.com/Davis0uza" target="_blank" rel="noopener noreferrer" className="button">
          <FaGithub className="icon" />
          GitHub
        </a>
        <a href="https://linkedin.com/in/zawwy" target="_blank" rel="noopener noreferrer" className="button">
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
        <a href="/cv.pdf" download className="button">
          <FaDownload className="icon" />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
