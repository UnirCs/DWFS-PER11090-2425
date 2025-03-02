package org.master.calculadora.service;

import org.master.calculadora.repository.dto.BasicRequest;
import org.master.calculadora.repository.model.CalcHistory;

public interface IBasicService {

  CalcHistory addition(BasicRequest request);

  CalcHistory getAdditionById(Long id);

  CalcHistory subtraction(BasicRequest request);

  CalcHistory getSubtractionById(Long id);

  CalcHistory multiplication(BasicRequest request);

  CalcHistory getMultiplicationById(Long id);

  CalcHistory division(BasicRequest request);

  CalcHistory getDivisionById(Long id);
}
