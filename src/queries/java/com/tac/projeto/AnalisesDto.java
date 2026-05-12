package com.tac.projeto.application.dto;

public record AnalisesDto(
        Long id,
        Long noticiaId,
        String tituloNoticia,
        String resultado,
        String statusNoticia
) {
}