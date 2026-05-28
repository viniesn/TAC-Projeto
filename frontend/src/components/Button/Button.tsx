import React from "react";

type ButtonProps = {
  texto: string;
  onClick?: () => void;
};

const Button = ({ texto, onClick }: ButtonProps) => {

  return (

    <button
      onClick={onClick}
      style={styles.button}
    >
      {texto}
    </button>

  );

};

const styles = {

  button: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#22c55e",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },

};

export default Button;