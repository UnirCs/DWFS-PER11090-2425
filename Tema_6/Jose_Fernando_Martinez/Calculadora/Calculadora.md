
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



**Recursos identificados:**
- Suma: Es sumar dos o más números, en donde pondemos consultar la operacion de suma por su id.
- Resta: Es restar dos o más números,en donde pondemos consultar la operacion de resta por su id.
- Multiplicación: Es multiplicar dos números,en donde pondemos consultar la operacion de multiplicación por su id.
- División: Es dividir dos números,en donde pondemos consultar la operacion de división por su id.
- Raíz: Es la raíz n-ésima de un número,en donde pondemos consultar la operacion de raiz por su id.
- Potencia: Es elevar un número a la n-ésima potencia,en donde pondemos consultar la operacion de Potenciación por su id.


| Método Http  | Endpoint                | Query Params | Cuerpo JSON de la petición        | Respuesta JSON de la petición                                                          | Códigos HTTP de respuesta posibles |
|--------------|-------------------------|--------------|-----------------------------------|----------------------------------------------------------------------------------------|------------------------------------|
| POST         | /sumas                  |              | `{ "numero": 2, "cantidad" : 3 }` | `{ "id_operacion": 1, "operación realizada": "2+2+2", "resultado": "6" }`              | 200 OK, 400 Bad Request            |
| GET          | /sumas/{id}             |              |                                   | `{ "id_operacion": 1, "operación realizada": "2+2+2", "resultado": "6"}`               | 200 OK, 404 Not Found              |
| POST         | /restas                 |              | `{ "numero": 2, "cantidad" : 4 }` | `{ "id_operacion": 2, "operación realizada": "2-2-2-2", "resultado": "-4" }`           | 200 OK, 400 Bad Request            |
| GET          | /restas/{id}            |              |                                   | `{ "id_operacion": 2, "operación realizada": "2-2-2-2", "resultado": "-4"}`            | 200 OK, 404 Not Found              |
| POST         | /multiplicaciones       |              | `{ "numero1": 2, "numero2" : 2 }` | `{ "id_operacion": 3, "operación realizada": "2x2", "resultado": "4" }`                | 200 OK, 400 Bad Request            |
| GET          | /multiplicaciones/{id}  |              |                                   | `{ "id_operacion": 3, "operación realizada": "2x2", "resultado": "4"}`                 | 200 OK, 404 Not Found              |
| POST         | /divisiones             |              | `{ "numero1": 2, "numero2" : 2 }` | `{ "id_operacion": 4, "operación realizada": "2/2", "resultado": "1" }`                | 200 OK, 400 Bad Request            |
| GET          | /divisiones/{id}        |              |                                   | `{ "id_operacion": 4, "operación realizada": "2/2", "resultado": "1"}`                 | 200 OK, 404 Not Found              |
| POST         | /raices                 |              | `{ "numero": 4, "raiz" : 2 }`     | `{ "id_operacion": 5, "operación realizada": "Raíz cuadrada de 4", "resultado": "2" }` | 200 OK, 400 Bad Request            |
| GET          | /raices/{id}            |              |                                   | `{ "id_operacion": 5, "operación realizada": "Raíz cuadrada de 4", "resultado": "2"}`  | 200 OK, 404 Not Found              |
| POST         | /potencias              |              | `{ "numero": 2, "potencia" : 2 }` | `{ "id_operacion": 6, "operación realizada": "2^2", "resultado": "4" }`                | 200 OK, 400 Bad Request            |
| GET          | /potencias/{id}         |              |                                   | `{ "id_operacion": 6, "operación realizada": "2^2", "resultado": "4"}`                 | 200 OK, 404 Not Found              |




