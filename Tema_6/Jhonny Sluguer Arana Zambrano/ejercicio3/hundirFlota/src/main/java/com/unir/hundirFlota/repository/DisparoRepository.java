package com.unir.hundirFlota.repository;

import com.unir.hundirFlota.model.Disparo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisparoRepository extends JpaRepository<Disparo, Long> {
    // Métodos personalizados si es necesario
}
