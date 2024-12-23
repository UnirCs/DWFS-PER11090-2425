# API del sistema de reserva de butacas de cine

Esta API permite gestionar la reserva de butacas del cine, además incluye la gestión de películas, salas y usuarios.

La API incluye las siguientes funcionalidades:

**Gestión de películas:**

• **Crear una película:** Un endpoint que permite crear una nueva película.

• **Modificar una película:** Un endpoint que permite modificar los datos de una película existente.

• **Eliminar una película:** Un endpoint que permite eliminar una película existente.

**Gestión de salas:**

• **Crear una sala:** Un endpoint que permite crear una nueva sala.

• **Modificar una sala:** Un endpoint que permite modificar parcialmente los datos de una sala.

• **Eliminar una sala:** Un endpoint que permite eliminar una sala existente.

**Gestión de usuarios:**

• **Crear un usuario:** Un endpoint que permite crear un nuevo usuario.

• **Modificar un usuario:** Un endpoint que permite modificar parcialmente los datos de un usuario.

• **Eliminar un usuario:** Un endpoint que permite eliminar un usuario existente.

**Gestión de reservas:**

• **Crear una reserva:** Un endpoint que permite crear una reserva para un usuario en una sala.

• **Modificar una reserva:** Un endpoint que permite modificar una reserva existente.

• **Cancelar una reserva:** Un endpoint que permite cancelar una reserva realizada.

• **Registrar un pago:** Un endpoint que permite registrar el pago de una reserva.

**Recursos identificados:**
- Películas (movies)
- Salas (rooms)
- Usuarios (users)
- Reservas (bookings)
- Pagos (payments)

| Método Http | Endpoint           | Query Params | Cuerpo JSON de la petición                                                | Respuesta JSON de la petición                                                                                  | Códigos HTTP de respuesta posibles |
|-------------|--------------------|--------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|------------------------------------|
| POST        | /movies            |              | `{"title": "string", "duration": "integer", "genre": "string"}`           | `{"id": "integer", "title": "string", "duration": "integer", "genre": "string"}`                               | 201 Created, 400 Bad Request       |
| PATCH       | /movies/{movieId}  |              | `{"title": "string", "duration": "integer", "genre": "string"}`           | `{"id": "integer", "title": "string", "duration": "integer", "genre": "string"}`                               | 200 OK, 404 NotFound               |
| DELETE      | /movies/{movieId}  |              |                                                                           |                                                                                                                | 200 OK, 404 Not Found              |
| POST        | /rooms             |              | `{"capacity": "integer", "movieId": "integer"}`                           | `{"id": "integer", "capacity": "integer", "movieId": "integer"}`                                               | 201 Created, 400 Bad Request       |
| PATCH       | /rooms/{roomId}    |              | `{"capacity": "integer"}`                                                 | `{"id": "integer", "capacity": "integer", "movieId": "integer"}`                                               | 200 OK, 404 Not Found              |
| DELETE      | /rooms/{roomId}    |              |                                                                           |                                                                                                                | 200 OK, 404 Not Found              |
| POST        | /users             |              | `{"identification": "string", name": "string", "email": "string"}`        | `{"id": "integer", "identification": "string", "name": "string", "email": "string"}`                           | 201 Created, 400 Bad Request       |
| PATCH       | /users/{userId}    |              | `{"identification": "string", name": "string"}`                           | `{"id": "integer", "identification": "string", "name": "string", "email": "string"}`                           | 200 OK, 404 Not Found              |
| DELETE      | /users/{userId}    |              |                                                                           |                                                                                                                | 200 OK, 404 Not Found              |
| POST        | /bookings          |              | `{"userId": "integer", "roomId": "integer", "seat": "string"}`            | `{"id": "integer", "userId": "integer", "roomId": "integer", "seat": "string"}`                                | 201 Created, 400 Bad Request       |
| PATCH       | /bookings/{userId} |              | `{"seat": "string"}`                                                      | `{"id": "integer", "userId": "integer", "roomId": "integer", "sear": "string"}`                                | 200 OK, 404 Not Found              |
| DELETE      | /bookings/{userId} |              |                                                                           |                                                                                                                | 200 OK, 404 Not Found              |
| POST        | /payments          |              | `{"bookingId": "integer", "amount": "number", "paymentMethod": "string"}` | `{"id": "integer", "bookingId": "integer", "amount": "number", "paymentMethod": "string", "status": "string"}` | 201 Created, 400 Bad Request       |