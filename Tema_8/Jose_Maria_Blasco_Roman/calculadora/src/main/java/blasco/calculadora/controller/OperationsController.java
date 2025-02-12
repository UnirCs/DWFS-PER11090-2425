package blasco.calculadora.controller;

import blasco.calculadora.data.model.Operation;
import blasco.calculadora.model.OperationDto;
import blasco.calculadora.service.OperationsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/operations")
public class OperationsController {

    private final OperationsService operationsService;

    public OperationsController(OperationsService operationsService) {
        this.operationsService = operationsService;
    }

    @PostMapping("/add")
    public ResponseEntity<Operation> addNumbers(@RequestBody OperationDto request) {
        Operation operation = operationsService.addNumbers(request.getNumbers());
        return ResponseEntity.ok(operation);
    }

    @PostMapping("/subtract")
    public ResponseEntity<Operation> subtractNumbers(@RequestBody OperationDto request) {
        Operation operation = operationsService.subtractNumbers(request.getNumbers());
        return ResponseEntity.ok(operation);
    }

    @PostMapping("/multiply")
    public ResponseEntity<Operation> multiplyNumbers(@RequestBody OperationDto request) {
        Operation operation = operationsService.multiplyNumbers(request.getNumbers());
        return ResponseEntity.ok(operation);
    }

    @PostMapping("/divide")
    public ResponseEntity<Operation> divideNumbers(@RequestBody OperationDto request) {
        try {
            Operation operation = operationsService.divideNumbers(request.getNumbers());
            return ResponseEntity.ok(operation);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/root")
    public ResponseEntity<Operation> calculateRoot(@RequestBody OperationDto request) {
        Operation operation = operationsService.calculateRoot(request.getNumbers(), request.getIndice());
        return ResponseEntity.ok(operation);
    }

    @PostMapping("/power")
    public ResponseEntity<Operation> calculatePower(@RequestBody OperationDto request) {
        Operation operation = operationsService.calculatePower(request.getNumbers(), request.getExponente());
        return ResponseEntity.ok(operation);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Operation> getOperationById(@PathVariable Long id) {
        Operation operation = operationsService.getOperationById(id);
        if (operation != null) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

