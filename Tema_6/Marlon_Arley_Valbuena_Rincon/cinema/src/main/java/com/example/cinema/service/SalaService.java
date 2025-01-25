package com.example.cinema.service;

import com.example.cinema.model.Sala;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SalaService {

    private List<Sala> salas = new ArrayList<>();

    public Sala agregarSala(Sala sala) {
        salas.add(sala);
        return sala;
    }

    public void removerSala(Long id) {
        salas.removeIf(sala -> sala.getId().equals(id));
    }

    public Sala modificarSala(Long id, Sala sala) {
        Optional<Sala> existeSala = salas.stream().filter(r -> r.getId().equals(id)).findFirst();
        if (existeSala.isPresent()) {
            Sala actualizaSala = existeSala.get();
            if (sala.getNombre() != null) {
                actualizaSala.setNombre(sala.getNombre());
            }
            if (sala.getCapacidad() != 0) {
                actualizaSala.setCapacidad(sala.getCapacidad());
            }
            return actualizaSala;
        }
        return null;
    }

    public List<Sala> obtenerTodasSalas() {
        return salas;
    }
}