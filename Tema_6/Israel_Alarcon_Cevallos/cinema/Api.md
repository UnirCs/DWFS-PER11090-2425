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

Recursos identificados:

    Movies
    Rooms
    Users
    Reservations
    Payments
_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
|Método Http 	|       Endpoint 	        |Query Params 	|               Cuerpo JSON de la petición 	                                   |                   Respuesta JSON de la petición 	                                                                |Códigos HTTP respuesta     |
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|   POST        | 	/movies                 |               |   {"title": "string", "year": "integer", "genre": "string"}                  | 	{"id": "integer", "title": "string", "year": "integer", "genre": "string"}                                      | 	201, 400                |
|   PATCH       | 	/movies/{movieId}       |               |   {"title": "string", "year": "integer", "genre": "string"}                  | 	{"id": "integer", "title": "string", "year": "integer", "genre": "string"}                                      | 	200, 404                | 
|   DELETE      | 	/movies/{movieId}       |               |                                                                              |    {"message": "Película borrada con el ID = " MovieId}                                                            |   200, 404                |
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|   POST        | 	/rooms                  |               |   {"movieId": "integer", "seats": "integer" }                                |	{"id": "integer", "seats": "integer", "movieId": "integer"}                                                     | 	201, 400                |
|   PATCH       | 	/rooms/{roomId}         |               |   {"seats": "integer"}                                                       |	{"id": "integer", "seats": "integer", "movieId": "integer"}                                                     | 	200, 404                |
|   DELETE      | 	/rooms/{roomId}         |               |                                                                              | 	{"message": "Sala borrada con el ID = " roomId}                                                                 |   200, 404                |
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|   POST        | 	/users                  |               |   {"idUser": "string", name": "string", "email": "string"}                   | 	{"id": "integer", "idUser": "string", "name": "string", "email": "string"}                                      | 	201, 400                |
|   PATCH       | 	/users/{userId}         |               |   {"idUser": "string", name": "string"}                                      | 	{"id": "integer", "idUser": "string", "name": "string", "email": "string"}                                      | 	200, 404                |
|   DELETE      | 	/users/{userId}         |               |                                                                              |    {"message": "Usuario borrado con el ID = " userId}                                                              |   200, 404                |
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|   POST        | 	/reservations           |               |   {"idUser": "integer", "roomId": "integer","seat": "string"}                | 	{"id": "integer", "idUser": "integer", "roomId": "integer","seat": "string"}                                    | 	201, 400                |
|   PATCH       | 	/reservations/{userId}  |               |   {"seat": "string"}                                                         |	{"id": "integer", "idUser": "integer", "roomId": "integer","sear": "string"}                                    | 	200, 404                |
|   PUT/DELETE  | 	/reservations/{userId}  |               |   {"seat": "string"}                                                         | 	{"message": "Reservación cancelada para el usuario  = " userId}                                                 |   200, 404                |
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|   POST        | 	/payments               |               |   {"bookingId": "integer", "amount": "number", "paymentMethod": "string"}    | 	{"id": "integer", "bookingId": "integer", "amount": "number", "paymentMethod": "string", "status": "string"}    | 	201, 400                |
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------