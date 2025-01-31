package com.unir.calculadora.service;

import com.unir.calculadora.model.Operation;

public interface OperationsService {

   Operation addNumbers(String numbers);
   Operation subtractNumbers(String numbers);
   Operation multiplyNumbers(String numbers);
   Operation divideNumbers(String numbers);
   Operation calculateRoot(String number, int indice);
   Operation calculatePowers(String number, int exponente);
   Operation getOperationById(Long id);
}