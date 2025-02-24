package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Multiplicacion;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MultiplicacionRepository {
    private final IMultiplicacionRepository iMultiplicacionRepository;

    public List<Multiplicacion> obtenerMultiplicaciones() {return iMultiplicacionRepository.findAll();}

    public Multiplicacion obtenerMultiplicacionPorId(Long id){
        return iMultiplicacionRepository.findById(id).orElse(null);
    }

    public Multiplicacion save(Multiplicacion multiplicacion) {
        return iMultiplicacionRepository.save(multiplicacion);
    }
}
