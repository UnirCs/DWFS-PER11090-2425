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

## Solución
- Esta API permite realizar diversas operaciones matemáticas, con la capacidad de almacenar las operaciones realizadas y consultarlas posteriormente mediante un identificador único.

| ID | OPERACION                  |                                                              
|-------------|----------------------|
| 1        | Sumar         |
| 2        | Restar        |
| 3        | Multiplicar    |
| 4        | Dividir         |
| 5        | Raiz           |
| 6        | Potencia        |

---

| Método HTTP | URI                  | Query Params | Request Body                                           | Response Body                                                              | Códigos HTTP de respuesta |
|-------------|----------------------|--------------|------------------------------------------------------|----------------------------------------------------------------------------|---------------------------|
| POST        | /api/sumar           | -            | `{ "numeros": [4, 2, 2, 2] }`                          | `{ "resultado": 10, "id": "1" }`                         | 200, 400                  |
| POST        | /api/restar          | -            | `{ "numeros": [0, 2, 2, 2] }`                         | `{ "resultado": -2, "id": "2" }`                         | 200, 400                  |
| POST        | /api/multiplicar     | -            | `{ "numero1": 2, "numero2": 2 }`                  | `{ "resultado": 4, "id": "3" }`                        | 200, 400                  |
| POST        | /api/dividir         | -            | `{ "numero1": 2, "numero2": 2 }`                 | `{ "resultado": 1, "id": "4" }`                         | 200, 400                  |
| POST        | /api/raiz           | -            | `{ "numero": 8, "indice": 3 }`                    | `{ "resultado": 2, "id": "5" }`                         | 200, 400                  |
| POST        | /api/potencia        | -            | `{ "base": 2, "exponente": 3 }`                   | `{ "resultado": 8, "id": "6" }`                        | 200, 400                  |
| GET         | /api/operaciones/{id}| 1            | -                                                    | `{ "resultado": 10, "id": "1" }` | 200, 404                  |
| GET         | /api/operaciones/{id}| 2            | -                                                    | `{ "resultado": -2, "id": "2" }` | 200, 404                  |
| GET         | /api/operaciones/{id}| 3            | -                                                    | `{ "resultado": 4, "id": "3" }` | 200, 404                  |
| GET         | /api/operaciones/{id}| 4           | -                                                    | `{ "resultado": 1, "id": "4" }` | 200, 404                  |
| GET         | /api/operaciones/{id}| 5           | -                                                    | `{ "resultado": 2, "id": "5" }` | 200, 404                  |
| GET         | /api/operaciones/{id}| 6           | -                                                    | `{ "resultado": 8, "id": "6" }`   | 200, 404                  |
---

## Consideraciones
- Las operaciones realizadas se identifican con un ID único para su consulta posterior.