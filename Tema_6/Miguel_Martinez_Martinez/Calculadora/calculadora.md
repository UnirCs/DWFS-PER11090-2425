## Enunciado

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

|Método HTTP                   |URI                      |Cuerpo de la petición                            |Cuerpo de la respuesta                                              |Códigos de respuesta                                   |
|------------------------------|-------------------------|-------------------------------------------------|---------------------------------------|-------------------------------------------------------|
|POST                          |/suma                    |{"numbers": [2,2,2]}                             |{"id":1, "numbers":[2,2,2], "operation": suma, "result":6}         |201 Created, 400 Bad Request, 500 Internal Server Error|
|GET                           |/suma/{id}               |                                                 |{"id":1, "numbers":[2,2,2], "operation": suma, "result":6}         |200 OK, 400 Bad Request, 500 Internal Server Error     |
|POST                          |/resta                    |{"numbers": [2,2]}                              |{"id":2, "numbers":[2,2], "operation": resta, "result":0}                     |201 Created, 400 Bad Request, 500 Internal Server Error|
|GET                           |/resta/{id}               |                                                |{"id":2, "numbers":[2,2], "operation": resta, "result":0}                     |200 OK, 400 Bad Request, 500 Internal Server Error     |
|POST                          |/multiplicacion           |{"numbers": [2,2]}                              |{"id":3, "numbers":[2,2], "operation": multiplicacion, "result":4}            |201 Created, 400 Bad Request, 500 Internal Server Error|
|GET                           |/multiplicacion/{id}      |                                                |{"id":3, "numbers":[2,2], "operation": multiplicacion, "result":4}            |201 Created, 400 Bad Request, 500 Internal Server Error|
|POST                          |/division               |{"numbers": [2,2]}                                |{"id":4, "numbers":[2,2], "operation": division, "result":0}                  |201 Created, 400 Bad Request, 500 Internal Server Error|
|GET                           |/division/{id}          |                                                  |{"id":4, "numbers":[2,2], "operation":division , "result":0}     |200 OK, 400 Bad Request, 500 Internal Server Error     |
|POST                          |/raiz                  |{"number":4, "index":2}                            |{"id":5, "numbers":4, "index":2 "operation": raiz, "result":2}         |201 Created, 400 Bad Request, 500 Internal Server Error|
|GET                           |/raiz/{id}             |                                                   |{"id":5, "numbers":4, "index":2 "operation": raiz, "result":2}         |200 OK, 400 Bad Request, 500 Internal Server Error     |
|POST                          |/potencia              |{"number":2, "index":2}                            |{"id":6, "numbers":2, "index":2 "operation": potencia, "result":4}     |201 Created, 400 Bad Request, 500 Internal Server Error|
|GET                           |/potencia/{id}         |                                                   |{"id":6, "numbers":2, "index":2 "operation": potencia, "result":4}     |200 OK, 400 Bad Request, 500 Internal Server Error     |