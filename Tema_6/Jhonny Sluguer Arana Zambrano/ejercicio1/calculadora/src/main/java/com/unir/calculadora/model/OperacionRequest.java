package com.unir.calculadora.model;

import lombok.Data;
import java.util.List;

@Data // Genera automáticamente los métodos get, set, toString, equals y hashCode
public class OperacionRequest {
    private String operacion; // Indica la operación (suma, resta, multiplicación, división, etc.)
    private List<Double> numeros; // Lista de números a operar
}
