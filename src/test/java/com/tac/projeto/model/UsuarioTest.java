package com.tac.projeto.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UsuarioTest {

    @Test
    void deveTestarGettersESetters() {
        Usuario usuario = new Usuario();

        usuario.setNome("Vinicius");
        usuario.setEmail("vinicius@email.com");
        usuario.setSenha("123456");

        assertEquals("Vinicius", usuario.getNome());
        assertEquals("vinicius@email.com", usuario.getEmail());
        assertEquals("123456", usuario.getSenha());
    }
}