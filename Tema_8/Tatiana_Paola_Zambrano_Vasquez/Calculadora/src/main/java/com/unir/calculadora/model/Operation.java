package com.unir.calculadora.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name ="Operations")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Operation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private String numbers;
    private Double result;

    // Constructor con parámetros
    public Operation(String type, String numbers, Double result) {
        this.type = type;
        this.numbers = numbers;
        this.result = result;
    }
}