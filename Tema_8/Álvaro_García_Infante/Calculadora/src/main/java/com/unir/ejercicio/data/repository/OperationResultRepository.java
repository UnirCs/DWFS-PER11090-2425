package com.unir.ejercicio.data.repository;

import com.unir.ejercicio.data.model.OperationResult;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OperationResultRepository extends JpaRepository<OperationResult, Long> {
}