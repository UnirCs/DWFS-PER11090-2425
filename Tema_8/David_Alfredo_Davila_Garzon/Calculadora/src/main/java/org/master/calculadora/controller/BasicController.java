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
import org.master.calculadora.repository.dto.BasicRequest;
import org.master.calculadora.repository.model.CalcHistory;
import org.master.calculadora.service.IBasicService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class BasicController {

  ControllerHelper helper;
  IBasicService service;

  @Operation(
      operationId = "Sumar números",
      description = "Operación de escritura",
      summary = "Se suman los N números proporcionados en la lista.",
      requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
          description = "Datos de los números a sumar.",
          required = true,
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(implementation = BasicRequest.class),
              examples = @ExampleObject(
                  name = "Ejemplo de suma",
                  summary = "Suma de tres números",
                  description = "Solicitud para sumar 2 + 3 + 5",
                  value = """
                {
                    "numbers": [2.0, 3.0, 5.0]
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
          schema = @Schema(implementation = CalcHistory.class),
          examples = @ExampleObject(
              name = "Respuesta exitosa",
              summary = "Resultado de la suma",
              description = "Resultado de sumar 2 + 3 + 5",
              value = """
            {
                "id": 1,
                "operation": "ADDITION",
                "numbers": "2.0, 3.0, 5.0",
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
  @PostMapping("adds")
  public ResponseEntity<CalcHistory> addition(@RequestBody BasicRequest request) {
    return helper.handleOperation(request, service::addition);
  }

  @Operation(
      operationId = "Obtener una operación de suma",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una suma por su identificador."
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
  @GetMapping("adds/{operationID}")
  public ResponseEntity<CalcHistory> getAddition(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getAdditionById);
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
              schema = @Schema(implementation = BasicRequest.class),
              examples = @ExampleObject(
                  name = "Ejemplo de resta",
                  summary = "Resta de tres números",
                  description = "Solicitud para restar 10 - 3 - 2",
                  value = """
                {
                    "numbers": [10.0, 3.0, 2.0]
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
          schema = @Schema(implementation = CalcHistory.class),
          examples = @ExampleObject(
              name = "Respuesta exitosa",
              summary = "Resultado de la resta",
              description = "Resultado de restar 10 - 3 - 2",
              value = """
            {
                "id": 1,
                "operation": "SUBTRACTION",
                "numbers": "10.0, 3.0, 2.0",
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
  @PostMapping("subtractions")
  public ResponseEntity<CalcHistory> subtraction(@RequestBody BasicRequest request) {
    return helper.handleOperation(request, service::subtraction);
  }

  @Operation(
      operationId = "Obtener una operación de resta",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una resta por su identificador."
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
  @GetMapping("subtractions/{operationID}")
  public ResponseEntity<CalcHistory> getSubtraction(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getSubtractionById);
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
              schema = @Schema(implementation = BasicRequest.class),
              examples = @ExampleObject(
                  name = "Ejemplo de multiplicación",
                  summary = "Multiplicación de tres números",
                  description = "Solicitud para multiplicar 2 × 3 × 4",
                  value = """
                {
                    "numbers": [2.0, 3.0, 4.0]
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
          schema = @Schema(implementation = CalcHistory.class),
          examples = @ExampleObject(
              name = "Respuesta exitosa",
              summary = "Resultado de la multiplicación",
              description = "Resultado de multiplicar 2 × 3 × 4",
              value = """
            {
                "id": 1,
                "operation": "MULTIPLICATION",
                "numbers": "2.0, 3.0, 4.0",
                "result": 24.0
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
  @PostMapping("multiplications")
  public ResponseEntity<CalcHistory> multiplication(@RequestBody BasicRequest request) {
    return helper.handleOperation(request, service::multiplication);
  }

  @Operation(
      operationId = "Obtener una operación de multiplicación",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una multiplicación por su identificador."
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
  @GetMapping("multiplications/{operationID}")
  public ResponseEntity<CalcHistory> getMultiplication(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getMultiplicationById);
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
              schema = @Schema(implementation = BasicRequest.class),
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
          schema = @Schema(implementation = CalcHistory.class),
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
  @PostMapping("divisions")
  public ResponseEntity<CalcHistory> division(@RequestBody BasicRequest request) {
    return helper.handleOperation(request, service::division);
  }

  @Operation(
      operationId = "Obtener una operación de división",
      description = "Operación de lectura",
      summary = "Se obtiene el resultado de una división por su identificador."
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
  @GetMapping("divisions/{operationID}")
  public ResponseEntity<CalcHistory> getDivision(@PathVariable Long operationID) {
    return helper.handleGet(operationID, service::getDivisionById);
  }
}
