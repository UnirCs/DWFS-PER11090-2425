# API REST Sistema de Reserva de Butacas de Cine

Esta documentación describe los detalles del diseño de la API REST para gestionar las reservas de butacas de cine, incluyendo operaciones sobre películas, salas, usuarios y reservas.

## Tabla de Endpoints

| Método HTTP | URI                         | Query Params | Request Body                                                                              | Response Body                                                                 | Códigos HTTP de Respuesta |
|-------------|-----------------------------|--------------|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|----------------------------|
| POST        | /movies                     | -            | `{ "title": "Inception", "director": "Christopher Nolan", "duration": 148 }`       | `{ "movieId": "m123", "message": "Movie created successfully" }`       | 201, 400                   |
| PUT         | /movies/{movieId}          | -            | `{ "title": "Inception 2", "duration": 150 }`                                        | `{ "message": "Movie updated successfully" }`                              | 200, 404, 400              |
| DELETE      | /movies/{movieId}          | -            | -                                                                                        | `{ "message": "Movie deleted successfully" }`                              | 200, 404                   |
| POST        | /halls                      | -            | `{ "name": "Main Hall", "capacity": 200 }`                                           | `{ "hallId": "h456", "message": "Hall created successfully" }`         | 201, 400                   |
| PATCH       | /halls/{hallId}            | -            | `{ "capacity": 250 }`                                                                  | `{ "message": "Hall updated successfully" }`                                | 200, 404, 400              |
| DELETE      | /halls/{hallId}            | -            | -                                                                                        | `{ "message": "Hall deleted successfully" }`                                | 200, 404                   |
| POST        | /users                      | -            | `{ "name": "John Doe", "email": "john.doe@example.com" }`                          | `{ "userId": "u789", "message": "User created successfully" }`         | 201, 400                   |
| PATCH       | /users/{userId}            | -            | `{ "email": "new.email@example.com" }`                                               | `{ "message": "User updated successfully" }`                                | 200, 404, 400              |
| DELETE      | /users/{userId}            | -            | -                                                                                        | `{ "message": "User deleted successfully" }`                                | 200, 404                   |
| POST        | /reservations              | -            | `{ "userId": "u789", "hallId": "h456", "seats": ["A1", "A2"] }`               | `{ "reservationId": "r101", "message": "Reservation created successfully" }` | 201, 400                   |
| DELETE      | /reservations/{reservationId} | -          | -                                                                                        | `{ "message": "Reservation canceled successfully" }`                        | 200, 404                   |
| PATCH       | /reservations/{reservationId} | -          | `{ "seats": ["A3", "A4"] }`                                                        | `{ "message": "Reservation updated successfully" }`                         | 200, 404, 400              |
| POST        | /reservations/{reservationId}/payment | -      | `{ "amount": 20.0, "paymentMethod": "credit_card" }`                                | `{ "message": "Payment registered successfully" }`                          | 201, 400                   |

## Descripción de los recursos

### `/movies`
- **Descripción:** Gestiona las películas del sistema.
- **Operaciones:**
  - **POST:** Crear una película.
  - **PUT:** Modificar una película existente usando su `movieId`.
  - **DELETE:** Eliminar una película usando su `movieId`.

### `/halls`
- **Descripción:** Gestiona las salas del cine.
- **Operaciones:**
  - **POST:** Crear una sala.
  - **PATCH:** Modificar parcialmente una sala existente usando su `hallId`.
  - **DELETE:** Eliminar una sala usando su `hallId`.

### `/users`
- **Descripción:** Gestiona los usuarios del sistema.
- **Operaciones:**
  - **POST:** Crear un usuario.
  - **PATCH:** Modificar parcialmente un usuario existente usando su `userId`.
  - **DELETE:** Eliminar un usuario usando su `userId`.

### `/reservations`
- **Descripción:** Gestiona las reservas en el sistema.
- **Operaciones:**
  - **POST:** Crear una reserva para un usuario en una sala.
  - **DELETE:** Cancelar una reserva usando su `reservationId`.
  - **PATCH:** Modificar una reserva existente usando su `reservationId`.

### `/reservations/{reservationId}/payment`
- **Descripción:** Registra un pago asociado a una reserva.
- **Operaciones:**
  - **POST:** Registrar un pago para una reserva existente usando su `reservationId`.
