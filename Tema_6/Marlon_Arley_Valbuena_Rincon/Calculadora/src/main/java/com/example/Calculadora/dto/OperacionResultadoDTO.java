package com.example.Calculadora.dto;

public class OperacionResultadoDTO {
    private String operacion;
    private double resultado;
    private String detalle;

    public OperacionResultadoDTO(String operacion, double resultado, String detalle) {
        this.operacion = operacion;
        this.resultado = resultado;
        this.detalle = detalle;
    }

    // Getters y setters
    public String getOperacion() {
        return operacion;
    }

    public void setOperacion(String operacion) {
        this.operacion = operacion;
    }

    public double getResultado() {
        return resultado;
    }

    public void setResultado(double resultado) {
        this.resultado = resultado;
    }

    public String getDetalle() {
        return detalle;
    }

    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }
}