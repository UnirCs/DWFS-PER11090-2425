package com.calculadora.controller;


import com.calculadora.dto.*;
import com.calculadora.modelo.Operacion;
import com.calculadora.service.OperacionesService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Slf4j
@RestController
@Tag(name = "Calculator Controller", description = "API para realizar operaciones matemáticas en memoria")
public class CalculatorController {

    @Autowired
    private OperacionesService operacionesService;

    @PostMapping("/sumas")
    @Operation(
            operationId = "Realizar una suma",
            summary = "Sumar N números",
            description = "Suma una lista de números y guarda la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(responseCode = "500", description = "Error interno del servidor",
            content = @Content(schema = @Schema(implementation = String.class)))
    public ResponseEntity<?> add(@RequestBody OperationRequestDTO request) {
        try {
            if (request.getNumeros() == null || request.getNumeros().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: La lista de números no puede estar vacía.");
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(operacionesService.sumar(request));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");
        }
    }

    @PostMapping("/restas")
    @Operation(
            operationId = "Realizar una resta",
            summary = "Restar N números",
            description = "Resta una lista de números y guarda la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(responseCode = "500", description = "Error interno del servidor",
            content = @Content(schema = @Schema(implementation = String.class)))
    public ResponseEntity<?> subtract(@RequestBody OperationRequestDTO request) {
        try {
            if (request.getNumeros() == null || request.getNumeros().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: La lista de números no puede estar vacía.");
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(operacionesService.restar(request));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor: ");
        }
    }

    @PostMapping("/multiplicaciones")
    @Operation(
            operationId = "Realizar una multiplicación",
            summary = "Multiplicar dos números",
            description = "Multiplica dos números y guarda la operación.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la multiplicación con el identificador indicado.")
    public ResponseEntity<?> multiply(@RequestBody TwoNumberRequestDTO request) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(operacionesService.multiplicar(request));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error interno del servidor");
        }
    }

    @PostMapping("/divisiones")
    @Operation(
            operationId = "Realizar una división",
            summary = "Dividir dos números",
            description = "Divide dos números y guarda la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(responseCode = "500", description = "Error interno del servidor",
            content = @Content(schema = @Schema(implementation = String.class)))
    public ResponseEntity<?> divide(@RequestBody TwoNumberRequestDTO request) {
        try {
            if (request.getNumeros2() == 0) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: No se puede dividir por cero.");
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(operacionesService.dividir(request));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor ");
        }
    }

    @PostMapping("/raices")
    @Operation(
            operationId = "Obtener una raiz",
            summary = "Calcular la raíz N-ésima de un número",
            description = "Calcula la raíz N-ésima de un número y guarda la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    @ApiResponse(responseCode = "500", description = "Error interno del servidor",
            content = @Content(schema = @Schema(implementation = String.class)))
    public ResponseEntity<?> nthRoot(@RequestBody RootRequestDTO request) {
        try {
            if (request.getRoot() <= 0) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: El índice de la raíz debe ser mayor que 0.");
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(operacionesService.calcularRaiz(request));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor: ");
        }
    }

    @PostMapping("/potencias")
    @Operation(
               operationId = "Realizar una potencia",
               summary = "Calcular la potencia N-ésima de un número",
               description = "Calcula la potencia N-ésima de un número y guarda la operación.")
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "Datos incorrectos introducidos.")
    public ResponseEntity<?> power(@RequestBody PowerRequestDTO request) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(operacionesService.calcularPotencia(request));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Datos incorrectos introducidos.: " + e.getMessage());
        }
    }

    @GetMapping("/sumas/{idOperacion}")
    @Operation(
            operationId = "Obtener una suma",
            summary = "Obtener una suma por ID",
            description = "Recupera una operación de suma por su ID.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la suma con el identificador indicado.")
    @ApiResponse(responseCode = "500", description = "Error interno del servidor",
            content = @Content(schema = @Schema(implementation = String.class)))
    public ResponseEntity<?> getAdditionById(@PathVariable Long idOperacion) {
        try {
            return ResponseEntity.ok(operacionesService.getOperationByIdAndType(idOperacion, "Sumar"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: La suma con ID " + idOperacion + " no fue encontrada.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor" );
        }
    }

    @GetMapping("/restas/{idOperacion}")
    @Operation(
            operationId = "Obtener una resta",
            summary = "Obtener una resta por ID",
            description = "Recupera una operación de resta por su ID.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la resta con el identificador indicado.")
    @ApiResponse(responseCode = "500", description = "Error interno del servidor",
            content = @Content(schema = @Schema(implementation = String.class)))
    public ResponseEntity<?> getSubtractionById(@PathVariable Long idOperacion) {
        try {
            return ResponseEntity.ok(operacionesService.getOperationByIdAndType(idOperacion, "Restar"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: La resta con ID " + idOperacion + " no fue encontrada.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor ");
        }
    }

    @GetMapping("/raices/{idOperacion}")
    @Operation(
            operationId = "Obtener una raiz",
            summary = "Obtener una raíz por ID",
            description = "Recupera una operación de raíz por su ID.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la raiz con el identificador indicado.")
    @ApiResponse(responseCode = "500", description = "Error interno del servidor",
            content = @Content(schema = @Schema(implementation = String.class)))
    public ResponseEntity<?> getRootById(@PathVariable Long idOperacion) {
        try {
            return ResponseEntity.ok(operacionesService.getOperationByIdAndType(idOperacion, "Nth Root"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: La raíz con ID " + idOperacion + " no fue encontrada.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor" );
        }
    }

    @GetMapping("/potencias/{idOperacion}")
    @Operation(
            operationId = "Obtener una potencia",
            summary = "Obtener una potencia por ID",
            description = "Recupera una operación de potencia por su ID.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la potencia con el identificador indicado.")
    @ApiResponse(responseCode = "500", description = "Error interno del servidor",
            content = @Content(schema = @Schema(implementation = String.class)))
    public ResponseEntity<?> getPotenciaById(@PathVariable Long idOperacion) {
        try {
            return ResponseEntity.ok(operacionesService.getOperationByIdAndType(idOperacion, "Potencia"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: La potencia con ID " + idOperacion + " no fue encontrada.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");
        }
    }

    @GetMapping("/divisiones/{idOperacion}")
    @Operation(summary = "Obtener una división por ID",
            description = "Recupera una operación de división por su ID.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la division con el identificador indicado.")
    @ApiResponse(responseCode = "500", description = "Error interno del servidor",
            content = @Content(schema = @Schema(implementation = String.class)))
    public ResponseEntity<?> getDivisionById(@PathVariable Long idOperacion) {
        try {
            return ResponseEntity.ok(operacionesService.getOperationByIdAndType(idOperacion, "Division"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: La división con ID " + idOperacion + " no fue encontrada.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");
        }
    }

    @GetMapping("/multiplicaciones/{idOperacion}")
    @Operation(
            operationId = "Obtener una multiplicación",
            summary = "Obtener una multiplicación por ID",
            description = "Recupera una operación de multiplicación por su ID.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Operacion.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la multiplicación con el identificador indicado.")
    @ApiResponse(responseCode = "500", description = "Error interno del servidor",
            content = @Content(schema = @Schema(implementation = String.class)))
    public ResponseEntity<?> getMultiplyById(@PathVariable Long idOperacion) {
        try {
            return ResponseEntity.ok(operacionesService.getOperationByIdAndType(idOperacion, "Multiplicacion"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: La multiplicación con ID " + idOperacion + " no fue encontrada.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor");
        }
    }
}
