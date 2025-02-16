package com.calculadora.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TwoNumberRequestDTO {
    private double numeros1;
    private double numeros2;
}
