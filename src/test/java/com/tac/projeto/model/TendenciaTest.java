package com.tac.projeto.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TendenciaTest {

    @Test
    void deveTestarGettersESetters() {
        Tendencia tendencia = new Tendencia();
        Noticia noticia = new Noticia();

        tendencia.setNoticia(noticia);
        tendencia.setQuantidadeAcessos(100);
        tendencia.setQuantidadeBuscas(50);

        assertEquals(noticia, tendencia.getNoticia());
        assertEquals(100, tendencia.getQuantidadeAcessos());
        assertEquals(50, tendencia.getQuantidadeBuscas());
    }
}