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

| ID  | OPERACION   |
| --- | ----------- |
| 1   | Sumar       |
| 2   | Restar      |
| 3   | Multiplicar |
| 4   | Dividir     |
| 5   | Raiz        |
| 6   | Potencia    |

Se considera el Recurso API llamado operaciones con sus 6 subrecursos: sumas, restas, multiplicaciones, divisiones, raises, potencias

---

| Método HTTP | URI                                    | Query Params | Request Body                     | Response Body                    | Códigos HTTP de respuesta |
| ----------- | -------------------------------------- | ------------ | -------------------------------- | -------------------------------- | ------------------------- |
| POST        | /api/operaciones/sumas                 | -            | `{ "numeros": [4, 2, 2, 2] }`    | `{ "resultado": 10, "id": "1" }` | 200, 400                  |
| POST        | /api/operaciones/restas                | -            | `{ "numeros": [0, 2, 2, 2] }`    | `{ "resultado": -2, "id": "2" }` | 200, 400                  |
| POST        | /api/operaciones/multiplicaciones      | -            | `{ "numero1": 2, "numero2": 2 }` | `{ "resultado": 4, "id": "3" }`  | 200, 400                  |
| POST        | /api/operaciones/divisiones            | -            | `{ "numero1": 2, "numero2": 2 }` | `{ "resultado": 1, "id": "4" }`  | 200, 400                  |
| POST        | /api/operaciones/raises                | -            | `{ "numero": 8, "indice": 3 }`   | `{ "resultado": 2, "id": "5" }`  | 200, 400                  |
| POST        | /api/operaciones/potencias             | -            | `{ "base": 2, "exponente": 3 }`  | `{ "resultado": 8, "id": "6" }`  | 200, 400                  |
| GET         | /api/operaciones/sumas/{id}            | 1            | -                                | `{ "resultado": 10, "id": "1" }` | 200, 404                  |
| GET         | /api/operaciones/restas/{id}           | 2            | -                                | `{ "resultado": -2, "id": "2" }` | 200, 404                  |
| GET         | /api/operaciones/multiplicaciones/{id} | 3            | -                                | `{ "resultado": 4, "id": "3" }`  | 200, 404                  |
| GET         | /api/operaciones/divisiones/{id}       | 4            | -                                | `{ "resultado": 1, "id": "4" }`  | 200, 404                  |
| GET         | /api/operaciones/raises/{id}           | 5            | -                                | `{ "resultado": 2, "id": "5" }`  | 200, 404                  |
| GET         | /api/operaciones/potencias/{id}        | 6            | -                                | `{ "resultado": 8, "id": "6" }`  | 200, 404                  |

---

## Consideraciones

- Las operaciones realizadas se identifican con un ID único para su consulta posterior.
