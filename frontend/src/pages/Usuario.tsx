import React, { useState } from "react";

const UsuarioPage = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrarUsuario = async () => {

    await fetch("http://localhost:8080/usuarios", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        nome,
        email,
        senha,
      }),

    });

    alert("Usuário cadastrado!");

  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h1>Cadastro</h1>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={cadastrarUsuario}
          style={styles.button}
        >
          Cadastrar
        </button>

      </div>

    </div>

  );
};

const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },

  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
  },

  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },

};

export default UsuarioPage;