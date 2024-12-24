package com.unir.cine.service;

import com.unir.cine.model.Pelicula;
import com.unir.cine.repository.PeliculaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PeliculaService {

    private final PeliculaRepository peliculaRepository;

    public PeliculaService(PeliculaRepository peliculaRepository) {
        this.peliculaRepository = peliculaRepository;
    }

    public List<Pelicula> obtenerTodasLasPeliculas() {
        return peliculaRepository.findAll();
    }

    public Optional<Pelicula> obtenerPeliculaPorId(Long id) {
        return peliculaRepository.findById(id);
    }

    public Pelicula crearPelicula(Pelicula pelicula) {
        return peliculaRepository.save(pelicula);
    }

    public Pelicula actualizarPelicula(Long id, Pelicula peliculaActualizada) {
        return peliculaRepository.findById(id).map(pelicula -> {
            pelicula.setTitulo(peliculaActualizada.getTitulo());
            pelicula.setGenero(peliculaActualizada.getGenero());
            pelicula.setDuracion(peliculaActualizada.getDuracion());
            pelicula.setClasificacion(peliculaActualizada.getClasificacion());
            return peliculaRepository.save(pelicula);
        }).orElseThrow(() -> new IllegalArgumentException("Pelicula no encontrada con ID: " + id));
    }

    public boolean eliminarPelicula(Long id) {
        if (peliculaRepository.existsById(id)) {
            peliculaRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
