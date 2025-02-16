package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Raiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IRaizRepository extends JpaRepository<Raiz, Long>, JpaSpecificationExecutor<Raiz> {
}
