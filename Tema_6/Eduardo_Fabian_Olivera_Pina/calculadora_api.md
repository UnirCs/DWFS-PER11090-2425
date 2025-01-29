
# Diseño de la API REST de una calculadora online

En este ejercicio, se diseñará una API REST para una calculadora online que soporte las siguientes operaciones matemáticas:

- **Suma**: Sumar N elementos (e.g., 2+2, 2+2+2).
- **Resta**: Restar N elementos (e.g., 2-2, 2-2-2).
- **Multiplicación**: Multiplicar 2 elementos (e.g., 2x2).
- **División**: Dividir 2 elementos (e.g., 2/2).
- **Raíz N-ésima**: Calcular la raíz N-ésima de un número (e.g., Raíz cuadrada de 4, Raíz cúbica de 8).
- **Potencia N-ésima**: Elevar un número a una potencia N (e.g., 2^2, 3^3, 4^4).

Además, se podrá consultar el detalle de cada operación realizada por medio de un ID único asociado a cada operación.

---

## Recursos identificados

1. **/api/v1/operations**:
   - Endpoint principal para realizar operaciones matemáticas.
2. **/api/v1/operations/{id}**:
   - Endpoint para consultar el detalle de una operación realizada anteriormente.

---

## Casos de uso

### Caso de uso: Sumar N elementos

| Método HTTP | URI                    | Query Params | Request Body                   | Response Body                        | Códigos HTTP de respuesta |
|-------------|------------------------|--------------|--------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/operations/sum | -            | `{"numbers": [2, 3, 4]}`       | `{"result": 9, "id": "abc123"}`      | 200, 400                  |

### Caso de uso: Restar N elementos

| Método HTTP | URI                    | Query Params | Request Body                   | Response Body                        | Códigos HTTP de respuesta |
|-------------|------------------------|--------------|--------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/operations/sub | -            | `{"numbers": [10, 5, 2]}`      | `{"result": 3, "id": "abc124"}`      | 200, 400                  |

### Caso de uso: Multiplicar 2 elementos

| Método HTTP | URI                    | Query Params | Request Body                  | Response Body                        | Códigos HTTP de respuesta |
|-------------|------------------------|--------------|-------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/operations/mul | -            | `{"a": 4, "b": 5}`            | `{"result": 20, "id": "abc125"}`     | 200, 400                  |

### Caso de uso: Dividir 2 elementos

| Método HTTP | URI                    | Query Params | Request Body                  | Response Body                        | Códigos HTTP de respuesta |
|-------------|------------------------|--------------|-------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/operations/div | -            | `{"a": 20, "b": 4}`           | `{"result": 5, "id": "abc126"}`      | 200, 400, 422             |

### Caso de uso: Raíz N-ésima de un número

| Método HTTP | URI                    | Query Params | Request Body                  | Response Body                        | Códigos HTTP de respuesta |
|-------------|------------------------|--------------|-------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/operations/root | -           | `{"number": 27, "n": 3}`      | `{"result": 3, "id": "abc127"}`      | 200, 400                  |

### Caso de uso: Potencia N-ésima de un número

| Método HTTP | URI                    | Query Params | Request Body                  | Response Body                        | Códigos HTTP de respuesta |
|-------------|------------------------|--------------|-------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/operations/pow | -            | `{"base": 2, "exp": 3}`       | `{"result": 8, "id": "abc128"}`      | 200, 400                  |

### Caso de uso: Consultar el detalle de una operación

| Método HTTP | URI                        | Query Params | Request Body | Response Body                                               | Códigos HTTP de respuesta |
|-------------|----------------------------|--------------|--------------|------------------------------------------------------------|---------------------------|
| GET         | /api/v1/operations/{id}    | -            | -            | `{"id": "abc123", "operation": "sum", "result": 9}`        | 200, 404                  |

---

## Descripción breve de los recursos

- **POST /api/v1/operations/[operation]**:
  - Permite realizar una operación específica (sumar, restar, multiplicar, dividir, raíz, potencia).
  - Devuelve el resultado de la operación y un ID único asociado.

- **GET /api/v1/operations/{id}**:
  - Permite consultar los detalles de una operación previamente realizada utilizando su ID único.
