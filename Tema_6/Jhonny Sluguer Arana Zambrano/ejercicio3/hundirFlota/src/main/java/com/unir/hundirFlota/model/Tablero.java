package com.unir.hundirFlota.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Tablero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    private List<String> grid = new ArrayList<>(); // Matriz de 10x10 representada como lista

    public Tablero() {
        for (int i = 0; i < 100; i++) {
            grid.add("."); // Inicialmente, todas las casillas están vacías
        }
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<String> getGrid() {
        return grid;
    }

    public void setGrid(List<String> grid) {
        this.grid = grid;
    }
}
