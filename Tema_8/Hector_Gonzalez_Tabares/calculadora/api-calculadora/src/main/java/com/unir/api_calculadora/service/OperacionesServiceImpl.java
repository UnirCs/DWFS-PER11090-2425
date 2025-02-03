package com.unir.api_calculadora.service;

import com.unir.api_calculadora.model.Operacion;
import com.unir.api_calculadora.repository.OperationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@RequiredArgsConstructor
@Service
@Slf4j
public class OperacionesServiceImpl implements OperacionesService{

    @Autowired
    private OperationRepository operationRepository;

    @Override
    public double add(List<Double> numbers) {
        double result = numbers.stream().mapToDouble(Double::doubleValue).sum();
        saveOperation("Sumar", numbers.toString(), result);
        return result;
    }

    @Override
    public double subtract(List<Double> numbers) {
        double result = numbers.stream().reduce((a, b) -> a - b).orElse(0.0);
        saveOperation("Restar", numbers.toString(), result);
        return result;
    }

    @Override
    public double multiply(double a, double b) {
        double result = a * b;
        saveOperation("Multiplicar", Arrays.asList(a, b).toString(), result);
        return result;
    }

    @Override
    public double divide(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed.");
        }
        double result = a / b;
        saveOperation("Division", Arrays.asList(a, b).toString(), result);
        return result;
    }

    @Override
    public double nthRoot(double number, int n) {
        double result = Math.pow(number, 1.0 / n);
        saveOperation("Raiz", number + "^(1/" + n + ")", result);
        return result;
    }

    @Override
    public double power(double base, int exponent) {
        double result = Math.pow(base, exponent);
        saveOperation("Potencia", base + "^" + exponent, result);
        return result;
    }

    @Override
    public List<Operacion> getHistory() {
        return operationRepository.findAll();
    }

    @Override
    public Operacion getOperationById(Long id) {
        return operationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Operation not found"));
    }

    @Override
    public void saveOperation(String type, String operands, double result) {
        Operacion operation = new Operacion(type, operands, result);
        operationRepository.save(operation);
    }
}
