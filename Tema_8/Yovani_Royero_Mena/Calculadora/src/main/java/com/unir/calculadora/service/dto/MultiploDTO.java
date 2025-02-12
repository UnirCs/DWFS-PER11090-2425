package com.unir.calculadora.service.dto;

import com.unir.calculadora.domain.Numero;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MultiploDTO extends OperacionDTO {

    private Long entrada1;
    private Long entrada2;

    public MultiploDTO(Long id, Long entrada1, Long entrada2, Long resultado, String operation, List<NumeroDTO> numeros) {
        super(id, operation, resultado, numeros);
        this.entrada1 = entrada1;
        this.entrada2 = entrada2;
    }
}
