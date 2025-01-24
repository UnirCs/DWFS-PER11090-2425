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

En este README se describe la API REST para una calculadora que soporta varias operaciones aritméticas y permite consultar el historial de operaciones realizadas.

## Recursos Identificados:
- **Operación (operaciones):** Representa una operación aritmética realizada por la calculadora.
- **Valores (valores):** Números utilizados en las operaciones.

## Rutas:

| Método HTTP | URI                          | Query Params | Cuerpo de la Petición                                                 | Cuerpo de la Respuesta                                                                                           | Códigos de Respuesta                                          |
|-------------|------------------------------|--------------|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| POST        | /operaciones/sumas             | N/A          | `{"valores": [2, 2, 2]}`                                                | `{"operacionId": 1, "valores": [2, 2, 2], "sumas": 6}`                                       | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /operaciones/restas        | N/A          | `{"valores": [10, 3, 2]}`                                               | `{"operacionId": 2, "valores": [10, 3, 2], "restas": 5}`                                 | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /operaciones/multiplicaciones        | N/A          | `{"valores": [4, 5]}`                                                   | `{"operacionId": 3, "valores": [4, 5], "multipliaciones": 20}`                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /operaciones/divisiones          | N/A          | `{"valores": [10, 2]}`                                                  | `{"operacionId": 4, "valores": [10, 2], "divisiones": 5}`                                      | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /operaciones/raices            | N/A          | `{"value": 16, "degree": 2}`                                           | `{"operacionId": 5, "value": 16, "degree": 2, "raices": 4}`                                 | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /operaciones/potencias           | N/A          | `{"base": 3, "exponent": 4}`                                           | `{"operacionId": 6, "base": 3, "exponent": 4, "potencias": 81}`                               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /operaciones/{operacionId}   | N/A          | N/A                                                                    | `{"operacionId": 1, "valores": [2, 2, 2], "operaciones": 6}`                                       | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| GET         | /operaciones                 | type         | N/A                                                                    | `{"operaciones": [{"operacionId": 1, "valores": [2, 2, 2], "sumas": 6}]}`                     | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error      |ñ
