package com.unir.calculadora.service;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.DivisionRepository;
import com.unir.calculadora.data.model.Division;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DivisionService implements IDivisionService{

    private final DivisionRepository divisionRepository;

    @Override
    public Division realizarDivision(CreateRequest request) {
        if (request.getNumeros().isEmpty()) {
            throw new IllegalArgumentException("La lista de números no puede estar vacía");
        }
        if (request.getNumeros().contains(0.0)) {
            throw new IllegalArgumentException("No se puede dividir por cero");
        }
        Double resultado = request.getNumeros().stream().reduce((a, b) -> a / b).orElseThrow();
        Division division = new Division(null, request.getNumeros(), resultado);
        return divisionRepository.save(division);
    }

    @Override
    public List<Division> obtenerDivisiones() {
        return divisionRepository.obtenerDivisiones();
    }

    @Override
    public Division obtenerDivisionPorId(Long id) {
        return divisionRepository.obtenerDivisionPorId(id);
    }
}
