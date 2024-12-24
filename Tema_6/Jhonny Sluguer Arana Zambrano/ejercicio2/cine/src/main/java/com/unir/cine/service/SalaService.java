package com.unir.cine.service;

import com.unir.cine.model.Sala;
import com.unir.cine.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SalaService {

    private final SalaRepository salaRepository;

    @Autowired
    public SalaService(SalaRepository salaRepository) {
        this.salaRepository = salaRepository;
    }

    // Crear sala
    public Sala crearSala(Sala sala) {
        return salaRepository.save(sala);
    }

    // Obtener sala por ID
    public Optional<Sala> obtenerSalaPorId(Long id) {
        return salaRepository.findById(id);
    }

    // Obtener todas las salas
    public List<Sala> obtenerTodasLasSalas() {
        return salaRepository.findAll();
    }

    // Actualizar sala
    public Optional<Sala> actualizarSala(Long id, Sala salaActualizada) {
        return salaRepository.findById(id).map(sala -> {
            sala.setNombre(salaActualizada.getNombre());
            sala.setCapacidad(salaActualizada.getCapacidad());
            return salaRepository.save(sala);
        });
    }

    // Eliminar sala
    public boolean eliminarSala(Long id) {
        if (salaRepository.existsById(id)) {
            salaRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
