package com.tac.projeto.model;

import jakarta.persistence.*;

@Entity
public class Tendencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "noticia_id")
    private Noticia noticia;

    private int quantidadeAcessos;

    private int quantidadeBuscas;

    public Tendencia() {}

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public Noticia getNoticia() {
        return noticia;
    }

    public void setNoticia(Noticia noticia) {
        this.noticia = noticia;
    }

    public int getQuantidadeAcessos() {
        return quantidadeAcessos;
    }

    public void setQuantidadeAcessos(int quantidadeAcessos) {
        this.quantidadeAcessos = quantidadeAcessos;
    }

    public int getQuantidadeBuscas() {
        return quantidadeBuscas;
    }

    public void setQuantidadeBuscas(int quantidadeBuscas) {
        this.quantidadeBuscas = quantidadeBuscas;
    }
}