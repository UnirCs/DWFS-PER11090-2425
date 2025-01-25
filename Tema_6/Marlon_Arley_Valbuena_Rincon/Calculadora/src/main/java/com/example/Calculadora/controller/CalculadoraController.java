package com.example.Calculadora.controller;

import com.example.Calculadora.dto.NumeroDTO;
import com.example.Calculadora.dto.OperacionResultadoDTO;
import com.example.Calculadora.service.CalculadoraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/calculadora")
public class CalculadoraController {

    @Autowired
    private CalculadoraService calculadoraService;

    @PostMapping("/sumar")
    public OperacionResultadoDTO sumar(@RequestBody List<NumeroDTO> numeros) {
        int resultado = calculadoraService.sumar(numeros);
        String detalle = "Suma de " + numeros.size() + " números";
        return new OperacionResultadoDTO("sumar", resultado, detalle);
    }

    @PostMapping("/numero")
    public NumeroDTO guardarNumero(@RequestBody NumeroDTO numeroDTO) {
        calculadoraService.guardarNumero(numeroDTO);
        return numeroDTO;
    }

    @PostMapping("/restar")
    public OperacionResultadoDTO restar(@RequestBody List<NumeroDTO> numeros) {
        int resultado = calculadoraService.restar(numeros);
        String detalle = "Resta de " + numeros.size() + " números";
        return new OperacionResultadoDTO("restar", resultado, detalle);
    }

    @PostMapping("/multiplicar")
    public OperacionResultadoDTO multiplicar(@RequestBody List<NumeroDTO> numeros) {
        int resultado = calculadoraService.multiplicar(numeros);
        String detalle = "Multiplicación de " + numeros.size() + " números";
        return new OperacionResultadoDTO("multiplicar", resultado, detalle);
    }

    @PostMapping("/dividir")
    public OperacionResultadoDTO dividir(@RequestBody List<NumeroDTO> numeros) {
        double resultado = calculadoraService.dividir(numeros);
        String detalle = "División de " + numeros.size() + " números";
        return new OperacionResultadoDTO("dividir", resultado, detalle);
    }

    @PostMapping("/raiz")
    public OperacionResultadoDTO raiz(@RequestBody Map<String, Double> payload) {
        double numero = payload.get("numero");
        double n = payload.get("n");
        double resultado = calculadoraService.raiz(numero, n);
        String detalle = "Raíz " + n + " de " + numero;
        return new OperacionResultadoDTO("raiz", resultado, detalle);
    }

    @PostMapping("/potencia")
    public OperacionResultadoDTO potencia(@RequestBody Map<String, Double> payload) {
        double base = payload.get("base");
        double exponente = payload.get("exponente");
        double resultado = calculadoraService.potencia(base, exponente);
        String detalle = "Potencia " + base + "^" + exponente;
        return new OperacionResultadoDTO("potencia", resultado, detalle);
    }
}