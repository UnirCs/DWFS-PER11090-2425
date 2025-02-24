package blasco.calculadora.controller.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OperationDto {
    private String numbers;
    private int indice;    // Para la raíz N-ésima
    private int exponente; // Para la potencia
}
