package com.unir.calculadora.controller;

import com.unir.calculadora.controller.model.RaizRequest;
import com.unir.calculadora.data.model.Raiz;
import com.unir.calculadora.service.IRaizService;
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
public class RaizController {
    private final IRaizService iRaizService;

    @GetMapping("/raices")
    @Operation(
            operationId = "Obtener Raices",
            description = "Operacion de lectura",
            summary = "Se devuelve una lista de todas las raices almacenadas en la base de datos.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Raiz.class)))
    public ResponseEntity<List<Raiz>> obtenerRaices(){
        List<Raiz> raices = iRaizService.obtenerRaices();
        if(raices != null){
            return ResponseEntity.ok(raices);
        }else{
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @GetMapping("/raices/{id}")
    @Operation(
            operationId = "Obtener una raiz",
            description = "Operacion de lectura",
            summary = "Se devuelve una raiz a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Raiz.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el producto con el identificador indicado.")
    public ResponseEntity<Raiz> obtenerRaizPorId(@PathVariable Long id){
        Raiz raiz = iRaizService.obtenerRaizPorId(id);
        if(raiz != null){
            return ResponseEntity.ok(raiz);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/raices")
    @Operation(
            operationId = "Insertar una raiz",
            description = "Operacion de escritura",
            summary = "Se crea una raiz a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la raiz a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = RaizRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Raiz.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la raiz con el identificador indicado.")
    public ResponseEntity<Raiz> realizarRaiz(@RequestBody RaizRequest request){
        Raiz raiz = iRaizService.realizarRaiz(request);
        if(raiz != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(raiz);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
