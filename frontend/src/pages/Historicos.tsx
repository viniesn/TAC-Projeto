import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Analise {
  id: number;
  titulo: string;
  fonte: string;
  status: string;
  confiabilidade: number;
}

const Historico: React.FC = () => {
  const [historico, setHistorico] = useState<Analise[]>([]);

// Depois colocar a conexão com a API

  return (
    <div style={styles.container}>
      <h1> Histórico de Análises</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Fonte</th>
            <th>Status</th>
            <th>Confiabilidade</th>
          </tr>
        </thead>

        <tbody>
          {historico.map((item) => (
            <tr key={item.id}>
              <td>{item.titulo}</td>
              <td>{item.fonte}</td>
              <td>{item.status}</td>
              <td>{item.confiabilidade}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/" style={styles.botao}>
        ← Voltar
      </Link>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #296bc2, #1b3f70)",
    color: "white",
    padding: "30px",
  },

  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse" as const,
    backgroundColor: "rgba(255,255,255,0.1)",
  },

  botao: {
    display: "inline-block",
    marginTop: "20px",
    padding: "5px 8px",
    backgroundColor: "#1b3f70",
    color: "white",
    textDecoration: "none",
    borderRadius: "px",
  },
};

export default Historico;