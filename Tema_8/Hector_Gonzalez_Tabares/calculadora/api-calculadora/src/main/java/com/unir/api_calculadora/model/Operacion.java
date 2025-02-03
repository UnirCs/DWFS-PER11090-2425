package com.unir.api_calculadora.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Operations")
public class Operacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String operationType;
    private String operands;
    private double result;
    private LocalDateTime timestamp;
    // Getters and setters omitted for brevity

    public Operacion(String operationType, String operands, double result) {
        this.operationType = operationType;
        this.operands = operands;
        this.result = result;
        this.timestamp = LocalDateTime.now();
    }
}