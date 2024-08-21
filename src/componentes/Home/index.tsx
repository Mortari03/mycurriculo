import React from "react";
import './index.css';
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Vitor Venancio Mortari</h1>
      <section className="contact-info">
        <p>E-mail: <a href="mailto:vitormortari0@gmail.com">vitormortari0@gmail.com</a></p>
        <p>Telefone (WhatsApp): <a href="tel:+5514991075513">(14) 99107-5513</a></p>
        <p>GitHub: <a href="https://github.com/Mortari03" target="_blank" rel="noopener noreferrer">github.com/Mortari03</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/vitor-mortari-a3a5011a7/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vitor-mortari-a3a5011a7/</a></p>
      </section>
      <div className="button-group">
        <button onClick={() => window.location.href = "/cursos"}>Cursos</button>
        <button onClick={() => window.location.href = "/trabalho"}>Experiência Profissional</button>
      </div>
    </div>
  );
}

export default Home;
