## 🧮 API de Calculadora Online

### 📌 Descripción
Esta API permite realizar operaciones matemáticas básicas y avanzadas, además de almacenar el historial de operaciones realizadas.

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

| Método HTTP | URI                                | Query Params | Request Body                    | Response Body                              | Códigos HTTP de respuesta |
|------------|-----------------------------------|-------------|--------------------------------|-------------------------------------------|---------------------------|
| GET        | `/api/v1/historial/{id}`         | -           | -                              | `{ "operacion": "2+2", "resultado": 4 }` | 200, 404 |
| POST       | `/api/v1/sumar`                   | -           | `{ "numeros": [2,2,2] }`       | `{ "resultado": 6, "id": 1 }`            | 200, 400 |
| POST       | `/api/v1/restar`                  | -           | `{ "numeros": [10,5,2] }`      | `{ "resultado": 3, "id": 2 }`            | 200, 400 |
| POST       | `/api/v1/multiplicar`             | -           | `{ "numero1": 4, "numero2": 5 }` | `{ "resultado": 20, "id": 3 }`           | 200, 400 |
| POST       | `/api/v1/dividir`                 | -           | `{ "numero1": 10, "numero2": 2 }` | `{ "resultado": 5, "id": 4 }`           | 200, 400, 422 |
| POST       | `/api/v1/raiz`                    | -           | `{ "numero": 8, "grado": 3 }`  | `{ "resultado": 2, "id": 5 }`            | 200, 400 |
| POST       | `/api/v1/potencia`                | -           | `{ "base": 3, "exponente": 3 }` | `{ "resultado": 27, "id": 6 }`           | 200, 400 |

---

### 📌 Descripción de los Recursos

- **GET `/api/v1/historial/{id}`**: Obtiene los detalles de una operación almacenada en la memoria.
- **POST `/api/v1/sumar`**: Recibe un array de números y devuelve la suma de todos.
- **POST `/api/v1/restar`**: Recibe un array de números y devuelve la resta en orden.
- **POST `/api/v1/multiplicar`**: Recibe dos números y devuelve su producto.
- **POST `/api/v1/dividir`**: Recibe dos números y devuelve el resultado de la división (evita divisiones entre 0).
- **POST `/api/v1/raiz`**: Calcula la raíz enésima de un número.
- **POST `/api/v1/potencia`**: Calcula la potencia enésima de un número.

