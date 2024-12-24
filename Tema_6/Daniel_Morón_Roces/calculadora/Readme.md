# API de una calculadora

## Introducción
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

## Recursos
**Recursos identificados:**
# API de una calculadora

## Introducción
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

## Recursos
**Recursos identificados:**
- Sumar

- Restar

- Multiplicar

- Dividir

- Raiz

- Potencia


## Operaciones
| Método HTTP | URI             | Query Params | Cuerpo de la Petición         | Cuerpo de la Respuesta                                                    | Códigos de Respuesta |
|-------------|-----------------|--------------|-------------------------------|---------------------------------------------------------------------------|----------------------|
| POST        | /sumar          |              | { "numeros": [2, 2, 2] }      | { "resultado": 6, "id": "12", "mensaje": "Operación exitosa" }            | 200, 400             |
| POST        | /restar         |              | { "numeros": [2, 2, 2] }      | { "resultado": -2, "id": "13", "mensaje": "Operación exitosa" }           | 200, 400             |
| POST        | /multiplicar    |              | { "numeros": [2, 2] }         | { "resultado": 4, "id": "14", "mensaje": "Operación exitosa" }            | 200, 400             |
| POST        | /dividir        |              | { "numeros": [2, 2] }         | { "resultado": 1, "id": "15", "mensaje": "Operación exitosa" }            | 200, 400, 422        |
| POST        | /raiz           |              | { "numero": 4, "indice": 2 }  | { "resultado": 2, "id": "16", "mensaje": "Operación exitosa" }            | 200, 400             |
| POST        | /potencia       |              | { "base": 2, "exponente": 2 } | { "resultado": 4, "id": "17", "mensaje": "Operación exitosa" }            | 200, 400             |
| GET         | /operacion/{id} |              |                               | { "operacion": "2+2", "resultado": 4, "mensaje": "Operación encontrada" } | 200, 404             |




## Operaciones
| Método HTTP | URI             | Query Params | Cuerpo de la Petición        | Cuerpo de la Respuesta                 | Códigos de Respuesta |
|-------------|-----------------|--------------|------------------------------|----------------------------------------|----------------------|
| POST        | /sumar          |              | { "numeros": [2, 2, 2] }     | { "resultado": 6, "id": "12" }         | 200, 400, 404, 500   |
| POST        | /restar         |              | { "numeros": [2, 2, 2] }     | { "resultado": -2, "id": "13" }        | 200, 400, 404, 500   |
| POST        | /multiplicar    |              | { "numeros": [2, 2] }        | { "resultado": 4, "id": "14" }         | 200, 400, 404, 500   |
| POST        | /dividir        |              | { "numeros": [2, 2] }        | { "resultado": 1, "id": "15" }         | 200, 400, 404, 500   |
| POST        | /raiz           |              | { "numero": 4, "indice": 2 } | { "resultado": 2, "id": "16" }         | 200, 400, 404, 500   |
| POST        | /potencia       |              | { "numero": 2, "indice": 2 } | { "resultado": 4, "id": "17" }         | 200, 400, 404, 500   |
| GET         | /operacion/{id} |              |                              | { "operacion": "2+2", "resultado": 4 } | 200, 400, 404, 500   |

