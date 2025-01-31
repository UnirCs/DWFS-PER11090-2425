package com.unir.calculadora.repository;

import com.unir.calculadora.model.Operation;
import org.springframework.stereotype.Repository;

@Repository
public class OperationsRepository {
    private final OperationsJpaRepository jpaRepository;

    public OperationsRepository(OperationsJpaRepository jpaRepository) {
        this.jpaRepository = jpaRepository;
    }

    public Operation save(Operation operation) {
        return jpaRepository.save(operation);
    }

    public Operation findById(Long id) {
        return jpaRepository.findById(id).orElse(null);
    }
}