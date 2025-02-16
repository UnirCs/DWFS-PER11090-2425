package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.PotenciaRequest;
import com.unir.calculadora.data.PotenciaRepository;
import com.unir.calculadora.data.model.Potencia;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PotenciaService implements IPotenciaService {
    private final PotenciaRepository potenciaRepository;

    @Override
    public Potencia realizarPotencia(PotenciaRequest request) {
        if (request.getExponente() == null) {
            throw new IllegalArgumentException("El exponente no puede ser nulo");
        }
        Double resultado = Math.pow(request.getNumero(), request.getExponente());
        Potencia potencia = new Potencia(null, request.getNumero(), request.getExponente(), resultado);
        return potenciaRepository.save(potencia);
    }

    @Override
    public List<Potencia> obtenerPotencias() {
        return potenciaRepository.obtenerPotencias();
    }

    @Override
    public Potencia obtenerPotenciaPorId(Long id) {
        return potenciaRepository.obtenerPotenciaPorId(id);
    }
}
