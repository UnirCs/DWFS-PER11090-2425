package com.example.Hunde_la_flota.controller;

import com.example.Hunde_la_flota.model.Disparo;
import com.example.Hunde_la_flota.service.DisparoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/disparos")
public class DisparoController {

    private final DisparoService disparoService;

    public DisparoController(DisparoService disparoService) {
        this.disparoService = disparoService;
    }

    // Registrar un disparo
    @PostMapping("/partida/{partidaId}/jugador/{jugadorId}")
    public ResponseEntity<Disparo> registrarDisparo(@PathVariable Long partidaId,
                                                    @PathVariable Long jugadorId,
                                                    @RequestBody Disparo disparo) {
        Disparo nuevoDisparo = disparoService.registrarDisparo(partidaId, jugadorId, disparo);
        return ResponseEntity.ok(nuevoDisparo);
    }

    // Consultar disparos realizados en una partida
    @GetMapping("/partida/{partidaId}")
    public ResponseEntity<List<Disparo>> obtenerDisparosPorPartida(@PathVariable Long partidaId) {
        List<Disparo> disparos = disparoService.obtenerDisparosPorPartida(partidaId);
        return ResponseEntity.ok(disparos);
    }
}
