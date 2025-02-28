package com.unir.calculadora.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class OperationRequest {
    private String numbers;
    private int indice;
    private int exponente;
}

