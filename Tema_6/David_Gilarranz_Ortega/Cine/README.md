@ API del sistema de reserva de butacas de cine

## Enunciado

En este ejercicio, vamos a diseñar la API REST para el cine en el que venimos
trabajando en los ejercicios de los anteriores temas. Las operaciones que la API
debe soportar son las siguientes:

- Crear, eliminar y modificar películas.
- Crear, eliminar y modificar (parcialmente) salas.
- Crear, eliminar y modificar (parcialmente) usuarios.
- Crear una reserva para un usuario en una sala.
- Cancelar una reserva para un usuario en una sala.
- Modificar una reserva para un usuario en una sala.
- Registrar un pago de una reserva.

## Recursos Identificados

Se han identificado los siguientes recursos:

- Película (peliculas): representa una película en cartelera.
- Sala (salas): representa una sala del cine.
- Usuario (usuarios): representa un cliente del cine que tiene una cuenta de usuario.
- Reserva (reservas): Representa una reserva puntual de un usuario registrado.
- Pago (pagos): Representa el pago de una reserva.

Se expondrá la siguiente API:

| Método HTTP | Endpoint | Query Params | Cuerpo JSON de la petición | Respuesta JSON de la petición | Códigos HTTP de respuesta posibles |
| :---------: | :-------: | :----------: | ------------------------ | --------------------------- | -------------------------------- |
| POST | /peliculas | | `{ "título": "string", "año": "integer", "duración": {"horas": "integer", "minutos": "integer"}, "sinopsis": "string" }` | `{ "id": "integer" }` | 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error |
| GET | /peliculas/{idPelicula} | | | `{ "id": "integer", "título": "string", "año": "integer", "duración": {"horas": "integer", "minutos": "integer"}, "sinopsis": "string" }` | 200 OK, 404 Not Found |
| PUT | /peliculas/{idPelicula} | | `{ "título": "string", "año": "integer", "duración": {"horas": "integer", "minutos": "integer"}, "sinopsis": "string" }` | | 200 OK, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error |
| DELETE | /peliculas/{idPelicula} | | | | 200 OK, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error | 
| POST | /salas | | `{ "num_filas": "integer", "num_asientos_por_fila": "integer" }` | `{ "id": "integer" }` | 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error |
| GET | /salas/{idSala} | | | `{ "id": "integer", "filas": [ { "fila": "integer", "butacas": [ { "butaca": "integer", "reservada": "boolean" } ] ] }` | 200 OK, 404 Not Found |
| PATCH | /salas/{idSala} | | `{ "fila": "integer", "butaca": "integer", "reservada": "boolean" }` | | 200 OK, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error |
| DELETE | /salas/{idSala} | | | | 200 OK, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error | 
| POST | /usuarios | | `{ "nombre": "string", "contraseña": "string", "email": "string" }` | `{ "id": "integer" }` | 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error |
| GET | /usuarios/{idUsuario} | | | `{ "id": "integer", "nombre": "string", "contraseña": "integer", "email": "string" }` | 200 OK, 404 Not Found |
| PATCH | /usuarios/{idUsuario} | | `{ "nombre": "string" }` o `{ "email": "string" }` o `{ "contraseña": "string" }` | | 200 OK, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error |
| DELETE | /usuarios/{idUsuario} | | | | 200 OK, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error | 
| POST | /usuarios/{idUsuario}/reservas | | `{ "sala": "integer", "butacas": [ { "fila": "integer", "butaca": integer" } ] }` | `{ "id": "integer" }` | 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error |
| GET | /usuarios/{idUsuario}/reservas/{idReserva} | | | `{ "id": "integer", "sala": "integer", "butacas": [ { "fila": "integer", "butaca": integer" } ] }` | 200 OK, 401 Unauthorized, 403 Forbidden, 404 Not Found |
| PUT | /usuarios/{idUsuario}/reservas/{idReserva} | | `{ "sala": "integer", "butacas": [ { "fila": "integer", "butaca": integer" } ] }` | | 200 OK, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error |
| DELETE | /usuarios/{idUsuario}/reservas/{idReserva} | | | | 200 OK, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error | 
| POST | /pagos | | `{ "idUsuario": "integer", "idReserva": "integer", "total": "float" }` | `{ "id": "integer" }` | 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error |
