package blasco.calculadora.data;

import blasco.calculadora.data.model.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OperationsRepository extends JpaRepository<Operation, Long> {
}
