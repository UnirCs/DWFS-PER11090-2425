package com.unir.hundirFlota.service;

import com.unir.hundirFlota.model.Barco;
import com.unir.hundirFlota.repository.BarcoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BarcoService {

    @Autowired
    private BarcoRepository barcoRepository;

    public List<Barco> obtenerTodosLosBarcos() {
        return barcoRepository.findAll();
    }

    public Optional<Barco> obtenerBarcoPorId(Long id) {
        return barcoRepository.findById(id);
    }

    public Barco guardarBarco(Barco barco) {
        return barcoRepository.save(barco);
    }

    public void eliminarBarco(Long id) {
        barcoRepository.deleteById(id);
    }
}
