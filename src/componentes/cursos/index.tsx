import React from "react";
import { useNavigate } from "react-router-dom";
import "../cursos/index.css"

function Cursos() {
  return (
    <div className="conteiner-pai">
      <div className="courses-container">
        <h2 className="courses-title">Cursos Complementares</h2>

        <div className="course-item">
          <h3 className="course-title">Curso Desenvolvedor Full-Stack</h3>
          <p className="course-info">Instituição: SENAC Bauru</p>
          <p className="course-info">Início: 23 de abril (em andamento)</p>
        </div>

        <div className="course-item">
          <h3 className="course-title">Curso Técnico de Hardware</h3>
          <p className="course-info">Instituição: Microcamp Bauru</p>
          <p className="course-info">Período: 2015 a 2017</p>
        </div>

        <div className="course-item">
          <h3 className="course-title">Curso de Aprendizagem</h3>
          <p className="course-info">Instituição: SENAC Bauru</p>
          <p className="course-info">Período: novembro/2018 a agosto/2019</p>
        </div>
      </div>
    </div>
  );
}

export default Cursos;