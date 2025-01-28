package com.example.cinema.controller;

import com.example.cinema.model.Sala;
import com.example.cinema.service.SalaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/salas")
public class SalaController {

    @Autowired
    private SalaService salaService;

    @PostMapping
    public ResponseEntity<Sala> crearSala(@RequestBody Sala sala) {
        Sala salaCreada = salaService.agregarSala(sala);
        return ResponseEntity.ok(salaCreada);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarSala(@PathVariable Long id) {
        salaService.removerSala(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Sala> actualizarSala(@PathVariable Long id, @RequestBody Sala sala) {
        Sala salaActualizada = salaService.modificarSala(id, sala);
        return ResponseEntity.ok(salaActualizada);
    }

    @GetMapping
    public ResponseEntity<List<Sala>> obtenerTodasSalas() {
        List<Sala> salas = salaService.obtenerTodasSalas();
        return ResponseEntity.ok(salas);
    }
}