package com.unir.hundirFlota.repository;

import com.unir.hundirFlota.model.Barco;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BarcoRepository extends JpaRepository<Barco, Long> {
    // Métodos personalizados si es necesario
}
