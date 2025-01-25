package com.example.cinema.service;

import com.example.cinema.model.Reserva;
import com.example.cinema.model.Sala;
import com.example.cinema.model.Usuario;
import com.example.cinema.repository.ReservaRepository;
import com.example.cinema.repository.SalaRepository;
import com.example.cinema.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private SalaRepository salaRepository;

    public Reserva crearReserva(Long usuarioId, Long salaId) {
        Optional<Usuario> usuario = usuarioRepository.findById(usuarioId);
        Optional<Sala> sala = salaRepository.findById(salaId);

        if (usuario.isPresent() && sala.isPresent()) {
            Reserva reserva = new Reserva();
            reserva.setUsuario(usuario.get());
            reserva.setSala(sala.get());
            return reservaRepository.save(reserva);
        }
        return null;
    }

    public boolean cancelarReserva(Long reservaId) {
        Optional<Reserva> reserva = reservaRepository.findById(reservaId);
        if (reserva.isPresent()) {
            reservaRepository.deleteById(reservaId);
            return true;
        }
        return false;
    }

    public Reserva modificarReserva(Long reservaId, Long usuarioId, Long salaId) {
        Optional<Reserva> reservaExistente = reservaRepository.findById(reservaId);
        Optional<Usuario> usuario = usuarioRepository.findById(usuarioId);
        Optional<Sala> sala = salaRepository.findById(salaId);

        if (reservaExistente.isPresent() && usuario.isPresent() && sala.isPresent()) {
            Reserva reserva = reservaExistente.get();
            reserva.setUsuario(usuario.get());
            reserva.setSala(sala.get());
            return reservaRepository.save(reserva);
        }
        return null;
    }
}