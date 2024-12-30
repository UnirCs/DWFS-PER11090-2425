# API de una Calculadora online

En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:
- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

# API de una Calculadora Online

En este documento se describe la API REST para una calculadora que soporta varias operaciones aritméticas y permite consultar el historial de operaciones realizadas.

## Recursos Identificados:
- **Operación (operation):** Representa una operación aritmética realizada por la calculadora.
- **Valores (valores):** Números utilizados en las operaciones.

## Rutas:

| Método HTTP | URI                          | Query Params | Cuerpo de la Petición                                                 | Cuerpo de la Respuesta                                                                                           | Códigos de Respuesta                                          |
|-------------|------------------------------|--------------|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| POST        | /operacion/suma             | N/A          | `{"valores": [2, 2, 2]}`                                                | `{"operacionId": 1, "operation": "suma", "valores": [2, 2, 2], "result": 6}`                                       | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /operacion/subtract        | N/A          | `{"valores": [10, 3, 2]}`                                               | `{"operacionId": 2, "operation": "subtract", "valores": [10, 3, 2], "result": 5}`                                 | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /operacion/multiply        | N/A          | `{"valores": [4, 5]}`                                                   | `{"operacionId": 3, "operation": "multiply", "valores": [4, 5], "result": 20}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /operacion/divide          | N/A          | `{"valores": [10, 2]}`                                                  | `{"operacionId": 4, "operation": "divide", "valores": [10, 2], "result": 5}`                                      | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /operacion/root            | N/A          | `{"value": 16, "degree": 2}`                                           | `{"operacionId": 5, "operation": "root", "value": 16, "degree": 2, "result": 4}`                                 | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /operacion/power           | N/A          | `{"base": 3, "exponent": 4}`                                           | `{"operacionId": 6, "operation": "power", "base": 3, "exponent": 4, "result": 81}`                               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /operacion/{operacionId}   | N/A          | N/A                                                                    | `{"operacionId": 1, "operation": "suma", "valores": [2, 2, 2], "result": 6}`                                       | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| GET         | /operacion                 | type         | N/A                                                                    | `{"operations": [{"operacionId": 1, "operation": "sum", "valores": [2, 2, 2], "result": 6}]}`                     | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error      |ñ
