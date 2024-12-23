# API para un sistema de reserva de butacas de cine

Las operaciones que la API debe soportar son las siguientes:
- **Gestión de Películas:** Crear, eliminar y modificar películas.
- **Gestión de Salas:** Crear, eliminar y modificar salas (modificaciones parciales incluidas).
- **Gestión de Usuarios:** Crear, eliminar y modificar usuarios (modificaciones parciales incluidas).
- **Gestión de Reservas:** Crear, eliminar y modificar reservas para un usuario en una sala.
- **Pagos:** Registrar un pago de una reserva.

**Recursos identificados:**
- Película (movies): Representa una película en cartelera.
- Sala (rooms): Representa una sala de cine.
- Usuario (users): Representa un usuario del sistema.
- Reserva (reservations): Representa una reserva de butacas en una sala por parte de un usuario.
- Pago (payments): Representa el pago de una reserva.

| Método HTTP | Endpoint                       | Query Params | Cuerpo JSON de la petición                                   | Respuesta JSON de la petición                                                                                                   | Códigos HTTP de respuesta posibles                     |
|-------------|--------------------------------|--------------|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| POST        | /movies                        |              | `{ "title": "string", "duration": "integer", "genre": "string" }` | `{ "movieId": 1, "title": "string", "duration": "integer", "genre": "string" }`                                     | 201 Created, 400 Bad Request                           |
| DELETE      | /movies/{movieId}             |              | N/A                                                         | `{ "message": "Movie deleted successfully" }`                                                                              | 200 OK, 404 Not Found                                  |
| PATCH       | /movies/{movieId}             |              | `{ "title": "string" }`                                  | `{ "movieId": 1, "title": "string" }`                                                                                   | 200 OK, 400 Bad Request, 404 Not Found                 |
| POST        | /rooms                        |              | `{ "name": "string", "capacity": "integer" }`         | `{ "roomId": 1, "name": "string", "capacity": "integer" }`                                                           | 201 Created, 400 Bad Request                           |
| DELETE      | /rooms/{roomId}               |              | N/A                                                         | `{ "message": "Room deleted successfully" }`                                                                               | 200 OK, 404 Not Found                                  |
| PATCH       | /rooms/{roomId}               |              | `{ "capacity": "integer" }`                              | `{ "roomId": 1, "name": "string", "capacity": "integer" }`                                                          | 200 OK, 400 Bad Request, 404 Not Found                 |
| POST        | /users                        |              | `{ "name": "string", "email": "string", "password": "string" }` | `{ "userId": 1, "name": "string", "email": "string" }`                                                               | 201 Created, 400 Bad Request                           |
| DELETE      | /users/{userId}               |              | N/A                                                         | `{ "message": "User deleted successfully" }`                                                                              | 200 OK, 404 Not Found                                  |
| PATCH       | /users/{userId}               |              | `{ "email": "string" }`                                  | `{ "userId": 1, "name": "string", "email": "string" }`                                                              | 200 OK, 400 Bad Request, 404 Not Found                 |
| POST        | /reservations                 |              | `{ "userId": 1, "roomId": 1, "seats": [1, 2] }`        | `{ "reservationId": 1, "userId": 1, "roomId": 1, "seats": [1, 2], "status": "reserved" }`                          | 201 Created, 400 Bad Request, 404 Not Found            |
| DELETE      | /reservations/{reservationId} |              | N/A                                                         | `{ "message": "Reservation cancelled successfully" }`                                                                     | 200 OK, 404 Not Found                                  |
| PATCH       | /reservations/{reservationId} |              | `{ "seats": [3, 4] }`                                     | `{ "reservationId": 1, "userId": 1, "roomId": 1, "seats": [3, 4], "status": "modified" }`                          | 200 OK, 400 Bad Request, 404 Not Found                 |
| POST        | /payments                     |              | `{ "reservationId": 1, "amount": 100.00 }`              | `{ "paymentId": 1, "reservationId": 1, "amount": 100.00, "status": "paid" }`                                        | 201 Created, 400 Bad Request, 404 Not Found            |

**Notas adicionales:**
- La API debe manejar relaciones entre los recursos, como usuarios, salas y reservas.
- Se deben validar los datos de entrada y garantizar la consistencia de las operaciones.
- Los identificadores únicos (`movieId`, `roomId`, `userId`, `reservationId`, `paymentId`) permiten la gestión eficiente de los recursos.
