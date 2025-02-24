package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Suma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ISumaRepository extends JpaRepository<Suma, Long>, JpaSpecificationExecutor<Suma> {
}
