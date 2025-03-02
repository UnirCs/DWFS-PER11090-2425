package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Division;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IDivisionRepository extends JpaRepository<Division, Long>, JpaSpecificationExecutor<Division> {
}
