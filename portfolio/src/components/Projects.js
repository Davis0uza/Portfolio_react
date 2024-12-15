import React, { useState } from 'react';
import './styles/Projects.css';
import { FaDownload, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const projectCategories = {
    design: [
      {
        id: 5,
        title: 'Video Promocional Multiformato',
        category: 'Edição de Video',
        date: '13/04/2024',
        description: 'Vídeo promocional para a "4tech Team", uma loja online de chaves de jogos virtuais, realizado como parte da disciplina de Conteúdos Áudiovisuais 2 do curso de Tecnologias de Design e Multimédia da Escola Superior de Tecnologias de Viseu. Este trabalho demonstrou a capacidade de criar um vídeo promocional eficaz em diferentes formatos (16:9 , 9:16 , 1:1) para a empresa. A aplicação dos conhecimentos adquiridos na disciplina de Conteúdos Audiovisuais 2 foi fundamental para o sucesso do projeo.',
        images: [
          require('./photos/vp/16por9.mp4'),
          require('./photos/vp/9p16.mp4'),
          require('./photos/vp//1por1.mp4'), 
        ],
        mainImage: require('./photos/vp/vp.png'),
        dbutton:'Download',
        link:'https://estgv-my.sharepoint.com/:f:/g/personal/estgv18701_alunos_estgv_ipv_pt/EjkqmzFdTJdEocd3QMXZyvUBGM9-oHXsKR_x-uauiB8rZg?e=W1GX5z'
      },
      {
        id: 4,
        title: 'Curta Metragem',
        category: 'Realização, Edição de Video',
        date: '17/03/2024',
        description: 'Esta Curta foi realizada no contexto da disciplina de Conteúdos Áudiovisuais 2. A curta retrata um episódio de um jovem estudante que passa por uma experiência inacreditavel e paranormal.',
        images: [
          require('./photos/edtlogo.png'),
          require('./photos/ecosdotempo.png'),
        ],
        mainImage: require('./photos/edtlogo.png'),
        dbutton:'Ver na Drive',
        link:'https://estgv-my.sharepoint.com/:f:/g/personal/estgv18701_alunos_estgv_ipv_pt/EugbZdQzxCxOsdA2nHLo4nEB8lnvZw1xNA91kXO8D6GUCg?e=ot8jV1'
      },
      {
        id: 3,
        title: 'Doçes Ese',
        category: 'Rebranding, Design, Gestão de Redes Socíais',
        date: '19/05/2023',
        description: 'No âmbito da disciplina de Projeto 1, foi criada a marca fictícia "ESE", destacando os rebuçados como produto principal. Para promover a marca, foram desenvolvidos conteúdos para redes sociais, incluindo Instagram, YouTube e TikTok, com foco em vídeos criativos e uma comunicação visual atrativa. O projeto envolveu também a produção de cartazes promocionais e a gestão integrada das plataformas digitais, consolidando a identidade da marca e a sua ligação ao público-alvo.',
        images: [
          require('./photos/ese/POSTER.jpg'),
          require('./photos/ese/socialmedia.png'),
          require('./photos/ese/cartaz1.jpg'),
          require('./photos/ese/cartaz2.jpg'),
          require('./photos/ese/timeline.png'),
        ],
        mainImage: require('./photos/ese/POSTER.jpg'),
        dbutton:'Linktree',
        link:'https://linktr.ee/E_SE?fbclid=PAZXh0bgNhZW0CMTEAAaaIxmRvwJ1s_Mtvie5Jiv8s2orYKeTOdHx29XjLwrvSSwrBTxSdHCWh3Ik_aem_Qkkwh_pXnz4a9B9u2qsENA'
      },
      {
        id: 2,
        title: 'Manual de Identidade',
        category: 'Design e Rebranding',
        date: '25/04/2022',
        description: 'Este guia abrangente foi criado para assegurar uma aplicação consistente e eficaz da identidade visual da VERDECOR em todos os aspetos da sua comunicação. Aqui encontrarás diretrizes detalhadas sobre a identidade da marca, incluindo cores, tipografia, aplicação de logótipos e elementos gráficos. Esforçamo-nos por transmitir a essência da VERDECOR através de um design visual coerente e envolvente. Além disso, apresentamos exemplos práticos que demonstram a aplicação da marca em diversos contextos, ajudando a ilustrar a sua versatilidade e impacto. Este manual é uma ferramenta essencial para manter a integridade e o reconhecimento da marca VERDECOR em todos os canais de comunicação',
        images: [
          require('./photos/verdecor/placa.png'),
          require('./photos/verdecor/indice.png'),
          require('./photos/verdecor/logo.png'),
          require('./photos/verdecor/copo.png'),
        ],
        mainImage: require('./photos/verdecor/placa.png'),
        dbutton:'Ler PDF Online',
        link:'https://estgv-my.sharepoint.com/:f:/g/personal/estgv18701_alunos_estgv_ipv_pt/EhJbwGv5qFFKiu1w8RDMI-gBMhmXecuf38RUEMFpYycafA?e=sBJbt3'
      },
     /* {
        id: 1,
        title: 'Cartaz de Evento',
        category: 'Design',
        date: '13/04/2024',
        description: 'Vídeo promocional para a "4tech Team", uma loja online de chaves de jogos virtuais, realizado como parte da disciplina de Conteúdos Audiovisuais 2 do curso de Tecnologias de Design e Multimédia da Escola Superior de Tecnologias de Viseu. Este trabalho demonstrou a capacidade de criar um vídeo promocional eficaz em diferentes formatos (16:9 , 9:16 , 1:1) para a empresa. A aplicação dos conhecimentos adquiridos na disciplina de Conteúdos Audiovisuais 2 foi fundamental para o sucesso do projeo.',
        images: [
          require('./photos/vp/16por9.mp4'),
          require('./photos/vp/9p16.mp4'),
          require('./photos/vp//1por1.mp4'), 
        ],
        mainImage: require('./photos/vp/vp.png'),
        link:'https://estgv-my.sharepoint.com/:f:/g/personal/estgv18701_alunos_estgv_ipv_pt/EjkqmzFdTJdEocd3QMXZyvUBGM9-oHXsKR_x-uauiB8rZg?e=W1GX5z'
      },*/
    ],
    softwareDev: [
      {
        id: 9,
        title: 'Website e Aplicação para Olheiros',
        category: 'React, Flutter, Webservices',
        date: 'Atualmente a Desenvolver',
        description: 'O principal objetivo deste projeto é desenvolver e implementar uma plataforma digital que permita aos olheiros de futebol do Sport Club Académico de Viseu acompanhar e avaliar jogadores de forma eficiente, com foco nos talentos mais promissores. A plataforma será composta por três componentes principais: Portal BackOffice, Aplicação, Site Promocional para Download',
        images: [
          require('./photos/app/app.png'),
          require('./photos/app/git.png'),
        ],
        mainImage: require('./photos/app/app.png'),
        dbutton:'GitHub (Projeto Privado)',
        link:''
      },     
      {
        id: 7,
        title: 'Protótipo Website para Olheiros',
        category: 'Prototipagem e Frontend Design',
        date: 'Atualmente a Desenvolver',
        description: 'Carregue em Abrir Protótipo Online para visitar o protótipo e navegar pelas páginas.',
        images: [
          require('./photos/app/webhome.png'),
          require('./photos/app/webrel.png'),
          require('./photos/app/webclubes.png'),
          require('./photos/app/webscoutters.png'),
        ],
        mainImage: require('./photos/app/webhome.png'),
        dbutton:'Usar Protótipo Online',
        link:'https://www.figma.com/proto/wbQl3WufZeqLOeTB2upKRn/Prototipo-alta-fidelidade?node-id=210-306&node-type=canvas&t=MQWiobx4UpCJX6kV-1&scaling=scale-down&content-scaling=fixed&page-id=210%3A270&starting-point-node-id=293%3A926'
      },
      {
        id: 8,
        title: 'Prototipo Aplicação para Olheiros',
        category: 'Prototipagem e Frontend Design',
        date: 'Atualmente a Desenvolver',
        description: 'Carregue em Abrir Protótipo Online para visitar o protótipo e navegar pelas páginas. Registo não necessário, avance apertando no log in.',
        images: [
          require('./photos/app/apphome.png'),
          require('./photos/app/apphistorico.png'),
        ],
        mainImage: require('./photos/app/apphome.png'),
        dbutton:'Usar Protótipo Online',
        link:'https://www.figma.com/proto/wbQl3WufZeqLOeTB2upKRn/Prototipo-alta-fidelidade?node-id=267-403&node-type=canvas&t=tEDrSgLZnpq1gs7n-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=267%3A403'
      },
     /*
      {
        id: 5,
        title: 'Website de Vendas e Gestão',
        category: 'React, Data Manegemant',
        date: 'Atualmente em Progresso',
        description: 'Descrição detalhada do projeto.',
        images: [
          require('./photos/app/apphome.png'),
          require('./photos/app/apphistorico.png'),
        ],
        mainImage: require('./photos/app/apphome.png'),
        dbutton:'Acesse ao GitHub',
        link:'https://github.com/Davis0uza/Versao2'
      },*/
      {
        id: 4,
        title: 'Jogo Habitat da Raposa',
        category: 'Prototipagem e Frontend Design',
        date: '14/06/2024',
        description: 'Desenvolvi um jogo temático sobre o habitat das raposas, um desafio simples e provocador onde o jogador coleta objetos no mapa enquanto procura a saída. Com uma jogabilidade desafiante, o jogo promete testar a paciência até dos mais experientes, mas, para os novatos, fica a garantia: "Sim! É possível passar de nível." O projeto foi criado em **Unity2D**, utilizando **C#** como linguagem principal. Foram integrados recursos gratuitos do **Unity Assets**, como o pacote **Sunnylands**, para cenários e personagens. A programação envolveu a gestão de níveis, mapeamento da HUD e um gestor do jogo para controlar a lógica central. Para enriquecer a experiência, também foi adicionada uma trilha sonora.',
        images: [
          require('./photos/rap/raphome.png'),
          require('./photos/rap/rapkeys.png'),
          require('./photos/rap/raphow.png'),
          require('./photos/rap/rap1.png'),
          require('./photos/rap/rap2.png'),
        ],
        mainImage: require('./photos/rap/raphome.png'),
        dbutton:'Jogar Agora Online',
        link:'http://193.137.7.33/~aluno18701/HabitatdaRaposa%201.1/'
      },
      {
        id: 2,
        title: 'SmartShop para Eventos',
        category: 'Prototipagem e Frontend Design',
        date: '17/04/2024',
        description: 'No âmbito da disciplina de Conteúdos Interativos 2, desenvolvi um projeto em Unity2D utilizando C#, que consiste num SmartShop interativo voltado para eventos. A aplicação é multinível e oferece funcionalidades como um sistema de carrinho de compras, uma galeria de imagens e vídeos dos produtos e uma página dedicada a classificações',
        images: [
          require('./photos/ss/sshome.png'),
          require('./photos/ss/ssgallery.png'),
          require('./photos/ss/ssshop.png'),
        ],
        mainImage: require('./photos/ss/sshome.png'),
        dbutton:'Visitar Aplicação',
        link:'http://193.137.7.33/~aluno18701/Tarefa%20Pratica%202/Build/'
      },
      {
        id: 1,
        title: 'Website de Minijogos/Fichas',
        category: 'Prototipagem e Frontend Design',
        date: '29/03/2024',
        description: 'No contexto da disciplina de Conteúdos Interativos 2, desenvolvi um website que reúne um conjunto de minijogos criados com base nas fichas práticas realizadas em aula.',
        images: [
          require('./photos/minijogos.png'),
        ],
        mainImage: require('./photos/minijogos.png'),
        dbutton:'Visitar Website',
        link:'http://193.137.7.33/~aluno18701/Portefolio/'
       },
      {
        id: 0,
        title: 'GAPA projeto para Softinsa (IBM)',
        category: 'Java, ASP.NET, C#, HTML, JAVASCRIPT',
        date: 'Atualmente em Progresso',
        description: 'Projeto GAPA (Gestão de Acesso a Parque de Automóveis). Uma app móvel para Android, que permite ao utilizador abrir o portão do parque de estacionamento (Java, Webservices) em conjunto com um WebSite de Administração para acesso as câmeras de segurança e logs de entradas e saídas do parque (C#, ASPX, CSS, HTML, Javascript, Webservices e integração com o software das câmeras). Controle de portões com Raspberry Pi (Phyton, Webservices).',
        images: [
          require('./photos/GAPA.png'),
        ],
        mainImage: require('./photos/GAPA.png'),
        dbutton:'Acesse ao GitHub',
        link:'https://github.com/Davis0uza/GAPA'
      },

      
    ],
  };

  const [activeCategory, setActiveCategory] = useState('softwareDev');
  const [selectedProject, setSelectedProject] = useState(projectCategories.softwareDev[0]);
  const [mainMediaIndex, setMainMediaIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const firstProject = projectCategories[category][0];
    setSelectedProject(firstProject);
    setMainMediaIndex(0);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setMainMediaIndex(0);
  };

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const navigateLeft = () => {
    setMainMediaIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  const navigateRight = () => {
    setMainMediaIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderMedia = (media) => {
    if (media.endsWith('.mp4')) {
      return <video src={media} controls autoPlay className="main-media" />;
    }
    return <img src={media} alt="Gallery" className="main-media" />;
  };

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2
          className={`category ${activeCategory === 'softwareDev' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('softwareDev')}
        >
          Developer
        </h2>
        <h2>|</h2>
        <h2
          className={`category ${activeCategory === 'design' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('design')}
        >
          Design
        </h2>
      </div>
      <div className="projects-container">
        {/* Lista de Projetos */}
        <div className="projects-list">
          {projectCategories[activeCategory].map((project) => (
            <div
              key={project.id}
              className={`project-item ${
                selectedProject.id === project.id ? 'active' : ''
              }`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-thumbnail-container">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="project-thumbnail"
                />
              </div>
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.category}</p>
                <p>Realizado em: {project.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detalhes do Projeto */}
        <div className="project-details">
          <div className="main-image-container" onClick={openModal}>
            {renderMedia(selectedProject.images[mainMediaIndex])}
          </div>
          <div className="project-gallery-container">
            {selectedProject.images.map((image, index) => (
              <div
                key={index}
                className="gallery-image-container"
                onClick={() => setMainMediaIndex(index)}
              >
                {image.endsWith('.mp4') ? (
                  <img
                    src={require('./photos/video-default.png')}
                    alt="Miniatura de Vídeo"
                    className="gallery-image"
                  />
                ) : (
                  <img
                    src={image}
                    alt={`Imagem ${index + 1}`}
                    className="gallery-image"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="project-info-section">
            <h3 className="project-title">{selectedProject.title}</h3>
            <div className="project-subcategory">
              <p>{selectedProject.category}</p>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                <button className="download-button">
                  <FaDownload className="icon" />
                  {selectedProject.dbutton}
                </button>
              </a>
            </div>
            <p className="project-description">{selectedProject.description}</p>
            <p className="project-date">Publicado em: {selectedProject.date}</p>
          </div>
        </div>
      </div>

      {/* Modal do Player */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-button" onClick={closeModal}>
              <FaTimes />
            </button>
            <button className="modal-nav-button left" onClick={navigateLeft}>
              <FaChevronLeft />
            </button>
            {renderMedia(selectedProject.images[mainMediaIndex])}
            <button className="modal-nav-button right" onClick={navigateRight}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
