package com.unir.calculadora.controller;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.model.Resta;
import com.unir.calculadora.data.model.Suma;
import com.unir.calculadora.service.IRestaService;
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
public class RestaController {
    private final IRestaService iRestaService;

    @GetMapping("/restas")
    @Operation(
            operationId = "Obtener restas",
            description = "Operacion de lectura",
            summary = "Se devuelve una lista de todos las  restas almacenadas en la base de datos.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Resta.class)))
    public ResponseEntity<List<Resta>> obtenerRestas(){
        List<Resta> restas = iRestaService.obtenerRestas();
        if(restas != null){
            return ResponseEntity.ok(restas);
        }else{
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/restas/{id}")
    @Operation(
            operationId = "Obtener una resta",
            description = "Operacion de lectura",
            summary = "Se devuelve una resta a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Resta.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el producto con el identificador indicado.")
    public ResponseEntity<Resta> obtenerRestaPorId(@PathVariable Long id){
        Resta resta = iRestaService.obtenerRestaPorId(id);
        if(resta != null){
            return ResponseEntity.ok(resta);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/restas")
    @Operation(
            operationId = "Insertar una resta",
            description = "Operacion de escritura",
            summary = "Se crea una resta a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la resta a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Resta.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la resta con el identificador indicado.")
    public ResponseEntity<Resta> realizarResta(@RequestBody CreateRequest request){
        Resta resta = iRestaService.realizarResta(request);
        if(resta != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(resta);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
