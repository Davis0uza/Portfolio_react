import React from 'react';
import './styles/About.css';
import profilePicture from './photos/profile.jpg';

const About = () => (
  <section id="about" className="about-section">
    
    <div className="about-container">
      <img src={profilePicture} alt="Perfil" className="profile-picture" />
      <div className="about-details">
        <h2>Davi Souza</h2>
        <h4>Software Developer and Designer</h4>
        <h5>
        Prestes a concluir a licenciatura em Tecnologias de Design e Multimédia,
        busco uma oportunidade de emprego para expandir minha carreira na área tecnológica.<p></p>
        Com experiência profissional diversificada e gosto em ser proativo, procuro um 
        ambiente de trabalho que permita desesnvolver as competências informáticas adquiridas 
        ao longo da minha formação, refletindo o interesse pela tecnologia desde jovem.
        </h5>
        <p><strong>Data de Nascimento:</strong> 18/02/1999</p>
        <p><strong>Reside em:</strong> Viseu, Portugal</p>
      </div>
    </div>
  </section>
);

export default About;
