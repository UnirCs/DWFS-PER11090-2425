package blasco.calculadora.service;

import blasco.calculadora.data.model.Operation;
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
    public Operation addNumbers(String numbers) {
        double result = Arrays.stream(numbers.split(",")).mapToDouble(Double::parseDouble).sum();
        return operationsRepository.save(new Operation("addition", numbers, result));
    }

    @Override
    public Operation subtractNumbers(String numbers) {
        List<Double> numList = Arrays.stream(numbers.split(",")).map(Double::parseDouble).collect(Collectors.toList());
        double result = numList.get(0) - numList.subList(1, numList.size()).stream().mapToDouble(Double::doubleValue).sum();
        return operationsRepository.save(new Operation("subtraction", numbers, result));
    }

    @Override
    public Operation multiplyNumbers(String numbers) {
        double result = Arrays.stream(numbers.split(",")).mapToDouble(Double::parseDouble).reduce(1, (a, b) -> a * b);
        return operationsRepository.save(new Operation("multiplication", numbers, result));
    }

    @Override
    public Operation divideNumbers(String numbers) {
        String[] numArray = numbers.split(",");
        double result = Double.parseDouble(numArray[0]) / Double.parseDouble(numArray[1]);
        return operationsRepository.save(new Operation("division", numbers, result));
    }

    @Override
    public Operation calculateRoot(String number, int indice) {
        double result = Math.pow(Double.parseDouble(number), 1.0 / indice);
        return operationsRepository.save(new Operation("root", number + "," + indice, result));
    }

    @Override
    public Operation calculatePower(String number, int exponente) {
        double result = Math.pow(Double.parseDouble(number), exponente);
        return operationsRepository.save(new Operation("power", number + "," + exponente, result));
    }

    @Override
    public Operation getOperationById(Long id) {
        return operationsRepository.findById(id).orElse(null);
    }
}
