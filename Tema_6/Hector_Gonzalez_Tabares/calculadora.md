API de una calculadora en línea					
					
En este ejercicio vamos a diseñar la API REST de una calculadora.					
					
Las operaciones que la API debe soportar son las siguientes:					
					
Sumar N elementos (2+2, 2+2+2).					
Restar N elementos (2-2, 2-2-2).					
Multiplicar 2 elementos (2x2).					
Dividir 2 elementos (2/2).					
Raíz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).					
Potencia Nésima de un número (2^2, 3^3, 4^4).					
Detalle de funcionamiento					
					
Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.					

## Detalle de los Endpoints

| Método HTTP | URI                           | Query Params | Request Body                     | Response Body                                 | Códigos HTTP de respuesta                   		      |
|-------------|-------------------------------|--------------|----------------------------------|-----------------------------------------------|---------------------------------------------------------|
| POST        | /api/v1/sumas                 | -            | `{"numeros": [2, 2, 2]}`         | `{"resultado": 6, "idOperacion": "1"}`        | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| POST        | /api/v1/restas                | -            | `{"numeros": [2, 2, 2]}`         | `{"resultado": -2, "idOperacion": "1"}`       | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| POST        | /api/v1/multiplicaciones      | -            | `{"numeros1": 2, "numeros2": 2}` | `{"resultado": 4, "idOperacion": "1"}`        | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| POST        | /api/v1/divisiones      	  | -            | `{"numeros1": 2, "numeros2": 2}` | `{"resultado": 1, "idOperacion": "1"}`        | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| POST        | /api/v1/raices           	  | -            | `{"numeros1": 4, "root": 2}`     | `{"resultado": 2, "idOperacion": "1"}`        | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| POST        | /api/v1/potencias          	  | -            | `{"numeros1": 2, "potencia": 2}` | `{"resultado": 4, "idOperacion": "1"}`        | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| GET         | /api/v1/sumas/{idOperacion}   | -            |  -                               | `{"idOperacion": "1","operacion": "2+2+2",`   | 200 OK, 404 Not Found, 500 Internal Server Error        | 
|             |   						      | -            |  -                               | `	 "resultado": 6}`                           |  														  |
| GET         | /api/v1/restas/{idOperacion}  | -            |  -                               | `{"idOperacion": "1","operacion": "2-2-2",`   | 200 OK, 404 Not Found, 500 Internal Server Error        | 
|             |   						      | -            |  -                               | `	 "resultado": -2}`                          |  														  |
| GET         |/api/v1/raices/{idOperacion}   | -            |  -                               | `{"idOperacion": "1","operacion": "√2 4",`    | 200 OK, 404 Not Found, 500 Internal Server Error        | 
|             |   				              | -            |  -                               | `	 "resultado": 2}`                           |  														  |
| GET         |/api/v1/potencias/{idOperacion}| -            |  -                               | `{"idOperacion": "1","operacion": "(2^2)",`   | 200 OK, 404 Not Found, 500 Internal Server Error        | 
|             |   	             			  | -            |  -                               | `	 "resultado": 4}`                           |  														  |
