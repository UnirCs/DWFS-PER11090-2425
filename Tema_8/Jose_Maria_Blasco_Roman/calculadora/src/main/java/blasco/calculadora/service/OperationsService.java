package blasco.calculadora.service;

import blasco.calculadora.data.model.Operation;

public interface OperationsService {
    Operation addNumbers(String numbers);
    Operation subtractNumbers(String numbers);
    Operation multiplyNumbers(String numbers);
    Operation divideNumbers(String numbers);
    Operation calculateRoot(String number, int indice);
    Operation calculatePower(String number, int exponente);
    Operation getOperationById(Long id);
}

