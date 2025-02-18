package com.unir.calculadora.controller;

import com.unir.calculadora.controller.model.CreateRequest;
import com.unir.calculadora.data.model.Division;
import com.unir.calculadora.service.IDivisionService;
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
public class DivisionController {

    private final IDivisionService iDivisionService;

    @GetMapping("/divisiones")
    @Operation(
            operationId = "Obtener Divisiones",
            description = "Operacion de lectura",
            summary = "Se devuelve una lista de todas las divisiones almacenadas en la base de datos.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Division.class)))
    public ResponseEntity<List<Division>> obtenerDivisiones(){
        List<Division> divisiones = iDivisionService.obtenerDivisiones();
        if(divisiones != null){
            return ResponseEntity.ok(divisiones);
        }else{
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/divisiones/{id}")
    @Operation(
            operationId = "Obtener una division",
            description = "Operacion de lectura",
            summary = "Se devuelve una division a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Division.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la division con el identificador indicado.")
    public ResponseEntity<Division> obtenerDivisionPorId(@PathVariable Long id){
        Division division = iDivisionService.obtenerDivisionPorId(id);
        if(division != null){
            return ResponseEntity.ok(division);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/divisiones")
    @Operation(
            operationId = "Insertar una division",
            description = "Operacion de escritura",
            summary = "Se crea una division a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la division a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Division.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la division con el identificador indicado.")
    public ResponseEntity<Division> realizarDivision(@RequestBody CreateRequest request){
        Division division = iDivisionService.realizarDivision(request);
        if(division != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(division);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
