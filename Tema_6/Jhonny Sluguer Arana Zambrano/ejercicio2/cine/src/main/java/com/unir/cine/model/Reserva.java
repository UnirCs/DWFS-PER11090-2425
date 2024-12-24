package com.unir.cine.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long usuarioId;
    private Long salaId;
    private String fecha;
    private String hora;
    private int cantidadButacas;

    public Reserva() {
    }

    public Reserva(Long id, Long usuarioId, Long salaId, String fecha, String hora, int cantidadButacas) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.salaId = salaId;
        this.fecha = fecha;
        this.hora = hora;
        this.cantidadButacas = cantidadButacas;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Long getSalaId() {
        return salaId;
    }

    public void setSalaId(Long salaId) {
        this.salaId = salaId;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public int getCantidadButacas() {
        return cantidadButacas;
    }

    public void setCantidadButacas(int cantidadButacas) {
        this.cantidadButacas = cantidadButacas;
    }

    // toString, equals y hashCode
    @Override
    public String toString() {
        return "Reserva{" +
                "id=" + id +
                ", usuarioId=" + usuarioId +
                ", salaId=" + salaId +
                ", fecha='" + fecha + '\'' +
                ", hora='" + hora + '\'' +
                ", cantidadButacas=" + cantidadButacas +
                '}';
    }
}
