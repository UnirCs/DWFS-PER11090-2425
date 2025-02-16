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
@RequestMapping
public class OperationsController {

    private final OperationsService operationsService;

    public OperationsController(OperationsService operationsService) {
        this.operationsService = operationsService;
    }


    @PostMapping("/adds")
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



    @PostMapping("/subtractions")
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


    @PostMapping("/multiplications")
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


    @PostMapping("/divisions")
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


    @PostMapping("/roots")
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


    @PostMapping("/powers")
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

    // Sumas
    @GetMapping("/adds/{id}")
    @Operation(
            operationId = "getAddOperationById",
            summary = "Obtener operación de suma por ID",
            description = "Recupera una operación de suma a partir de su identificador único."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación de suma encontrada.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "404",
            description = "No se encontró una operación de suma con el ID especificado."
    )
    public ResponseEntity<CalculatorOperation> getAddOperationById(@PathVariable Long id) {
        CalculatorOperation operation = operationsService.getOperationById(id);

        if (operation != null && "addition".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Restas
    @GetMapping("/subtractions/{id}")
    @Operation(
            operationId = "getSubtractionOperationById",
            summary = "Obtener operación de resta por ID",
            description = "Recupera una operación de resta a partir de su identificador único."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación de resta encontrada.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "404",
            description = "No se encontró una operación de resta con el ID especificado."
    )
    public ResponseEntity<CalculatorOperation> getSubtractionOperationById(@PathVariable Long id) {
        CalculatorOperation operation = operationsService.getOperationById(id);
        if (operation != null && "subtractions".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Multiplicaciones
    @GetMapping("/multiplications/{id}")
    @Operation(
            operationId = "getMultiplicationOperationById",
            summary = "Obtener operación de multiplicación por ID",
            description = "Recupera una operación de multiplicación a partir de su identificador único."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación de multiplicación encontrada.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "404",
            description = "No se encontró una operación de multiplicación con el ID especificado."
    )
    public ResponseEntity<CalculatorOperation> getMultiplicationOperationById(@PathVariable Long id) {
        CalculatorOperation operation = operationsService.getOperationById(id);
        if (operation != null && "multiplication".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Divisiones
    @GetMapping("/divisions/{id}")
    @Operation(
            operationId = "getDivisionOperationById",
            summary = "Obtener operación de división por ID",
            description = "Recupera una operación de división a partir de su identificador único."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación de división encontrada.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "404",
            description = "No se encontró una operación de división con el ID especificado."
    )
    public ResponseEntity<CalculatorOperation> getDivisionOperationById(@PathVariable Long id) {
        CalculatorOperation operation = operationsService.getOperationById(id);
        if (operation != null && "division".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Raíces
    @GetMapping("/roots/{id}")
    @Operation(
            operationId = "getRootOperationById",
            summary = "Obtener operación de raíz por ID",
            description = "Recupera una operación de cálculo de raíz a partir de su identificador único."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación de cálculo de raíz encontrada.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "404",
            description = "No se encontró una operación de cálculo de raíz con el ID especificado."
    )
    public ResponseEntity<CalculatorOperation> getRootOperationById(@PathVariable Long id) {
        CalculatorOperation operation = operationsService.getOperationById(id);
        if (operation != null && "root".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Potencias
    @GetMapping("/powers/{id}")
    @Operation(
            operationId = "getPowerOperationById",
            summary = "Obtener operación de potencia por ID",
            description = "Recupera una operación de cálculo de potencia a partir de su identificador único."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Operación de cálculo de potencia encontrada.",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = CalculatorOperation.class))
    )
    @ApiResponse(
            responseCode = "404",
            description = "No se encontró una operación de cálculo de potencia con el ID especificado."
    )
    public ResponseEntity<CalculatorOperation> getPowerOperationById(@PathVariable Long id) {
        CalculatorOperation operation = operationsService.getOperationById(id);
        if (operation != null && "power".equals(operation.getType())) {
            return ResponseEntity.ok(operation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

