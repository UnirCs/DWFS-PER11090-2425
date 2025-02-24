package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Potencia;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class PotenciaRepository {
    private final IPotenciaRepository iPotenciaRepository;

    public List<Potencia> obtenerPotencias() {return iPotenciaRepository.findAll();}

    public Potencia obtenerPotenciaPorId(Long id){
        return iPotenciaRepository.findById(id).orElse(null);
    }

    public Potencia save(Potencia potencia) {
        return iPotenciaRepository.save(potencia);
    }

}
