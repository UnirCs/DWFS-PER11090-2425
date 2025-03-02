package com.unir.calculadora.service;

import com.unir.calculadora.service.dto.OperacionDTO;

import java.util.List;

public interface OperacionService {

    OperacionDTO sumarRestar(List<Long> numeros, String operation);

    OperacionDTO getOperacion(Long id, String operation);

    OperacionDTO multiplos(Long entrada1, Long entrada2, String operation);



}
