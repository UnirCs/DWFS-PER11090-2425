package com.unir.hundirFlota.controller;

import com.unir.hundirFlota.model.Tablero;
import com.unir.hundirFlota.service.TableroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tableros")
public class TableroController {

    @Autowired
    private TableroService tableroService;

    @GetMapping
    public List<Tablero> obtenerTodosLosTableros() {
        return tableroService.obtenerTodosLosTableros();
    }

    @GetMapping("/{id}")
    public Optional<Tablero> obtenerTableroPorId(@PathVariable Long id) {
        return tableroService.obtenerTableroPorId(id);
    }

    @PostMapping
    public Tablero guardarTablero(@RequestBody Tablero tablero) {
        return tableroService.guardarTablero(tablero);
    }

    @DeleteMapping("/{id}")
    public void eliminarTablero(@PathVariable Long id) {
        tableroService.eliminarTablero(id);
    }
}
