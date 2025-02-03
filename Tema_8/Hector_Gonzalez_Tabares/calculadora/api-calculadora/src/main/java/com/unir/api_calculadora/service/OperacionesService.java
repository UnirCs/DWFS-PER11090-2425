package com.unir.api_calculadora.service;

import com.unir.api_calculadora.model.Operacion;

import java.util.List;

public interface OperacionesService {

    double add(List<Double> numbers);

    double subtract(List<Double> numbers);

    double multiply(double a, double b);

    double divide(double a, double b);

    double nthRoot(double number, int n);

    double power(double base, int exponent);

    List<Operacion> getHistory();

    Operacion getOperationById(Long id);

    void saveOperation(String type, String operands, double result);
}
