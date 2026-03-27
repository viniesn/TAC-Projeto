package com.tac.projeto.model;

import org.junit.jupiter.api.Test;
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

class AnaliseTest {

    @Test
    void deveTestarGettersESetters() {
        Analise analise = new Analise();
        Noticia noticia = new Noticia();
        LocalDateTime agora = LocalDateTime.now();

        analise.setNoticia(noticia);
        analise.setResultado("VERDADEIRO");
        analise.setConfianca(0.9);
        analise.setDetalhes("Detalhes teste");
        analise.setDataAnalise(agora);

        assertEquals(noticia, analise.getNoticia());
        assertEquals("VERDADEIRO", analise.getResultado());
        assertEquals(0.9, analise.getConfianca());
        assertEquals("Detalhes teste", analise.getDetalhes());
        assertEquals(agora, analise.getDataAnalise());
    }
}