package blasco.calculadora.service;

import blasco.calculadora.data.model.CalculatorOperation;

public interface OperationsService {
    CalculatorOperation addNumbers(String numbers);
    CalculatorOperation subtractNumbers(String numbers);
    CalculatorOperation multiplyNumbers(String numbers);
    CalculatorOperation divideNumbers(String numbers);
    CalculatorOperation calculateRoot(String number, int indice);
    CalculatorOperation calculatePower(String number, int exponente);
    CalculatorOperation getOperationById(Long id);
}

