package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.RaizRequest;
import com.unir.calculadora.data.model.Raiz;

import java.util.List;

public interface IRaizService {
    Raiz realizarRaiz(RaizRequest request);

    List<Raiz> obtenerRaices();

    Raiz obtenerRaizPorId(Long id);
}
