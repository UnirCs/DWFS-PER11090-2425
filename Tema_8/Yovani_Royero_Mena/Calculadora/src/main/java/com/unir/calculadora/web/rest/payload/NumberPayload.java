package com.unir.calculadora.web.rest.payload;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class NumberPayload implements Serializable {

    private List<Long> numeros;
}
