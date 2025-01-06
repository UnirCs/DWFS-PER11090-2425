
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
- Suma: Es sumar dos o más números.
- Resta: Es restar dos o más números.
- Multiplicación: Es multiplicar dos números.
- División: Es dividir dos números.
- Raíz: Es la raíz n-ésima de un número.
- Potencia: Es elevar un número a la n-ésima potencia.
- Detalle de operación: Es el detalle de una operación realizada.


| Método Http | Endpoint                | Query Params | Cuerpo JSON de la petición        | Respuesta JSON de la petición                                                          | Códigos HTTP de respuesta posibles |
|-------------|-------------------------|--------------|-----------------------------------|----------------------------------------------------------------------------------------|------------------------------------|
| POST        | /suma                   |              | `{ "numero": 2, "cantidad" : 3 }` | `{ "id_operacion": 1, "operación realizada": "2+2+2", "resultado": "6" }`              | 200 OK, 400 Bad Request            |
| POST        | /resta                  |              | `{ "numero": 2, "cantidad" : 4 }` | `{ "id_operacion": 2, "operación realizada": "2-2-2-2", "resultado": "-4" }`           | 200 OK, 400 Bad Request            |
| POST        | /multiplicacion         |              | `{ "numero1": 2, "numero2" : 2 }` | `{ "id_operacion": 3, "operación realizada": "2x2", "resultado": "4" }`                | 200 OK, 400 Bad Request            |
| POST        | /division               |              | `{ "numero1": 2, "numero2" : 2 }` | `{ "id_operacion": 4, "operación realizada": "2/2", "resultado": "1" }`                | 200 OK, 400 Bad Request            |
| POST        | /raiz                   |              | `{ "numero": 4, "raiz" : 2 }`     | `{ "id_operacion": 5, "operación realizada": "Raíz cuadrada de 4", "resultado": "2" }` | 200 OK, 400 Bad Request            |
| POST        | /potencia               |              | `{ "numero": 2, "potencia" : 2 }` | `{ "id_operacion": 6, "operación realizada": "2^2", "resultado": "4" }`                | 200 OK, 400 Bad Request            |
| GET         | /detalle/{id_operacion} |              |                                   | `{ "id_operacion": 1, "operación realizada": "2+2+2", "resultado": "6"}`               | 200 OK, 404 Not Found              |




