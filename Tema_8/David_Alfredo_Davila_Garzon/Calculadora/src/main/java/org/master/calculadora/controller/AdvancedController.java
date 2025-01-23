package org.master.calculadora.controller;

import static lombok.AccessLevel.PRIVATE;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.master.calculadora.helper.ControllerHelper;
import org.master.calculadora.repository.dto.PowerRequest;
import org.master.calculadora.repository.dto.RootRequest;
import org.master.calculadora.repository.model.CalcHistory;
import org.master.calculadora.service.IAdvancedService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class AdvancedController {

  ControllerHelper helper;
  IAdvancedService service;

  @Operation(
      operationId = "Calcular la raíz n-ésima de un número",
      description = "Operación de escritura",
      summary = "Se calcula la raíz de un número con el índice especificado.",
      requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
          description = "Datos para calcular la raíz: radicando e índice.",
          required = true,
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(implementation = RootRequest.class),
              examples = {
                  @ExampleObject(
                      name = "Raíz cuadrada",
                      summary = "Cálculo de raíz cuadrada",
                      description = "Solicitud para calcular √16",
                      value = """
                    {
                        "radicand": 16.0,
                        "index": 2
                    }
                    """
                  ),
                  @ExampleObject(
                      name = "Raíz cúbica",
                      summary = "Cálculo de raíz cúbica",
                      description = "Solicitud para calcular ∛27",
                      value = """
                    {
                        "radicand": 27.0,
                        "index": 3
                    }
                    """
                  )
              }
          )
      )
  )
  @ApiResponse(
      responseCode = "201",
      content = @Content(
          mediaType = "application/json",
          schema = @Schema(implementation = CalcHistory.class),
          examples = {
              @ExampleObject(
                  name = "Respuesta raíz cuadrada",
                  summary = "Resultado de la raíz cuadrada",
                  description = "Resultado de calcular √16",
                  value = """
                {
                    "id": 1,
                    "operation": "ROOT",
                    "numbers": "radicand: 16.0, index: 2",
                    "result": 4.0
                }
                """
              )
          }
      )
  )
  @ApiResponse(
      responseCode = "400",
      content = @Content(mediaType = "application/json"),
      description = "Error en los datos proporcionados para la operación o raíz no válida (índice negativo o par con radicando negativo)."
  )
  @PostMapping("roots")
  public ResponseEntity<CalcHistory> roots(@RequestBody RootRequest request) {
    return helper.handleOperation(request, service::root);
  }

  @Operation(
      operationId = "Obtener operación de raíz n-ésima",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una operación de raíz por su identificador."
  )
  @ApiResponse(
      responseCode = "200",
      content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalcHistory.class))
  )
  @ApiResponse(
      responseCode = "404",
      content = @Content(mediaType = "application/json"),
      description = "No se ha encontrado la operación con el identificador indicado."
  )
  @GetMapping("roots/{operationID}")
  public ResponseEntity<CalcHistory> getRoot(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getRootById);
  }

  @Operation(
      operationId = "Calcular la potencia n-ésima de un número",
      description = "Operación de escritura",
      summary = "Se calcula la potencia de un número con el exponente especificado.",
      requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
          description = "Datos para calcular la potencia: base y exponente.",
          required = true,
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(implementation = PowerRequest.class),
              examples = {
                  @ExampleObject(
                      name = "Potencia cúbica",
                      summary = "Cálculo del cubo",
                      description = "Solicitud para calcular 3³",
                      value = """
                   {
                       "base": 3.0,
                       "exponent": 3
                   }
                   """
                  )
              }
          )
      )
  )
  @ApiResponse(
      responseCode = "201",
      content = @Content(
          mediaType = "application/json",
          schema = @Schema(implementation = CalcHistory.class),
          examples = {
              @ExampleObject(
                  name = "Respuesta potencia cúbica",
                  summary = "Resultado de la potencia cúbica",
                  description = "Resultado de calcular 3³",
                  value = """
               {
                   "id": 1,
                   "operation": "POWER",
                   "numbers": "base: 3.0, exponent: 3",
                   "result": 27.0
               }
               """
              )
          }
      )
  )
  @PostMapping("powers")
  public ResponseEntity<CalcHistory> powers(@RequestBody PowerRequest request) {
    return helper.handleOperation(request, service::power);
  }

  @Operation(
      operationId = "Obtener operación de potencia n-ésima",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una operación de potencia por su identificador."
  )
  @ApiResponse(
      responseCode = "200",
      content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalcHistory.class))
  )
  @ApiResponse(
      responseCode = "404",
      content = @Content(mediaType = "application/json"),
      description = "No se ha encontrado la operación con el identificador indicado."
  )
  @GetMapping("powers/{operationID}")
  public ResponseEntity<CalcHistory> getPower(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getPowerById);
  }
}
