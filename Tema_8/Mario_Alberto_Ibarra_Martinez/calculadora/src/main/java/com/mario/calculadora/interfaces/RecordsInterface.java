package com.mario.calculadora.interfaces;

import com.mario.calculadora.repository.OperationsRec;

public interface RecordsInterface {

  OperationsRec save(OperationsRec history);

  OperationsRec findByIdAndOperation(Long id, String operation);
}
