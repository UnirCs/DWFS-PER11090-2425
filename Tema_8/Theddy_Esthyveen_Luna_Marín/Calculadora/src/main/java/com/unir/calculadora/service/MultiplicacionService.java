package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.MultiplicacionRepository;
import com.unir.calculadora.data.model.Multiplicacion;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MultiplicacionService implements IMultiplicacionService {

    private final MultiplicacionRepository multiplicacionRepository;

    @Override
    public Multiplicacion realizarMultiplicacion(CreateRequest request) {
        if (request.getNumeros().isEmpty()) {
            throw new IllegalArgumentException("La lista de números no puede estar vacía");
        }
        Double resultado = request.getNumeros().stream().reduce(1.0, (a, b) -> a * b);
        Multiplicacion multiplicacion = new Multiplicacion(null, request.getNumeros(), resultado);
        return multiplicacionRepository.save(multiplicacion);
    }

    @Override
    public List<Multiplicacion> obtenerMultiplicaciones() {
        return multiplicacionRepository.obtenerMultiplicaciones();
    }

    @Override
    public Multiplicacion obtenerMultiplicacionPorId(Long id) {
        return multiplicacionRepository.obtenerMultiplicacionPorId(id);
    }
}
