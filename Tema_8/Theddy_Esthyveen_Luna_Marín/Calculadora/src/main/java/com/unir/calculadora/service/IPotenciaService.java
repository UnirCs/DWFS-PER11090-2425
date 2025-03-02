package com.unir.calculadora.service;


import com.unir.calculadora.controller.model.PotenciaRequest;
import com.unir.calculadora.data.model.Potencia;

import java.util.List;

public interface IPotenciaService {
    Potencia realizarPotencia(PotenciaRequest request);

    List<Potencia> obtenerPotencias();

    Potencia obtenerPotenciaPorId(Long id);
}
