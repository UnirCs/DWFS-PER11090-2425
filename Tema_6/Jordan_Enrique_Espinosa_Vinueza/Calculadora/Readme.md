## 🧮 API de Calculadora Online

### 📌 Descripción
Esta API permite realizar operaciones matemáticas básicas y avanzadas, además de almacenar el historial de operaciones realizadas

### 📌 Operaciones Soportadas
La API debe soportar las siguientes operaciones matemáticas:

1. **Suma** de N elementos (ejemplo: `2+2`, `2+2+2`).
2. **Resta** de N elementos (ejemplo: `10-5`, `10-5-2`).
3. **Multiplicación** de 2 elementos (ejemplo: `4×5`).
4. **División** de 2 elementos (ejemplo: `10/2`). Se debe manejar el caso de división entre cero.
5. **Raíz N-ésima** de un número (ejemplo: raíz cuadrada de `4`, raíz cúbica de `8`).
6. **Potencia N-ésima** de un número (ejemplo: `2^3`, `3^3`, `4^4`).
7. **Historial de operaciones**, permitiendo recuperar el resultado de cálculos anteriores mediante un ID.

---

### 📌 Recursos de la API
| Método Http | Endpoint              | Cuerpo JSON de la petición   | Respuesta JSON de la petición                              | Códigos HTTP de respuesta posibles |
|-------------|-----------------------|------------------------------|------------------------------------------------------------|------------------------------------|
| POST        | /adds                 | `{"numbers": [2, 2, 2]}`     | `{"id": "integer", "numbers": [2, 2, 2], "result": 6}`     | 201 Created, 400 Bad Request       |
| GET         | /adds/{id}            |                              | `{"id": "integer", "numbers": [2, 2, 2], "result": 6}`     | 200 OK, 404 Not Found              |
| POST        | /subtractions         | `{"numbers": [8, 2, 1]}`     | `{"id": "integer", "numbers": [8, 2, 1], "result": 5}`     | 201 Created, 400 Bad Request       |
| GET         | /subtractions/{id}    |                              | `{"id": "integer", "numbers": [8, 2, 1], "result": 5}`     | 200 OK, 404 Not Found              |
| POST        | /multiplications      | `{"numbers": [3, 4]}`        | `{"id": "integer", "numbers": [3, 4], "result": 12}`       | 201 Created, 400 Bad Request       |
| GET         | /multiplications/{id} |                              | `{"id": "integer", "numbers": [3, 4], "result": 12}`       | 200 OK, 404 Not Found              |
| POST        | /divisions            | `{"numbers": [8, 2]}`        | `{"id": "integer", "numbers": [8, 2], "result": 4}`        | 201 Created, 400 Bad Request       |
| GET         | /divisions/{id}       |                              | `{"id": "integer", "numbers": [8, 2], "result": 4}`        | 200 OK, 404 Not Found              |
| POST        | /roots                | `{"number": 25, "n": 2}`     | `{"id": "integer", "number": 25, "n": 2, "result": 5}`     | 201 Created, 400 Bad Request       |
| GET         | /roots/{id}           |                              | `{"id": "integer", "number": 25, "n": 2, "result": 5}`     | 200 OK, 404 Not Found              |
| POST        | /powers               | `{"base": 2, "exponent": 3}` | `{"id": "integer", "base": 2, "exponent": 3, "result": 8}` | 201 Created, 400 Bad Request       |
| GET         | /powers/{id}          |                              | `{"id": "integer", "base": 2, "exponent": 3, "result": 8}` | 200 OK, 404 Not Found              |
