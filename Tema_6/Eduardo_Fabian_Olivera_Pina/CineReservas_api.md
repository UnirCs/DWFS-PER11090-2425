
# Diseño de la API REST para un sistema de reserva de butacas de cine

En este ejercicio, se diseñará una API REST para gestionar las reservas de butacas en un cine. El sistema permitirá realizar las siguientes operaciones:

- **Películas**: Crear, eliminar y modificar películas.
- **Salas**: Crear, eliminar y modificar (parcialmente) salas.
- **Usuarios**: Crear, eliminar y modificar (parcialmente) usuarios.
- **Reservas**:
  - Crear una reserva para un usuario en una sala.
  - Cancelar una reserva para un usuario en una sala.
  - Modificar una reserva para un usuario en una sala.
- **Pagos**: Registrar un pago de una reserva.

---

## Recursos identificados

1. **/api/v1/movies**:
   - Endpoint para gestionar las películas.
2. **/api/v1/rooms**:
   - Endpoint para gestionar las salas.
3. **/api/v1/users**:
   - Endpoint para gestionar los usuarios.
4. **/api/v1/reservations**:
   - Endpoint para gestionar las reservas.
5. **/api/v1/payments**:
   - Endpoint para registrar pagos de reservas.

---

## Casos de uso

### Caso de uso: Crear películas

| Método HTTP | URI            | Query Params | Request Body                              | Response Body                        | Códigos HTTP de respuesta |
|-------------|----------------|--------------|------------------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/movies | -            | `{"title": "Inception", "genre": "Sci-Fi"}` | `{"id": "m123", "title": "Inception"}` | 201, 400                |

### Caso de uso: Eliminar películas

| Método HTTP | URI            | Query Params | Request Body | Response Body | Códigos HTTP de respuesta |
|-------------|----------------|--------------|--------------|---------------|---------------------------|
| DELETE      | /api/v1/movies/{id} | -          | -            | -             | 204, 404                  |

### Caso de uso: Modificar películas

| Método HTTP | URI            | Query Params | Request Body                              | Response Body                        | Códigos HTTP de respuesta |
|-------------|----------------|--------------|------------------------------------------|--------------------------------------|---------------------------|
| PUT         | /api/v1/movies/{id} | -          | `{"title": "Inception Updated"}`       | `{"id": "m123", "title": "Inception Updated"}` | 200, 400, 404          |

### Caso de uso: Crear salas

| Método HTTP | URI           | Query Params | Request Body                              | Response Body                        | Códigos HTTP de respuesta |
|-------------|---------------|--------------|------------------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/rooms | -            | `{"name": "Room 1", "capacity": 100}` | `{"id": "r123", "name": "Room 1"}` | 201, 400                |

### Caso de uso: Modificar salas parcialmente

| Método HTTP | URI           | Query Params | Request Body                              | Response Body                        | Códigos HTTP de respuesta |
|-------------|---------------|--------------|------------------------------------------|--------------------------------------|---------------------------|
| PATCH       | /api/v1/rooms/{id} | -          | `{"capacity": 120}`                    | `{"id": "r123", "capacity": 120}` | 200, 400, 404            |

### Caso de uso: Crear usuarios

| Método HTTP | URI           | Query Params | Request Body                              | Response Body                        | Códigos HTTP de respuesta |
|-------------|---------------|--------------|------------------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/users | -            | `{"name": "John Doe", "email": "john@example.com"}` | `{"id": "u123", "name": "John Doe"}` | 201, 400               |

### Caso de uso: Crear una reserva

| Método HTTP | URI                | Query Params | Request Body                              | Response Body                        | Códigos HTTP de respuesta |
|-------------|--------------------|--------------|------------------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/reservations | -          | `{"userId": "u123", "roomId": "r123", "seats": ["A1", "A2"]}` | `{"id": "res123", "status": "confirmed"}` | 201, 400, 404          |

### Caso de uso: Registrar un pago

| Método HTTP | URI                | Query Params | Request Body                              | Response Body                        | Códigos HTTP de respuesta |
|-------------|--------------------|--------------|------------------------------------------|--------------------------------------|---------------------------|
| POST        | /api/v1/payments   | -            | `{"reservationId": "res123", "amount": 20.00}` | `{"id": "pay123", "status": "paid"}` | 201, 400, 404           |

---

## Descripción breve de los recursos

- **POST /api/v1/movies**: Permite crear nuevas películas.
- **DELETE /api/v1/movies/{id}**: Permite eliminar una película por su ID.
- **PUT /api/v1/movies/{id}**: Permite modificar una película existente.
- **POST /api/v1/rooms**: Permite crear nuevas salas.
- **PATCH /api/v1/rooms/{id}**: Permite modificar parcialmente una sala.
- **POST /api/v1/users**: Permite crear nuevos usuarios.
- **POST /api/v1/reservations**: Permite crear una nueva reserva.
- **POST /api/v1/payments**: Permite registrar pagos de reservas.
