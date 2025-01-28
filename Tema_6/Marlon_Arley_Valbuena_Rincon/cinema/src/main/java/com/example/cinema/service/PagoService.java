package com.example.cinema.service;

import com.example.cinema.model.Pago;
import com.example.cinema.model.Reserva;
import com.example.cinema.repository.PagoRepository;
import com.example.cinema.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class PagoService {

    @Autowired
    private PagoRepository pagoRepository;

    @Autowired
    private ReservaRepository reservaRepository;

    public Pago registrarPago(Long reservaId, double monto) {
        Optional<Reserva> reserva = reservaRepository.findById(reservaId);

        if (reserva.isPresent()) {
            Pago pago = new Pago();
            pago.setReserva(reserva.get());
            pago.setMonto(monto);
            pago.setFechaPago(LocalDateTime.now());
            return pagoRepository.save(pago);
        }
        return null;
    }
}