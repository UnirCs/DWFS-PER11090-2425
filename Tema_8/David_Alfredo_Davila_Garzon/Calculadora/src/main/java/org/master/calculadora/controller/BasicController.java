package org.master.calculadora.controller;

import static lombok.AccessLevel.PRIVATE;

import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.master.calculadora.helper.ControllerHelper;
import org.master.calculadora.repository.dto.BasicRequest;
import org.master.calculadora.repository.model.CalcHistory;
import org.master.calculadora.service.IBasicService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class BasicController {

  ControllerHelper helper;
  IBasicService service;

  @PostMapping("adds")
  public ResponseEntity<CalcHistory> addition(@RequestBody BasicRequest request) {
    return helper.handleOperation(request, service::addition);
  }

  @GetMapping("adds/{operationID}")
  public ResponseEntity<CalcHistory> getAddition(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getAdditionById);
  }

  @PostMapping("subtractions")
  public ResponseEntity<CalcHistory> subtraction(@RequestBody BasicRequest request) {
    return helper.handleOperation(request, service::subtraction);
  }

  @GetMapping("subtractions/{operationID}")
  public ResponseEntity<CalcHistory> getSubtraction(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getSubtractionById);
  }

  @PostMapping("multiplications")
  public ResponseEntity<CalcHistory> multiplication(@RequestBody BasicRequest request) {
    return helper.handleOperation(request, service::multiplication);
  }

  @GetMapping("multiplications/{operationID}")
  public ResponseEntity<CalcHistory> getMultiplication(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getMultiplicationById);
  }

  @PostMapping("divisions")
  public ResponseEntity<CalcHistory> division(@RequestBody BasicRequest request) {
    return helper.handleOperation(request, service::division);
  }

  @GetMapping("divisions/{operationID}")
  public ResponseEntity<CalcHistory> getDivision(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getDivisionById);
  }
}
