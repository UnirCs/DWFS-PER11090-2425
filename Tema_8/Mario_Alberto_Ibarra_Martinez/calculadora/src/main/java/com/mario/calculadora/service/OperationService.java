package com.mario.calculadora.service;

import static lombok.AccessLevel.PRIVATE;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import com.mario.calculadora.repository.OperationsRec;
import com.mario.calculadora.repository.dto.OperationRepRequest;
import com.mario.calculadora.interfaces.RecordsInterface;
import com.mario.calculadora.interfaces.OperationInterface;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class OperationService implements OperationInterface {

  private static final String ADDITION_OPERATOR = "SUMA";
  private static final String SUBTRACTION_OPERATOR = "RESTA";
  private static final String MULTIPLICATION_OPERATOR = "MULTIPLICACIÓN";
  private static final String DIVISION_OPERATOR = "DIVISIÓN";
  private static final String ROOT = "RAIZ";
  private static final String POWER = "POTENCIA";



  RecordsInterface repository;

  protected OperationsRec buildResponse(String numbers, Double result, String operation) {
    return OperationsRec.builder()
        .numbers(numbers)
        .result(Math.round(result * 100.0) / 100.0) //redondea a 2 decimales
        .operation(operation)
        .build();
  }

  // --------------------------------------- SUMAS -----------------------------------------
  @Override
  public OperationsRec addition(OperationRepRequest request) {
    if (request == null || request.getNumbers() == null || request.getNumbers().isEmpty()) {
      return null;
    }

    var sum = 0.0;
    for (var number : request.getNumbers()) {
      sum += number;
    }

    return repository.save(buildResponse(request.getNumbers().toString(), sum, ADDITION_OPERATOR));
  }

  @Override
  public OperationsRec getAdditionById(Long id) {
    return repository.findByIdAndOperation(id, ADDITION_OPERATOR);
  }

  // --------------------------------------- RESTAS -----------------------------------------
  @Override
  public OperationsRec subtraction(OperationRepRequest request) {
    if (request == null || request.getNumbers() == null || request.getNumbers().isEmpty()) {
      return null;
    }

    var numbers = request.getNumbers();
    var result = numbers.getFirst();
    for (int i = 1; i < numbers.size(); i++) {
      result -= numbers.get(i);
    }

    return repository.save(buildResponse(request.getNumbers().toString(), result, SUBTRACTION_OPERATOR));
  }

  @Override
  public OperationsRec getSubtractionById(Long id) {
    return repository.findByIdAndOperation(id, SUBTRACTION_OPERATOR);
  }

  // --------------------------------- MULTIPLICACIONES --------------------------------------
  @Override
  public OperationsRec multiplication(OperationRepRequest request) {
    if (request == null || request.getNumbers() == null || request.getNumbers().isEmpty()) {
      return null;
    }

    var numbers = request.getNumbers();
    var result = numbers.getFirst();
    for (int i = 1; i < numbers.size(); i++) {
      result *= numbers.get(i);
    }

    return repository.save(buildResponse(request.getNumbers().toString(), result, MULTIPLICATION_OPERATOR));
  }

  @Override
  public OperationsRec getMultiplicationById(Long id) {
    return repository.findByIdAndOperation(id, MULTIPLICATION_OPERATOR);
  }

  // ----------------------------------- DIVISIONES -----------------------------------------
  @Override
  public OperationsRec division(OperationRepRequest request) {
    if (request == null || request.getNumbers() == null || request.getNumbers().isEmpty()) {
      return null;
    }

    var numbers = request.getNumbers();
    var result = numbers.getFirst();
    for (int i = 1; i < numbers.size(); i++) {
      result /= numbers.get(i);
    }

    return repository.save(buildResponse(request.getNumbers().toString(), result, DIVISION_OPERATOR));
  }

  @Override
  public OperationsRec getDivisionById(Long id) {
    return repository.findByIdAndOperation(id, DIVISION_OPERATOR);
  }

  @Override
  public OperationsRec root(OperationRepRequest request) {
    if (request == null) {
      return null;
    }

    if (request.getIndex() == 0) { //No existe raiz 0 de un número
      return null;
    }

    if (request.getIndex() % 2 == 0 && request.getRadicand() < 0) { //No existe raiz par de un número negativo
      return null;
    }

    var result = Math.pow(request.getRadicand(), 1.0 / request.getIndex());
    var numbers = List.of(request.getRadicand(), request.getIndex()).toString();

    return repository.save(buildResponse(numbers, result, ROOT));
  }

  @Override
  public OperationsRec getRootById(Long id) {
    return repository.findByIdAndOperation(id, ROOT);
  }

  @Override
  public OperationsRec power(OperationRepRequest request) {
    if (request == null) {
      return null;
    }

    var result = Math.pow(request.getBase(), request.getExponent());
    var numbers = List.of(request.getBase(), request.getExponent()).toString();

    return repository.save(buildResponse(numbers, result, POWER));
  }

  @Override
  public OperationsRec getPowerById(Long id) {
    return repository.findByIdAndOperation(id, POWER);
  }
}
