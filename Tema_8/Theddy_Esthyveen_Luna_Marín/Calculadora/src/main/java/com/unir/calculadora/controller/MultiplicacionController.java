package com.unir.calculadora.controller;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.model.Multiplicacion;
import com.unir.calculadora.data.model.Resta;
import com.unir.calculadora.service.IMultiplicacionService;
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
public class MultiplicacionController {
    private final IMultiplicacionService iMultiplicacionService;

    @GetMapping("/multiplicaciones")
    @Operation(
            operationId = "Obtener multiplicaciones",
            description = "Operacion de lectura",
            summary = "Se devuelve una lista de todos las multiplicaciones almacenadas en la base de datos.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Multiplicacion.class)))
    public ResponseEntity<List<Multiplicacion>> obtenerMultiplicaciones(){
        List<Multiplicacion> multiplicaciones = iMultiplicacionService.obtenerMultiplicaciones();
        if(multiplicaciones != null){
            return ResponseEntity.ok(multiplicaciones);
        }else{
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/multiplicaciones/{id}")
    @Operation(
            operationId = "Obtener una multiplicacion",
            description = "Operacion de lectura",
            summary = "Se devuelve una multiplicacion a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Resta.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el producto con el identificador indicado.")
    public ResponseEntity<Multiplicacion> obtenerMultiplicacionPorId(@PathVariable Long id){
        Multiplicacion multiplicacion = iMultiplicacionService.obtenerMultiplicacionPorId(id);
        if(multiplicacion != null){
            return ResponseEntity.ok(multiplicacion);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/multiplicaciones")
    @Operation(
            operationId = "Insertar una multiplicacion",
            description = "Operacion de escritura",
            summary = "Se crea una multiplicacion a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la multiplicacion a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Multiplicacion.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la multiplicacion con el identificador indicado.")
    public ResponseEntity<Multiplicacion> realizarMultiplicacion(@RequestBody CreateRequest request){
        Multiplicacion multiplicacion = iMultiplicacionService.realizarMultiplicacion(request);
        if(multiplicacion != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(multiplicacion);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
