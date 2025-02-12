package blasco.calculadora.controller;

import blasco.calculadora.controller.model.OperationDto;
import blasco.calculadora.data.model.CalculatorOperation;
import blasco.calculadora.service.OperationsService;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/operations")
public class OperationsController {

    private final OperationsService operationsService;

    public OperationsController(OperationsService operationsService) {
        this.operationsService = operationsService;
    }


    @PostMapping("/add")
    @Operation(
            operationId = "addNumbers",
            summary = "Sumar números",
            description = "Suma los números proporcionados separados por coma.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a sumar.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationDto.class))
            )
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación realizada con éxito.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "400",
            description = "Error en los datos proporcionados para la operación."
    )
    public ResponseEntity<CalculatorOperation> addNumbers(@RequestBody OperationDto request) {
        CalculatorOperation operation = operationsService.addNumbers(request.getNumbers());
        return ResponseEntity.ok(operation);
    }



    @PostMapping("/subtract")
    @Operation(
            operationId = "subtractNumbers",
            summary = "Restar números",
            description = "Resta los números proporcionados separados por coma.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a restar.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationDto.class))
            )
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación realizada con éxito.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "400",
            description = "Error en los datos proporcionados para la operación."
    )
    public ResponseEntity<CalculatorOperation> subtractNumbers(@RequestBody OperationDto request) {
        CalculatorOperation operation = operationsService.subtractNumbers(request.getNumbers());
        return ResponseEntity.ok(operation);
    }


    @PostMapping("/multiply")
    @Operation(
            operationId = "multiplyNumbers",
            summary = "Multiplicar números",
            description = "Multiplica los números proporcionados separados por coma.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a multiplicar.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationDto.class))
            )
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación realizada con éxito.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "400",
            description = "Error en los datos proporcionados para la operación."
    )
    public ResponseEntity<CalculatorOperation> multiplyNumbers(@RequestBody OperationDto request) {
        CalculatorOperation operation = operationsService.multiplyNumbers(request.getNumbers());
        return ResponseEntity.ok(operation);
    }


    @PostMapping("/divide")
    @Operation(
            operationId = "divideNumbers",
            summary = "Dividir números",
            description = "Divide el primer número por el segundo número proporcionado. Si el divisor es cero, devuelve un error.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a dividir.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationDto.class))
            )
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación realizada con éxito.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "400",
            description = "División por cero o datos incorrectos."
    )
    public ResponseEntity<CalculatorOperation> divideNumbers(@RequestBody OperationDto request) {
        try {
            CalculatorOperation operation = operationsService.divideNumbers(request.getNumbers());
            return ResponseEntity.ok(operation);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }


    @PostMapping("/root")
    @Operation(
            operationId = "calculateRoot",
            summary = "Calcular raíz",
            description = "Calcula la raíz n-ésima del número proporcionado.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos para calcular la raíz (número y el índice de la raíz).",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationDto.class))
            )
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación realizada con éxito.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "400",
            description = "Error en los datos proporcionados para la operación."
    )
    public ResponseEntity<CalculatorOperation> calculateRoot(@RequestBody OperationDto request) {
        CalculatorOperation operation = operationsService.calculateRoot(request.getNumbers(), request.getIndice());
        return ResponseEntity.ok(operation);
    }


    @PostMapping("/power")
    @Operation(
            operationId = "calculatePower",
            summary = "Calcular potencia",
            description = "Calcula el resultado de elevar el número base al exponente proporcionado.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos para calcular la potencia (número base y exponente).",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperationDto.class))
            )
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación realizada con éxito.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "400",
            description = "Error en los datos proporcionados para la operación."
    )
    public ResponseEntity<CalculatorOperation> calculatePower(@RequestBody OperationDto request) {
        CalculatorOperation operation = operationsService.calculatePower(request.getNumbers(), request.getExponente());
        return ResponseEntity.ok(operation);
    }


    @GetMapping("/{id}")
    @Operation(
            operationId = "getOperationById",
            summary = "Obtener operación por ID",
            description = "Recupera una operación almacenada a partir de su identificador único."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación encontrada.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "404",
            description = "No se ha encontrado ninguna operación con el identificador indicado."
    )
    public ResponseEntity<CalculatorOperation> getOperationById(@PathVariable Long id) {
        CalculatorOperation operation = operationsService.getOperationById(id);
        if (operation != null) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}

