package com.unir.hundirFlota.controller;

import com.unir.hundirFlota.model.Disparo;
import com.unir.hundirFlota.service.DisparoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/disparos")
public class DisparoController {

    @Autowired
    private DisparoService disparoService;

    @GetMapping
    public List<Disparo> obtenerTodosLosDisparos() {
        return disparoService.obtenerTodosLosDisparos();
    }

    @GetMapping("/{id}")
    public Optional<Disparo> obtenerDisparoPorId(@PathVariable Long id) {
        return disparoService.obtenerDisparoPorId(id);
    }

    @PostMapping
    public Disparo registrarDisparo(@RequestBody Disparo disparo) {
        return disparoService.registrarDisparo(disparo);
    }

    @DeleteMapping("/{id}")
    public void eliminarDisparo(@PathVariable Long id) {
        disparoService.eliminarDisparo(id);
    }
}
