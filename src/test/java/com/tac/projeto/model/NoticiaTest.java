package com.tac.projeto.model;

import org.junit.jupiter.api.Test;
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

class NoticiaTest {

    @Test
    void deveTestarGettersESetters() {
        Noticia noticia = new Noticia();
        LocalDateTime agora = LocalDateTime.now();

        noticia.setTitulo("Titulo teste");
        noticia.setConteudo("Conteudo teste");
        noticia.setFonte("Fonte teste");
        noticia.setDataPublicacao(agora);
        noticia.setStatus(StatusNoticia.VERDADEIRO);
        noticia.setScoreConfiabilidade(0.8);

        assertEquals("Titulo teste", noticia.getTitulo());
        assertEquals("Conteudo teste", noticia.getConteudo());
        assertEquals("Fonte teste", noticia.getFonte());
        assertEquals(agora, noticia.getDataPublicacao());
        assertEquals(StatusNoticia.VERDADEIRO, noticia.getStatus());
        assertEquals(0.8, noticia.getScoreConfiabilidade());
    }
}