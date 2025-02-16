package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.RestaRepository;
import com.unir.calculadora.data.model.Resta;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaService implements IRestaService {

    private final RestaRepository restaRepository;

    @Override
    public Resta realizarResta(CreateRequest request) {
        if (request.getNumeros().isEmpty()) {
            throw new IllegalArgumentException("La lista de números no puede estar vacía");
        }
        Double resultado = request.getNumeros().stream().reduce((a, b) -> a - b).orElse(0.0);
        Resta resta = new Resta(null, request.getNumeros(), resultado);
        return restaRepository.save(resta);
    }

    @Override
    public List<Resta> obtenerRestas() {
        return restaRepository.obtenerRestas();
    }

    @Override
    public Resta obtenerRestaPorId(Long id) {
        return restaRepository.obtenerRestaPorId(id);
    }
}
