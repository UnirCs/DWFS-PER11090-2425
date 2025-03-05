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

# Recursos
    sumar: recurso para operacion de suma
    restar: recurso para operacion de resta
    multiplicar: recurso para la operacion de multiplicar dos numeros
    dividir: recurso para la operacion de dividir dos numeros
    raiz: recurso para sacar la raiz de un numero 
    potencia: recurso para calcular la potencia de un numero

# Tabla de Api
    | Método Http | Endpoint            | Query Params             | Cuerpo JSON de la petición     | Respuesta JSON de la petición                              | Códigos HTTP de respuesta posibles       |
    |-------------|---------------------|--------------------------|--------------------------------|------------------------------------------------------------|--------------------------------------------------------|
    | POST        | /sumar              | Ninguno                  | `{ "numeros": [2,2,2,2]}`      |  `{"id": "integer","resultado": 8}`                        | 201 Created,400 Bad Request              |
    | GET         | /sumar/{id}         | Ninguno                  |                                |  `{"id": "integer", "numeros": [2,2,2,2], "resultado": 8}` | 200 Ok,404 Not Found                     |
    | POST        | /restar             | Ninguno                  | `{ "numeros": [5,6]}`          |  `{"id": "integer", "resultado": 1 }`                      | 201 Created,400 Bad Request              |
    | GET         | /restar/{id}        | Ninguno                  |                                |  `{"id": "integer", "numeros": [5,6], "resultado": 1}`     | 200 Ok,404 Not Found                     |
    | POST        | /multiplicar        | Ninguno                  | `{"num1":5,"num2":6}`          |  `{"id": "integer", "resultado": 30}`                      | 201 Created,400 Bad Request              |
    | GET         | /multiplicar/{id}   | Ninguno                  |                                |  `{"id": "integer", "num1":5,"num2":6, "resultado": 30}`   | 200 Ok,404 Not Found                                 |
    | POST        | /dividir            | Ninguno                  | `{"num1": 10,"num2": 2}`       |  `{"id": "integer", "resultado": 5 }`                      | 201 Created,400 Bad Request, 422 (Unprocessable Entity si num2 es 0) |
    | GET         | /dividir/{id}       | Ninguno                  |                                |  `{"id": "integer", "num1": 10, "num2":2, "resultado": 5}` | 200 Ok,404 Not Found                     |
    | POST        | /raiz               | Ninguno                  | `{ "num1":8, "indice":3}`      |  `{"id": "integer", "resultado":2}                         | 201 Created,400 Bad Request              |
    | GET         | /raiz/{id}          | Ninguno                  |                                |  `{"id": "integer", "num1": 8,indice:3, "resultado": 2}`   | 200 Ok,404 Not Found                     |
    | POST        | /potencia           | Ninguno                  | `{ "num1":5, "potecia":2}`     |  `{"id": "integer","resultado":25}`                        | 201 Created,400 Bad Request              |
    | GET         | /potencia/{id}      | Ninguno                  |                                |  `{"id": "integer", "num1": 5,"potencia":2, "resultado":25}`| 200 Ok,404 Not Found                    |
