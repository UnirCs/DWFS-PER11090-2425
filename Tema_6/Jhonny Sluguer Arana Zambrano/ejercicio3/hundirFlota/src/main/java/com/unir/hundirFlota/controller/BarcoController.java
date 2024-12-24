package com.unir.hundirFlota.controller;

import com.unir.hundirFlota.model.Barco;
import com.unir.hundirFlota.service.BarcoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/barcos")
public class BarcoController {

    @Autowired
    private BarcoService barcoService;

    @GetMapping
    public List<Barco> obtenerTodosLosBarcos() {
        return barcoService.obtenerTodosLosBarcos();
    }

    @GetMapping("/{id}")
    public Optional<Barco> obtenerBarcoPorId(@PathVariable Long id) {
        return barcoService.obtenerBarcoPorId(id);
    }

    @PostMapping
    public Barco guardarBarco(@RequestBody Barco barco) {
        return barcoService.guardarBarco(barco);
    }

    @DeleteMapping("/{id}")
    public void eliminarBarco(@PathVariable Long id) {
        barcoService.eliminarBarco(id);
    }
}
