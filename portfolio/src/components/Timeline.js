import React, { useState } from 'react';
import './styles/Timeline.css';

const experiences = [
  {
    year: "2021-Presente",
    company: "Tecnologias e Design de Multimédia",
    role: "Estudante Universitário",
    location: "Viseu, Portugal",
    description: "Desenvolvimento de aplicações (C#, Flutter, Android Studio); Design e Prototipagem de Aplicações e Websites (Figma); Desenvolvimento de Websites ( HTML, CSS, Javascript, React, Node.js, Axios); Base de dados (SQL, PowerDesigner, Postgresql, MongoDb); Webservices (XML, JSON, YMAL), Desenvolvimento de jogos (Unity, C#); Animação e Modelação 3D (Adobe Character Animator, Blender); Rebranding e Gestão de Redes Socias; Outdoors, Cartazes, Mupi, flyers, cartões de negócios (Photoshop, Illustrator); Edição de Vídeo (Realização, Gravação, Edição, Pós Edição)",
    duration: "Desde 2021, presente e a concluir.",
  },
  {
    year: "2020-2021",
    company: "Engenharia Informática",
    role: "Reentrada no Ensino Superior",
    location: "Viseu, Portugal",
    description: "Retorno aos estudos superiores em Engenharia Informática.",
    duration: "Início de 2020 até transferência em 2021",
  },
  {
    year: "2019-2020",
    company: "ZT Systems",
    role: "Manutenção e Configuração de Servidores",
    location: "Almelo, Holanda",
    description:
    "Diagnostico de máquinas; Resolução de conflitos entre software e hardware; Instalação e configuração de servidores. (MS-DOS e Linux)",
    duration: "6 meses, final de 2019 a início de 2020",
  },
  {
    year: "2018",
    company: "Incoveca Granitos SA",
    role: "Gestor da Linha de Montagem",
    location: "Caparrosa, Viseu, Portugal",
    description:
      "Controle do material que entra na linha de montagem; Controle e supervisão de maquinas da linha de montagem, registava avarias, consertava problemas mais simples, reiniciava as maquinas quando necessário; Transporte de objetos através de grua de teto.",
    duration: "3 meses, Verão de 2018",
  },
  {
    year: "2017-2018",
    company: "ManpowerGroup",
    role: "Telemarketing / Venda de Produtos Meo",
    location: "Coimbra, Portugal",
    description:
      "Formação de 1 mês sobre atendimento ao cliente e venda de produtos Meo; Venda de Produtos Meo.",
    duration: "6 meses, final de 2017 e início de 2018",
  },
  {
    year: "2017",
    company: "Softinsa IBM",
    role: "Desenvolvedor de Software",
    location: "Viseu, Portugal",
    description:
      "Desenvolvimento do Projeto GAPA (Gestão de Acesso a Parque de Automóveis); Um aplicativo móvel para Android, que permite ao utilizador abrir o portão do parque de estacionamento (Java, Webservices); WebSite de Administração para acesso as câmeras de segurança e logs de entradas e saídas do parque (C#, ASPX, CSS, HTML, Javascript, Webservices e integração com o software das câmeras); Controle de portões com Raspberry Pi (Phyton, Webservices); Montagem e Configuração da rede da sala, situada na Escola Superior de Tecnologias em Viseu",
    duration: "400 Horas, Estágio em 2017",
  },
  {
    year: "2016",
    company: "Clínica Rádio Popular",
    role: "Diagnóstico e Manutenção de Aparelhos Eletrônicos",
    location: "Viseu, Portugal",
    description:
      "Diagnostico e manutenção de aparelhos eletrônicos tais como telemóveis e computadores; Recuperação de dados de aparelhos como discos e pens; Assistência a venda de produtos",
    duration: "400 Horas, Estágio em 2016",
  },
]



const Timeline = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section id="timeline" className="timeline-section">
      <h2>Experiência Profissional</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div
              className={`timeline-company ${
                selected === index ? 'expanded' : ''
              }`}
              onClick={() => handleSelect(index)}
            >
              <button>{exp.company}<p><strong>Cargo:</strong> {exp.role}</p></button>
              {selected === index && (
                <div className="timeline-details">
                  <p><strong>Local:</strong> {exp.location}</p>
                  <p><strong>Descrição:</strong> {exp.description}</p>
                  <p><strong>Duração:</strong> {exp.duration}</p>
                </div>
              )}
            </div>
            <div className="timeline-year">{exp.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;