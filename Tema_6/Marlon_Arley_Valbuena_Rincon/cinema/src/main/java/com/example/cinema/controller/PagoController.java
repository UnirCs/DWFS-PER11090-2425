package com.example.cinema.controller;

import com.example.cinema.model.Pago;
import com.example.cinema.service.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pagos")
public class PagoController {

    @Autowired
    private PagoService pagoService;

    @PostMapping
    public ResponseEntity<Pago> registrarPago(@RequestParam Long reservaId, @RequestParam double monto) {
        Pago pagoRegistrado = pagoService.registrarPago(reservaId, monto);
        if (pagoRegistrado != null) {
            return ResponseEntity.ok(pagoRegistrado);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}