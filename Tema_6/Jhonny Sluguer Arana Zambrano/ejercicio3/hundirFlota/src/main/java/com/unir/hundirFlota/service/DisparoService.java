package com.unir.hundirFlota.service;

import com.unir.hundirFlota.model.Disparo;
import com.unir.hundirFlota.repository.DisparoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DisparoService {

    @Autowired
    private DisparoRepository disparoRepository;

    public List<Disparo> obtenerTodosLosDisparos() {
        return disparoRepository.findAll();
    }

    public Optional<Disparo> obtenerDisparoPorId(Long id) {
        return disparoRepository.findById(id);
    }

    public Disparo registrarDisparo(Disparo disparo) {
        return disparoRepository.save(disparo);
    }

    public void eliminarDisparo(Long id) {
        disparoRepository.deleteById(id);
    }
}
