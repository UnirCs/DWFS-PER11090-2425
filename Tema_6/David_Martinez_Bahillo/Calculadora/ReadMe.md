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


# Resolución del ejercicio

| Método HTTP | Endpoint        | Parámetros de consulta | Cuerpo de la petición                       | Respuesta JSON                                    | Códigos HTTP                 |
|-------------|-----------------|------------------------|---------------------------------------------|--------------------------------------------------|------------------------------|
| POST        | /sumas          | -                      | `{"numeros": [3, 4]}`                       | `{"id": "integer", "resultado": 7}`              | 201 
| GET         | /sumas          | -                      | -                                           | `[{"id": "integer", "numeros": [3, 4], "resultado": 7}]` | 200                        |
| POST        | /restas         | -                      | `{"numeros": [10, 4]}`                      | `{"id": "integer", "resultado": 6}`              | 201 , 400   |
| GET         | /restas         | -                      | -                                           | `[{"id": "integer", "numeros": [10, 4], "resultado": 6}]` | 200                        |
| POST        | /multiplicaciones | -                    | `{"numeros": [2, 5]}`                       | `{"id": "integer", "resultado": 10}`             | 201 , 400   |
| GET         | /multiplicaciones | -                    | -                                           | `[{"id": "integer", "numeros": [2, 5], "resultado": 10}]` | 200                       |
| POST        | /divisiones     | -                      | `{"numeros": [10, 2]}`                      | `{"id": "integer", "resultado": 5}`              | 201, 400, 422  |
| GET         | /divisiones     | -                      | -                                           | `[{"id": "integer", "numeros": [10, 2], "resultado": 5}]` | 200                        |
| POST        | /raices         | -                      | `{"numero": 16, "grado": 2}`                | `{"id": "integer", "resultado": 4}`              | 201 , 400    |
| GET         | /raices         | -                      | -                                           | `[{"id": "integer", "numero": 16, "grado": 2, "resultado": 4}]` | 200                        |
| POST        | /potencias      | -                      | `{"numero": 2, "exponente": 3}`             | `{"id": "integer", "resultado": 8}`              | 201, 400   |
| GET         | /potencias      | -                      | -                                           | `[{"id": "integer", "numero": 2, "exponente": 3, "resultado": 8}]` | 200                        |

---
