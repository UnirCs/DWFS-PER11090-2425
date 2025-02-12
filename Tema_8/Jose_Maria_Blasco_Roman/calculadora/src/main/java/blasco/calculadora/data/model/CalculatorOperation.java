package blasco.calculadora.data.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "operations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CalculatorOperation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private String numbers;
    private Double result;

    public CalculatorOperation(String type, String numbers, Double result) {
        this.type = type;
        this.numbers = numbers;
        this.result = result;
    }
}

