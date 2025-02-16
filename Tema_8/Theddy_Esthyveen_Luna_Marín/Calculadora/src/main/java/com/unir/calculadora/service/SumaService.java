package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.SumaRepository;
import com.unir.calculadora.data.model.Suma;
import lombok.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SumaService implements ISumaService{

    private final SumaRepository sumaRepository;

    @Override
    public Suma realizarSuma(CreateRequest request) {
        Double resultado = request.getNumeros().stream().reduce(0.0, Double::sum);
        Suma suma = new Suma(null, request.getNumeros(), resultado);
        return sumaRepository.save(suma);
    }

    @Override
    public List<Suma> obtenerSumas() {
        return sumaRepository.obtenerSumas();
    }

    @Override
    public Suma obtenerSumaPorId(Long id) {
        return sumaRepository.obtenerSumaPorId(id);
    }
}
