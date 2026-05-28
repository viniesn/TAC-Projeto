import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Tendencia = {
  id: number;

  noticia: {
    id?: number;
    titulo: string;
    status?: string;
    categoria?: string;
  };

  quantidadeAcessos: number;
  quantidadeBuscas: number;
};

const TendenciasPage = () => {

  const [tendencias, setTendencias] =
    useState<Tendencia[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [pesquisa, setPesquisa] =
    useState("");

  const [ordenacao, setOrdenacao] =
    useState("acessos");

  const navigate = useNavigate();

  useEffect(() => {

    buscarTendencias();

  }, []);

  const buscarTendencias = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/tendencias"
      );

      const data = await response.json();

      setTendencias(data);

    } catch (error) {

      console.error(
        "Erro ao buscar tendências:",
        error
      );

    } finally {

      setLoading(false);

    }

  };

  const acessarNoticia = async (
    id: number
  ) => {

    try {

      await fetch(
        `http://localhost:8080/tendencias/${id}/acesso`,
        {
          method: "PUT",
        }
      );

      navigate(`/noticia/${id}`);

    } catch (error) {

      console.error(
        "Erro ao acessar notícia:",
        error
      );

    }

  };

  const tendenciasFiltradas =
    tendencias.filter((item) =>
      item.noticia?.titulo
        .toLowerCase()
        .includes(
          pesquisa.toLowerCase()
        )
    );

  const tendenciasOrdenadas =
    [...tendenciasFiltradas].sort(
      (a, b) => {

        if (
          ordenacao === "acessos"
        ) {

          return (
            b.quantidadeAcessos -
            a.quantidadeAcessos
          );

        }

        return (
          b.quantidadeBuscas -
          a.quantidadeBuscas
        );

      }
    );

  const obterCorStatus = (
    status?: string
  ) => {

    switch (status) {

      case "Fake News":
        return "#ff4d4f";

      case "Confiável":
        return "#52c41a";

      default:
        return "#faad14";

    }

  };

  return (

    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>

        <button
          style={styles.botaoVoltar}
          onClick={() =>
            navigate("/")
          }
        >
          ←
        </button>

        <h1 style={styles.titulo}>
          🔥 Tendências
        </h1>

      </div>

      {/* ESTATÍSTICAS */}
      <div style={styles.estatisticas}>

        <div style={styles.cardEstatistica}>

          <h2>
            {tendencias.length}
          </h2>

          <p>
            Tendências
          </p>

        </div>

        <div style={styles.cardEstatistica}>

          <h2>

            {tendencias.reduce(
              (total, item) =>
                total +
                item.quantidadeAcessos,
              0
            )}

          </h2>

          <p>
            Total de acessos
          </p>

        </div>

        <div style={styles.cardEstatistica}>

          <h2>

            {tendencias.reduce(
              (total, item) =>
                total +
                item.quantidadeBuscas,
              0
            )}

          </h2>

          <p>
            Total de buscas
          </p>

        </div>

      </div>

      {/* PESQUISA + FILTRO */}
      <div style={styles.topBar}>

        <input
          type="text"
          placeholder="Pesquisar tendência..."
          value={pesquisa}
          onChange={(e) =>
            setPesquisa(
              e.target.value
            )
          }
          style={styles.inputPesquisa}
        />

        <select
          value={ordenacao}
          onChange={(e) =>
            setOrdenacao(
              e.target.value
            )
          }
          style={styles.select}
        >

          <option value="acessos">
            Mais acessadas
          </option>

          <option value="buscas">
            Mais buscadas
          </option>

        </select>

      </div>

      {/* LOADING */}
      {loading && (

        <p style={styles.loading}>
          Carregando tendências...
        </p>

      )}

      {/* SEM DADOS */}
      {!loading &&
        tendenciasOrdenadas.length === 0 && (

        <div style={styles.emptyBox}>
          Nenhuma tendência encontrada.
        </div>

      )}

      {/* LISTA */}
      <div style={styles.lista}>

        {tendenciasOrdenadas.map(
          (item, index) => (

            <div
              key={item.id}

              style={styles.card}

              onClick={() =>
                acessarNoticia(
                  item.id
                )
              }

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  "translateY(-8px)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  "translateY(0px)";

              }}
            >

              {/* TOP */}
              <div style={styles.topoCard}>

                <span style={styles.badge}>
                  🔥 TOP {index + 1}
                </span>

              </div>

              {/* TÍTULO */}
              <h2 style={styles.tituloCard}>
                {item.noticia?.titulo}
              </h2>

              {/* CATEGORIA */}
              <p style={styles.categoria}>
                📂 {
                  item.noticia
                    ?.categoria ||
                  "Geral"
                }
              </p>

              {/* STATUS */}
              <div
                style={{
                  ...styles.status,
                  backgroundColor:
                    obterCorStatus(
                      item.noticia
                        ?.status
                    ),
                }}
              >

                {
                  item.noticia
                    ?.status ||
                  "Em análise"
                }

              </div>

              {/* INFO */}
              <div style={styles.infoContainer}>

                <div style={styles.infoBox}>

                  <span style={styles.label}>
                    👁 Acessos
                  </span>

                  <strong style={styles.valor}>
                    {
                      item.quantidadeAcessos
                    }
                  </strong>

                </div>

                <div style={styles.infoBox}>

                  <span style={styles.label}>
                    🔎 Buscas
                  </span>

                  <strong style={styles.valor}>
                    {
                      item.quantidadeBuscas
                    }
                  </strong>

                </div>

              </div>

              {/* BARRA */}
              <div style={styles.barraContainer}>

                <div
                  style={{
                    ...styles.barra,

                    width: `${Math.min(
                      item.quantidadeAcessos / 15,
                      100
                    )}%`,
                  }}
                />

              </div>

              {/* BOTÃO */}
              <button
                style={
                  styles.botaoDetalhes
                }
              >
                Ver detalhes
              </button>

            </div>

          )
        )}

      </div>

    </div>
  );

};

const styles = {

  container: {
    padding: "40px",
    backgroundColor: "#f5f7fb",
    minHeight: "100vh",
    fontFamily:
      "Arial, sans-serif",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
  },

  titulo: {
    fontSize: "38px",
    color: "#0E36E3",
    fontWeight: "bold",
    margin: 0,
  },

  botaoVoltar: {
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    backgroundColor: "#0E36E3",
    color: "#fff",
    cursor: "pointer",
    fontSize: "22px",
    fontWeight: "bold",
    boxShadow:
      "0 4px 10px rgba(0,0,0,0.15)",
  },

  estatisticas: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  cardEstatistica: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "18px",
    textAlign: "center" as const,
    boxShadow:
      "0 4px 14px rgba(0,0,0,0.08)",
  },

  topBar: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap" as const,
  },

  inputPesquisa: {
    flex: 1,
    padding: "14px",
    borderRadius: "12px",
    border:
      "1px solid #d9d9d9",
    fontSize: "16px",
    outline: "none",
    minWidth: "250px",
  },

  select: {
    padding: "14px",
    borderRadius: "12px",
    border:
      "1px solid #d9d9d9",
    fontSize: "15px",
    cursor: "pointer",
  },

  loading: {
    fontSize: "18px",
    color: "#555",
  },

  emptyBox: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center" as const,
    color: "#777",
    boxShadow:
      "0 2px 8px rgba(0,0,0,0.08)",
  },

  lista: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "25px",
  },

  card: {
    background:
      "linear-gradient(135deg, #ffffff, #eef3ff)",
    padding: "24px",
    borderRadius: "20px",
    boxShadow:
      "0 6px 16px rgba(0,0,0,0.08)",
    border: "1px solid #dce6ff",
    cursor: "pointer",
    transition:
      "all 0.3s ease",
  },

  topoCard: {
    display: "flex",
    justifyContent:
      "space-between",
    marginBottom: "15px",
  },

  badge: {
    backgroundColor: "#FF710F",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  tituloCard: {
    fontSize: "24px",
    color: "#222",
    marginBottom: "10px",
  },

  categoria: {
    color: "#777",
    marginBottom: "15px",
  },

  status: {
    display: "inline-block",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "10px",
    marginBottom: "20px",
    fontSize: "14px",
    fontWeight: "bold",
  },

  infoContainer: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  },

  infoBox: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "14px",
    textAlign: "center" as const,
    boxShadow:
      "0 2px 8px rgba(0,0,0,0.05)",
  },

  label: {
    display: "block",
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px",
  },

  valor: {
    fontSize: "22px",
    color: "#0E36E3",
    fontWeight: "bold",
  },

  barraContainer: {
    width: "100%",
    height: "10px",
    backgroundColor: "#d9d9d9",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px",
  },

  barra: {
    height: "100%",
    backgroundColor: "#0E36E3",
    borderRadius: "10px",
  },

  botaoDetalhes: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#0E36E3",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },

};

export default TendenciasPage;