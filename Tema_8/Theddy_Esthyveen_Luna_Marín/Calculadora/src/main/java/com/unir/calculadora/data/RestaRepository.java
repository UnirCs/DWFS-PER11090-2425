package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Resta;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class RestaRepository {
    private final IRestaRepository iRestaRepository;

    public List<Resta> obtenerRestas() {return iRestaRepository.findAll();}

    public Resta obtenerRestaPorId(Long id){
        return iRestaRepository.findById(id).orElse(null);
    }

    public Resta save(Resta resta) {
        return iRestaRepository.save(resta);
    }
}
