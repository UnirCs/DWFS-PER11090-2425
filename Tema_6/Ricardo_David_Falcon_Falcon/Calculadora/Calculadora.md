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



## Recursos Identificados

1. **Operaciones matemáticas** (`sumas`, `restas`, `multiplicaciones`, `divisiones`, `raices`, `potencias`).
2. **Historial de operaciones** (`operaciones/{id}`), donde se puede consultar el detalle de una operación previamente realizada.

## Endpoints

| Método HTTP | Endpoint          | Cuerpo JSON de la petición               | Respuesta JSON de la petición              | Códigos HTTP de respuesta posibles |
|------------|------------------|--------------------------------|---------------------------------|-------------------------------|
| `POST`     | `/sumas`          | `{ "numeros": [2, 3, 5] }`    | `{ "id": 123, "resultado": 10 }` | `200` (Éxito), `400` (Solicitud inválida) |
| `POST`     | `/restas`         | `{ "numeros": [10, 4, 2] }`   | `{ "id": 124, "resultado": 4 }`  | `200` (Éxito), `400` (Solicitud inválida) |
| `POST`     | `/multiplicaciones` | `{ "a": 3, "b": 4 }`          | `{ "id": 125, "resultado": 12 }` | `200` (Éxito), `400` (Solicitud inválida) |
| `POST`     | `/divisiones`      | `{ "a": 10, "b": 2 }`         | `{ "id": 126, "resultado": 5 }`  | `200` (Éxito), `400` (Solicitud inválida), `422` (Error matemático: división por cero) |
| `POST`     | `/raices`          | `{ "numero": 8, "indice": 3 }` | `{ "id": 127, "resultado": 2 }`  | `200` (Éxito), `400` (Solicitud inválida), `422` (Error matemático: raíz de número negativo con índice par) |
| `POST`     | `/potencias`      | `{ "base": 3, "exponente": 3 }` | `{ "id": 128, "resultado": 27 }` | `200` (Éxito), `400` (Solicitud inválida) |
| `GET`      | `/operaciones/{id}` | `N/A`                         | `{ "id": 123, "operacion": "suma", "entrada": [2,3,5], "resultado": 10 }` | `200` (Éxito), `404` (No encontrado: ID no registrado) |

## Descripción de Códigos de Respuesta

- **`200 OK`**: La operación se realizó con éxito.
- **`400 Bad Request`**: La solicitud es inválida (por ejemplo, datos faltantes o incorrectos en el JSON).
- **`404 Not Found`**: El ID solicitado no existe en el historial de operaciones.
- **`422 Unprocessable Entity`**: Error matemático (por ejemplo, división por cero o raíz de un número negativo con índice par).
        |

## Notas:
- El ID de operación es único y se genera automáticamente para cada operación realizada.
