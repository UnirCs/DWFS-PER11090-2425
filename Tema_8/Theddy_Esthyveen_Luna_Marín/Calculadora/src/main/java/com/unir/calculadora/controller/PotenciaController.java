package com.unir.calculadora.controller;

import com.unir.calculadora.controller.model.PotenciaRequest;
import com.unir.calculadora.data.model.Potencia;
import com.unir.calculadora.service.IPotenciaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class PotenciaController {
    private final IPotenciaService iPotenciaService;

    @GetMapping("/potencias")
    @Operation(
            operationId = "Obtener Potencias",
            description = "Operacion de lectura",
            summary = "Se devuelve una lista de todas las potencias almacenadas en la base de datos.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Potencia.class)))
    public ResponseEntity<List<Potencia>> obtenerPotencias(){
        List<Potencia> potencias = iPotenciaService.obtenerPotencias();
        if(potencias != null){
            return ResponseEntity.ok(potencias);
        }else{
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/potencias/{id}")
    @Operation(
            operationId = "Obtener una potencia",
            description = "Operacion de lectura",
            summary = "Se devuelve una potencia a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Potencia.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el producto con el identificador indicado.")
    public ResponseEntity<Potencia> obtenerPotenciaPorId(@PathVariable Long id){
        Potencia potencia = iPotenciaService.obtenerPotenciaPorId(id);
        if(potencia != null){
            return ResponseEntity.ok(potencia);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/potencias")
    @Operation(
            operationId = "Insertar una potencia",
            description = "Operacion de escritura",
            summary = "Se crea una potencia a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la potencia a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = PotenciaRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Potencia.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la potencia con el identificador indicado.")
    public ResponseEntity<Potencia> realizarPotencia(@RequestBody PotenciaRequest request){
        Potencia potencia = iPotenciaService.realizarPotencia(request);
        if(potencia != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(potencia);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
