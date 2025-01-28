package com.example.Calculadora.service;

import com.example.Calculadora.dto.NumeroDTO;
import com.example.Calculadora.model.Numero;
import com.example.Calculadora.repository.NumeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalculadoraService {

    @Autowired
    private NumeroRepository numeroRepository;

    public int sumar(List<NumeroDTO> numeros) {
        int suma = 0;
        for (NumeroDTO numeroDTO : numeros) {
            suma += numeroDTO.getValor();
        }
        return suma;
    }

    public Numero guardarNumero(NumeroDTO numeroDTO) {
        Numero numero = new Numero();
        numero.setValor(numeroDTO.getValor());
        return numeroRepository.save(numero);
    }

    public int restar(List<NumeroDTO> numeros) {
        int resta = 0;
        int contador = 1;
        for (NumeroDTO numeroDTO : numeros) {
            if (contador == 1) {
                resta = numeroDTO.getValor();
                contador++;
                continue;
            }
            resta -= numeroDTO.getValor();
        }
        return resta;
    }

    public int multiplicar(List<NumeroDTO> numeros) {
        if (numeros.size() != 2) {
            throw new IllegalArgumentException("Se deben proporcionar exactamente dos números.");
        }
        return numeros.get(0).getValor() * numeros.get(1).getValor();
    }

    public double dividir(List<NumeroDTO> numeros) {
        if (numeros.size() != 2) {
            throw new IllegalArgumentException("Se deben proporcionar exactamente dos números.");
        }
        if (numeros.get(1).getValor() == 0) {
            throw new ArithmeticException("No se puede dividir por cero.");
        }
        return (double) numeros.get(0).getValor() / numeros.get(1).getValor();
    }

    public double raiz(double numero, double n) {
        if (n == 0) {
            throw new IllegalArgumentException("El índice de la raíz no puede ser cero.");
        }
        return Math.pow(numero, 1.0 / n);
    }

    public double potencia(double base, double exponente) {
        return Math.pow(base, exponente);
    }
}