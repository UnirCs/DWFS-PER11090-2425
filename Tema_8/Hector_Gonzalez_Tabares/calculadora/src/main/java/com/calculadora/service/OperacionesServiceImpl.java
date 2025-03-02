package com.calculadora.service;

import com.calculadora.dto.*;
import com.calculadora.modelo.Operacion;
import com.calculadora.data.OperationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class OperacionesServiceImpl implements OperacionesService {

    @Autowired
    private OperationRepository operationRepository;

    @Override
    public OperationResponseDTO sumar(OperationRequestDTO request) {
        double resultado = request.getNumeros().stream().mapToDouble(Double::doubleValue).sum();
        return saveOperation("Sumar", request.getNumeros().toString(), resultado);
    }

    @Override
    public OperationResponseDTO restar(OperationRequestDTO request) {
        double resultado = request.getNumeros().stream().reduce((a, b) -> a - b).orElse(0.0);
        return saveOperation("Restar", request.getNumeros().toString(), resultado);
    }

    @Override
    public OperationResponseDTO multiplicar(TwoNumberRequestDTO request) {
        double resultado = request.getNumeros1() * request.getNumeros2();
        return saveOperation("Multiplicacion", request.getNumeros1() + " * " + request.getNumeros2(), resultado);
    }

    @Override
    public OperationResponseDTO dividir(TwoNumberRequestDTO request) {
        if (request.getNumeros2() == 0) {
            throw new ArithmeticException("Division por cero no esta permitida.");
        }
        double resultado = request.getNumeros1() / request.getNumeros2();
        return saveOperation("Division", request.getNumeros1() + " / " + request.getNumeros2(), resultado);
    }

    @Override
    public OperationResponseDTO calcularRaiz(RootRequestDTO request) {
        double resultado = Math.pow(request.getNumeros1(), 1.0 / request.getRoot());
        return saveOperation("Nth Root", "√" + request.getRoot() + " " + request.getNumeros1(), resultado);
    }

    @Override
    public OperationResponseDTO calcularPotencia(PowerRequestDTO request) {
        double resultado = Math.pow(request.getNumeros1(), request.getPotencia());
        return saveOperation("Potencia", request.getNumeros1() + "^" + request.getPotencia(), resultado);
    }

    @Override
    public Operacion getOperationById(Long id) {
        return operationRepository.findById(id).orElseThrow(() -> new RuntimeException("Operacion no encontrada"));
    }

    private OperationResponseDTO saveOperation(String type, String operands, double result) {
        Operacion operation = new Operacion(type, operands, result);
        operation = operationRepository.save(operation);
        return new OperationResponseDTO(result, operation.getId());
    }

    @Override
    public Operacion getOperationByIdAndType(Long id, String operationType) {
        Optional<Operacion> operation = operationRepository.findById(id);
        if (operation.isPresent() && operation.get().getOperationType().equalsIgnoreCase(operationType)) {
            return operation.get();
        } else {
            throw new RuntimeException("Operación no encontrada o no coincide con el tipo solicitado.");
        }
    }
}

