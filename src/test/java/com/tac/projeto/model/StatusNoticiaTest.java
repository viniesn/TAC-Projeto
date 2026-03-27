package com.tac.projeto.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class StatusNoticiaTest {

    @Test
    void deveConterValoresDoEnum() {
        assertEquals("VERDADEIRO", StatusNoticia.VERDADEIRO.name());
        assertEquals("FALSO", StatusNoticia.FALSO.name());
        assertEquals("INCONCLUSIVO", StatusNoticia.INCONCLUSIVO.name());
        assertEquals("ANALISE", StatusNoticia.ANALISE.name());
    }
}