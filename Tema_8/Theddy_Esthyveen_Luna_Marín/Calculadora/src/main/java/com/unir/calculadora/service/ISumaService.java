package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.model.Suma;

import java.util.List;

public interface ISumaService {
    Suma realizarSuma(CreateRequest request);

    List<Suma> obtenerSumas();

    Suma obtenerSumaPorId(Long id);
}
