# API de una calculadora online


En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:

-   Sumar N elementos (2+2, 2+2+2).
-   Restar N elementos (2-2, 2-2-2).
-   Multiplicar 2 elementos (2x2).
-   Dividir 2 elementos (2/2).
-   Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
-   Potencia N-ésima de un número (2^2, 3^3, 4^4).
-   Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

Recursos:

 - Sumas (additions): representa una operacion de tipo suma.
 - Restas (substractions): representa una operacion de tipo resta.
 - Divisions(divisions): representa una operacion de tipo suma.
 - Multiplicaciones (multiplications): representa una operacion de multiplicacion.
 - Raices(roots): representa una operacion de tipo raiz.
 - Potencias(potencia): representa una operacion de potencias.


| Metodo HTTP |URI |Query Params|Cuerpo de la peticion|Respuesta de la peticion|Codigos HTTP de respuesta|
|--|--|--|--|--|--|--|
| POST |/additions  |N/A| {"elements": 3,   "operation":"2+2+2",    "result": 6    }| {"id": 122,   "elements": 3    "operation":"2+2+2",    "result": 6} |201,   400,    500
|GET| /additions/{id}| N/A |N/A|{"id": 122,   "elements": 3    "operation":"2+2+2",    "result": 6}|200, 404, 500
| POST |/substractions  |N/A| {"elements": 2   "operation":"4-4",    "result": 0    }| {"id": 123,   "elements": 2    "operation":"4-4",    "result": 0} |201,   400,    500| 
|GET| /substractions/{id}| N/A |N/A|{"id": 123,   "elements": 2    "operation":"4-4",    "result": 0}|200, 404, 500
| POST |/divisions|N/A| {"operation":"5/15",    "result": 3    }| {"id": 589,    "operation":"5/15",    "result": 3} |201,   400,    500|
|GET| /divisions/{id}| N/A |N/A| {"id": 589,    "operation":"5/15"}|200, 404, 500
| POST |/multiplications|N/A| {"operation":"3*3",    "result": 9    }| {"id": 858,    "operation":"3*3",    "result": 9} |201,   400,    500|
|GET| /multiplications/{id}| N/A |N/A| {"id": 858,    "operation":"3*3",    "result": 9}}|200, 404, 500
| POST |/roots|| {"index":2,    "value": 4    "result": 2    }| {"id": 597,    "index":"2",    "value": 4,    "result": 2} |201,   400,    500|
|GET| /roots/{id}| N/A |N/A| {"id": 858,    "operation":"3*3",    "result": 9}}|200, 404, 500
| POST |/powers|N/A| {"index":2,    "value": 5    "result": 25    }| {"id": 365,    "index":2,    "value": 5    "result": 25} |201,   400,    500|
|GET| /roots/{id}| N/A |N/A| {"id": 365,    "index":2,    "value": 5    "result": 25}}|200, 404, 500





