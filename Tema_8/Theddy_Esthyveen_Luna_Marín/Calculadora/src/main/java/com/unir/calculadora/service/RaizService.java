package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.RaizRequest;
import com.unir.calculadora.data.RaizRepository;
import com.unir.calculadora.data.model.Raiz;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RaizService implements IRaizService {

    private final RaizRepository raizRepository;

    @Override
    public Raiz realizarRaiz(RaizRequest request) {
        if (request.getGrado() == null || request.getGrado() <= 0) {
            throw new IllegalArgumentException("El grado de la raíz debe ser mayor a cero");
        }
        if (request.getNumero() < 0 && request.getGrado() % 2 == 0) {
            throw new IllegalArgumentException("No se pueden calcular raíces pares de números negativos");
        }
        Double resultado = Math.pow(request.getNumero(), 1.0 / request.getGrado());
        Raiz raiz = new Raiz(null, request.getNumero(), request.getGrado(), resultado);
        return raizRepository.save(raiz);
    }

    @Override
    public List<Raiz> obtenerRaices() {
        return raizRepository.obtenerRaices();
    }

    @Override
    public Raiz obtenerRaizPorId(Long id) {
        return raizRepository.obtenerMultiplicacionPorId(id);
    }
}
