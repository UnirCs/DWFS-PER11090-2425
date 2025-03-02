package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Suma;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class SumaRepository {

    private final ISumaRepository iSumaRepository;

    public List<Suma> obtenerSumas() {
        return iSumaRepository.findAll();
    }

    public Suma obtenerSumaPorId(Long id){
        return iSumaRepository.findById(id).orElse(null);
    }

    public Suma save(Suma suma) {
        return iSumaRepository.save(suma);
    }
}
