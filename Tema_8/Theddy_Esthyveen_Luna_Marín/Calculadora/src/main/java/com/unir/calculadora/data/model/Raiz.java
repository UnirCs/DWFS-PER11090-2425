package com.unir.calculadora.data.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "raices")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Raiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double numero;
    private Integer grado;
    private Double resultado;
}
