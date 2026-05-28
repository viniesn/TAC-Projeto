import React, { useEffect, useState } from "react";

type Analise = {

  id: number;

  resultado: string;

  confianca: number;

  detalhes: string;

  dataAnalise: string;

  noticia: {
    titulo: string;
  };

};

const AnalisePage = () => {

  const [analises, setAnalises] = useState<Analise[]>([]);

  useEffect(() => {

    // depois conecta na API
  }, []);

  return (

    <div style={styles.container}>

      <h1>Resultados das Análises</h1>

      {analises.map((analise) => (

        <div key={analise.id} style={styles.card}>

          <h2>
            {analise.noticia?.titulo}
          </h2>

          <p>
            <strong>Resultado:</strong>{" "}
            {analise.resultado}
          </p>

          <p>
            <strong>Confiança:</strong>{" "}
            {analise.confianca}%
          </p>

          <p>
            <strong>Detalhes:</strong>{" "}
            {analise.detalhes}
          </p>

          <p>
            <strong>Data:</strong>{" "}
            {analise.dataAnalise}
          </p>

        </div>

      ))}

    </div>

  );
};

const styles = {

  container: {
    padding: "40px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },

  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

};

export default AnalisePage;