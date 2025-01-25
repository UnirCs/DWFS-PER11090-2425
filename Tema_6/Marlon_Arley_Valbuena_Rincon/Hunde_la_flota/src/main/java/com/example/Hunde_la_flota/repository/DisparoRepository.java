package com.example.Hunde_la_flota.repository;

import com.example.Hunde_la_flota.model.Disparo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DisparoRepository extends JpaRepository<Disparo, Long> {
    List<Disparo> findByPartidaId(Long partidaId);
}
