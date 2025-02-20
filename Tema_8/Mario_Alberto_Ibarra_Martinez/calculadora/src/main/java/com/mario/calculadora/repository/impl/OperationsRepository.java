package com.mario.calculadora.repository.impl;

import static lombok.AccessLevel.PRIVATE;

import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import com.mario.calculadora.interfaces.RecordsInterface;
import com.mario.calculadora.repository.OperationsRec;
import com.mario.calculadora.repository.OperationsRecRepository;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class OperationsRepository implements RecordsInterface {

  OperationsRecRepository repository;


  @Override
  public OperationsRec save(OperationsRec history) {
    return repository.save(history);
  }

  @Override
  public OperationsRec findByIdAndOperation(Long id, String operation) {
    return repository.findByIdAndOperation(id, operation);
  }
}
