package com.unir.hundirFlota.service;

import com.unir.hundirFlota.model.Tablero;
import com.unir.hundirFlota.repository.TableroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TableroService {

    @Autowired
    private TableroRepository tableroRepository;

    public List<Tablero> obtenerTodosLosTableros() {
        return tableroRepository.findAll();
    }

    public Optional<Tablero> obtenerTableroPorId(Long id) {
        return tableroRepository.findById(id);
    }

    public Tablero guardarTablero(Tablero tablero) {
        return tableroRepository.save(tablero);
    }

    public void eliminarTablero(Long id) {
        tableroRepository.deleteById(id);
    }
}
