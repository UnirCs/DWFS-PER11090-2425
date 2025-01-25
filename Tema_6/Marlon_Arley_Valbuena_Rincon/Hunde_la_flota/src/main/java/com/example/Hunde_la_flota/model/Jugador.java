package com.example.Hunde_la_flota.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Jugador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @ManyToOne
    @JoinColumn(name = "partida_id")
    private Partida partida;

    @OneToMany(mappedBy = "atacante", cascade = CascadeType.ALL)
    private List<Disparo> disparosRealizados;

    @OneToMany(mappedBy = "jugador", cascade = CascadeType.ALL)
    private List<Barco> barcos;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Partida getPartida() {
        return partida;
    }

    public void setPartida(Partida partida) {
        this.partida = partida;
    }

    public List<Disparo> getDisparosRealizados() {
        return disparosRealizados;
    }

    public void setDisparosRealizados(List<Disparo> disparosRealizados) {
        this.disparosRealizados = disparosRealizados;
    }

    public List<Barco> getBarcos() {
        return barcos;
    }

    public void setBarcos(List<Barco> barcos) {
        this.barcos = barcos;
    }
}