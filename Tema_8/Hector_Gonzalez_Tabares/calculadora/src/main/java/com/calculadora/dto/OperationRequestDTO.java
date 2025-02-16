package com.calculadora.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OperationRequestDTO {
    private List<Double> numeros;

    public List<Double> getNumeros() { return numeros; }
}