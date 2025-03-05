API de una calculadora online
En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:

Sumar N elementos (2+2, 2+2+2).
Restar N elementos (2-2, 2-2-2).
Multiplicar 2 elementos (2x2).
Dividir 2 elementos (2/2).
Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
Potencia N-ésima de un número (2^2, 3^3, 4^4).
Detalle de operacion
Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

--------------------------------------------------------------------------
Recursos identificados:</br>
Suma (sumas): Representa la operación suma de n números.</br>
Resta (restas): Representa la operación resta de n números.</br>
Multiplicación (multiplicaciones): Representa la operación multiplicación de n números.</br>
División (divisiones): Representa la operación división de n números.</br>
N-ésima_Raíz (raices): Representa la operación raíz N-ésima de un número.</br>
N-ésima_Potencia (potencias): Representa la operación potencia a la N-ésima de un número.</br>

-----------------------------------------------------------------
| Método HTTP | URI                                  | Query Params | Cuerpo de la Petición                    | Cuerpo de la Respuesta                                                        | Códigos de Respuesta                                    |
|-------------|--------------------------------------|--------------|------------------------------------------|-------------------------------------------------------------------------------|---------------------------------------------------------|
| POST        | /sumas                               |              | {"numeros":["float"]}                    | {"id:"integer", "resultado":"float"}                                          | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /sumas/{sumaId}                      |              |                                          | {"id":"integer", "numeros":["float"], "resultado":"float"}                    | 200 OK, 404 Not Found                                   |
| POST        | /restas                              |              | {"numeros":["float"]}                    | {"id":"integer", "resultado":"float"}                                         | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /restas/{restaId}                    |              |                                          | {"id":"integer", "numeros":["float"], "resultado":"float"}                    | 200 OK, 404 Not Found                                   |
| POST        | /multiplicaciones                    |              | {"numero1":"float", "numero2":"float"}   | {"id":"integer", "resultado":"float"}                                         | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /multiplicaciones/{multiplicacionId} |              |                                          | {"id":"integer", "numero1":"float", "numero2":"float", "resultado":"float"    | 200 OK, 404 Not Found                                   |
| POST        | /divisiones                          |              | {"dividendo":"float", "divisor":"float"} | {"id":"integer", "resultado":"float"}                                         | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /divisiones/{divisionId}             |              |                                          | {"id":"integer", "dividendo":"float", "divisor":"float", "resultado":"float"} | 200 OK, 404 Not Found                                   |
| POST        | /raices                              |              | {"numero":"float", "nraiz":"float"}      | {"id":"integer", "resultado":"float"}                                         | 201 Creates, 400 Bad Request, 500 Internal Server Error |
| GET         | /raices/{raizId}                     |              |                                          | {"id":"integer", "numero":"float", "nraiz":"float", "resultado":"float"}      | 200 OK, 404 Not Found                                   | 
| POST        | /potencias                           |              | {"numero":"float", "npotencia":"float"}  | {"id":"integer", "resultado":"float"}                                         | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /potencias/{potenciaId}              |              |                                          | {"id":"integer", "numero":"float", "npotencia":"float", "resultado":"float"}  | 200 OK, 404 Not Found                                   |



