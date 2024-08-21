import React from "react";
import "../trabalho/index.css";
import { useNavigate } from "react-router-dom";

function Trabalho() {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Experiência Profissional</h2>
      <div className="job-item">
        <h3 className="job-title">NeoSupri</h3>
        <p className="job-function">Função: Estoquista/Separador</p>
        <p className="job-period">Data de Início: 10/11/2023 (Emprego Atual)</p>
      </div>
      <div className="job-item">
        <h3 className="job-title">VCI Brasil</h3>
        <p className="job-function">Função: Auxiliar de Produção / Auxiliar Químico</p>
        <p className="job-period">Período: 27/04/2021 a 25/09/2023</p>
      </div>
      <div className="job-item">
        <h3 className="job-title">Agrosolo</h3>
        <p className="job-function">Função: Repositor de Mercadorias</p>
        <p className="job-period">Período: 10/08/2020 a 22/04/2021</p>
      </div>
      <div className="job-item">
        <h3 className="job-title">Magic Tintas</h3>
        <p className="job-function">Função: Auxiliar de Estoque / Separação de Produtos</p>
        <p className="job-period">Período: 25/09/2019 a 17/04/2020</p>
      </div>
      <div className="job-item">
        <h3 className="job-title">Cine Araújo Bauru</h3>
        <p className="job-function">Função: Recepcionista / Atendimento ao Público (Menor Aprendiz)</p>
        <p className="job-period">Período: novembro/2018 a agosto/2019</p>
      </div>
    </div>
  );
}

export default Trabalho;
