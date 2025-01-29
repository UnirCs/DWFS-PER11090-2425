# API REST Calculadora Online

Esta documentación describe los detalles del diseño de la API REST para una calculadora online que soporta varias operaciones matemáticas y consulta de historial.

## Tabla de Endpoints

| Método HTTP | URI                          | Query Params | Request Body                                                                                 | Response Body                                                                                                         | Códigos HTTP de Respuesta |
|-------------|------------------------------|--------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|----------------------------|
| POST        | /calculate/sum              | -            | `{ "numbers": [2, 3, 5] }`                                                                | `{ "result": 10, "operationId": "op123" }`                                                                       | 200, 400                   |
| POST        | /calculate/subtract         | -            | `{ "numbers": [10, 3, 2] }`                                                               | `{ "result": 5, "operationId": "op124" }`                                                                        | 200, 400                   |
| POST        | /calculate/multiply         | -            | `{ "a": 2, "b": 3 }`                                                                    | `{ "result": 6, "operationId": "op125" }`                                                                        | 200, 400                   |
| POST        | /calculate/divide           | -            | `{ "a": 6, "b": 3 }`                                                                    | `{ "result": 2, "operationId": "op126" }`                                                                        | 200, 400                   |
| POST        | /calculate/root             | -            | `{ "number": 16, "n": 2 }`                                                              | `{ "result": 4, "operationId": "op127" }`                                                                        | 200, 400                   |
| POST        | /calculate/power            | -            | `{ "base": 2, "exponent": 3 }`                                                         | `{ "result": 8, "operationId": "op128" }`                                                                        | 200, 400                   |
| GET         | /operations/{operationId}   | -            | -                                                                                           | `{ "operation": { "type": "sum", "input": [2, 3, 5], "result": 10 } }`                                        | 200, 404                   |

## Descripción de los recursos

### `/calculate/sum`
- **Descripción:** Realiza la suma de N números proporcionados en el cuerpo de la solicitud.
- **Método HTTP:** POST
- **Request Body:** Lista de números a sumar.
- **Response Body:** Resultado de la suma y un identificador único de la operación.
- **Códigos de Respuesta:**
  - 200: Operación exitosa.
  - 400: Error en la solicitud.

### `/calculate/subtract`
- **Descripción:** Realiza la resta de N números proporcionados en el cuerpo de la solicitud.
- **Método HTTP:** POST
- **Request Body:** Lista de números a restar.
- **Response Body:** Resultado de la resta y un identificador único de la operación.
- **Códigos de Respuesta:**
  - 200: Operación exitosa.
  - 400: Error en la solicitud.

### `/calculate/multiply`
- **Descripción:** Realiza la multiplicación de dos números proporcionados.
- **Método HTTP:** POST
- **Request Body:** Valores `a` y `b` para multiplicar.
- **Response Body:** Resultado de la multiplicación y un identificador único de la operación.
- **Códigos de Respuesta:**
  - 200: Operación exitosa.
  - 400: Error en la solicitud.

### `/calculate/divide`
- **Descripción:** Realiza la división de dos números proporcionados.
- **Método HTTP:** POST
- **Request Body:** Valores `a` y `b` para dividir.
- **Response Body:** Resultado de la división y un identificador único de la operación.
- **Códigos de Respuesta:**
  - 200: Operación exitosa.
  - 400: Error en la solicitud.

### `/calculate/root`
- **Descripción:** Calcula la raíz N-ésima de un número proporcionado.
- **Método HTTP:** POST
- **Request Body:** Número base y el índice de la raíz.
- **Response Body:** Resultado de la raíz y un identificador único de la operación.
- **Códigos de Respuesta:**
  - 200: Operación exitosa.
  - 400: Error en la solicitud.

### `/calculate/power`
- **Descripción:** Calcula la potencia N-ésima de un número proporcionado.
- **Método HTTP:** POST
- **Request Body:** Base y exponente.
- **Response Body:** Resultado de la potencia y un identificador único de la operación.
- **Códigos de Respuesta:**
  - 200: Operación exitosa.
  - 400: Error en la solicitud.

### `/operations/{operationId}`
- **Descripción:** Obtiene el detalle de una operación previamente realizada usando su identificador único.
- **Método HTTP:** GET
- **Path Params:** Identificador único de la operación (`operationId`).
- **Response Body:** Detalle de la operación realizada, incluyendo tipo, entrada y resultado.
- **Códigos de Respuesta:**
  - 200: Operación exitosa.
  - 404: Operación no encontrada.
