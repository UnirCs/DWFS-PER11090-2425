# API para una calculadora online

Las operaciones que la API debe soportar son las siguientes:
- **Sumar N elementos.**
- **Restar N elementos.**
- **Multiplicar 2 elementos.**
- **Dividir 2 elementos.**
- **Raíz N-ésima de un número.**
- **Potencia N-ésima de un número.**
- **Consultar el detalle de una operación realizada.**

**Recursos identificados:**
- Operación (operations): Representa una operación matemática realizada por el usuario.

| Método HTTP | Endpoint                     | Query Params              | Cuerpo JSON de la petición                       | Respuesta JSON de la petición                                                                                                      | Códigos HTTP de respuesta posibles                     |
|-------------|------------------------------|---------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| POST        | /operations/sum             |                           | `{ "numbers": [2, 3, 5] }`                     | `{ "operationId": 1, "result": 10 }`                                                                                          | 201 Created, 400 Bad Request                           |
| POST        | /operations/subtract        |                           | `{ "numbers": [10, 3, 2] }`                   | `{ "operationId": 2, "result": 5 }`                                                                                           | 201 Created, 400 Bad Request                           |
| POST        | /operations/multiply        |                           | `{ "numbers": [4, 5] }`                       | `{ "operationId": 3, "result": 20 }`                                                                                          | 201 Created, 400 Bad Request                           |
| POST        | /operations/divide          |                           | `{ "numbers": [10, 2] }`                      | `{ "operationId": 4, "result": 5 }`                                                                                           | 201 Created, 400 Bad Request, 422 Unprocessable Entity |
| POST        | /operations/root            |                           | `{ "number": 27, "degree": 3 }`             | `{ "operationId": 5, "result": 3 }`                                                                                           | 201 Created, 400 Bad Request                           |
| POST        | /operations/power           |                           | `{ "number": 2, "exponent": 3 }`            | `{ "operationId": 6, "result": 8 }`                                                                                           | 201 Created, 400 Bad Request                           |
| GET         | /operations/{operationId}   |                           | N/A                                             | `{ "operationId": 1, "type": "sum", "inputs": [2, 3, 5], "result": 10, "timestamp": "2024-12-22T10:00:00Z" }`         | 200 OK, 404 Not Found                                  |

**Notas adicionales:**
- Todos los números deben ser enviados como valores numéricos (integer o float).
- Los resultados de las operaciones deben incluir un identificador único (`operationId`) que permita consultar detalles posteriormente.
- La API debe validar la entrada y devolver errores claros en caso de que los parámetros sean incorrectos (por ejemplo una división por cero).
