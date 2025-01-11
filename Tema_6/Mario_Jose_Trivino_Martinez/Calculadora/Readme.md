# API de una calculadora online

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

*Recursos:*
- Sumas
- Restas
- Multiplicaciones
- Divisiones
- Raices
- Potencias

| Método HTTP | URI                      | Cuerpo de la Petición     | Cuerpo de la Respuesta                                         | Códigos de Respuesta                                       |
|-------------|--------------------------|---------------------------|----------------------------------------------------------------|------------------------------------------------------------|
| POST        | /sumas                   | `{"numbers":[2,2,2]}`     | `{"id":1, "numbers":[2,2,2], "type":"add", "result":6}`        | 201, 400                                                   |
| GET         | /sumas/{id}              | N/A                       | `{"id":1, "numbers":[2,2,2], "type":"add", "result":6}`        | 200, 404                                                   |
| POST        | /restas                  | `{"numbers":[2,2,2]}`     | `{"id":1, "numbers":[2,2,2], "type":"sub", "result":-2}`       | 201, 400                                                   |
| GET         | /restas/{id}             | N/A                       | `{"id":1, "numbers":[2,2,2], "type":"sub", "result":-2}`       | 200, 404                                                   |
| POST        | /multiplicaciones        | `{"numbers":[2,2,2]}`     | `{"id":1, "numbers":[2,2,2], "type":"mult", "result":8}`       | 201, 400                                                   |
| GET         | /multiplicaciones/{id}   | N/A                       | `{"id":1, "numbers":[2,2,2], "type":"mult", "result":8}`       | 200, 404                                                   |
| POST        | /divisiones              | `{"numbers":[2,2]}`       | `{"id":1, "numbers":[2,2], "type":"div", "result":1.0}`        | 201, 400 (puede ser 500 si no se controla dividir entre 0) |
| GET         | /divisiones/{id}         | N/A                       | `{"id":1, "numbers":[2,2], "type":"div", "result":1.0}`        | 200, 404                                                   |
| POST        | /raices                  | `{"number":25, "root":2}` | `{"id":1, "number":25, "root":2, "type":"root", "result":5.0}` | 201, 400                                                   |
| GET         | /raices/{id}             | N/A                       | `{"id":1, "number":25, "root":2, "type":"root", "result":5.0}` | 200, 404                                                   |
| POST        | /potencias               | `{"number":5, "exp":2}`   | `{"id":1, "number":5, "exp":2, "type":"exp", "result":25}`     | 201, 400                                                   |
| GET         | /potencias/{id}          | N/A                       | `{"id":1, "number":5, "exp":2, "type":"exp", "result":25}`     | 200, 404                                                   |