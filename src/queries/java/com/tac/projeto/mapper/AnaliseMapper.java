<<<<<<< HEAD
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
=======
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
>>>>>>> c8fd61ed2e8affffee63969c256471605c81d93f
}