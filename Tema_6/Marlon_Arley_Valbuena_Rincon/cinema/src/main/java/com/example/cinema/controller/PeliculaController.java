package com.example.cinema.controller;

import com.example.cinema.model.Pelicula;
import com.example.cinema.service.PeliculaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/peliculas")
public class PeliculaController {

    @Autowired
    private PeliculaService peliculaService;

    @PostMapping
    public ResponseEntity<Pelicula> crearpelicula(@RequestBody Pelicula pelicula) {
        Pelicula crearPelicula = peliculaService.crearpelicula(pelicula);
        return ResponseEntity.ok(crearPelicula);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarPelicula(@PathVariable Long id) {
        peliculaService.eliminarPelicula(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pelicula> actualizarPelicula(@PathVariable Long id, @RequestBody Pelicula pelicula) {
        Pelicula actualizarPelicula = peliculaService.actualizarPelicula(id, pelicula);
        return ResponseEntity.ok(actualizarPelicula);
    }

    @GetMapping
    public ResponseEntity<List<Pelicula>> obtenertodasPeliculas() {
        List<Pelicula> peliculas = peliculaService.obtenertodasPeliculas();
        return ResponseEntity.ok(peliculas);
    }
}