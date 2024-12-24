package com.unir.cine.service;

import com.unir.cine.model.Reserva;
import com.unir.cine.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {

    private final ReservaRepository reservaRepository;

    @Autowired
    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    // Crear una reserva
    public Reserva crearReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    // Obtener todas las reservas
    public List<Reserva> obtenerTodasLasReservas() {
        return reservaRepository.findAll();
    }

    // Obtener una reserva por ID
    public Optional<Reserva> obtenerReservaPorId(Long id) {
        return reservaRepository.findById(id);
    }

    // Actualizar una reserva
    public Reserva actualizarReserva(Long id, Reserva reservaActualizada) {
        return reservaRepository.findById(id).map(reserva -> {
            reserva.setUsuarioId(reservaActualizada.getUsuarioId());
            reserva.setSalaId(reservaActualizada.getSalaId());
            reserva.setFecha(reservaActualizada.getFecha());
            reserva.setHora(reservaActualizada.getHora());
            reserva.setCantidadButacas(reservaActualizada.getCantidadButacas());
            return reservaRepository.save(reserva);
        }).orElseThrow(() -> new RuntimeException("Reserva no encontrada con ID " + id));
    }

    // Eliminar una reserva por ID
    public void eliminarReserva(Long id) {
        reservaRepository.deleteById(id);
    }
}
