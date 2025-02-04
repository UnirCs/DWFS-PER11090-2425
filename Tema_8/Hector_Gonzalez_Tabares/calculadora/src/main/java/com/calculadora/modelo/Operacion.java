package com.calculadora.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "operaciones")
@Getter
@Setter

public class Operacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String operationType;
    private String operands;
    private double result;

    public Operacion() {}

    public Operacion(String operationType, String operands, double result) {
        this.operationType = operationType;
        this.operands = operands;
        this.result = result;
    }

}
