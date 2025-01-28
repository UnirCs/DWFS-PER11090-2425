# API de Calculadora 

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

**Recursos identificados:**
- Operaciones (operations): Representa una operación de la calculadora.
- Resultados (results): Representa un resultado de una operación realizada.

| Método Http | Endpoint                    | Query Params                                        | Cuerpo JSON de la petición                              | Respuesta JSON de la petición                                                                                                                                 | Códigos HTTP de respuesta posibles                     |
|-------------|-----------------------------|-----------------------------------------------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| POST        | /operations                      |                                                    | `{ "name": "string", "maxElements": "integer" }` | `{ "id": "integer", "name": "string", "maxElements": "integer" }`                                                                                                        | 201 Created, 400 Bad Request, 500 Internal Server Error                           |
| GET         | /operations/{operationId}                 |                                                     |                                                         | `{ "id": "integer", "name": "string", "maxElements": "integer" }`                                                                                                        | 200 OK, 404 Not Found, 500 Internal Server Error                                  |
| POST        | /operations/{operationId}/results                      | maxElements                                                   | `{ "number1": "integer", "number2": "integer", ......... "numberN": "integer" }` | `{ "id": "integer", "operation_id": "integer", "process": "string", "result": "integer" }`                                                                                                        | 201 Created, 400 Bad Request, 500 Internal Server Error                           
| 
| GET         | /operations/{operationId}/results      |                                                     |                                                         | `[ { "id": "integer", "operation_id": "integer", "process": "string", "result": "integer" } ]`                                 | 200 OK, 404 Not Found, 500 Internal Server Error       
