package org.master.calculadora.service.impl;

import static lombok.AccessLevel.PRIVATE;

import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.master.calculadora.repository.ICalcRepository;
import org.master.calculadora.repository.dto.BasicRequest;
import org.master.calculadora.repository.model.CalcHistory;
import org.master.calculadora.service.IBasicService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class BasicService implements IBasicService {

  private static final String ADDITION_OPERATOR = "SUMA";
  private static final String SUBTRACTION_OPERATOR = "RESTA";
  private static final String MULTIPLICATION_OPERATOR = "MULTIPLICACIÓN";
  private static final String DIVISION_OPERATOR = "DIVISIÓN";

  ICalcRepository repository;

  protected CalcHistory buildResponse(String numbers, Double result, String operation) {
    return CalcHistory.builder()
        .numbers(numbers)
        .result(Math.round(result * 100.0) / 100.0) //redondea a 2 decimales
        .operation(operation)
        .build();
  }

  // --------------------------------------- SUMAS -----------------------------------------
  @Override
  public CalcHistory addition(BasicRequest request) {
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
  public CalcHistory getAdditionById(Long id) {
    return repository.findByIdAndOperation(id, ADDITION_OPERATOR);
  }

  // --------------------------------------- RESTAS -----------------------------------------
  @Override
  public CalcHistory subtraction(BasicRequest request) {
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
  public CalcHistory getSubtractionById(Long id) {
    return repository.findByIdAndOperation(id, SUBTRACTION_OPERATOR);
  }

  // --------------------------------- MULTIPLICACIONES --------------------------------------
  @Override
  public CalcHistory multiplication(BasicRequest request) {
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
  public CalcHistory getMultiplicationById(Long id) {
    return repository.findByIdAndOperation(id, MULTIPLICATION_OPERATOR);
  }

  // ----------------------------------- DIVISIONES -----------------------------------------
  @Override
  public CalcHistory division(BasicRequest request) {
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
  public CalcHistory getDivisionById(Long id) {
    return repository.findByIdAndOperation(id, DIVISION_OPERATOR);
  }
}
