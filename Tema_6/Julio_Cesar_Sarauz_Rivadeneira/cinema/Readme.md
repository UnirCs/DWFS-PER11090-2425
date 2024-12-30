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

# API de un Sistema de Reserva de Butacas de Cine

Este documento describe la API REST para el sistema de reservas de butacas de cine. La API soporta operaciones relacionadas con la gestión de películas, salas, usuarios, reservas y pagos.

## Recursos Identificados:
- **Película (movies):** Representa una película disponible en el cine.
- **Sala (rooms):** Representa una sala donde se proyectan las películas.
- **Usuario (users):** Representa un usuario registrado en el sistema.
- **Reserva (reservations):** Representa una reserva de butacas realizada por un usuario en una sala.
- **Pago (payments):** Representa el pago realizado por un usuario para una reserva.

## Endpoints:

| Método HTTP | URI                              | Query Params  | Cuerpo de la Petición                                                     | Cuerpo de la Respuesta                                                                    | Códigos de Respuesta                                          |
|-------------|----------------------------------|---------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| POST        | /movies                          | N/A           | `{"title": "Inception", "duration": 120, "genre": "Sci-Fi"}`               | `{"movieId": 1, "title": "Inception", "duration": 120, "genre": "Sci-Fi"}`                  | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /movies/{movieId}                | N/A           | N/A                                                                       | `{"message": "Movie deleted"}`                                                             | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| PATCH       | /movies/{movieId}                | N/A           | `{"title": "Inception - Director's Cut", "duration": 130}`                | `{"movieId": 1, "title": "Inception - Director's Cut", "duration": 130, "genre": "Sci-Fi"}`  | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /rooms                           | N/A           | `{"name": "Sala 1", "capacity": 100}`                                      | `{"roomId": 1, "name": "Sala 1", "capacity": 100}`                                          | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /rooms/{roomId}                  | N/A           | N/A                                                                       | `{"message": "Room deleted"}`                                                              | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| PATCH       | /rooms/{roomId}                  | N/A           | `{"name": "Sala 1 - Renovada", "capacity": 120}`                           | `{"roomId": 1, "name": "Sala 1 - Renovada", "capacity": 120}`                              | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /users                           | N/A           | `{"username": "john_doe", "email": "john@example.com", "password": "1234"}` | `{"userId": 1, "username": "john_doe", "email": "john@example.com"}`                       | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /users/{userId}                  | N/A           | N/A                                                                       | `{"message": "User deleted"}`                                                              | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| PATCH       | /users/{userId}                  | N/A           | `{"email": "john_doe_new@example.com"}`                                    | `{"userId": 1, "username": "john_doe", "email": "john_doe_new@example.com"}`               | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /reservations                    | N/A           | `{"userId": 1, "roomId": 1, "seats": [1, 2, 3]}`                           | `{"reservationId": 1, "userId": 1, "roomId": 1, "seats": [1, 2, 3], "status": "confirmed"}`   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /reservations/{reservationId}    | N/A           | N/A                                                                       | `{"message": "Reservation cancelled"}`                                                     | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| PATCH       | /reservations/{reservationId}    | N/A           | `{"seats": [4, 5, 6]}`                                                    | `{"reservationId": 1, "userId": 1, "roomId": 1, "seats": [4, 5, 6], "status": "modified"}`    | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /payments                        | N/A           | `{"reservationId": 1, "amount": 30.00}`                                   | `{"paymentId": 1, "reservationId": 1, "amount": 30.00, "status": "paid"}`                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |

