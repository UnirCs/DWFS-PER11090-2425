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
Sums (Sumar)
Substraccions (Restas)
Multiplications (Multiplicaciones)
Divisions (Divisiones)
Roots (raices)
Powers (potencias)


## Operaciones
___________________________________________________________________________________________________________________________________________________________________________________________
| Método HTTP | URI                   | Query Params | Cuerpo de la Petición     | Cuerpo de la Respuesta                                                         | Códigos de Respuesta  |                                  
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| POST        | /sums                 |              | { "nums": [2, 2, 2, 2] }  | { "id": "12", "suma": 8, "mensaje": "La suma es:" "suma" }                     | 200, 400              |             
| GET         | /sums/{id}            |              | { "id":"12"}              | { "suma": 8, "mensaje": "Suma encontrada del id = " id }                       | 200, 404              |
___________________________________________________________________________________________________________________________________________________________________________________________
| POST        | /rests                |              | { "nums": [2, 2, 2, 2] }  | { "id": "13", "resta" : -4, "mensaje": "Resta exitosa" }                       | 200, 400, 201         |
| GET         | /rests/{id}           |              | { "id" : "13"}            | { "resta": -4, "mensaje": "Resta encontrada del id=" id }                      | 200, 404              |
___________________________________________________________________________________________________________________________________________________________________________________________
| POST        | /multiplications      |              | { "nums": [2, 2] }        | { "id": "14", "multi": 4, mensaje": "Multiplicación exitosa" }                 | 200, 400              |
| GET         | /multiplications/{id} |              | { "id" : "14" }           | { "multi": 4, "mensaje": "Multiplicación encontrada del id =" id }             | 200, 404              |
___________________________________________________________________________________________________________________________________________________________________________________________
| POST        | /divisions            |              | { "nums": [2, 2] }        | { "id": "15", "div": 1, mensaje": "Division exitosa" }                          | 200, 400, 201        |
| GET         | /divisions/{id}       |              | { "id" : "15" }           | { "div": 1, "mensaje": "Division encontrada para el id=" id}                    | 200, 404             |       
___________________________________________________________________________________________________________________________________________________________________________________________
| POST        | /roots                |              | { "num": 16, "indice": 2 }| { "id": "16", "raiz": 4, "mensaje": "Raiz de " num "con indice " indice }       | 200, 400, 201        |
| GET         | /roots/{id}           |              | { "id" : "16" }           | { "raiz": 4, "mensaje": "Raiz encontrada del id = " id }                        | 200, 404             |
___________________________________________________________________________________________________________________________________________________________________________________________
| POST        | /powers               |              | { "base": 2, "exp": 2 }   | { "id": "17", "base": 2, "exponente": 2, "mensaje": "Potencia exitosa" }        | 200, 400, 201        |
| GET         | /powers/{id}          |              | { "id" : "17" }           | { "base": 2, "exponente": 2,  "mensaje": "Potencia encontrada del id=" id }     | 200, 404             |
___________________________________________________________________________________________________________________________________________________________________________________________

