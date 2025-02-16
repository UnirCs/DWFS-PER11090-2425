package com.unir.calculadora.web.rest;

import com.unir.calculadora.service.OperacionService;
import com.unir.calculadora.service.dto.MultiploDTO;
import com.unir.calculadora.service.dto.OperacionDTO;
import com.unir.calculadora.service.utils.Constantes;
import com.unir.calculadora.web.rest.payload.MultiploPayload;
import com.unir.calculadora.web.rest.payload.NumberPayload;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.*;
import io.swagger.v3.oas.annotations.responses.ApiResponse;


@RestController
@RequestMapping("/api/v1")
public class OperacionResource {

    private final Logger log = LoggerFactory.getLogger(OperacionResource.class);

    private final OperacionService operacionService;

    public OperacionResource(OperacionService operacionService) {
        this.operacionService = operacionService;
    }

    @Operation(
            operationId = "Sumar números",
            description = "Operación de escritura",
            summary = "Se suman los N números proporcionados en la lista.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a sumar.",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = NumberPayload.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de suma",
                                    summary = "Suma de dos números",
                                    description = "Solicitud para sumar 2 + 4",
                                    value = """
                                            {
                                                "numeros": [2, 4]
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
                    schema = @Schema(implementation = OperacionDTO.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la suma",
                            description = "Resultado de sumar 2 + 4",
                            value = """
                                    {
                                        "id": 1,
                                        "operacion": "SUMAR",
                                        "numeros": {
                                            "id": 1,
                                            "valor": 2
                                        },
                                        {
                                            "id": 2,
                                            "valor": 4
                                        },
                                        "result": 6
                                    }
                                    """
                    )
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json"),
            description = "Error en los datos proporcionados para la operacion: Suma."
    )
    @PostMapping("/sumas")
    public ResponseEntity<OperacionDTO> sumar(@RequestBody NumberPayload numeros) {
        log.info("Request to sumar : {}", numeros);
        if (ObjectUtils.isEmpty(numeros) || ObjectUtils.isEmpty(numeros.getNumeros()) || numeros.getNumeros().size() < 2) {
            return ResponseEntity.badRequest().build();
        }
        OperacionDTO result = operacionService.sumarRestar(numeros.getNumeros(), Constantes.SUMAR);
        return ResponseEntity.ok().body(result);
    }

    @Operation(
            operationId = "Obtener una suma ",
            description = "Operación de lectura",
            summary = "Se obtiene el resultado de una suma por su identificador."
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperacionDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json"),
            description = "No se ha encontrado la suma con el identificador indicado."
    )
    @GetMapping("/sumas/{id}")
    public ResponseEntity<OperacionDTO> getSuma(@PathVariable Long id) {
        log.info("Request to get suma by id: {}", id);
        OperacionDTO result = operacionService.getOperacion(id, Constantes.SUMAR);
        return ResponseEntity.ok().body(result);
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
                            schema = @Schema(implementation = NumberPayload.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de resta",
                                    summary = "Resta de dos números",
                                    description = "Solicitud para restar 4 - 2",
                                    value = """
                                            {
                                                "numeros": [4, 2]
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
                    schema = @Schema(implementation = OperacionDTO.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la resta",
                            description = "Resultado de restar 4 - 2",
                            value = """
                                    {
                                        "id": 1,
                                        "operacion": "RESTAR",
                                        "numeros": {
                                            "id": 1,
                                            "valor": 4
                                        },
                                        {
                                            "id": 2,
                                            "valor": 2
                                        },
                                        "result": 2
                                    }
                                    """
                    )
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json"),
            description = "Error en los datos proporcionados para la operacion: Resta."
    )
    @PostMapping("/restas")
    public ResponseEntity<OperacionDTO> restar(@RequestBody NumberPayload numeros) {
        log.info("Request to restar : {}", numeros);
        if (ObjectUtils.isEmpty(numeros) || ObjectUtils.isEmpty(numeros.getNumeros()) || numeros.getNumeros().size() < 2) {
            return ResponseEntity.badRequest().build();
        }
        OperacionDTO result = operacionService.sumarRestar(numeros.getNumeros(), Constantes.RESTAR);
        return ResponseEntity.ok().body(result);
    }

    @Operation(
            operationId = "Obtener una resta ",
            description = "Operación de lectura",
            summary = "Se obtiene el resultado de una resta por su identificador."
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperacionDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json"),
            description = "No se ha encontrado la resta con el identificador indicado."
    )
    @GetMapping("/restas/{id}")
    public ResponseEntity<OperacionDTO> getResta(@PathVariable Long id) {
        log.info("Request to get resta by id: {}", id);
        OperacionDTO result = operacionService.getOperacion(id, Constantes.RESTAR);
        return ResponseEntity.ok().body(result);
    }

    @Operation(
            operationId = "Obtener una multiplicación ",
            description = "Operación de lectura",
            summary = "Se obtiene el resultado de una multiplicación por su identificador."
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperacionDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json"),
            description = "No se ha encontrado la multiplicación con el identificador indicado."
    )
    @GetMapping("/multiplicaciones/{id}")
    public ResponseEntity<OperacionDTO> getMultiplicacion(@PathVariable Long id) {
        log.info("Request to get multiplicacion : {}", id);
        OperacionDTO result = operacionService.getOperacion(id, Constantes.MULTIPLICAR);
        return ResponseEntity.ok().body(result);
    }

    @Operation(
            operationId = "Multiplicar números",
            description = "Operación de escritura",
            summary = "Se multiplican los números proporcionados.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a multiplicar.",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = NumberPayload.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de multiplicacion",
                                    summary = "Multiplicacion de dos números",
                                    description = "Solicitud para multiplicar 4 * 2",
                                    value = """
                                            {
                                                "entrada1": 4,
                                                "entrada2": 2
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
                    schema = @Schema(implementation = MultiploDTO.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la multiplicacion",
                            description = "Resultado de multiplicar 4 * 2",
                            value = """
                                    {
                                        "id": 1,
                                        "operacion": "MULTIPLICAR",
                                        "numeros": {
                                            "id": 1,
                                            "valor": 4
                                        },
                                        {
                                            "id": 2,
                                            "valor": 2
                                        },
                                        "entrada1": 4,
                                        "entrada2": 2,
                                        "result": 8
                                    }
                                    """
                    )
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json"),
            description = "Error en los datos proporcionados para la operacion: Multiplicar."
    )
    @PostMapping("/multiplicaciones")
    public ResponseEntity<OperacionDTO> multiplicar(@RequestBody MultiploPayload numeros) {
        log.info("Request to multiplicar : {}", numeros);
        if (ObjectUtils.isEmpty(numeros) || ObjectUtils.isEmpty(numeros.getEntrada1()) || ObjectUtils.isEmpty(numeros.getEntrada2())) {
            return ResponseEntity.badRequest().build();
        }
        OperacionDTO result = operacionService.multiplos(numeros.getEntrada1(), numeros.getEntrada2(), Constantes.MULTIPLICAR);
        return ResponseEntity.ok().body(result);
    }

    @Operation(
            operationId = "Dividir números",
            description = "Operación de escritura",
            summary = "Se dividen los números proporcionados.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de los números a dividir.",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = NumberPayload.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de division",
                                    summary = "Division de dos números",
                                    description = "Solicitud para dividir 4 / 2",
                                    value = """
                                            {
                                                "entrada1": 4,
                                                "entrada2": 2
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
                    schema = @Schema(implementation = MultiploDTO.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la division",
                            description = "Resultado de dividir 4 / 2",
                            value = """
                                    {
                                        "id": 1,
                                        "operacion": "DIVIDIR",
                                        "numeros": {
                                            "id": 1,
                                            "valor": 4
                                        },
                                        {
                                            "id": 2,
                                            "valor": 2
                                        },
                                        "entrada1": 4,
                                        "entrada2": 2,
                                        "result": 2
                                    }
                                    """
                    )
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json"),
            description = "Error en los datos proporcionados para la operacion: Dividir."
    )
    @PostMapping("/divisiones")
    public ResponseEntity<OperacionDTO> dividir(@RequestBody MultiploPayload numeros) {
        log.info("Request to dividir : {}", numeros);
        if (ObjectUtils.isEmpty(numeros) || ObjectUtils.isEmpty(numeros.getEntrada1()) || ObjectUtils.isEmpty(numeros.getEntrada2())) {
            return ResponseEntity.badRequest().build();
        }
        OperacionDTO result = operacionService.multiplos(numeros.getEntrada1(), numeros.getEntrada2(), Constantes.DIVIDIR);
        return ResponseEntity.ok().body(result);
    }

    @Operation(
            operationId = "Obtener una división ",
            description = "Operación de lectura",
            summary = "Se obtiene el resultado de una división por su identificador."
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperacionDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json"),
            description = "No se ha encontrado la división con el identificador indicado."
    )
    @GetMapping("/divisiones/{id}")
    public ResponseEntity<OperacionDTO> getDivision(@PathVariable Long id) {
        log.info("Request to get división : {}", id);
        OperacionDTO result = operacionService.getOperacion(id, Constantes.DIVIDIR);
        return ResponseEntity.ok().body(result);
    }

    @Operation(
            operationId = "Potencia de un número",
            description = "Operación de escritura",
            summary = "Potencia de un número proporcionado.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos de la potencia de un número.",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = NumberPayload.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de potencia",
                                    summary = "Potencia de un número elevando a otro",
                                    description = "Solicitud para potencia de 4^2",
                                    value = """
                                            {
                                                "entrada1": 4,
                                                "entrada2": 2
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
                    schema = @Schema(implementation = MultiploDTO.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la potencia",
                            description = "Resultado de potencia de 4 a 2",
                            value = """
                                    {
                                        "id": 1,
                                        "operacion": "POTENCIA",
                                        "numeros": {
                                            "id": 1,
                                            "valor": 4
                                        },
                                        {
                                            "id": 2,
                                            "valor": 2
                                        },
                                        "entrada1": 4,
                                        "entrada2": 2,
                                        "result": 16
                                    }
                                    """
                    )
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json"),
            description = "Error en los datos proporcionados para la operacion: Pontencia."
    )
    @PostMapping("/potencias")
    public ResponseEntity<OperacionDTO> potencia(@RequestBody MultiploPayload numeros) {
        log.info("Request to potencia : {}", numeros);
        if (ObjectUtils.isEmpty(numeros) || ObjectUtils.isEmpty(numeros.getEntrada1()) || ObjectUtils.isEmpty(numeros.getEntrada2())) {
            return ResponseEntity.badRequest().build();
        }
        OperacionDTO result = operacionService.multiplos(numeros.getEntrada1(), numeros.getEntrada2(), Constantes.POTENCIA);
        return ResponseEntity.ok().body(result);
    }

    @Operation(
            operationId = "Obtener una potencia ",
            description = "Operación de lectura",
            summary = "Se obtiene el resultado de una potencia por su identificador."
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperacionDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json"),
            description = "No se ha encontrado la potencia con el identificador indicado."
    )
    @GetMapping("/potencias/{id}")
    public ResponseEntity<OperacionDTO> getPotencia(@PathVariable Long id) {
        log.info("Request to get potencia : {}", id);
        OperacionDTO result = operacionService.getOperacion(id, Constantes.POTENCIA);
        return ResponseEntity.ok().body(result);
    }

    @Operation(
            operationId = "Raiz de un número",
            description = "Operación de escritura",
            summary = "Se obtiene la raiz (cuadrada o cubica) de un número proporcionado.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos del número",
                    required = true,
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = NumberPayload.class),
                            examples = @ExampleObject(
                                    name = "Ejemplo de raiz cuadrada",
                                    summary = "Raiz de un número",
                                    description = "Solicitud para hallar la raiz cuadrada  de 4 ",
                                    value = """
                                            {
                                                "entrada1": 4,
                                                "entrada2": 2
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
                    schema = @Schema(implementation = MultiploDTO.class),
                    examples = @ExampleObject(
                            name = "Respuesta exitosa",
                            summary = "Resultado de la raiz",
                            description = "Resultado de la raiz cuadrada de 4 ",
                            value = """
                                    {
                                        "id": 1,
                                        "operacion": "RAIZ",
                                        "numeros": {
                                            "id": 1,
                                            "valor": 4
                                        },
                                        {
                                            "id": 2,
                                            "valor": 2
                                        },
                                        "entrada1": 4,
                                        "entrada2": 2,
                                        "result": 2
                                    }
                                    """
                    )
            )
    )
    @ApiResponse(
            responseCode = "400",
            content = @Content(mediaType = "application/json"),
            description = "Error en los datos proporcionados para la operacion: Raiz."
    )
    @PostMapping("/raices")
    public ResponseEntity<OperacionDTO> raiz(@RequestBody MultiploPayload numeros) {
        log.info("Request to raiz : {}", numeros);
        if (ObjectUtils.isEmpty(numeros) || ObjectUtils.isEmpty(numeros.getEntrada1()) || ObjectUtils.isEmpty(numeros.getEntrada2())) {
            return ResponseEntity.badRequest().build();
        }
        if (numeros.getEntrada2() != 2L && numeros.getEntrada2() != 3L) {
            return ResponseEntity.badRequest().build();
        }
        OperacionDTO result = operacionService.multiplos(numeros.getEntrada1(), numeros.getEntrada2(), Constantes.RAIZ);
        return ResponseEntity.ok().body(result);
    }

    @Operation(
            operationId = "Obtener una raiz ",
            description = "Operación de lectura",
            summary = "Se obtiene el resultado de una raiz por su identificador."
    )
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = OperacionDTO.class))
    )
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json"),
            description = "No se ha encontrado la raiz con el identificador indicado."
    )
    @GetMapping("/raices/{id}")
    public ResponseEntity<OperacionDTO> getRaiz(@PathVariable Long id) {
        log.info("Request to get raiz : {}", id);
        OperacionDTO result = operacionService.getOperacion(id, Constantes.POTENCIA);
        return ResponseEntity.ok().body(result);
    }
   
}
