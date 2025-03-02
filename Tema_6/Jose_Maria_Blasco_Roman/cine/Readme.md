# API de un sistema de reserva de butacas de cine

En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:

Crear (1), eliminar (2) y modificar películas (3).
Crear (4), eliminar (5) y modificar (parcialmente) salas (6).
Crear (7), eliminar (8) y modificar (parcialmente) usuarios (9).
Crear una reserva para un usuario en una sala (10).
Cancelar una reserva para un usuario en una sala (11).
Modificar una reserva para un usuario en una sala (12).
Registrar un pago de una reserva (13).

Recursos:

Películas(movies): Recurso que representa una película.
Salas(rooms): Recurso que representa una sala de cine.
Usuarios(users): Recurso que representa un usuario.
Reservas(reservations): Recurso que representa una reserva de un usuario en una sala de cine.
Pagos(payments): Recurso que representa un pago de una reserva.


| Operación | Método HTTP | URI                | Query Params | Cuerpo de la Petición                                                                                 | Cuerpo de la Respuesta                                                                                                 | Códigos de Respuesta                                           |
|:----------|-------------|--------------------|--------------|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| (1)       | POST        | /movies            | N/A          | { "title": "string", "duration": "integer", "genre": "string" }                                       | { "id": "integer", "title": "string", "duration": "integer", "genre": "string" }                                       | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error  |
| (2)       | DELETE      | /movies/{id}       | N/A          | N/A                                                                                                   | { "message": "Movie deleted" }                                                                                         | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error       |
| (3)       | PUT         | /movies/{id}       | N/A          | { "title": "string", "duration": "integer", "genre": "string" }                                       | { "id": "integer", "title": "string", "duration": "integer", "genre": "string" }                                       | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error       |
| (4)       | POST        | /rooms             | N/A          | { "name": "string", "capacity": "integer" }                                                           | { "id": "integer", "name": "string", "capacity": "integer" }                                                           | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error  |
| (5)       | DELETE      | /rooms/{id}        | N/A          | N/A                                                                                                   | { "message": "Room deleted" }                                                                                          | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error       |
| (6)       | PATCH       | /rooms/{id}        | N/A          | { "name": "string", "capacity": "integer" }                                                           | { "id": "integer", "name": "string", "capacity": "integer" }                                                           | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error       |
| (7)       | POST        | /users             | N/A          | { "name": "string", "email": "string" }                                                               | { "id": "integer", "name": "string", "email": "string" }                                                               | 201 Created<br/>500 Internal Server Error    |
| (8)       | DELETE      | /users/{id}        | N/A          | N/A                                                                                                   | { "message": "User deleted" }                                                                                          | 200 OK<br/>500 Internal Server Error                           |
| (9)       | PATCH       | /users/{id}        | N/A          | { "name": "string", "email": "string" }                                                               | { "id": "integer", "name": "string", "email": "string" }                                                               | 200 OK<br/>500 Internal Server Error                           |
| (10)      | POST        | /reservations      | N/A          | { "user_id": "integer", "room_id": "integer", "seat": "string", "movie": "string", "time": "string" } | { "id": "integer", "user_id": "integer", "room_id": "integer", "seat": "string", "movie": "string", "time": "string" } | 201 Created<br/>500 Internal Server Error                      |
| (11)      | DELETE      | /reservations/{id} | N/A          | N/A                                                                                                   | { "message": "Reservation cancelled successfully" }                                                                    | 200 OK<br/>500 Internal Server Error                           |
| (12)      | PUT         | /reservations/{id} | N/A          | { "seat": "string", "time": "string" }                                                                | { "id": "integer", "user_id": "integer", "room_id": "integer", "seat": "string", "movie": "string", "time": "string" } | 200 OK<br/>500 Internal Server Error                           |
| (13)      | POST        | /payments          | N/A          | { "reservation_id": "integer", "amount": "float" }                                                    | { "id": "integer", "reservation_id": "integer", "amount": "float", "status": "string" }                                | 201 Created<br/>500 Internal Server Error                      |

