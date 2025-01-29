package com.unir.ejercicio.service;

import com.unir.ejercicio.data.model.OperationRequest;
import com.unir.ejercicio.data.model.OperationResult;
import com.unir.ejercicio.data.repository.OperationResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CalculatorService {

    private final OperationResultRepository operationResultRepository;

    @Autowired
    public CalculatorService(OperationResultRepository operationResultRepository) {
        this.operationResultRepository = operationResultRepository;
    }

    public OperationResult calculate(OperationRequest request) {
        double result = switch (request.getType().toLowerCase()) {
            case "sum" -> request.getOperands().stream().mapToDouble(Double::doubleValue).sum();
            case "subtract" ->
                    request.getOperands().stream().reduce((a, b) -> a - b).orElseThrow(() -> new IllegalArgumentException("Invalid operands"));
            case "multiply" ->
                    request.getOperands().stream().reduce((a, b) -> a * b).orElseThrow(() -> new IllegalArgumentException("Invalid operands"));
            case "divide" ->
                    request.getOperands().stream().reduce((a, b) -> a / b).orElseThrow(() -> new IllegalArgumentException("Invalid operands"));
            case "root" -> {
                if (request.getOperands().size() != 1) {
                    throw new IllegalArgumentException("Root operation requires exactly one operand");
                }
                yield Math.sqrt(request.getOperands().getFirst());
            }
            case "power" -> {
                if (request.getOperands().size() != 2) {
                    throw new IllegalArgumentException("Power operation requires exactly two operands");
                }
                yield Math.pow(request.getOperands().get(0), request.getOperands().get(1));
            }
            default -> throw new IllegalArgumentException("Unsupported operation type");
        };

        OperationResult operationResult = new OperationResult(null, request.getType(), request.getOperands(), result);
        return operationResultRepository.save(operationResult);
    }

    public OperationResult getOperation(Long operationId) {
        return operationResultRepository.findById(operationId).orElse(null);
    }
}