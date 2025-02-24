package com.unir.calculadora.controller;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.model.Suma;
import com.unir.calculadora.service.ISumaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
public class SumaController {
    private final ISumaService sumaService;

    @GetMapping("/sumas")
    @Operation(
            operationId = "Obtener sumas",
            description = "Operacion de lectura",
            summary = "Se devuelve una lista de todos las  sumas almacenadas en la base de datos.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Suma.class)))
    public ResponseEntity<List<Suma>> obtenerSumas(){
        List<Suma> sumas = sumaService.obtenerSumas();
        if(sumas != null){
            return ResponseEntity.ok(sumas);
        }else{
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/sumas/{id}")
    @Operation(
            operationId = "Obtener una suma",
            description = "Operacion de lectura",
            summary = "Se devuelve una suma a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Suma.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el producto con el identificador indicado.")
    public ResponseEntity<Suma> obtenerSumaPorId(@PathVariable Long id){
        Suma suma = sumaService.obtenerSumaPorId(id);
        if(suma != null){
            return ResponseEntity.ok(suma);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/sumas")
    @Operation(
            operationId = "Insertar una suma",
            description = "Operacion de escritura",
            summary = "Se crea una suma a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la suma a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Suma.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la suma con el identificador indicado.")
    public ResponseEntity<Suma> realizarSuma(@RequestBody CreateRequest request){
        Suma suma = sumaService.realizarSuma(request);
        if(suma != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(suma);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
