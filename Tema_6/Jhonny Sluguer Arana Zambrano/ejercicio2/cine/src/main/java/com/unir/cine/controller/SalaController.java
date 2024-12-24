package com.unir.cine.controller;

import com.unir.cine.model.Sala;
import com.unir.cine.service.SalaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/salas")
public class SalaController {

    private final SalaService salaService;

    @Autowired
    public SalaController(SalaService salaService) {
        this.salaService = salaService;
    }

    // Crear sala
    @PostMapping
    public ResponseEntity<Sala> crearSala(@RequestBody Sala sala) {
        Sala nuevaSala = salaService.crearSala(sala);
        return ResponseEntity.ok(nuevaSala);
    }

    // Obtener todas las salas
    @GetMapping
    public ResponseEntity<List<Sala>> obtenerTodasLasSalas() {
        List<Sala> salas = salaService.obtenerTodasLasSalas();
        return ResponseEntity.ok(salas);
    }

    // Obtener sala por ID
    @GetMapping("/{id}")
    public ResponseEntity<Sala> obtenerSalaPorId(@PathVariable Long id) {
        Optional<Sala> sala = salaService.obtenerSalaPorId(id);
        return sala.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Actualizar sala
    @PutMapping("/{id}")
    public ResponseEntity<Sala> actualizarSala(@PathVariable Long id, @RequestBody Sala salaActualizada) {
        Optional<Sala> sala = salaService.actualizarSala(id, salaActualizada);
        return sala.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Eliminar sala
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarSala(@PathVariable Long id) {
        boolean eliminada = salaService.eliminarSala(id);
        return eliminada ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
