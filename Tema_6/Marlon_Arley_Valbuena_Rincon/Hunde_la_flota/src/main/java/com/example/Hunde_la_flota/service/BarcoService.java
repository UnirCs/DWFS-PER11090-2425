package com.example.Hunde_la_flota.service;

import com.example.Hunde_la_flota.model.Barco;
import com.example.Hunde_la_flota.model.Jugador;
import com.example.Hunde_la_flota.repository.BarcoRepository;
import com.example.Hunde_la_flota.repository.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BarcoService {

    @Autowired
    private BarcoRepository barcoRepository;

    @Autowired
    private JugadorRepository jugadorRepository;

    public Barco agregarBarco(Long jugadorId, Barco barco) {
        // Lógica para validar la colocación del barco y asociarlo al jugador
        Jugador jugador = jugadorRepository.findById(jugadorId).orElseThrow(() -> new RuntimeException("Jugador no encontrado"));
        barco.setJugador(jugador);
        // Aquí puedes agregar la lógica para validar la colocación del barco
        return barcoRepository.save(barco);
    }

    public void eliminarBarco(Long barcoId) {
        barcoRepository.deleteById(barcoId);
    }

    public List<Barco> obtenerBarcosPorJugador(Long jugadorId) {
        return barcoRepository.findByJugadorId(jugadorId);
    }
}