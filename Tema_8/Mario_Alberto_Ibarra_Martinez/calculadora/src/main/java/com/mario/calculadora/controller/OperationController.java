package com.mario.calculadora.controller;

import static lombok.AccessLevel.PRIVATE;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.*;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import com.mario.calculadora.repository.OperationsRec;
import com.mario.calculadora.repository.dto.OperationRepRequest;
import com.mario.calculadora.interfaces.OperationInterface;
import org.springframework.http.ResponseEntity;


@RestController
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class OperationController {

  OperationRequests req;
  OperationInterface service;

  @Operation(
      operationId = "Sumar números",
      description = "Operación de escritura",
      summary = "Se suman los N números proporcionados en la lista.",
      requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
          description = "Datos de los números a sumar.",
          required = true,
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(implementation = OperationRepRequest.class),
              examples = @ExampleObject(
                  name = "Ejemplo de suma",
                  summary = "Suma de dos números",
                  description = "Solicitud para sumar 2 + 4",
                  value = """
                {
                    "numbers": [2, 4]
                }
                """
              )
          )
      )
  )
  @ApiResponse(
      responseCode = "201",
      content = @Content(
          mediaType = "application/json",
          schema = @Schema(implementation = OperationsRec.class),
          examples = @ExampleObject(
              name = "Respuesta exitosa",
              summary = "Resultado de la suma",
              description = "Resultado de sumar 2 + 4",
              value = """
            {
                "id": 1,
                "operation": "SUMA",
                "numbers": "2, 4",
                "result": 6.0
            }
            """
          )
      )
  )
  @ApiResponse(
      responseCode = "400",
      content = @Content(mediaType = "application/json"),
      description = "Error en los datos proporcionados para la operación."
  )
  @PostMapping("sumas")
  public ResponseEntity<OperationsRec> addition(@RequestBody OperationRepRequest request) {
    return req.handleOperation(request, service::addition);
  }

  @Operation(
      operationId = "Obtener una operación de suma",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una suma por su identificador."
  )
  @ApiResponse(
      responseCode = "200",
      content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationsRec.class))
  )
  @ApiResponse(
      responseCode = "404",
      content = @Content(mediaType = "application/json"),
      description = "No se ha encontrado la operación con el identificador indicado."
  )
  @GetMapping("sumas/{operationID}")
  public ResponseEntity<OperationsRec> getAddition(@PathVariable Long operationID) {
    return req.handleGet(operationID, service::getAdditionById);
  }

  @Operation(
      operationId = "Restar números",
      description = "Operación de escritura",
      summary = "Se restan los N números proporcionados en la lista.",
      requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
          description = "Datos de los números a restar.",
          required = true,
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(implementation = OperationRepRequest.class),
              examples = @ExampleObject(
                  name = "Ejemplo de resta",
                  summary = "Resta de tres números",
                  description = "Solicitud para restar 10 - 3 - 2",
                  value = """
                {
                    "numbers": [10, 3, 2]
                }
                """
              )
          )
      )
  )
  @ApiResponse(
      responseCode = "201",
      content = @Content(
          mediaType = "application/json",
          schema = @Schema(implementation = OperationsRec.class),
          examples = @ExampleObject(
              name = "Respuesta exitosa",
              summary = "Resultado de la resta",
              description = "Resultado de restar 10 - 3 - 2",
              value = """
            {
                "id": 1,
                "operation": "SUBTRACTION",
                "numbers": "[10.0, 3.0, 2.0]",
                "result": 5.0
            }
            """
          )
      )
  )
  @ApiResponse(
      responseCode = "400",
      content = @Content(mediaType = "application/json"),
      description = "Error en los datos proporcionados para la operación."
  )
  @PostMapping("restas")
  public ResponseEntity<OperationsRec> subtraction(@RequestBody OperationRepRequest request) {
    return req.handleOperation(request, service::subtraction);
  }

  @Operation(
      operationId = "Obtener una operación de resta",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una resta por su identificador."
  )
  @ApiResponse(
      responseCode = "200",
      content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationsRec.class))
  )
  @ApiResponse(
      responseCode = "404",
      content = @Content(mediaType = "application/json"),
      description = "No se ha encontrado la operación con el identificador indicado."
  )
  @GetMapping("restas/{operationID}")
  public ResponseEntity<OperationsRec> getSubtraction(@PathVariable Long operationID) {
    return req.handleGet(operationID, service::getSubtractionById);
  }

  @Operation(
      operationId = "Multiplicar números",
      description = "Operación de escritura",
      summary = "Se multiplican los N números proporcionados en la lista.",
      requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
          description = "Datos de los números a multiplicar.",
          required = true,
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(implementation = OperationRepRequest.class),
              examples = @ExampleObject(
                  name = "Ejemplo de multiplicación",
                  summary = "Multiplicación de dos números",
                  description = "Solicitud para multiplicar 2 × 5",
                  value = """
                {
                    "numbers": [2, 5]
                }
                """
              )
          )
      )
  )
  @ApiResponse(
      responseCode = "201",
      content = @Content(
          mediaType = "application/json",
          schema = @Schema(implementation = OperationsRec.class),
          examples = @ExampleObject(
              name = "Respuesta exitosa",
              summary = "Resultado de la multiplicación",
              description = "Resultado de multiplicar 2 × 5",
              value = """
            {
                "id": 1,
                "operation": "MULTIPLICATION",
                "numbers": "2.0, 5.0",
                "result": 10.0
            }
            """
          )
      )
  )
  @ApiResponse(
      responseCode = "400",
      content = @Content(mediaType = "application/json"),
      description = "Error en los datos proporcionados para la operación."
  )
  @PostMapping("multiplicaciones")
  public ResponseEntity<OperationsRec> multiplication(@RequestBody OperationRepRequest request) {
    return req.handleOperation(request, service::multiplication);
  }

  @Operation(
      operationId = "Obtener una operación de multiplicación",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una multiplicación por su identificador."
  )
  @ApiResponse(
      responseCode = "200",
      content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationsRec.class))
  )
  @ApiResponse(
      responseCode = "404",
      content = @Content(mediaType = "application/json"),
      description = "No se ha encontrado la operación con el identificador indicado."
  )
  @GetMapping("multiplicaciones/{operationID}")
  public ResponseEntity<OperationsRec> getMultiplication(@PathVariable Long operationID) {
    return req.handleGet(operationID, service::getMultiplicationById);
  }

  @Operation(
      operationId = "Dividir números",
      description = "Operación de escritura",
      summary = "Se dividen los N números proporcionados en la lista.",
      requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
          description = "Datos de los números a dividir.",
          required = true,
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(implementation = OperationRepRequest.class),
              examples = @ExampleObject(
                  name = "Ejemplo de división",
                  summary = "División de tres números",
                  description = "Solicitud para dividir 24 ÷ 3 ÷ 2",
                  value = """
                {
                    "numbers": [24.0, 3.0, 2.0]
                }
                """
              )
          )
      )
  )
  @ApiResponse(
      responseCode = "201",
      content = @Content(
          mediaType = "application/json",
          schema = @Schema(implementation = OperationsRec.class),
          examples = @ExampleObject(
              name = "Respuesta exitosa",
              summary = "Resultado de la división",
              description = "Resultado de dividir 24 ÷ 3 ÷ 2",
              value = """
            {
                "id": 1,
                "operation": "DIVISION",
                "numbers": "24.0, 3.0, 2.0",
                "result": 4.0
            }
            """
          )
      )
  )
  @ApiResponse(
      responseCode = "400",
      content = @Content(mediaType = "application/json"),
      description = "Error en los datos proporcionados para la operación o división por cero."
  )
  @PostMapping("divisiones")
  public ResponseEntity<OperationsRec> division(@RequestBody OperationRepRequest request) {
    return req.handleOperation(request, service::division);
  }

  @Operation(
      operationId = "Obtener una operación de división",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una división por su identificador."
  )
  @ApiResponse(
      responseCode = "200",
      content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationsRec.class))
  )
  @ApiResponse(
      responseCode = "404",
      content = @Content(mediaType = "application/json"),
      description = "No se ha encontrado la operación con el identificador indicado."
  )
  @GetMapping("divisiones/{operationID}")
  public ResponseEntity<OperationsRec> getDivision(@PathVariable Long operationID) {
    return req.handleGet(operationID, service::getDivisionById);
  }

  @Operation(
      operationId = "Calcular la raíz n-ésima de un número",
      description = "Operación de escritura",
      summary = "Se calcula la raíz de un número con el índice especificado.",
      requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
          description = "Datos para calcular la raíz: radicando e índice.",
          required = true,
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(implementation = OperationRepRequest.class),
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
          schema = @Schema(implementation = OperationsRec.class),
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
  @PostMapping("raices")
  public ResponseEntity<OperationsRec> roots(@RequestBody OperationRepRequest request) {
    return req.handleOperation(request, service::root);
  }

  @Operation(
      operationId = "Obtener operación de raíz n-ésima",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una operación de raíz por su identificador."
  )
  @ApiResponse(
      responseCode = "200",
      content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationsRec.class))
  )
  @ApiResponse(
      responseCode = "404",
      content = @Content(mediaType = "application/json"),
      description = "No se ha encontrado la operación con el identificador indicado."
  )
  @GetMapping("raices/{operationID}")
  public ResponseEntity<OperationsRec> getRoot(@PathVariable Long operationID) {
    return req.handleGet(operationID, service::getRootById);
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
              schema = @Schema(implementation = OperationRepRequest.class),
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
          schema = @Schema(implementation = OperationsRec.class),
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
  @PostMapping("potencias")
  public ResponseEntity<OperationsRec> powers(@RequestBody OperationRepRequest request) {
    return req.handleOperation(request, service::power);
  }

  @Operation(
      operationId = "Obtener operación de potencia n-ésima",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una operación de potencia por su identificador."
  )
  @ApiResponse(
      responseCode = "200",
      content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationsRec.class))
  )
  @ApiResponse(
      responseCode = "404",
      content = @Content(mediaType = "application/json"),
      description = "No se ha encontrado la operación con el identificador indicado."
  )
  @GetMapping("potencias/{operationID}")
  public ResponseEntity<OperationsRec> getPower(@PathVariable Long operationID) {
    return req.handleGet(operationID, service::getPowerById);
  }
}
