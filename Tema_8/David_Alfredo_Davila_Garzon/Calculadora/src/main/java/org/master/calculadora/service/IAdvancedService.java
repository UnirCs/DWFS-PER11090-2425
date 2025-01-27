package org.master.calculadora.service;

import org.master.calculadora.repository.dto.PowerRequest;
import org.master.calculadora.repository.dto.RootRequest;
import org.master.calculadora.repository.model.CalcHistory;

public interface IAdvancedService {

  CalcHistory root(RootRequest request);

  CalcHistory getRootById(Long id);

  CalcHistory power(PowerRequest request);

  CalcHistory getPowerById(Long id);
}
