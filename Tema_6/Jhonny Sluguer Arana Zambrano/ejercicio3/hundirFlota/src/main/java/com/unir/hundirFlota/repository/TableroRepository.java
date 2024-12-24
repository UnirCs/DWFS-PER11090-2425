package com.unir.hundirFlota.repository;

import com.unir.hundirFlota.model.Tablero;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableroRepository extends JpaRepository<Tablero, Long> {
    // Métodos personalizados si es necesario
}
