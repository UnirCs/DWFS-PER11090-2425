package com.example.Hunde_la_flota.service;

import com.example.Hunde_la_flota.model.Jugador;
import com.example.Hunde_la_flota.repository.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JugadorService {

    @Autowired
    private JugadorRepository jugadorRepository;

    public Jugador crearJugador(Jugador jugador) {
        return jugadorRepository.save(jugador);
    }

    public List<Jugador> obtenerTodos() {
        return jugadorRepository.findAll();
    }

    public Optional<Jugador> obtenerPorId(Long id) {
        return jugadorRepository.findById(id);
    }

    public void eliminarJugador(Long id) {
        jugadorRepository.deleteById(id);
    }
}