package com.example.Hunde_la_flota.service;

import com.example.Hunde_la_flota.model.Disparo;
import com.example.Hunde_la_flota.model.Partida;
import com.example.Hunde_la_flota.model.Jugador;
import com.example.Hunde_la_flota.repository.DisparoRepository;
import com.example.Hunde_la_flota.repository.PartidaRepository;
import com.example.Hunde_la_flota.repository.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DisparoService {

    @Autowired
    private DisparoRepository disparoRepository;

    @Autowired
    private PartidaRepository partidaRepository;

    @Autowired
    private JugadorRepository jugadorRepository;

    public Disparo registrarDisparo(Long partidaId, Long jugadorId, Disparo disparo) {
        // Lógica para registrar el disparo, verificar impacto, y actualizar estado.
        Partida partida = partidaRepository.findById(partidaId).orElseThrow(() -> new RuntimeException("Partida no encontrada"));
        Jugador atacante = jugadorRepository.findById(jugadorId).orElseThrow(() -> new RuntimeException("Jugador no encontrado"));
        disparo.setPartida(partida);
        disparo.setAtacante(atacante);
        // Aquí puedes agregar la lógica para verificar el impacto y actualizar el estado del juego.
        return disparoRepository.save(disparo);
    }

    public List<Disparo> obtenerDisparosPorPartida(Long partidaId) {
        return disparoRepository.findByPartidaId(partidaId);
    }
}