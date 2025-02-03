package com.unir.ejercicio.data.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class OperationRequest {
    private String type;
    private List<Double> operands;

}
