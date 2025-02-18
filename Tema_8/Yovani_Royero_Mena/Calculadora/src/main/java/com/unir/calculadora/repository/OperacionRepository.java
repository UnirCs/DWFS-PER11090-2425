package com.unir.calculadora.repository;

import com.unir.calculadora.domain.Operacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OperacionRepository  extends JpaRepository<Operacion, Long> {
}
