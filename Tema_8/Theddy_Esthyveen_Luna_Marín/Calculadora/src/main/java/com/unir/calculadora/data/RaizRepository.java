package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Raiz;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class RaizRepository {
    private final IRaizRepository iRaizRepository;

    public List<Raiz> obtenerRaices() {return iRaizRepository.findAll();}

    public Raiz obtenerMultiplicacionPorId(Long id){
        return iRaizRepository.findById(id).orElse(null);
    }

    public Raiz save(Raiz raiz) {
        return iRaizRepository.save(raiz);
    }
}
