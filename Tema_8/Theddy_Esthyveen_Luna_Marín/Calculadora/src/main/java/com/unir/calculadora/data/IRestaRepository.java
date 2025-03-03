package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Resta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IRestaRepository extends JpaRepository<Resta, Long>, JpaSpecificationExecutor<Resta> {
}
