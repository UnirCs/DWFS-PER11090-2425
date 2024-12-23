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
- Operaciones (operations): Representa una operación matemática.

Nota: Debido a que se requiere un historial, las peticiones POST retornan un código 201 y no un 200 ya que se está creando un recurso.

| Método Http | Endpoint                  | Query Params | Cuerpo JSON de la petición   | Respuesta JSON de la petición                                                    | Códigos HTTP de respuesta posibles |
|-------------|---------------------------|--------------|------------------------------|----------------------------------------------------------------------------------|------------------------------------|
| POST        | /operations/add           |              | `{"numbers": [2, 2, 2]}`     | `{"id": "integer", "operation": "add", "numbers": [2, 2, 2], "result": 6}`       | 201 Created, 400 Bad Request       |
| POST        | /operations/subtract      |              | `{"numbers": [8, 2, 1]}`     | `{"id": "integer", "operation": "subtract", "numbers": [10, 2, 1], "result": 7}` | 201 Created, 400 Bad Request       |
| POST        | /operations/multiply      |              | `{"numbers": [3, 4]}`        | `{"id": "integer", "operation": "multiply", "numbers": [3, 4], "result": 12}`    | 201 Created, 400 Bad Request       |
| POST        | /operations/divide        |              | `{"numbers": [8, 2]}`        | `{"id": "integer", "operation": "divide", "numbers": [8, 2], "result": 4}`       | 201 Created, 400 Bad Request       |
| POST        | /operations/root          |              | `{"number": 25, "n": 2}`     | `{"id": "integer", "operation": "root", "number": 25, "n": 2, "result": 5}`      | 201 Created, 400 Bad Request       |
| POST        | /operations/power         |              | `{"base": 2, "exponent": 3}` | `{"id": "integer", "operation": "power", "base": 2, "exponent": 3, "result": 8}` | 201 Created, 400 Bad Request       |
| GET         | /operations/{operationId} |              |                              | `{"id": "integer", "operation": "string", "numbers": [], "result": "number"}`    | 200 OK, 404 Not Found              |