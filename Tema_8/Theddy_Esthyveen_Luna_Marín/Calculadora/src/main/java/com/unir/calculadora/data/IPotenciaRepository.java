package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Potencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IPotenciaRepository extends JpaRepository<Potencia, Long>, JpaSpecificationExecutor<Potencia> {
}
