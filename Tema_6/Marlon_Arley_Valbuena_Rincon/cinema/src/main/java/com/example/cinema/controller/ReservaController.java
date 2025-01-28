package com.example.cinema.controller;

import com.example.cinema.model.Reserva;
import com.example.cinema.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservas")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @PostMapping
    public ResponseEntity<Reserva> crearReserva(@RequestParam Long usuarioId, @RequestParam Long salaId) {
        Reserva reservaCreada = reservaService.crearReserva(usuarioId, salaId);
        if (reservaCreada != null) {
            return ResponseEntity.ok(reservaCreada);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> cancelarReserva(@PathVariable Long id) {
        boolean isCancelled = reservaService.cancelarReserva(id);
        if (isCancelled) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reserva> modificarReserva(@PathVariable Long id, @RequestParam Long usuarioId, @RequestParam Long salaId) {
        Reserva reservaModificada = reservaService.modificarReserva(id, usuarioId, salaId);
        if (reservaModificada != null) {
            return ResponseEntity.ok(reservaModificada);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}