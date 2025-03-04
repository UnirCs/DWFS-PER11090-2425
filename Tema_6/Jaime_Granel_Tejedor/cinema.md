# API del Sistema de Reserva de Butacas de Cine

Esta API gestiona la creación, modificación y eliminación de películas, salas, usuarios y reservas en un cine, así como los pagos asociados.

## Recursos Identificados

- **/movies**: Representa las películas (create, read, update, delete).
- **/rooms**: Representa las salas (create, read, update, delete).
- **/users**: Representa los usuarios (create, read, update, delete).
- **/reservations**: Representa las reservas (create, read, update, delete).
- **/payments**: Representa los pagos de las reservas.

### Operaciones principales

1. Crear, eliminar y modificar **películas**.
2. Crear, eliminar y modificar (parcialmente) **salas**.
3. Crear, eliminar y modificar (parcialmente) **usuarios**.
4. Crear, cancelar y modificar **reservas** para un usuario en una sala.
5. Registrar un **pago** de una reserva.

### Tabla de Endpoints

| Método Http | Endpoint                | Query Params | Cuerpo JSON de la petición                                                    | Respuesta JSON de la petición                                                                                                    | Códigos HTTP de respuesta posibles                         |
|-------------|-------------------------|-------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| **POST**    | `/api/v1/movies`       | -           | `{ "title": "string", "duration": 120, "genre": "string", "synopsis":"..." }`| `{ "id": 1, "title": "string", "duration": 120, "genre": "string", "synopsis":"..." }`                                            | 201 Created, 400 Bad Request, 500 Internal Server Error     |
| **GET**     | `/api/v1/movies`       | `?title=...` (opcional) | -                                                                     | `{ "movies": [ {...}, {...} ] }`                                                                                                 | 200 OK, 400 Bad Request, 500 Internal Server Error          |
| **GET**     | `/api/v1/movies/{id}`  | -           | -                                                                         | `{ "id": 1, "title": "string", "duration": 120, "genre": "string", "synopsis": "..." }`                                           | 200 OK, 404 Not Found, 500 Internal Server Error            |
| **PUT**     | `/api/v1/movies/{id}`  | -           | `{ "title": "string", "duration": 130, "genre": "string", "synopsis":"..." }`| `{ "id": 1, "title": "string", "duration": 130, "genre": "string", "synopsis":"..." }`                                            | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| **DELETE**  | `/api/v1/movies/{id}`  | -           | -                                                                         | `{ "message": "Movie deleted successfully" }`                                                                                    | 200 OK, 404 Not Found, 500 Internal Server Error            |
| **POST**    | `/api/v1/rooms`        | -           | `{ "name": "Room 1", "capacity": 100 }`                                     | `{ "id": 1, "name": "Room 1", "capacity": 100 }`                                                                                 | 201 Created, 400 Bad Request, 500 Internal Server Error     |
| **PATCH**   | `/api/v1/rooms/{id}`   | -           | `{ "capacity": 120 }`                                                       | `{ "id": 1, "name": "Room 1", "capacity": 120 }`                                                                                 | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| **POST**    | `/api/v1/users`        | -           | `{ "name": "string", "email": "string", "password": "string" }`             | `{ "id": 1, "name": "string", "email": "string" }`                                                                               | 201 Created, 400 Bad Request, 500 Internal Server Error     |
| **POST**    | `/api/v1/reservations` | -           | `{ "userId": 1, "roomId": 2, "seats": [10,11], "movieId": 5 }`               | `{ "id": 10, "userId": 1, "roomId": 2, "seats": [10,11], "movieId": 5, "status": "created" }`                                     | 201 Created, 400 Bad Request, 500 Internal Server Error     |
| **PUT**     | `/api/v1/reservations/{id}` | -       | `{ "seats": [22,23] }`                                                      | `{ "id": 10, "userId": 1, "roomId": 2, "seats": [22,23], "movieId": 5, "status": "modified" }`                                    | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| **DELETE**  | `/api/v1/reservations/{id}` | -    | -                                                                           | `{ "message": "Reservation cancelled successfully" }`                                                                             | 200 OK, 404 Not Found, 500 Internal Server Error            |
| **POST**    | `/api/v1/payments`     | -           | `{ "reservationId": 10, "amount": 12.5, "method": "credit_card" }`          | `{ "paymentId": 55, "reservationId": 10, "status": "paid" }`                                                                     | 201 Created, 400 Bad Request, 500 Internal Server Error     |


