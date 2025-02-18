package com.unir.calculadora.repository;

import com.unir.calculadora.domain.Numero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NumeroRepository extends JpaRepository<Numero, Long> {
}
