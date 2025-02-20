package com.unir.calculadora.service.dto;

import lombok.*;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OperacionDTO implements Serializable {
    protected Long id;
    protected String operation;
    protected Long result;
    protected List<NumeroDTO> numbers;
}
