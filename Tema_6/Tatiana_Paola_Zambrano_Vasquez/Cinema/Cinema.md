# API de un sistema de reserva de butacas de cine

En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:

-   Crear, eliminar y modificar películas.
-   Crear, eliminar y modificar (parcialmente) salas.
-   Crear, eliminar y modificar (parcialmente) usuarios.
-   Crear una reserva para un usuario en una sala.
-   Cancelar una reserva para un usuario en una sala.
-   Modificar una reserva para un usuario en una sala.
-   Registrar un pago de una reserva.
### Lista de recursos identificados y descripción

-   **Películas**: Crear, eliminar, modificar  información de películas.
-   **Salas**: Crear, eliminar, modificar (parcialmente) salas de cine.
-   **Usuarios**: Crear, eliminar, modificar (parcialmente) los usuarios registrados.
-   **Reservas**: Crear, cancelar y modificar las reservas de los usuarios en las salas.
-   **Pagos**: Registrar pagos asociados a las reservas.


| **Método HTTP** | **URI**                      | **Query Params**  | **Request Body**                                                                                          | **Response Body**                                                   | **Códigos HTTP de respuesta**           |
|-----------------|------------------------------|-------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|----------------------------------------|
| POST            | /movies                       | -                 | `{ "title": "Movie Title", "director": "Director Name", "duration": 120, "genre": "Drama" }`               | `{ "message": "Movie created", "movieId": "123" }`                   | 201 Created, 400 Bad Request           |
| PUT             | /movies/{id}                  | -                 | `{ "title": "Updated Movie Title", "director": "Updated Director", "duration": 130, "genre": "Action" }`   | `{ "message": "Movie updated", "movieId": "123" }`                   | 200 OK, 400 Bad Request, 404 Not Found |
| DELETE          | /movies/{id}                  | -                 | -                                                                                                          | `{ "message": "Movie deleted", "movieId": "123" }`                   | 200 OK, 404 Not Found                 |
| POST            | /rooms                        | -                 | `{ "name": "Room 1", "capacity": 100, "screenType": "IMAX" }`                                              | `{ "message": "Room created", "roomId": "456" }`                     | 201 Created, 400 Bad Request           |
| DELETE            | /rooms/{id}                   | -                 | -                                          | `{ "message": "Room deleted", "roomId": "456" }`                     | 200 OK, 404 Not Found |
| PATCH           | /rooms/{id}                   | -                 | `{ "capacity": 120 }`                                                                                      | `{ "message": "Room partially updated", "roomId": "456" }`           | 200 OK, 400 Bad Request, 404 Not Found 
| POST            | /users                        | -                 | `{ "name": "User Name", "email": "user@example.com", "password": "password123" }`                          | `{ "message": "User created", "userId": "789" }`                     | 201 Created, 400 Bad Request           |
| DELETE          | /users/{id}                   | -                 | -                                                                                                          | `{ "message": "User deleted", "userId": "789" }`                     | 200 OK, 404 Not Found                 |
| PATCH           | /users/{id}                   | -                 | `{ "email": "newemail@example.com" }`                                                                      | `{ "message": "User partially updated", "userId": "789" }`           | 200 OK, 400 Bad Request, 404 Not Found |
| POST            | /reservations                 | -                 | `{ "userId": "789", "roomId": "456", "seats": [1, 2, 3], "reservationTime": "2025-01-09T20:00:00" }`      | `{ "message": "Reservation created", "reservationId": "abc123" }`    | 201 Created, 400 Bad Request, 404 Not Found |
| DELETE          | /reservations/{id}            | -                 | -                                                                                                          | `{ "message": "Reservation cancelled", "reservationId": "abc123" }`  | 200 OK, 404 Not Found                 |
| PUT             | /reservations/{id}            | -                 | `{ "seats": [4, 5], "reservationTime": "2025-01-10T20:00:00" }`                                           | `{ "message": "Reservation updated", "reservationId": "abc123" }`    | 200 OK, 400 Bad Request, 404 Not Found |
| POST            | /payments                     | -                 | `{ "reservationId": "abc123", "amount": 50.00, "paymentMethod": "Credit Card" }`                          | `{ "message": "Payment registered", "paymentId": "xyz789" }`         | 201 Created, 400 Bad Request, 404 Not Found |



