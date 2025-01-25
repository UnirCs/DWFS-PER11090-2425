package com.example.Hunde_la_flota.service;

import com.example.Hunde_la_flota.dto.PartidaDetalleDTO;
import com.example.Hunde_la_flota.exception.PartidaNoEncontradaException;
import com.example.Hunde_la_flota.model.Partida;
import com.example.Hunde_la_flota.repository.PartidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PartidaService {

    @Autowired
    private PartidaRepository partidaRepository;

    public Partida crearPartida(Partida partida) {
        return partidaRepository.save(partida);
    }

    public void eliminarPartida(Long id) {
        partidaRepository.deleteById(id);
    }

    public List<Partida> obtenerTodas() {
        return partidaRepository.findAll();
    }

    public Optional<Partida> obtenerPorId(Long id) {
        return partidaRepository.findById(id);
    }

    public Partida modificarPartida(Long id, Partida partidaDetalles) {
        Partida partida = partidaRepository.findById(id)
                .orElseThrow(() -> new PartidaNoEncontradaException("Partida no encontrada"));
        partida.setJugadores(partidaDetalles.getJugadores());
        // Actualiza otros campos según sea necesario
        return partidaRepository.save(partida);
    }

    public Partida iniciarPartida(Long id) {
        Partida partida = partidaRepository.findById(id)
                .orElseThrow(() -> new PartidaNoEncontradaException("Partida no encontrada"));
        // Lógica para iniciar la partida, por ejemplo, cambiar el estado
        partida.setEstado("iniciada");
        // Realiza cualquier configuración inicial necesaria
        return partidaRepository.save(partida);
    }

    public Partida finalizarPartida(Long id) {
        Partida partida = partidaRepository.findById(id)
                .orElseThrow(() -> new PartidaNoEncontradaException("Partida no encontrada"));
        // Lógica para finalizar la partida, por ejemplo, cambiar el estado
        partida.setEstado("finalizada");
        // Realiza cualquier configuración inicial necesaria
        return partidaRepository.save(partida);
    }

    public PartidaDetalleDTO obtenerDetallePartida(Long id) {
        Partida partida = partidaRepository.findById(id)
                .orElseThrow(() -> new PartidaNoEncontradaException("Partida no encontrada"));

        PartidaDetalleDTO detalleDTO = new PartidaDetalleDTO();
        detalleDTO.setId(partida.getId());
        detalleDTO.setJugadores(partida.getJugadores());
        // Asumiendo que tienes métodos para obtener barcos y disparos
        detalleDTO.setBarcos(partida.getJugadores().stream()
                .flatMap(jugador -> jugador.getBarcos().stream())
                .collect(Collectors.toList()));
        detalleDTO.setDisparos(partida.getJugadores().stream()
                .flatMap(jugador -> jugador.getDisparosRealizados().stream())
                .collect(Collectors.toList()));
        detalleDTO.setEstado(partida.getEstado());
        detalleDTO.setGanador(partida.getGanador()); // Asumiendo que tienes un método para obtener el ganador

        return detalleDTO;
    }
}