package com.unir.calculadora.repository;

import com.unir.calculadora.model.Operacion;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class MemoriaOperacionRepository {

    private final List<Operacion> operaciones = new ArrayList<>();
    private Long idGenerador = 1L;

    public Operacion guardarOperacion(String tipo, String valores, Double resultado) {
        Operacion operacion = new Operacion(idGenerador++, tipo, valores, resultado);
        operaciones.add(operacion);
        return operacion;
    }

    public Optional<Operacion> obtenerOperacionPorId(Long id) {
        return operaciones.stream()
                .filter(operacion -> operacion.getId().equals(id))
                .findFirst();
    }

    public List<Operacion> obtenerTodasLasOperaciones() {
        return operaciones;
    }
}
