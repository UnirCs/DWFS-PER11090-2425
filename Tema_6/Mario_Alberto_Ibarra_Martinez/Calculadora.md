# API REST de una calculadora

En este ejercicio vamos a diseñar la API REST de una calculadora que soporta diversas operaciones matemáticas.

Las operaciones que la API debe soportar son las siguientes:

- Sumar N elementos (ej. 2+2, 2+2+2).
- Restar N elementos (ej. 2-2, 2-2-2).
- Multiplicar 2 elementos (ej. 2x2).
- Dividir 2 elementos (ej. 2/2).
- Calcular la raíz N-ésima de un número (ej. raíz cuadrada de 4, raíz cúbica de 8).
- Calcular la potencia N-ésima de un número (ej. 2^2, 3^3, 4^4).
- Consultar el detalle de una operación.

Nuestra calculadora tendrá memoria y permitirá consultar los datos de operaciones realizadas a través de un ID único de operación.

### Lista de recursos identificados y descripción

1. **Suma** **(sumas)**  
   Realiza la operación de suma con un conjunto de números proporcionados en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación.

2. **Resta** **(restas)**  
   Realiza la operación de resta con un conjunto de números proporcionados en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación.

3. **Multiplicación** **(multiplicaciones)**  
   Realiza la operación de multiplicación entre dos números especificados en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación.

4. **División** **(divisiones)**  
   Realiza la operación de división entre dos números proporcionados en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación. Maneja errores como la división entre cero.

5. **Raíz** **(raices)**  
   Calcula la raíz N-ésima de un número proporcionado en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación.

6. **Potencia** **(potencias)**  
   Calcula la potencia de un número elevado a un exponente especificado en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación.

### Tabla de operaciones

| **Método HTTP** | **URI**                   | **Query Params** | **Cuerpo de la Petición**                                                                                   | **Cuerpo de la Respuesta**                                                                                                 | **Códigos de Estado HTTP**                                     |
|------------------|---------------------------|------------------|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| **POST**         | `/sumas`                  | -                | `{ "numeros": [2, 2, 2] }`                                                                                 | `{ "resultado": 6, "idOperacion": "abc123" }`                                                                            | 200 OK, 400 Bad Request                                    |
| **GET**          | `/sumas/{id}`             | -                | -                                                                                                            | `{ "tipo": "suma", "numeros": [2, 2, 2], "resultado": 6, "mensaje": "Suma encontrada" }`                                | 200 OK, 404 Not Found                                      |
| **POST**         | `/restas`                 | -                | `{ "numeros": [10, 2, 3] }`                                                                                | `{ "resultado": 5, "idOperacion": "def456" }`                                                                            | 200 OK, 400 Bad Request                                    |
| **GET**          | `/restas/{id}`            | -                | -                                                                                                            | `{ "tipo": "resta", "numeros": [10, 2, 3], "resultado": 5, "mensaje": "Resta encontrada" }`                            | 200 OK, 404 Not Found                                      |
| **POST**         | `/multiplicaciones`       | -                | `{ "numero1": 4, "numero2": 5 }`                                                                            | `{ "resultado": 20, "idOperacion": "ghi789" }`                                                                           | 200 OK, 400 Bad Request                                    |
| **GET**          | `/multiplicaciones/{id}`   | -                | -                                                                                                            | `{ "tipo": "multiplicación", "numeros": [4, 5], "resultado": 20, "mensaje": "Multiplicación encontrada" }`              | 200 OK, 404 Not Found                                      |
| **POST**         | `/divisiones`              | -                | `{ "numero1": 10, "numero2": 2 }`                                                                           | `{ "resultado": 5, "idOperacion": "jkl012" }`                                                                            | 200 OK, 400 Bad Request, 422 Unprocessable Entity (División por cero) |
| **GET**          | `/divisiones/{id}`         | -                | -                                                                                                            | `{ "tipo": "división", "numeros": [10, 2], "resultado": 5, "mensaje": "División encontrada" }`                        | 200 OK, 404 Not Found                                      |
| **POST**         | `/raices`                 | -                | `{ "numero": 27, "grado": 3 }`                                                                             | `{ "resultado": 3, "idOperacion": "mno345" }`                                                                            | 200 OK, 400 Bad Request                                    |
| **GET**          | `/raices/{id}`            | -                | -                                                                                                            | `{ "tipo": "raíz", "numeros": [27, 3], "resultado": 3, "mensaje": "Raíz encontrada" }`                                  | 200 OK, 404 Not Found                                      |
| **POST**         | `/potencias`              | -                | `{ "pares": [ { "base": 2, "exponente": 2 }, { "base": 3, "exponente": 3 }, { "base": 4, "exponente": 4 } ] }` | `{ "resultados": [4, 27, 256], "idOperacion": "pqr678" }`                                                                | 200 OK, 400 Bad Request                                    |
| **GET**          | `/potencias/{id}`         | -                | -                                                                                                            | `{ "tipo": "potencia", "pares": [ { "base": 2, "exponente": 2 }, ... ], "resultados": [4, 27, 256], "mensaje": "Potencia encontrada" }` | 200 OK, 404 Not Found                                      |