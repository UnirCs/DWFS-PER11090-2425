# API de un sistema de reserva de butacas de cine

En este ejercicio vamos a diseñar la API REST para el cine en el que hemos estado trabajando en los ejercicios anteriores.

Las operaciones que la API debe soportar son las siguientes:

- Crear, eliminar y modificar películas.
- Crear, eliminar y modificar (parcialmente) salas.
- Crear, eliminar y modificar (parcialmente) usuarios.
- Crear una reserva para un usuario en una sala.
- Cancelar una reserva para un usuario en una sala.
- Modificar una reserva para un usuario en una sala.
- Registrar un pago de una reserva.

### Lista de recursos identificados y descripción

- **Películas**: Crear, eliminar, modificar información de películas.
- **Salas**: Crear, eliminar, modificar (parcialmente) salas de cine.
- **Usuarios**: Crear, eliminar, modificar (parcialmente) los usuarios registrados.
- **Reservas**: Crear, cancelar y modificar las reservas de los usuarios en las salas.
- **Pagos**: Registrar pagos asociados a las reservas.

| **Método HTTP** | **URI**                      | **Query Params**  | **Cuerpo de la Petición**                                                                                          | **Cuerpo de la Respuesta**                                                  | **Códigos HTTP de respuesta**           |
|-----------------|------------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|----------------------------------------|
| POST            | /peliculas                   | -                 | `{ "titulo": "Título de la Película", "director": "Nombre del Director", "duracion": 120, "genero": "Drama" }`    | `{ "mensaje": "Película creada", "idPelicula": "123" }`                   | 201 Created, 400 Bad Request           |
| PUT             | /peliculas/{id}              | -                 | `{ "titulo": "Título Actualizado", "director": "Director Actualizado", "duracion": 130, "genero": "Acción" }`     | `{ "mensaje": "Película actualizada", "idPelicula": "123" }`              | 200 OK, 400 Bad Request, 404 Not Found |
| DELETE          | /peliculas/{id}              | -                 | -                                                                                                                    | `{ "mensaje": "Película eliminada", "idPelicula": "123" }`                | 200 OK, 404 Not Found                 |
| POST            | /salas                       | -                 | `{ "nombre": "Sala 1", "capacidad": 100, "tipoPantalla": "IMAX" }`                                                | `{ "mensaje": "Sala creada", "idSala": "456" }`                           | 201 Created, 400 Bad Request           |
| DELETE          | /salas/{id}                  | -                 | -                                                                                                                    | `{ "mensaje": "Sala eliminada", "idSala": "456" }`                        | 200 OK, 404 Not Found                 |
| PATCH           | /salas/{id}                  | -                 | `{ "capacidad": 120 }`                                                                                              | `{ "mensaje": "Sala actualizada parcialmente", "idSala": "456" }`          | 200 OK, 400 Bad Request, 404 Not Found |
| POST            | /usuarios                    | -                 | `{ "nombre": "Nombre de Usuario", "email": "usuario@example.com", "contraseña": "contraseña123" }`                 | `{ "mensaje": "Usuario creado", "idUsuario": "789" }`                     | 201 Created, 400 Bad Request           |
| DELETE          | /usuarios/{id}               | -                 | -                                                                                                                    | `{ "mensaje": "Usuario eliminado", "idUsuario": "789" }`                  | 200 OK, 404 Not Found                 |
| PATCH           | /usuarios/{id}               | -                 | `{ "email": "nuevoemail@example.com" }`                                                                              | `{ "mensaje": "Usuario actualizado parcialmente", "idUsuario": "789" }`    | 200 OK, 400 Bad Request, 404 Not Found |
| POST            | /reservas                    | -                 | `{ "idUsuario": "789", "idSala": "456", "butacas": [1, 2, 3], "horaReserva": "2025-01-09T20:00:00" }`            | `{ "mensaje": "Reserva creada", "idReserva": "abc123" }`                  | 201 Created, 400 Bad Request, 404 Not Found |
| DELETE          | /reservas/{id}               | -                 | -                                                                                                                    | `{ "mensaje": "Reserva cancelada", "idReserva": "abc123" }`               | 200 OK, 404 Not Found                 |
| PUT             | /reservas/{id}               | -                 | `{ "butacas": [4, 5], "horaReserva": "2025-01-10T20:00:00" }`                                                     | `{ "mensaje": "Reserva actualizada", "idReserva": "abc123" }`             | 200 OK, 400 Bad Request, 404 Not Found |
| POST            | /pagos                       | -                 | `{ "idReserva": "abc123", "monto": 50.00, "metodoPago": "Tarjeta de Crédito" }`                                  | `{ "mensaje": "Pago registrado", "idPago": "xyz789" }`                    | 201 Created, 400 Bad Request, 404 Not Found |



