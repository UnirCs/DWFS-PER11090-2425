package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.model.Resta;

import java.util.List;

public interface IRestaService {
    Resta realizarResta(CreateRequest request);

    List<Resta> obtenerRestas();

    Resta obtenerRestaPorId(Long id);
}
