package com.unir.calculadora.domain;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "operacion")
public class Operacion implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "operation")
    private String operation;
    @Column(name = "result")
    private Long result;

    @OneToMany(mappedBy = "operacion", fetch = FetchType.LAZY)
    @ToString.Exclude
    private Set<Numero> numbers;


}
