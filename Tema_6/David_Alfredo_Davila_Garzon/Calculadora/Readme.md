# API de una Calculadora en línea

Esta API permite realizar operaciones matemáticas, además que mantiene un historial de las operaciones realizadas cuyo historial se puede revisar mediante los IDs únicos de cada operación.

La API incluye las siguientes funcionalidades:

**Operaciones básicas:**

•  **Sumar:** Un endpoint que permite sumar N elementos, ejemplo: 2+2, 2+2+2.

•  **Restar:** Un endpoint que permite restar N elementos, ejemplo: 2-2, 2-2-2.

•  **Multiplicar:** Un endpoint que permite multiplicar dos elementos, ejemplo: 2x2.

•  **Dividir:** Un endpoint que permite dividir dos elementos, ejemplo: 2/2.

**Operaciones avanzadas:**

•  **Raíz N-ésima:** Un endpoint que permite calcular la raíz n-ésima de un elemento, ejemplo: raíz cuadrada de 4, raíz cúbica de 8.

•  **Potencia N-ésima:** Un endpoint que permite calcular la potencia n-ésima de un elemento, ejemplo: 2^2, 3^3, 4^4.

**Consulta de operaciones:**

•  **Detalle de una operación:** Un endpoint que permite consultar el detalle de una operación específica mediante su ID.

**Recursos identificados:**
- **Sumas (adds)**: Recurso para operaciones de suma
- **Restas (subtractions)**: Recurso para operaciones de resta
- **Multiplicaciones (multiplications)**: Recurso para operaciones de multiplicación
- **Divisiones (divisions)**: Recurso para operaciones de división
- **Raíces (roots)**: Recurso para cálculo de raíces
- **Potencias (powers)**: Recurso para cálculo de potencias

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