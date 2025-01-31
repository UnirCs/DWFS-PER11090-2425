package com.unir.calculadora.controller;

import com.unir.calculadora.model.Operation;
import com.unir.calculadora.model.OperationRequest;
import com.unir.calculadora.service.OperationsService;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Tag(name = "Operations Controller", description = "calculadora online")
public class OperationsController {
    private final OperationsService operationsService;

    public OperationsController(OperationsService operationsService) {
        this.operationsService = operationsService;
    }

    @PostMapping("/additions")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "Sumar números",
            description = "Operación de escritura",
            summary = "Se suman los N números proporcionados en una cadena de string separados por coma",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a sumar.",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = OperationRequest.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de suma",
                                    summary = "Suma de tres números",
                                    description = "Solicitud para sumar 8 + 4 + 2",
                                    value = """
                                    {
                                        "numbers": "8,4,2"
                                    }
                                    """
                            )
                    )
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = Operation.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la suma",
                            description = "Resultado de sumar 8 + 4 + 2",
                            value = """
                            {
                                "id": 6,
                                "type": "addition",
                                "numbers": "8,4,2",
                                "result": 14.0
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
    public ResponseEntity<Operation> addNumbers(@RequestBody OperationRequest request) {
        Operation operation = operationsService.addNumbers(request.getNumbers());
        return ResponseEntity.ok(operation);
    }

    @GetMapping("/additions/{id}")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "Obtiene  una operación suma",
            description = "Operación de lectura",
            summary = "Se busca  la operación  suma a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la operación suma con el identificador indicado.")
    public ResponseEntity<Operation> getAdditionById(@PathVariable Long id) {
        Operation operation = operationsService.getOperationById(id);
        if (operation != null && "addition".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/subtractions")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "Restar números",
            description = "Operación de escritura",
            summary = "Se restan  los N números proporcionados en una cadena de string separados por coma",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a restar.",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = OperationRequest.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de restar",
                                    summary = "Resta de tres números",
                                    description = "Solicitud para restar 8 - 4 - 2",
                                    value = """
                                    {
                                        "numbers": "8,4,2"
                                    }
                                    """
                            )
                    )
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = Operation.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la resta",
                            description = "Resultado de restar 8 - 4 - 2",
                            value = """
                            {
                                "id": 6,
                                "type": "subtraction",
                                "numbers": "8,4,2",
                                "result": 2.0
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
    public ResponseEntity<Operation> subtractNumbers(@RequestBody OperationRequest request) {
        Operation operation = operationsService.subtractNumbers(request.getNumbers());
        return ResponseEntity.ok(operation);
    }

    @GetMapping("/subtractions/{id}")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "Obtiene  una operación resta",
            description = "Operación de lectura",
            summary = "Se busca  la operación  resta a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la operación resta con el identificador indicado.")
    public ResponseEntity<Operation> getSubtractionById(@PathVariable Long id) {
        Operation operation = operationsService.getOperationById(id);
        if (operation != null && "subtraction".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/multiplications")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "Multiplicar  números",
            description = "Operación de escritura",
            summary = "Se multiplican  los N números proporcionados en una cadena de string separados por coma",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a multiplicar.",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = OperationRequest.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de multiplicar",
                                    summary = "multiplica tres números",
                                    description = "Solicitud para multiplicar 8 * 4 * 2",
                                    value = """
                                    {
                                        "numbers": "8,4,2"
                                    }
                                    """
                            )
                    )
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = Operation.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la multiplicación",
                            description = "Resultado de multiplicar  8 * 4 * 2",
                            value = """
                            {
                                "id": 8,
                                "type": "multiplication",
                                "numbers": "8,4,2",
                                "result": 64.0
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
    public ResponseEntity<Operation> multiplyNumbers(@RequestBody OperationRequest request) {
        Operation operation = operationsService.multiplyNumbers(request.getNumbers());
        return ResponseEntity.ok(operation);
    }

    @GetMapping("/multiplications/{id}")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "Obtiene  una operación multiplicación",
            description = "Operación de lectura",
            summary = "Se busca  la operación  multiplicación a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la operación multiplicación con el identificador indicado.")
    public ResponseEntity<Operation> getMultiplicationById(@PathVariable Long id) {
        Operation operation = operationsService.getOperationById(id);
        if (operation != null && "multiplication".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/divisions")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "División de   números",
            description = "Operación de escritura",
            summary = "Se dividen  dos  números proporcionados en una cadena de string separados por coma",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a dividir.",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = OperationRequest.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de dividir",
                                    summary = "divide dos números",
                                    description = "Solicitud para dividir 8 / 4 ",
                                    value = """
                                    {
                                        "numbers": "8,4"
                                    }
                                    """
                            )
                    )
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = Operation.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la división",
                            description = "Resultado de dividir  8 / 4 ",
                            value = """
                            {
                                "id": 6,
                                "type": "division",
                                "numbers": "8,4",
                                "result": 2.0
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
    public ResponseEntity<Operation> divideNumbers(@RequestBody OperationRequest request) {
        Operation operation = operationsService.divideNumbers(request.getNumbers());
        return ResponseEntity.ok(operation);
    }

    @GetMapping("/divisions/{id}")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "Obtiene  una operación división",
            description = "Operación de lectura",
            summary = "Se busca  la operación  división a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la operación división con el identificador indicado.")
    public ResponseEntity<Operation> getDivisionById(@PathVariable Long id) {
        Operation operation = operationsService.getOperationById(id);
        if (operation != null && "division".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/roots")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "raíz N-ésima de un número",
            description = "Operación de escritura",
            summary = "Calcula la raíz N-ésima de un número proporcionado",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos para calcular la raíz N-ésima de un número proporcionando el índice",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = OperationRequest.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de la raíz N-ésima de un número",
                                    summary = "Calculo de la raíz cúbica de 8",
                                    description = "Solicitud para calcular ∛8 ",
                                    value = """
                                    {
                                        "numbers": "8",
                                        "indice": 3
                                    }
                                    """
                            )
                    )
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = Operation.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la raíz cúbica",
                            description = "Resultado de Raíz cúbica  de 8 ",
                            value = """
                            {
                                "id": 7,
                                "type": "root",
                                "numbers": "8,3",
                                "result": 2.0
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
    public ResponseEntity<Operation> calculateRoot(@RequestBody OperationRequest request) {
        Operation operation = operationsService.calculateRoot(request.getNumbers(),request.getIndice());
        return ResponseEntity.ok(operation);
    }

    @GetMapping("/roots/{id}")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "Obtiene  una operación raíz N-ésima",
            description = "Operación de lectura",
            summary = "Se busca  la operación  raíz N-ésima a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la operación raíz N-ésima con el identificador indicado.")
    public ResponseEntity<Operation> getRootById(@PathVariable Long id) {
        Operation operation = operationsService.getOperationById(id);
        if (operation != null && "root".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/powers")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "Potencia  de un número",
            description = "Operación de escritura",
            summary = "Calcula  la potencia de un número proporcionado",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos para calcular la potencia de un número proporcionando el exponente",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = OperationRequest.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de la potencia  de un número",
                                    summary = " Cálculo de nⁿ ",
                                    description = "Solicitud para calcular 8³ ",
                                    value = """
                                    {
                                        "numbers": "8",
                                        "exponente": 3
                                    }
                                    """
                            )
                    )
            )
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = Operation.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la potencia",
                            description = "Resultado de calcular 8³ ",
                            value = """
                            {
                                "id": 10,
                                "type": "power",
                                "numbers": "8,3",
                                "result": 512.0
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
    public ResponseEntity<Operation> calculatePowers(@RequestBody OperationRequest request) {
        Operation operation = operationsService.calculatePowers(request.getNumbers(),request.getExponente());
        return ResponseEntity.ok(operation);
    }

    @GetMapping("/powers/{id}")
    @io.swagger.v3.oas.annotations.Operation(
            operationId = "Obtiene  una operación potencia",
            description = "Operación de lectura",
            summary = "Se busca  la operación  potencia  a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado la operación potencia  con el identificador indicado.")
    public ResponseEntity<Operation> getPowerById(@PathVariable Long id) {
        Operation operation = operationsService.getOperationById(id);
        if (operation != null && "power".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}