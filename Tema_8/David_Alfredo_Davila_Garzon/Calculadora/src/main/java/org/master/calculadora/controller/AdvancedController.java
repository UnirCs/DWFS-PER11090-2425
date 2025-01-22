package org.master.calculadora.controller;

import static lombok.AccessLevel.PRIVATE;

import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.master.calculadora.helper.ControllerHelper;
import org.master.calculadora.repository.dto.PowerRequest;
import org.master.calculadora.repository.dto.RootRequest;
import org.master.calculadora.repository.model.CalcHistory;
import org.master.calculadora.service.IAdvancedService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class AdvancedController {

  ControllerHelper helper;
  IAdvancedService service;

  @PostMapping("roots")
  public ResponseEntity<CalcHistory> roots(@RequestBody RootRequest request) {
    return helper.handleOperation(request, service::root);
  }

  @GetMapping("roots/{operationID}")
  public ResponseEntity<CalcHistory> getRoot(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getRootById);
  }

  @PostMapping("powers")
  public ResponseEntity<CalcHistory> powers(@RequestBody PowerRequest request) {
    return helper.handleOperation(request, service::power);
  }

  @GetMapping("powers/{operationID}")
  public ResponseEntity<CalcHistory> getPower(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getPowerById);
  }
}
