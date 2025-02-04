package com.unir.calculadora.repository;

import com.unir.calculadora.model.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OperationsJpaRepository extends JpaRepository<Operation, Long> {
}