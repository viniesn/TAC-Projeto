import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const [texto, setTexto] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarDicas, setMostrarDicas] = useState(false);

  const analisarNoticia = async () => {

    console.log(texto);

    // TODO: Conectar com a API do backend
    // Exemplo:
    // await fetch("http://localhost:8080/analisar", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ texto }),
    // });

    alert("Notícia analisada!");

  };

  return (

    <div style={styles.container}>

      {
        menuAberto && (

          <aside style={styles.sidebar}>

            <nav style={styles.navMenu}>

              <Link style={styles.menuLink} to="/">
                Home
              </Link>

              <Link style={styles.menuLink} to="/historico">
                Histórico
              </Link>

              <Link style={styles.menuLink} to="/tendencia">
                Tendência
              </Link>

            </nav>

          </aside>

        )
      }

      <div style={styles.content}>

        <header style={styles.header}>

          <div
            style={styles.menuHamburger}
            onClick={() => setMenuAberto(!menuAberto)}
          >

            {
              menuAberto ? (
                <span style={styles.arrow}>
                  ←
                </span>
              ) : (
                <>
                  <span style={styles.line}></span>
                  <span style={styles.line}></span>
                  <span style={styles.line}></span>
                </>
              )
            }

          </div>

          <div style={styles.logo}>
            FakeRadar
          </div>

        </header>

        <section style={styles.hero}>

          <h1>
            Verifique se uma notícia é confiável
          </h1>

          <p>
            Cole um texto ou link e descubra se é fake news
          </p>

          <input
            type="text"
            placeholder="Cole aqui a notícia ou link..."
            style={styles.input}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />

          <div>

            <button
              style={styles.primaryButton}
              onClick={analisarNoticia}
            >
              ✔ Analisar
            </button>

            <button style={styles.secondaryButton}>
              📎 Enviar arquivo
            </button>

          </div>

        </section>

        {/* CARD APRENDER */}
        <section style={styles.cards}>

          <div
            style={{
              ...styles.card,
              cursor: "pointer",
            }}
            onClick={() => setMostrarDicas(!mostrarDicas)}
          >
            💡 Aprender sobre Fake News
          </div>

        </section>

        {
          mostrarDicas && (

            <section style={styles.section}>

              <div style={styles.cardInfo}>

                <h2>O que é Fake News?</h2>

                <p>
                  Fake News são notícias falsas divulgadas como se fossem verdadeiras.
                </p>

                <p>
                  Antes de compartilhar uma informação, verifique a fonte,
                  confira a data da publicação e procure confirmação em
                  veículos de comunicação confiáveis.
                </p>

                <h3>Como identificar?</h3>

                <ul>
                  <li>✔ Verifique a fonte da notícia.</li>
                  <li>✔ Leia além do título.</li>
                  <li>✔ Confira a data da publicação.</li>
                  <li>✔ Compare com outras fontes.</li>
                  <li>✔ Desconfie de manchetes exageradas.</li>
                </ul>

              </div>

            </section>

          )
        }

        {/* RESULTADOS */}
        <section style={styles.section}>

          <h2>
            Resultados
          </h2>

          <div style={styles.resultCards}>

            <div
              style={{
                ...styles.resultBox,
                backgroundColor: "#dc2626",
              }}
            >
              Fake News
            </div>

            <div
              style={{
                ...styles.resultBox,
                backgroundColor: "#f59e0b",
              }}
            >
              Duvidosa
            </div>

            <div
              style={{
                ...styles.resultBox,
                backgroundColor: "#16a34a",
              }}
            >
              Verdadeira
            </div>

          </div>

        </section>

        {/* DICAS */}
        <section style={styles.section}>

          <h2>
            Dicas Rápidas
          </h2>

          <ul style={styles.list}>

            <li>✔ Evite manchetes exageradas</li>
            <li>✔ Confira a fonte da notícia</li>
            <li>✔ Não compartilhe sem checar</li>

          </ul>

        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>

          <p>
            Sobre | Contato
          </p>

          <p>
            © 2024 FakeDetector
          </p>

        </footer>

      </div>

    </div>

  );
};

const styles = {

  container: {
    display: "flex",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(180deg, #296bc2, #1b3f70)",
    color: "white",
    minHeight: "100vh",
  },

  content: {
    flex: 1,
    width: "100%",
  },

  sidebar: {
    width: "250px",
    backgroundColor: "#10294d",
    padding: "30px 20px",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px 40px",
    backgroundColor: "#296bc2",
  },

  logo: {
    fontWeight: "bold",
    fontSize: "22px",
  },

  menuHamburger: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
    cursor: "pointer",
  },

  line: {
    width: "35px",
    height: "5px",
    backgroundColor: "white",
    borderRadius: "10px",
  },

  arrow: {
    fontSize: "35px",
    fontWeight: "bold",
    color: "white",
  },

  navMenu: {
    display: "flex",
    flexDirection: "column" as const,
    marginTop: "40px",
    gap: "15px",
  },

  menuLink: {
    color: "white",
    textDecoration: "none",
    padding: "14px",
    borderRadius: "10px",
    backgroundColor: "#296bc2",
    fontWeight: "bold",
  },

  hero: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center" as const,
  },

  input: {
    width: "90%",
    maxWidth: "600px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    marginTop: "20px",
    outline: "none",
  },

  primaryButton: {
    marginTop: "20px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#22c55e",
    color: "#fff",
    cursor: "pointer",
    marginRight: "10px",
  },

  secondaryButton: {
    marginTop: "20px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#374151",
    color: "#fff",
    cursor: "pointer",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "40px",
    flexWrap: "wrap" as const,
  },

  card: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center" as const,
  },

  cardInfo: {
    backgroundColor: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "left" as const,
    lineHeight: "1.8",
  },

  section: {
    margin: "40px",
    textAlign: "center" as const,
  },

  resultCards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap" as const,
  },

  resultBox: {
    padding: "20px",
    borderRadius: "10px",
    width: "150px",
    fontWeight: "bold",
  },

  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2",
  },

  footer: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#1b3f70",
    textAlign: "center" as const,
  },

};

export default Home;