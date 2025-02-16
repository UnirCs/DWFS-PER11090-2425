package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.model.Multiplicacion;

import java.util.List;

public interface IMultiplicacionService {
    Multiplicacion realizarMultiplicacion(CreateRequest request);

    List<Multiplicacion> obtenerMultiplicaciones();

    Multiplicacion obtenerMultiplicacionPorId(Long id);
}
