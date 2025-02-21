package blasco.calculadora.data;

import blasco.calculadora.data.model.CalculatorOperation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OperationsRepository extends JpaRepository<CalculatorOperation, Long> {
}
