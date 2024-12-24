package com.unir.calculadora.controller;

import com.unir.calculadora.model.OperacionRequest;
import com.unir.calculadora.model.Operacion;
import com.unir.calculadora.service.CalculadoraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/calculadora")
public class CalculadoraController {

    @Autowired
    private CalculadoraService calculadoraService;

    @PostMapping("/operar")
    public Operacion operar(@RequestBody OperacionRequest request) {
        String operacion = request.getOperacion().toLowerCase();
        List<Double> numeros = request.getNumeros();

        if (numeros == null || numeros.isEmpty()) {
            throw new IllegalArgumentException("La lista de números no puede estar vacía.");
        }

        Operacion operacionRealizada;

        switch (operacion) {
            case "suma":
                operacionRealizada = calculadoraService.sumar(numeros);
                break;
            case "resta":
                operacionRealizada = calculadoraService.restar(numeros);
                break;
            case "multiplicacion":
                if (numeros.size() != 2) {
                    throw new IllegalArgumentException("La multiplicación requiere exactamente 2 números.");
                }
                operacionRealizada = calculadoraService.multiplicar(numeros.get(0), numeros.get(1));
                break;
            case "division":
                if (numeros.size() != 2) {
                    throw new IllegalArgumentException("La división requiere exactamente 2 números.");
                }
                operacionRealizada = calculadoraService.dividir(numeros.get(0), numeros.get(1));
                break;
            case "potencia":
                if (numeros.size() != 2) {
                    throw new IllegalArgumentException("La potencia requiere exactamente 2 números.");
                }
                operacionRealizada = calculadoraService.potencia(numeros.get(0), numeros.get(1));
                break;
            case "raiz":
                if (numeros.size() != 2) {
                    throw new IllegalArgumentException("La raíz requiere exactamente 2 números.");
                }
                operacionRealizada = calculadoraService.raizNesima(numeros.get(0), numeros.get(1));
                break;
            default:
                throw new IllegalArgumentException("Operación no soportada: " + operacion);
        }

        return operacionRealizada;
    }

    @GetMapping("/historial")
    public List<Operacion> getHistorial() {
        return calculadoraService.obtenerHistorial();
    }

    @GetMapping("/historial/{id}")
    public Operacion getOperacionById(@PathVariable Long id) {
        return calculadoraService.obtenerOperacionPorId(id);
    }
}
