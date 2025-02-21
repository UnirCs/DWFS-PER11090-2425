package blasco.calculadora.service;

import blasco.calculadora.data.model.CalculatorOperation;
import blasco.calculadora.data.OperationsRepository;
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
    public CalculatorOperation addNumbers(String numbers) {
        double result = Arrays.stream(numbers.split(",")).mapToDouble(Double::parseDouble).sum();
        return operationsRepository.save(new CalculatorOperation("addition", numbers, result));
    }

    @Override
    public CalculatorOperation subtractNumbers(String numbers) {
        List<Double> numList = Arrays.stream(numbers.split(",")).map(Double::parseDouble).collect(Collectors.toList());
        double result = numList.get(0) - numList.subList(1, numList.size()).stream().mapToDouble(Double::doubleValue).sum();
        return operationsRepository.save(new CalculatorOperation("subtraction", numbers, result));
    }

    @Override
    public CalculatorOperation multiplyNumbers(String numbers) {
        double result = Arrays.stream(numbers.split(",")).mapToDouble(Double::parseDouble).reduce(1, (a, b) -> a * b);
        return operationsRepository.save(new CalculatorOperation("multiplication", numbers, result));
    }

    @Override
    public CalculatorOperation divideNumbers(String numbers) {
        String[] numArray = numbers.split(",");
        double result = Double.parseDouble(numArray[0]) / Double.parseDouble(numArray[1]);
        if (Double.parseDouble(numArray[1]) == 0) {
            throw new IllegalArgumentException("División por cero no permitida.");
        }
        return operationsRepository.save(new CalculatorOperation("division", numbers, result));
    }

    @Override
    public CalculatorOperation calculateRoot(String number, int indice) {
        double result = Math.pow(Double.parseDouble(number), 1.0 / indice);
        return operationsRepository.save(new CalculatorOperation("root", number + "," + indice, result));
    }

    @Override
    public CalculatorOperation calculatePower(String number, int exponente) {
        double result = Math.pow(Double.parseDouble(number), exponente);
        return operationsRepository.save(new CalculatorOperation("power", number + "," + exponente, result));
    }

    @Override
    public CalculatorOperation getOperationById(Long id) {
        return operationsRepository.findById(id).orElse(null);
    }
}
