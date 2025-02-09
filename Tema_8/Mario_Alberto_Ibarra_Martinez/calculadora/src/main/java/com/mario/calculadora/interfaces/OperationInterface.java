package com.mario.calculadora.interfaces;

import com.mario.calculadora.repository.OperationsRec;
import com.mario.calculadora.repository.dto.OperationRepRequest;


public interface OperationInterface {

  OperationsRec addition(OperationRepRequest request);

  OperationsRec getAdditionById(Long id);

  OperationsRec subtraction(OperationRepRequest request);

  OperationsRec getSubtractionById(Long id);

  OperationsRec multiplication(OperationRepRequest request);

  OperationsRec getMultiplicationById(Long id);

  OperationsRec division(OperationRepRequest request);

  OperationsRec getDivisionById(Long id);

   OperationsRec root(OperationRepRequest request);

  OperationsRec getRootById(Long id);

  OperationsRec power(OperationRepRequest request);

  OperationsRec getPowerById(Long id);

  
}
