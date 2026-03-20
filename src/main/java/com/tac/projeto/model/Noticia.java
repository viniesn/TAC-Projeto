package com.tac.projeto.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Noticia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String conteudo;

    private String fonte;

    private LocalDateTime dataPublicacao;

    @Enumerated(EnumType.STRING)
    private StatusNoticia status;

    private Double scoreConfiabilidade;

    public Noticia() {}

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public String getFonte() {
        return fonte;
    }

    public void setFonte(String fonte) {
        this.fonte = fonte;
    }

    public LocalDateTime getDataPublicacao() {
        return dataPublicacao;
    }

    public void setDataPublicacao(LocalDateTime dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }

    public StatusNoticia getStatus() {
        return status;
    }

    public void setStatus(StatusNoticia status) {
        this.status = status;
    }

    public Double getScoreConfiabilidade() {
        return scoreConfiabilidade;
    }

    public void setScoreConfiabilidade(Double scoreConfiabilidade) {
        this.scoreConfiabilidade = scoreConfiabilidade;
    }
}