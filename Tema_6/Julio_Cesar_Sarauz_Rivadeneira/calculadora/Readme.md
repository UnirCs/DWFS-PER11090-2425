# API de una Calculadora online

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

# API de una Calculadora Online

En este README se describe la API REST para una calculadora que soporta varias operaciones aritméticas y permite consultar el historial de operaciones realizadas.

## Recursos Identificados:
- **Operación (operaciones):** Representa una operación aritmética realizada por la calculadora.
- **Valores (valores):** Números utilizados en las operaciones.

## Rutas:

| Método HTTP | URI| Query Params | Cuerpo de la Petición | Cuerpo de la Respuesta | Códigos de Respuesta|
|-------------|------------------------------|--------------|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| POST| /operaciones/sumas  | N/A  | `{"valores": [2, 2, 2]}`| `{"operacionId": 1, "operacion":"suma" "valores": [2, 2, 2], "resultado": 6 }`       | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET | /operaciones/sumas/{id}  | N/A  | | `{"operacionId": 1, "operacion":"suma" "valores": [2, 2, 2], "resultado": 6}`                           | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST| /operaciones/restas | N/A  | `{"valores": [10, 3, 2]}`| `{"operacionId": 2, "operacion":"resta","valores": [10, 3, 2], "resultado": 5}`     | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET | /operaciones/restas/{id} | N/A  | | `{"operacionId": 2, "operacion":"resta","valores": [10, 3, 2], "resultado": 5}`                         | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST| /operaciones/multiplicaciones| N/A |`{"valores": [4, 5]}`| `{"operacionId": 3,"operacion":"multiplicacion", "valores": [4, 5], "resultado": 20}`| 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET | /operaciones/multiplicaciones/{id}| N/A || `{"operacionId": 3,"operacion":"multiplicacion", "valores": [4, 5], "resultado": 20}`            | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST| /operaciones/divisiones     | N/A  | `{"valores": [10, 2]}`  | `{"operacionId": 4, "operacion":"division", "valores": [10, 2], "resultado": 5}`| 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET | /operaciones/divisiones/{id}| N/A  | | `{"operacionId": 4, "operacion":"division", "valores": [10, 2], "resultado": 5}`                     | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST| /operaciones/raices  | N/A  | `{"valor": 16, "indice": 2}`   | `{"operacionId": 5, "operacion":"raiz", "valor": 16, "indice": 2, "resultado": 4}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET | /operaciones/raices/{id}  | N/A  | | `{"operacionId": 5, "operacion":"raiz", "valor": 16, "indice": 2, "resultado": 4}`                      | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST| /operaciones/potencias      | N/A  | `{"base": 3, "exponente": 4}`   | `{"operacionId": 6, "operacion":"potencia", "base": 3, "exponente": 4, "resultado": 81}`       | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET| /operaciones/potencias/{id} | N/A  | | `{"operacionId": 6, "operacion":"potencia", "base": 3, "exponente": 4, "resultado": 81}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
