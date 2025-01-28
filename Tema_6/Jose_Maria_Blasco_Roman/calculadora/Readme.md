# API de una calculadora online

API de una calculadora online
En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:

Sumar N elementos (2+2, 2+2+2).
Restar N elementos (2-2, 2-2-2).
Multiplicar 2 elementos (2x2).
Dividir 2 elementos (2/2).
Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
Potencia N-ésima de un número (2^2, 3^3, 4^4).
Detalle de operacion
Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

Recursos identificados:
Operaciones (operations): Representa las operaciones realizadas, almacenadas en la memoria de la calculadora.
Sumas (adds): Recurso para operaciones de suma
Restas (subtractions): Recurso para operaciones de resta
Multiplicaciones (multiplications): Recurso para operaciones de multiplicación
Divisiones (divisions): Recurso para operaciones de división
Raíces (roots): Recurso para cálculo de raíces
Potencias (powers): Recurso para cálculo de potencias


| Método HTTP | URI               | Query Params | Cuerpo de la Petición      | Cuerpo de la Respuesta                                                              | Códigos de Respuesta                                     |
|-------------|-------------------|--------------|----------------------------|-------------------------------------------------------------------------------------|----------------------------------------------------------|
| POST        | /adds             | N/A          | `{ "values": [2, 2, 2] }`  | `{"id": "integer", "values": [2, 2, 2], "result":6}`                                | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /adds{id}         | N/A          |                            | `{"id": "integer", "values": [2, 2, 2], "result":6}`                                | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /subtractions     | N/A          | `{ "values": [10, 2, 3] }` | `{"id": "integer", "values": [10, 2, 3], "result":5}`                               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /subtractions{id} | N/A          |                            | `{"id": "integer", "values": [10, 2, 3], "result":5}`                               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /multiply         | N/A          | `{ "values": [2, 2] }`     | `{"id": "integer", "values": [2, 2], "result":4}`                                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /multiply{id}     | N/A          |                            | `{"id": "integer", "values": [2, 2], "result":4}`                                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /divisions        | N/A          | `{ "values": [2, 2] }`     | `{"id": "integer", "values": [2, 2], "result":1}`                                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /divisions{id}    | N/A          |                            | `{"id": "integer", "values": [2, 2], "result":1}`                                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /roots            | N/A          | `{ "value": 4, "n":2 }`    | `{"id": "integer", "value":4, "n":2, "result":2}`                                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /roots{id}        | N/A          |                            | `{"id": "integer", "value":4, "n":2, "result":2}`                                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /powers           | N/A          | `{ "value": 2, "n":3 }`    | `{"id": "integer", "value":2, "n":3, "result":8}`                                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /powers{id}       | N/A          |                            | `{"id": "integer", "value":2, "n":3, "result":8}`                                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |

