package com.example.Hunde_la_flota.repository;

import com.example.Hunde_la_flota.model.Barco;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BarcoRepository extends JpaRepository<Barco, Long> {
    List<Barco> findByJugadorId(Long jugadorId);
}
