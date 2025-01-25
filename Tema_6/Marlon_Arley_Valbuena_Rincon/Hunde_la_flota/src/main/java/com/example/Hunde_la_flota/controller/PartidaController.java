package com.example.Hunde_la_flota.controller;

import com.example.Hunde_la_flota.dto.PartidaDetalleDTO;
import com.example.Hunde_la_flota.model.Partida;
import com.example.Hunde_la_flota.service.PartidaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/partidas")
public class PartidaController {

    @Autowired
    private PartidaService partidaService;

    @PostMapping
    public ResponseEntity<Partida> crearPartida(@RequestBody Partida partida) {
        Partida nuevaPartida = partidaService.crearPartida(partida);
        return ResponseEntity.ok(nuevaPartida);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarPartida(@PathVariable Long id) {
        partidaService.eliminarPartida(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Partida>> obtenerTodasLasPartidas() {
        List<Partida> partidas = partidaService.obtenerTodas();
        return ResponseEntity.ok(partidas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Partida> obtenerPartidaPorId(@PathVariable Long id) {
        return partidaService.obtenerPorId(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Partida> modificarPartida(@PathVariable Long id, @RequestBody Partida partidaDetalles) {
        Partida partidaActualizada = partidaService.modificarPartida(id, partidaDetalles);
        return ResponseEntity.ok(partidaActualizada);
    }

    @PostMapping("/{id}/iniciar")
    public ResponseEntity<Partida> iniciarPartida(@PathVariable Long id) {
        Partida partidaIniciada = partidaService.iniciarPartida(id);
        return ResponseEntity.ok(partidaIniciada);
    }

    @GetMapping("/{id}/detalle")
    public ResponseEntity<PartidaDetalleDTO> obtenerDetallePartida(@PathVariable Long id) {
        PartidaDetalleDTO detalleDTO = partidaService.obtenerDetallePartida(id);
        return ResponseEntity.ok(detalleDTO);
    }
}