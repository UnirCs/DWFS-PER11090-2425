package com.calculadora.data;

import com.calculadora.modelo.Operacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OperationRepository extends JpaRepository<Operacion, Long> {
}