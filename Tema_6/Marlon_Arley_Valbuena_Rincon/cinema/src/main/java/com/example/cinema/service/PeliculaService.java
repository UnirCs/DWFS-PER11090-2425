package com.example.cinema.service;

import com.example.cinema.model.Pelicula;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PeliculaService {

    private List<Pelicula> peliculas = new ArrayList<>();

    public Pelicula crearpelicula(Pelicula pelicula) {
        peliculas.add(pelicula);
        return pelicula;
    }

    public void eliminarPelicula(Long id) {
        peliculas.removeIf(pelicula -> pelicula.getId().equals(id));
    }

    public Pelicula actualizarPelicula(Long id, Pelicula pelicula) {
        Optional<Pelicula> existePelicula = peliculas.stream().filter(m -> m.getId().equals(id)).findFirst();
        if (existePelicula.isPresent()) {
            peliculas.remove(existePelicula.get());
            pelicula.setId(id);
            peliculas.add(pelicula);
            return pelicula;
        }
        return null;
    }

    public List<Pelicula> obtenertodasPeliculas() {
        return peliculas;
    }
}