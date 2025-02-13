package org.master.calculadora.repository;

import org.master.calculadora.repository.model.CalcHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CalcHistoryJpaRepository extends JpaRepository<CalcHistory, Long> {

  CalcHistory findByIdAndOperation(Long id, String operation);
}
