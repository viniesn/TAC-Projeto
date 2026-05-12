package com.tac.projeto.mapper;

import com.tac.projeto.AnalisesDto;
import com.tac.projeto.model.Analise;

public class AnaliseMapper {

    public static AnalisesDto toDto(Analise analise) {

        return new AnalisesDto(
                analise.getId(),
                analise.getNoticia().getId(),
                analise.getNoticia().getTitulo(),
                analise.getResultado(),
                analise.getNoticia().getStatus()
        );
    }
}