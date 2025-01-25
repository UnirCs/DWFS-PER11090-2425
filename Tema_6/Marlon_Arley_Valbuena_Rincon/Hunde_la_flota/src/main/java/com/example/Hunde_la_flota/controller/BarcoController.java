package com.example.Hunde_la_flota.controller;

import com.example.Hunde_la_flota.model.Barco;
import com.example.Hunde_la_flota.service.BarcoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/barcos")
public class BarcoController {

    private final BarcoService barcoService;

    public BarcoController(BarcoService barcoService) {
        this.barcoService = barcoService;
    }

    // Añadir un barco a un jugador
    @PostMapping("/jugador/{jugadorId}")
    public ResponseEntity<Barco> agregarBarco(@PathVariable Long jugadorId, @RequestBody Barco barco) {
        Barco nuevoBarco = barcoService.agregarBarco(jugadorId, barco);
        return ResponseEntity.ok(nuevoBarco);
    }

    // Eliminar un barco por ID
    @DeleteMapping("/{barcoId}")
    public ResponseEntity<Void> eliminarBarco(@PathVariable Long barcoId) {
        barcoService.eliminarBarco(barcoId);
        return ResponseEntity.noContent().build();
    }

    // Consultar todos los barcos de un jugador
    @GetMapping("/jugador/{jugadorId}")
    public ResponseEntity<List<Barco>> obtenerBarcosPorJugador(@PathVariable Long jugadorId) {
        List<Barco> barcos = barcoService.obtenerBarcosPorJugador(jugadorId);
        return ResponseEntity.ok(barcos);
    }
}
