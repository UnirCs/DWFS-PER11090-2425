package com.unir.hundirFlota.service;

import com.unir.hundirFlota.model.*;
import com.unir.hundirFlota.repository.PartidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartidaService {

    @Autowired
    private PartidaRepository partidaRepository;

    public Partida crearPartida(Usuario jugador1, Usuario jugador2) {
        Partida partida = new Partida();
        partida.setJugador1(jugador1);
        partida.setJugador2(jugador2);
        partida.setTableroJugador1(new Tablero());
        partida.setTableroJugador2(new Tablero());
        partida.setJugadorEnTurno(jugador1.getId());
        partida.setEstado("En progreso");
        return partidaRepository.save(partida);
    }

    public String realizarDisparo(Long idPartida, Long idJugador, String coordenada) {
        Partida partida = partidaRepository.findById(idPartida)
                .orElseThrow(() -> new RuntimeException("Partida no encontrada"));

        if (!partida.getJugadorEnTurno().equals(idJugador)) {
            return "No es el turno de este jugador.";
        }

        int fila = coordenada.charAt(0) - 'A';
        int columna = Character.getNumericValue(coordenada.charAt(1)) - 1;

        Tablero tableroEnemigo = obtenerTableroEnemigo(partida, idJugador);
        String resultadoDisparo = dispararEnTablero(tableroEnemigo, fila, columna);

        if (resultadoDisparo.equals("Agua")) {
            alternarTurno(partida);
        }

        return resultadoDisparo;
    }

    private Tablero obtenerTableroEnemigo(Partida partida, Long idJugador) {
        if (partida.getJugador1().getId().equals(idJugador)) {
            return partida.getTableroJugador2();
        } else {
            return partida.getTableroJugador1();
        }
    }

    private String dispararEnTablero(Tablero tablero, int fila, int columna) {
        String posicion = tablero.getGrid().get(fila * 10 + columna);

        if (posicion.equals(".")) {
            tablero.getGrid().set(fila * 10 + columna, "O");
            return "Agua";
        } else if (posicion.equals("B")) {
            tablero.getGrid().set(fila * 10 + columna, "X");
            boolean barcoHundido = verificarBarcoHundido(tablero, fila, columna);
            return barcoHundido ? "Hundido" : "Tocado";
        } else if (posicion.equals("X") || posicion.equals("O")) {
            return "Ya disparaste aquí.";
        } else {
            return "Error inesperado.";
        }
    }

    private boolean verificarBarcoHundido(Tablero tablero, int fila, int columna) {
        int[][] direcciones = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        for (int[] dir : direcciones) {
            int f = fila + dir[0];
            int c = columna + dir[1];
            if (f >= 0 && f < 10 && c >= 0 && c < 10) {
                String posicion = tablero.getGrid().get(f * 10 + c);
                if (posicion.equals("B")) {
                    return false;
                }
            }
        }
        return true;
    }

    private void alternarTurno(Partida partida) {
        if (partida.getJugadorEnTurno().equals(partida.getJugador1().getId())) {
            partida.setJugadorEnTurno(partida.getJugador2().getId());
        } else {
            partida.setJugadorEnTurno(partida.getJugador1().getId());
        }
        partidaRepository.save(partida);
    }
}
