package com.unir.hundirFlota.controller;

import com.unir.hundirFlota.model.Barco;
import com.unir.hundirFlota.model.Partida;
import com.unir.hundirFlota.model.Usuario;
import com.unir.hundirFlota.service.PartidaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/partidas")
public class PartidaController {

    @Autowired
    private PartidaService partidaService;

    @PostMapping("/crear")
    public Partida crearPartida(@RequestBody Usuario jugador1, @RequestBody Usuario jugador2) {
        return partidaService.crearPartida(jugador1, jugador2);
    }

    @PostMapping("/{id}/disparo")
    public String realizarDisparo(@PathVariable Long id, @RequestParam Long idJugador, @RequestParam String coordenada) {
        return partidaService.realizarDisparo(id, idJugador, coordenada);
    }
}
