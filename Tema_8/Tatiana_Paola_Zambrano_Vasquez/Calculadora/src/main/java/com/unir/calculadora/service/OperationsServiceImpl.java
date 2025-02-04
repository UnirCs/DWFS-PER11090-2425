package com.unir.calculadora.service;

import com.unir.calculadora.model.Operation;
import com.unir.calculadora.repository.OperationsRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OperationsServiceImpl implements OperationsService {
    private final OperationsRepository operationsRepository;

    public OperationsServiceImpl(OperationsRepository operationsRepository) {
        this.operationsRepository = operationsRepository;
    }

    @Override
    public Operation addNumbers(String numbers) {
        double result = Arrays.stream(numbers.split(","))
                .mapToDouble(Double::parseDouble)
                .sum();
        Operation operation = new Operation("addition", numbers, result);
        return operationsRepository.save(operation);
    }

    @Override
    public Operation subtractNumbers(String numbers) {
        String[] numArray = numbers.split(",");

        // Convertir los valores a una lista de números
        List<Double> numList = Arrays.stream(numArray)
                .map(Double::parseDouble)
                .collect(Collectors.toList());

        // Verificar que haya al menos un número en la lista
        if (numList.isEmpty()) {
            throw new IllegalArgumentException("Debe haber al menos un número para restar.");
        }

        // Tomar el primer número y restar los demás en orden
        double result = numList.get(0) - numList.subList(1, numList.size()).stream().mapToDouble(Double::doubleValue).sum();

        // Crear y guardar la operación
        Operation operation = new Operation("subtraction", numbers, result);
        return operationsRepository.save(operation);
    }


    @Override
    public Operation multiplyNumbers(String numbers) {
        String[] numArray = numbers.split(",");
        double result = Arrays.stream(numArray)
                .mapToDouble(Double::parseDouble)
                .reduce(1, (a, b) -> a * b);
        Operation operation = new Operation("multiplication", numbers, result);
        return operationsRepository.save(operation);
    }

    @Override
    public Operation divideNumbers(String numbers) {
        String[] numArray = numbers.split(",");
        double number1 = Double.parseDouble(numArray[0]);
        double number2 = Double.parseDouble(numArray[1]);
        if (number2 == 0) {
            throw new IllegalArgumentException("Division by zero is not allowed");
        }
        double result = number1 / number2;
        Operation operation = new Operation("division", numbers, result);
        return operationsRepository.save(operation);
    }

    @Override
    public Operation calculateRoot(String number, int indice) {
        double num = Double.parseDouble(number);
        double result = Math.pow(num, 1.0 / indice);
        Operation operation = new Operation("root", number + "," + indice, result);
        return operationsRepository.save(operation);
    }

    @Override
    public Operation calculatePowers(String number, int exponente) {
        try {
            double base = Double.parseDouble(number); // Convierte el número de String a double
            double exponenteResult = Math.pow(base, exponente); // Calcula la potencia

            // Crea la operación con el tipo "power", la entrada original y el resultado
            Operation operation = new Operation("power", String.format("%s,%d", number, exponente), exponenteResult);

            return operationsRepository.save(operation); // Guarda y retorna la operación
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("El número proporcionado no es válido: " + number, e);
        }
    }


    @Override
    public Operation getOperationById(Long id) {
        return operationsRepository.findById(id);
    }
}