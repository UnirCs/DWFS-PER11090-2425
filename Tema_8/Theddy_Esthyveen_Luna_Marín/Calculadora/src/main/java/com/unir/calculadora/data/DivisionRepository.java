package com.unir.calculadora.data;

import com.unir.calculadora.data.model.Division;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class DivisionRepository {
    private final IDivisionRepository iDivisionRepository;

    public List<Division> obtenerDivisiones() {
        return iDivisionRepository.findAll();
    }

    public Division obtenerDivisionPorId(Long id) {
        return iDivisionRepository.findById(id).orElse(null);
    }

    public Division save(Division division) {
        return iDivisionRepository.save(division);
    }
}
