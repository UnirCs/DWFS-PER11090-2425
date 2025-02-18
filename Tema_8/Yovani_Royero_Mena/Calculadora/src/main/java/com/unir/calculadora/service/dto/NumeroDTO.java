package com.unir.calculadora.service.dto;

import com.unir.calculadora.domain.Operacion;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NumeroDTO implements Serializable {
    private Long id;
    private Long valor;
    private Operacion operacion;
}
