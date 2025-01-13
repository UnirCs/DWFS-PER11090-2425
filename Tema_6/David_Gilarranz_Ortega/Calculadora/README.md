# API de una Calculadora Online

## Enunciado

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

Se han identificado los siguientes recursos:

- Suma (sumas): tipo de operación que representa la suma de N números.
- Resta (restas): tipo de operación que representa la resta de N números.
- Multiplicación (multiplicaciones): tipo de operación representa la multiplicación de 2 números.
- División (divisiones): tipo de operación que representa la división de 2 números.
- Raíz (raices): tipo de operación que representa la raíz N-ésima de un número.
- Potencia (potencias): tipo de operación que representa la N-ésima potencia de un número.

Se expondrá la siguiente API:

| Método HTTP | Endpoint | Query Params | Cuerpo JSON de la petición | Respuesta JSON de la petición | Códigos HTTP de respuesta posibles |
| :---------: | :-------: | :----------: | :------------------------: | :---------------------------: | :--------------------------------: |
| POST | /sumas | | `{ "operandos": ["float"] }` | `{ "id": "integer", "resultado": "float"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET | /sumas/{idSuma} | | | `{ "id": "integer", "operandos": ["float"], "resultado": "float"}` | 200 OK, 404 Not Found|
| POST | /restas | | `{ "operandos": ["float"] }` | `{ "id": "integer", "resultado": "float"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET | /restas/{idResta} | | | `{ "id": "integer", "operandos": ["float"], "resultado": "float"}` | 200 OK, 404 Not Found |
| POST | /multiplicaciones | | `{ "primer_operando": "float", "segundo_operando": "float" }` | `{ "id": "integer", "resultado": "float"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET | /multiplicaciones/{idMultiplicacion} | | | `{ "id": "integer", "primer_operando": "float", "segundo_operando": "float", "resultado": "float" }` | 200 OK, 404 Not Found |
| POST | /divisiones | | `{ "dividendo": "float", "divisor": "float" }` | `{ "id": "integer", "resultado": "float"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET | /divisiones/{idDivision} | | | `{ "id": "integer", "dividendo": "float", "divisor": "float", "resultado": "float"}` | 200 OK, 404 Not Found |
| POST | /raices | | `{ "indice": "integer", "radicando": "float" }` | `{ "id": "integer", "resultado": "float"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET | /raices/{idRaiz} | | | `{ "id": "integer", "indice": "integer", "radicando": "float", "resultado": "float"}` | 200 OK, 404 Not Found |
| POST | /potencia | | `{ "base": "float", "exponente": "integer" }` | `{ "id": "integer", "resultado": "float"}` | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET | /potencia/{idPotencia} | | | `{ "id": "integer", "base": "float", "exponente": "integer", "resultado": "float"}` | 200 OK, 404 Not Found |

