package com.unir.calculadora.data.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "potencias")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Potencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double numero;
    private Integer exponente;
    private Double resultado;
}
