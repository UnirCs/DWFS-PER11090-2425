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


# Resolución del ejercicio

| Método Http | Endpoint              | Cuerpo JSON de la petición    | Respuesta JSON de la petición                                     | Códigos HTTP de respuesta posibles |
|-------------|-----------------------|-------------------------------|-------------------------------------------------------------------|------------------------------------|
| POST        | /api/v1/sumar         | `{"numeros": [2, 2, 2]}`      | `{"id": "integer", "numeros": [2, 2, 2], "resultado": 6}`         | 200, 400                           |
| POST        | /api/v1/restar        | `{"numeros": [2, 2, 2]}`      | `{"id": "integer", "numeros": [2, 2, 2], "resultado": 5}`         | 200, 400                           |
| POST        | /api/v1/multiplicar   | `{"numeros": [3, 4]}`         | `{"id": "integer", "numeros": [3, 4], "resultado": 12}`           | 200, 400                           |
| POST        | /api/v1/dividir       | `{"numeros": [8, 2]}`         | `{"id": "integer", "numeros": [8, 2], "resultado": 4}`            | 200, 400, 402                      |
| POST        | /api/v1/raiz          | `{"numeros": 25, "indice": 2}`| `{"id": "integer", "numeros": 25, "n": 2, "resultado": 5}`        | 200, 400, 402                      |
| POST        | /api/v1/potencia      | `{"base": 2, "exponente": 3}` | `{"id": "integer", "base": 2, "exponente": 3, "resultado": 8}`    | 200, 400                           |
| GET         | /api/v1/operacion/{id}|                               | `{"id": "integer", "operacion": "sumar", "resultado": 6}`         | 200, 400                           |


200: OK
400: KO
402: IMPROCESABLE