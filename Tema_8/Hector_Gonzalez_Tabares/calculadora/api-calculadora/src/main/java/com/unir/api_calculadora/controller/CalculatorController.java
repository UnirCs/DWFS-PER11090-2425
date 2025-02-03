package com.unir.api_calculadora.controller;

import com.unir.api_calculadora.repository.OperationRepository;
import com.unir.api_calculadora.service.OperacionesService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.unir.api_calculadora.model.*;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/calculator")
@Tag(name = "Calculator API", description = "API for performing basic arithmetic operations")
public class CalculatorController {


    @Autowired
    private OperacionesService operacionesService;

    @PostMapping("/add")
    @Operation(summary = "Sumar N numbers", description = "Realiza la suma de N números")
    public double add(@RequestBody List<Double> numbers) {
        return operacionesService.add(numbers);
    }

    @PostMapping("/subtract")
    @Operation(summary = "Restar N números", description = "Realiza la resta de N números")
    public double subtract(@RequestBody List<Double> numbers) {
        return operacionesService.subtract(numbers);
    }

    @PostMapping("/multiply")
    @Operation(summary = "Multiplicar dos números", description = "Realiza la multiplicación de dos números.")
    public double multiply(@RequestParam double a, @RequestParam double b) {
        return operacionesService.multiply(a, b);
    }

    @PostMapping("/divide")
    @Operation(summary = "Dividir dos números", description = "Realiza la división de dos números")
    public double divide(@RequestParam double a, @RequestParam double b) {
        return operacionesService.divide(a, b);
    }

    @PostMapping("/root")
    @Operation(summary = "Raíz de un número", description = "Calcula la raíz de un número")
    public double nthRoot(@RequestParam double number, @RequestParam int n) {
        return operacionesService.nthRoot(number, n);
    }

    @PostMapping("/power")
    @Operation(summary = "La potencia de un número", description = "Calcula la potencia N de un número")
    public double power(@RequestParam double base, @RequestParam int exponent) {
        return operacionesService.power(base, exponent);
    }

    @GetMapping("/history")
    @Operation(summary = "Obtener historial de operaciones", description = "Obtiene todas las operaciones realizadas")
    public List<Operacion> getHistory() {
        return  operacionesService.getHistory();
    }

    @GetMapping("/history/{id}")
    @Operation(summary = "Obtener operación por ID", description = "Obtiene una operación específica por ID")
    public Operacion getOperationById(@PathVariable Long id) {
        return (Operacion) operacionesService.getOperationById(id);
    }
}