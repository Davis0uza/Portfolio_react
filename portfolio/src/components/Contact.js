import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles/Contact.css';
import ManImage from './photos/man.png';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleSendEmail = () => {
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;

    const fullMessage = `
    Enviado por: ${name} no website portfólio Davi Souza.

    ${body}
    `;

    window.location.href = `mailto:davitelmch@gmail.com?subject=${subject}&body=${encodeURIComponent(fullMessage)}`;
    setShowForm(false);
    setShowButton(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <motion.h1
          className="contact-title"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
         | Davi Souza |
        </motion.h1>
        <div className="contact-content">
          <motion.div
            className="contact-roles-container"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, staggerChildren: 0.2 }}
          >
            <p className="role">Software Developer |------ </p>
            <p className="role">Frontend Designer  |-----</p>
            <p className="role">Web Developer  |----</p>
            <p className="role">Designer  |---</p>
          </motion.div>
          <img src={ManImage} alt="Man" className="contact-image" />
        </div>
      </div>

      {showButton && (
        <motion.button
          className="contact-request-quote"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => {
            setShowForm(true);
            setShowButton(false);
          }}
        >
          Enviar Mensagem
        </motion.button>
      )}

      {showForm && (
        <motion.div
          className="contact-form-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Envie um e-mail</h3>
          <input
            type="text"
            id="name"
            placeholder="Seu nome"
            className="contact-input"
            required
          />
          <select id="subject" className="contact-select">
            <option value="Orçamento">Orçamento</option>
            <option value="Informação">Informação</option>
            <option value="Outro">Outro</option>
          </select>
          <textarea
            id="body"
            placeholder="Digite sua mensagem"
            className="contact-textarea"
          ></textarea>
          <motion.button
            className="contact-send-button"
            onClick={handleSendEmail}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.7 }}
          >
            Enviar
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
