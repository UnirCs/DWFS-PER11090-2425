package com.unir.hundirFlota.model;

import jakarta.persistence.*;

@Entity
@Table(name = "disparos")
public class Disparo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int fila;

    private int columna;

    private boolean impacto;

    @ManyToOne
    private Tablero tablero;

    // Constructor vacío
    public Disparo() {}

    // Constructor completo
    public Disparo(int fila, int columna, boolean impacto, Tablero tablero) {
        this.fila = fila;
        this.columna = columna;
        this.impacto = impacto;
        this.tablero = tablero;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getFila() {
        return fila;
    }

    public void setFila(int fila) {
        this.fila = fila;
    }

    public int getColumna() {
        return columna;
    }

    public void setColumna(int columna) {
        this.columna = columna;
    }

    public boolean isImpacto() {
        return impacto;
    }

    public void setImpacto(boolean impacto) {
        this.impacto = impacto;
    }

    public Tablero getTablero() {
        return tablero;
    }

    public void setTablero(Tablero tablero) {
        this.tablero = tablero;
    }
}
