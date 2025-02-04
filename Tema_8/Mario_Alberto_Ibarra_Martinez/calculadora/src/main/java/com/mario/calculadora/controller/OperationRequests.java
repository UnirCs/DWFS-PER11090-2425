package com.mario.calculadora.controller;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NOT_FOUND;

import java.util.function.Function;
import java.util.function.LongFunction;

import com.mario.calculadora.repository.OperationsRec;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class OperationRequests {


  public <T>ResponseEntity<OperationsRec> handleOperation(T request, Function<T, OperationsRec> operation) {
    var response = operation.apply(request);
    return response == null ?
        ResponseEntity.status(BAD_REQUEST).build() :
        ResponseEntity.status(CREATED).body(response);
  }

  public ResponseEntity<OperationsRec> handleGet(Long id, LongFunction<OperationsRec> operation) {
    var response = operation.apply(id);
    return response == null ?
        ResponseEntity.status(NOT_FOUND).build() :
        ResponseEntity.ok(response);
  }
}
