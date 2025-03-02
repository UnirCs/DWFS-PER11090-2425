package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.model.Division;

import java.util.List;

public interface IDivisionService {
    Division realizarDivision(CreateRequest request);

    List<Division> obtenerDivisiones();

    Division obtenerDivisionPorId(Long id);
}
