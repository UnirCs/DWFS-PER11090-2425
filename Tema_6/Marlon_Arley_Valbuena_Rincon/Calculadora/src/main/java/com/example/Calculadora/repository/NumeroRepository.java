package com.example.Calculadora.repository;

import com.example.Calculadora.model.Numero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NumeroRepository extends JpaRepository<Numero, Long> {
}