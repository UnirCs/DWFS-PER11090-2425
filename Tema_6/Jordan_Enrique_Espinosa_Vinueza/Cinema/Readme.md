## 🎬 **API de Reservas de Butacas de Cine**

### 📌 **Descripción**
Esta API permite gestionar la cartelera de un cine, la administración de salas, usuarios y la reserva de butacas. También incluye el proceso de pago de las reservas

### 📌 **Operaciones Soportadas**
La API debe permitir:
1. **Películas**: Crear, eliminar y modificar información.
2. **Salas**: Crear, eliminar y modificar parcialmente la información de salas.
3. **Usuarios**: Crear, eliminar y modificar parcialmente los datos de los usuarios.
4. **Reservas**:
    - Crear una reserva para un usuario en una sala.
    - Cancelar una reserva existente.
    - Modificar una reserva existente.
5. **Pagos**: Registrar el pago de una reserva.

---
**Recursos identificados:**
- Películas (movies)
- Salas (rooms)
- Usuarios (users)
- Reservas (bookings)
- Pagos (payments)

### 📌 **Recursos de la API**

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



