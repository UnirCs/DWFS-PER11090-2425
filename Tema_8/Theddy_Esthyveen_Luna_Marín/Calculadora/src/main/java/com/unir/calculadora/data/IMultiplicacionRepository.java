package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Multiplicacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IMultiplicacionRepository extends JpaRepository<Multiplicacion, Long>, JpaSpecificationExecutor<Multiplicacion> {
}
