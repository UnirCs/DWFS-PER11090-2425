# API de Calculadora

En esta API se gestionan operaciones de cálculo y un historial (memoria) de dichas operaciones.

## Recursos Identificados

- **/calculate**: Recurso principal para ejecutar operaciones matemáticas.
- **/calculate/operations**: Recurso para consultar o administrar el historial de operaciones (memoria).
- **/calculate/operations/{id}**: Recurso para acceder al detalle de una operación concreta.

La API debe soportar:
1. Sumar N elementos.
2. Restar N elementos.
3. Multiplicar 2 elementos.
4. Dividir 2 elementos.
5. Raíz N-ésima de un número.
6. Potencia N-ésima de un número.
7. Detalle de operación (consultar por `id`).
8. Listado general de operaciones en la memoria.

### Tabla de Endpoints

| Método Http | Endpoint                           | Query Params | Cuerpo JSON de la petición                                | Respuesta JSON de la petición                                                                    | Códigos HTTP de respuesta posibles                 |
|-------------|-------------------------------------|-------------|------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------|
| **POST**    | `/api/v1/calculate/sum`            | -           | `{ "numbers": [2, 2, 3] }`                                | `{ "operationId": "string", "operation": "sum", "numbers": [2, 2, 3], "result": 7 }`              | 200 OK, 400 Bad Request, 500 Internal Server Error |
| **POST**    | `/api/v1/calculate/sub`            | -           | `{ "numbers": [10, 5, 2] }`                               | `{ "operationId": "string", "operation": "sub", "numbers": [10, 5, 2], "result": 3 }`             | 200 OK, 400 Bad Request, 500 Internal Server Error |
| **POST**    | `/api/v1/calculate/multiply`       | -           | `{ "num1": 5, "num2": 3 }`                                | `{ "operationId": "string", "operation": "multiply", "num1": 5, "num2": 3, "result": 15 }`        | 200 OK, 400 Bad Request, 500 Internal Server Error |
| **POST**    | `/api/v1/calculate/divide`         | -           | `{ "num1": 10, "num2": 2 }`                               | `{ "operationId": "string", "operation": "divide", "num1": 10, "num2": 2, "result": 5 }`          | 200 OK, 400 Bad Request, 500 Internal Server Error |
| **POST**    | `/api/v1/calculate/nthroot`        | -           | `{ "number": 8, "n": 3 }`                                 | `{ "operationId": "string", "operation": "nthroot", "number": 8, "n": 3, "result": 2 }`           | 200 OK, 400 Bad Request, 500 Internal Server Error |
| **POST**    | `/api/v1/calculate/power`          | -           | `{ "base": 2, "exponent": 3 }`                            | `{ "operationId": "string", "operation": "power", "base": 2, "exponent": 3, "result": 8 }`        | 200 OK, 400 Bad Request, 500 Internal Server Error |
| **GET**     | `/api/v1/calculate/operations`     | `?limit=10` (opcional) | -                                                      | `{ "operations": [ { "operationId": "string", "operation": "sum", "numbers": [...], "result": x }, ... ] }` | 200 OK, 400 Bad Request, 500 Internal Server Error |
| **GET**     | `/api/v1/calculate/operations/{id}`| -           | -                                                          | `{ "operationId": "string", "operation": "sum", "numbers": [...], "result": x }`                  | 200 OK, 404 Not Found, 500 Internal Server Error   |
| **DELETE**  | `/api/v1/calculate/operations/{id}`| -           | -                                                          | `{ "message": "Operation deleted successfully" }`                                                | 200 OK, 404 Not Found, 500 Internal Server Error   |

---
