API de un sistema de reserva de butacas de cine
En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:

Crear, eliminar y modificar películas.
Crear, eliminar y modificar (parcialmente) salas.
Crear, eliminar y modificar (parcialmente) usuarios.
Crear una reserva para un usuario en una sala.
Cancelar una reserva para un usuario en una sala.
Modificar una reserva para un usuario en una sala.
Registrar un pago de una reserva.

----------------------------------------------------------------------
Recursos identificados:</br>
Película(peliculas): Representa una película en cartelera.</br>
Sala(salas): Representa una sala del cine.</br>
Usuario(usuarios): Representa un cliente del cine.</br>
Reserva(reservas): Representa una reserva puntual del usuario.</br>
Pago(pagos): Representa un pago por reserva.</br>

----------------------------------------------------------------------
| Método HTTP | URI                     | Query Params | Cuerpo de la Petición                                                                            | Cuerpo de la Respuesta                                                                                           | Códigos de Respuesta                                    |
|-------------|-------------------------|--------------|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| POST        | /peliculas              |              | {"titulo":"string", "autor":"string", "year":"integer", "duracion":"integer", "genero":"string"} | {"id":"integer", "titulo":"string", "autor":"string", "year":"integer", "duracion":"integer", "genero":"string"} | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /peliculas/{peliculaId} |              |                                                                                                  | {"mensaje":"Pelicula eliminada"}                                                                                 | 200 OK, 404 Not Found, 500 Internal Server Error        |
| PUT         | /peliculas/{peliculaId} |              | {"titulo":"string", "autor":"string", "year":"integer", "duracion":"integer", "genero":"string"} | {"id":"integer", "titulo":"string", "autor":"string", "year":"integer", "duracion":"integer", "genero":"string"} | 200 OK, 404 Not Found, 500 Internal Server Error        |
| POST        | /salas                  |              | {"numeroSala":"integer", "capacidad":"integer"}                                                  | {"id":"integer", "numeroSala":"integer", "capacidad":"integer"}                                                  | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /salas/{salaId}         |              |                                                                                                  | {"mensaje":"Sala eliminada"}                                                                                     | 200 OK, 404 Not Found, 500 Internal Server Error        |
| PATCH       | /salas/{salaId}         |              | {"capacidad":"integer"}                                                                          | {"id":"integer", "numeroSala":"integer", "capacidad":"integer"}                                                  | 200 OK, 404 Not Found, 500 Internal Server Error        |
| POST        | /usuarios               |              | {"nombre":"string", "correo":"string", "contrasena":"string"}                                    | {"id":"integer", "nombre":"string", "correo":"string", "contrasena":"string"}                                    | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /usuarios/{usuarioId}   |              |                                                                                                  | {"mensaje":"Usuario Eliminado"}                                                                                  | 200 OK, 404 Not Found, 500 Internal Server Error        |
| PATCH       | /usuarios/{usuarioId}   |              | {"nombre":"string"}                                                                              | {"id":"integer", "nombre":"string", "correo":"string", "contrasena":"string"}                                    | 200 OK, 404 Not Found, 500 Internal Server Error        |
| POST        | /reservas               |              | {"usuarioId":"integer", "salaId":"integer", "butacas":"integer"}                                 | {"id":"integer", "usuarioId":"integer", "salaId":"integer", "butacas":"integer"}                                 | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /reservas/{reservaId}   |              |                                                                                                  | {"mensaje":"Reserva Cancelada (eliminada)"}                                                                      | 200 OK, 404 Not Found, 500 Internal Server Error        |
| PATCH       | /reservas/{reservaId}   |              | {"butacas":"integer"}                                                                            | {"id":"integer", "usuarioId":"integer", "salaId":"integer", "butacas":"integer"}                                 | 200 OK, 404 Not Found, 500 Internal Server Error        |
| POST        | /pagos                  |              | {"reservaId":"integer", "costo":"float"}                                                         | {"id":"integer", "reservaId":"integer", "costo":"float"}                                                         | 201 Created, 400 Bad Request, 500 Internal Server Error |




