package com.tac.projeto;

import com.tac.projeto.AnaliseDto;
import com.tac.projeto.mapper.AnaliseMapper;
import com.tac.projeto.ListarAnaliseQuery;
import com.tac.projeto.model.Analise;

import java.util.List;

public class ListarAnalisesHandler {

    public List<AnaliseDto> handle(ListarAnaliseQuery query) {

        List<Analise> analises = List.of();

        return analises.stream()
                .map(AnaliseMapper::toDto)
                .toList();
    }
}