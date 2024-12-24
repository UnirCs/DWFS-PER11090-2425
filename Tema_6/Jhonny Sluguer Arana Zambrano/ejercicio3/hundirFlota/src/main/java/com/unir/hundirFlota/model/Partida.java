package com.unir.hundirFlota.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Partida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Usuario jugador1;

    @ManyToOne
    private Usuario jugador2;

    @OneToOne(cascade = CascadeType.ALL)
    private Tablero tableroJugador1;

    @OneToOne(cascade = CascadeType.ALL)
    private Tablero tableroJugador2;

    private Long jugadorEnTurno; // ID del jugador actual

    private String estado; // "En progreso", "Finalizada"

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getJugador1() {
        return jugador1;
    }

    public void setJugador1(Usuario jugador1) {
        this.jugador1 = jugador1;
    }

    public Usuario getJugador2() {
        return jugador2;
    }

    public void setJugador2(Usuario jugador2) {
        this.jugador2 = jugador2;
    }

    public Tablero getTableroJugador1() {
        return tableroJugador1;
    }

    public void setTableroJugador1(Tablero tableroJugador1) {
        this.tableroJugador1 = tableroJugador1;
    }

    public Tablero getTableroJugador2() {
        return tableroJugador2;
    }

    public void setTableroJugador2(Tablero tableroJugador2) {
        this.tableroJugador2 = tableroJugador2;
    }

    public Long getJugadorEnTurno() {
        return jugadorEnTurno;
    }

    public void setJugadorEnTurno(Long jugadorEnTurno) {
        this.jugadorEnTurno = jugadorEnTurno;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
