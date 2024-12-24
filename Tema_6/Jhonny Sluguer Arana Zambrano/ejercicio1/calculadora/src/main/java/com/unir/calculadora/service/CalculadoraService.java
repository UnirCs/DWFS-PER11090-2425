package com.unir.calculadora.service;

import com.unir.calculadora.model.Operacion;
import com.unir.calculadora.repository.MemoriaOperacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalculadoraService {

    @Autowired
    private MemoriaOperacionRepository repository;

    public Operacion sumar(List<Double> numeros) {
        Double resultado = numeros.stream().mapToDouble(Double::doubleValue).sum();
        return repository.guardarOperacion("SUMA", numeros.toString(), resultado);
    }

    public Operacion restar(List<Double> numeros) {
        Double resultado = numeros.stream().reduce((a, b) -> a - b).orElse(0.0);
        return repository.guardarOperacion("RESTA", numeros.toString(), resultado);
    }

    public Operacion multiplicar(Double a, Double b) {
        Double resultado = a * b;
        return repository.guardarOperacion("MULTIPLICACION", a + ", " + b, resultado);
    }

    public Operacion dividir(Double a, Double b) {
        Double resultado = b != 0 ? a / b : 0.0;
        return repository.guardarOperacion("DIVISION", a + ", " + b, resultado);
    }

    public Operacion raizNesima(Double numero, Double n) {
        Double resultado = Math.pow(numero, 1 / n);
        return repository.guardarOperacion("RAIZ_N", numero + ", " + n, resultado);
    }

    public Operacion potencia(Double base, Double exponente) {
        Double resultado = Math.pow(base, exponente);
        return repository.guardarOperacion("POTENCIA", base + ", " + exponente, resultado);
    }

    public Operacion obtenerOperacionPorId(Long id) {
        return repository.obtenerOperacionPorId(id).orElse(null);
    }

    public List<Operacion> obtenerHistorial() {
        return repository.obtenerTodasLasOperaciones();
    }
}
