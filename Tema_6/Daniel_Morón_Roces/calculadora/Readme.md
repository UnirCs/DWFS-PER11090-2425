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
| Método HTTP | URI                    | Query Params | Cuerpo de la Petición         | Cuerpo de la Respuesta                                                                                           | Códigos de Respuesta |
|-------------|------------------------|--------------|-------------------------------|------------------------------------------------------------------------------------------------------------------|----------------------|
| POST        | /sumas                 |              | { "numeros": [2, 2, 2] }      | { "tipo": "suma", "numeros": [2, 2, 2], "resultado": 6, "id": "12", "mensaje": "Suma exitosa" }                  | 200, 400             |
| GET         | /sumas/{id}            |              |                               | { "tipo": "suma", "numeros": [2, 2, 2], "resultado": 6, "mensaje": "Suma encontrada" }                           | 200, 404             |
| POST        | /restas                |              | { "numeros": [2, 2, 2] }      | { "tipo": "resta", "numeros": [2, 2, 2], "resultado": -2, "id": "13", "mensaje": "Resta exitosa" }               | 200, 400             |
| GET         | /restas/{id}           |              |                               | { "tipo": "resta", "numeros": [2, 2, 2], "resultado": 6, "mensaje": "Suma encontrada" }                          | 200, 404             |
| POST        | /multiplicaciones      |              | { "numeros": [2, 2] }         | { "tipo": "multiplicacion", "numeros": [2, 2], "resultado": 4, "id": "14", "mensaje": "Multiplicacion exitosa" } | 200, 400             |
| GET         | /multiplicaciones/{id} |              |                               | { "tipo": "multiplicacion", "numeros": [2, 2], "resultado": 4, "mensaje": "Multiplicacion encontrada" }          | 200, 404             |
| POST        | /divisiones            |              | { "numeros": [2, 2] }         | { "tipo": "division", "numeros": [2, 2], "resultado": 1, "id": "15", "mensaje": "Division exitosa" }             | 200, 400             |
| GET         | /divisiones/{id}       |              |                               | { "tipo": "division", "numeros": [2, 2], "resultado": 1, "mensaje": "Division encontrada" }                      | 200, 404             |       
| POST        | /raices                |              | { "numero": 4, "indice": 2 }  | { "tipo": "raiz", "resultado": 2,  "numero": 4, "indice": 2, "id": "16", "mensaje": "Raiz exitosa" }             | 200, 400             |
| GET         | /raices/{id}           |              |                               | { "tipo": "raiz", "resultado": 2,  "numero": 4, "indice": 2, "mensaje": "Raiz encontrada" }                      | 200, 404             |
| POST        | /potencias             |              | { "base": 2, "exponente": 2 } | { "tipo": "potencia", "resultado": 4,  "base": 2, "exponente": 2, "id": "17", "mensaje": "Potencia exitosa" }    | 200, 400             |
| GET         | /potencias/{id}        |              |                               | { "tipo": "potencia", "resultado": 4,  "base": 2, "exponente": 2,  "mensaje": "Potencia encontrada" }            | 200, 404             |


