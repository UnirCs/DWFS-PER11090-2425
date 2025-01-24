package org.master.calculadora.helper;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NOT_FOUND;

import java.util.function.Function;
import java.util.function.LongFunction;
import org.master.calculadora.repository.model.CalcHistory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class ControllerHelper {

  /**
   * Métod0 genérico, recibe cualquier request y el métod0 a ejecutar, lo ejecuta con .apply()
   * @return Retorna la entidad CalcHistory (solo con propósito de práctica, pero debería retornar un DTO)
   */
  public <T>ResponseEntity<CalcHistory> handleOperation(T request, Function<T, CalcHistory> operation) {
    var response = operation.apply(request);
    return response == null ?
        ResponseEntity.status(BAD_REQUEST).build() :
        ResponseEntity.status(CREATED).body(response);
  }

  /**
   * Recibe el id de la operación a buscar y el métod0 a ejecutar para obtener información de dicha operación
   * @return Retorna la entidad CalcHistory (solo con propósito de práctica, pero debería retornar un DTO)
   */
  public ResponseEntity<CalcHistory> handleGet(Long id, LongFunction<CalcHistory> operation) {
    var response = operation.apply(id);
    return response == null ?
        ResponseEntity.status(NOT_FOUND).build() :
        ResponseEntity.ok(response);
  }
}
