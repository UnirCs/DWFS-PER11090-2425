package com.mario.calculadora.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OperationsRecRepository extends JpaRepository<OperationsRec, Long> {

  OperationsRec findByIdAndOperation(Long id, String operation);
  
}
