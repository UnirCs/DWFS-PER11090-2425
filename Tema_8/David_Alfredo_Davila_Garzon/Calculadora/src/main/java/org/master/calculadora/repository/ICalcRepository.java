package org.master.calculadora.repository;

import org.master.calculadora.repository.model.CalcHistory;

public interface ICalcRepository {

  CalcHistory save(CalcHistory history);

  CalcHistory findByIdAndOperation(Long id, String operation);
}
