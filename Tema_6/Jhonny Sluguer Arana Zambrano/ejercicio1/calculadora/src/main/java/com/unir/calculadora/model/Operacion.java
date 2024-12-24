package com.unir.calculadora.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Operacion {
    private Long id;
    private String tipoOperacion;
    private String valores;
    private Double resultado;
}
