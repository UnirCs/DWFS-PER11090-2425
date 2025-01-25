package com.example.Hunde_la_flota.dto;

import com.example.Hunde_la_flota.model.Barco;
import com.example.Hunde_la_flota.model.Disparo;
import com.example.Hunde_la_flota.model.Jugador;

import java.util.List;

public class PartidaDetalleDTO {
    private Long id;
    private List<Jugador> jugadores;
    private List<Barco> barcos;
    private List<Disparo> disparos;
    private String estado;
    private Jugador ganador;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Jugador> getJugadores() {
        return jugadores;
    }

    public void setJugadores(List<Jugador> jugadores) {
        this.jugadores = jugadores;
    }

    public List<Barco> getBarcos() {
        return barcos;
    }

    public void setBarcos(List<Barco> barcos) {
        this.barcos = barcos;
    }

    public List<Disparo> getDisparos() {
        return disparos;
    }

    public void setDisparos(List<Disparo> disparos) {
        this.disparos = disparos;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Jugador getGanador() {
        return ganador;
    }

    public void setGanador(Jugador ganador) {
        this.ganador = ganador;
    }
}