package com.unir.ejercicio.controller;

import com.unir.ejercicio.data.model.OperationRequest;
import com.unir.ejercicio.data.model.OperationResult;
import com.unir.ejercicio.service.CalculatorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/operations")
public class CalculatorController {

    private final CalculatorService calculatorService;

    public CalculatorController(CalculatorService calculatorService) {
        this.calculatorService = calculatorService;
    }

    @PostMapping
    public ResponseEntity<?> performOperation(@RequestBody OperationRequest request) {
        try {
            if (request.getOperands() == null || request.getOperands().isEmpty() || request.getType() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid request");
            }

            OperationResult operationResult = calculatorService.calculate(request);
            return ResponseEntity.ok(operationResult);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
        }
    }

    @GetMapping("/{operationId}")
    public ResponseEntity<?> getOperation(@PathVariable Long operationId) {
        OperationResult operationResult = calculatorService.getOperation(operationId);
        if (operationResult == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Operation not found");
        }
        return ResponseEntity.ok(operationResult);
    }

}
