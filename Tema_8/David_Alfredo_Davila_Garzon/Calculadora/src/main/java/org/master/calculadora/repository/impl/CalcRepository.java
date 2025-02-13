package org.master.calculadora.repository.impl;

import static lombok.AccessLevel.PRIVATE;

import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.master.calculadora.repository.CalcHistoryJpaRepository;
import org.master.calculadora.repository.ICalcRepository;
import org.master.calculadora.repository.model.CalcHistory;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class CalcRepository implements ICalcRepository {

  CalcHistoryJpaRepository repository;


  @Override
  public CalcHistory save(CalcHistory history) {
    return repository.save(history);
  }

  @Override
  public CalcHistory findByIdAndOperation(Long id, String operation) {
    return repository.findByIdAndOperation(id, operation);
  }
}
