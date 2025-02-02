package com.unir.ejercicio.data.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class OperationResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;

    @ElementCollection
    private List<Double> operands;

    private double result;

    public OperationResult(Long id, String type, List<Double> operands, double result) {
        this.id = id;
        this.type = type;
        this.operands = operands;
        this.result = result;
    }

    public OperationResult() {}
}
