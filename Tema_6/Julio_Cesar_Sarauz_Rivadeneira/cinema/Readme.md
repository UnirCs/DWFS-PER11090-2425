# API de un sistema de reserva de butacas de cine

En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:

- Crear, eliminar y modificar películas.
- Crear, eliminar y modificar (parcialmente) salas.
- Crear, eliminar y modificar (parcialmente) usuarios.
- Crear una reserva para un usuario en una sala.
- Cancelar una reserva para un usuario en una sala.
- Modificar una reserva para un usuario en una sala.
- Registrar un pago de una reserva.

# API de un Sistema de Reserva de Butacas de Cine

Este REDME describe la API REST para el sistema de reservas de butacas de cine. La API soporta operaciones relacionadas con la gestión de películas, salas, usuarios, reservas y pagos.

## Recursos Identificados:
- **Película (peliculas):** Representa una película disponible en el cine.
- **Sala (sala):** Representa una sala donde se proyectan las películas.
- **Usuario (usuario):** Representa un usuario registrado en el sistema.
- **Reserva (reserva):** Representa una reserva de butacas realizada por un usuario en una sala.
- **Pago (pago):** Representa el pago realizado por un usuario para una reserva.

## Endpoints:

| Método HTTP | URI | Query Params  | Cuerpo de la Petición | Cuerpo de la Respuesta | Códigos de Respuesta |
|-------------|----------------------------------|---------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| POST  | /peliculas | N/A | `{"titulo": "Inception", "duracion": 120, "genero": "Sci-Fi"}` | `{"peliculaId": 1, "titulo": "Inception", "duracion": 120, "genero": "Sci-Fi"}`| 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE| /peliculas/{peliculaId}| N/A | N/A | `{"mensaje": "pelicula eliminada"}`                                                                                           | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| PATCH | /peliculas/{peliculaId}| N/A | `{"titulo": "Inception - Director's Cut", "duracion": 130}`| `{"peliculaId": 1, "titulo": "Inception - Director's Cut", "duracion": 130, "genero": "Sci-Fi"}`  | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST  | /salas   | N/A | `{"nombre": "Sala 1", "capacidad": 100}`  | `{"salaId": 1, "nombre": "Sala 1", "capacidad": 100}`| 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE| /salas/{salaId}| N/A| N/A | `{"mensaje": "sala eliminada"}`  | 200 OK<br/>404 Not Found<br/>500 Internal Server Error  |
| PATCH | /salas/{salaId}| N/A | `{"nombre": "Sala 1 - Renovada", "capacidad": 120}`   | `{"salaId": 1, "nombre": "Sala 1 - Renovada", "capacidad": 120}`| 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST  | /usuarios   | N/A | `{"usuario": "john_doe", "email": "john@example.com", "password": "1234"}` | `{"usuarioId": 1, "usuario": "john_doe", "email": "john@example.com"}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE| /usuarios/{usuarioId}| N/A | N/A | `{"mensaje": "usuario eliminada"}`  | 200 OK<br/>404 Not Found<br/>500 Internal Server Error  |
| PATCH | /usuarios/{usuarioId}| N/A | `{"email": "john_doe_new@example.com"}`| `{"usuarioId": 1, "usuario": "john_doe", "email": "john_doe_new@example.com"}`   | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST  | /reservas  | N/A | `{"usuarioId": 1, "salaId": 1, "asientos": [1, 2, 3]}`   | `{"reservaId": 1, "usuarioId": 1, "salaId": 1, "asientos": [1, 2, 3], "estado": "confirmado"}`   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE| /reservas/{reservaId}| N/A | N/A | `{"mensaje": "Reserva cancelada"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error  |
| PATCH | /reservas/{reservaId}| N/A | `{"asientos": [4, 5, 6]}`| `{"reservaId": 1, "usuarioId": 1, "salaId": 1, "asientos": [4, 5, 6], "estado": "modificado"}`| 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST  | /pagos| N/A | `{"reservaId": 1, "total": 30.00}` | `{"pagoId": 1, "reservaId": 1, "total": 30.00, "estado": "pagado"}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |