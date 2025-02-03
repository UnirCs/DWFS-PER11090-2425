package com.unir.api_calculadora.repository;


import com.unir.api_calculadora.model.Operacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OperationRepository extends JpaRepository<Operacion, Long> {
}