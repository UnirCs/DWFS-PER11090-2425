package org.master.calculadora.service.impl;

import static lombok.AccessLevel.PRIVATE;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.master.calculadora.repository.ICalcRepository;
import org.master.calculadora.repository.dto.PowerRequest;
import org.master.calculadora.repository.dto.RootRequest;
import org.master.calculadora.repository.model.CalcHistory;
import org.master.calculadora.service.IAdvancedService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class AdvancedService implements IAdvancedService {

  private static final String ROOT = "RAIZ";
  private static final String POWER = "POTENCIA";

  BasicService basicService;
  ICalcRepository repository;

  @Override
  public CalcHistory root(RootRequest request) {
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

    return repository.save(basicService.buildResponse(numbers, result, ROOT));
  }

  @Override
  public CalcHistory getRootById(Long id) {
    return repository.findByIdAndOperation(id, ROOT);
  }

  @Override
  public CalcHistory power(PowerRequest request) {
    if (request == null) {
      return null;
    }

    var result = Math.pow(request.getBase(), request.getExponent());
    var numbers = List.of(request.getBase(), request.getExponent()).toString();

    return repository.save(basicService.buildResponse(numbers, result, POWER));
  }

  @Override
  public CalcHistory getPowerById(Long id) {
    return repository.findByIdAndOperation(id, POWER);
  }
}
