package com.example.Hunde_la_flota.controller;

import com.example.Hunde_la_flota.model.Jugador;
import com.example.Hunde_la_flota.service.JugadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jugadores")
public class JugadorController {

    @Autowired
    private JugadorService jugadorService;

    public JugadorController(JugadorService jugadorService) {
        this.jugadorService = jugadorService;
    }

    // Crear un jugador
    @PostMapping
    public ResponseEntity<Jugador> crearJugador(@RequestBody Jugador jugador) {
        Jugador nuevoJugador = jugadorService.crearJugador(jugador);
        return ResponseEntity.ok(nuevoJugador);
    }

    // Obtener todos los jugadores
    @GetMapping
    public ResponseEntity<List<Jugador>> obtenerTodosLosJugadores() {
        List<Jugador> jugadores = jugadorService.obtenerTodos();
        return ResponseEntity.ok(jugadores);
    }

    // Obtener un jugador por ID
    @GetMapping("/{id}")
    public ResponseEntity<Jugador> obtenerJugadorPorId(@PathVariable Long id) {
        return jugadorService.obtenerPorId(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // Eliminar un jugador por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarJugador(@PathVariable Long id) {
        jugadorService.eliminarJugador(id);
        return ResponseEntity.noContent().build();
    }
}