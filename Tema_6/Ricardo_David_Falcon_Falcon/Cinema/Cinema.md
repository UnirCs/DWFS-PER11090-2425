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
## Recursos Identificados

1. **Películas (`peliculas`)**  
   Representa las películas disponibles en el cine. Se pueden crear, eliminar y modificar.

2. **Salas (`salas`)**  
   Representa las salas de cine donde se proyectan las películas. Se pueden crear, eliminar y modificar parcialmente.

3. **Usuarios (`usuarios`)**  
   Representa a los clientes del cine que pueden realizar reservas. Se pueden crear, eliminar y modificar parcialmente.

4. **Reservas (`reservas`)**  
   Representa la reserva de una butaca en una sala por un usuario. Se pueden crear, modificar y cancelar.

5. **Pagos (`pagos`)**  
   Representa el pago de una reserva realizada por un usuario.

## Endpoints

| Método HTTP | Endpoint                | Cuerpo JSON de la petición               | Respuesta JSON de la petición              | Códigos HTTP de respuesta posibles |
|------------|-------------------------|--------------------------------|---------------------------------|-------------------------------|
| `POST`     | `/peliculas`            | `{ "titulo": "Inception", "duracion": 148, "genero": "Ciencia Ficción" }` | `{ "id": 1, "titulo": "Inception", "duracion": 148, "genero": "Ciencia Ficción" }` | `201` (Creado), `400` (Solicitud inválida) |
| `PUT`      | `/peliculas/{id}`        | `{ "titulo": "Inception", "duracion": 150 }` | `{ "id": 1, "titulo": "Inception", "duracion": 150, "genero": "Ciencia Ficción" }` | `200` (Éxito), `400` (Solicitud inválida), `404` (No encontrado) |
| `DELETE`   | `/peliculas/{id}`        | `N/A`                         | `{ "mensaje": "Película eliminada correctamente" }` | `200` (Éxito), `404` (No encontrado) |
| `POST`     | `/salas`                | `{ "nombre": "Sala 1", "capacidad": 100 }` | `{ "id": 1, "nombre": "Sala 1", "capacidad": 100 }` | `201` (Creado), `400` (Solicitud inválida) |
| `PATCH`    | `/salas/{id}`            | `{ "capacidad": 120 }`         | `{ "id": 1, "nombre": "Sala 1", "capacidad": 120 }` | `200` (Éxito), `400` (Solicitud inválida), `404` (No encontrado) |
| `DELETE`   | `/salas/{id}`            | `N/A`                         | `{ "mensaje": "Sala eliminada correctamente" }` | `200` (Éxito), `404` (No encontrado) |
| `POST`     | `/usuarios`              | `{ "nombre": "Juan Pérez", "email": "juan@example.com" }` | `{ "id": 1, "nombre": "Juan Pérez", "email": "juan@example.com" }` | `201` (Creado), `400` (Solicitud inválida) |
| `PATCH`    | `/usuarios/{id}`         | `{ "email": "nuevoemail@example.com" }` | `{ "id": 1, "nombre": "Juan Pérez", "email": "nuevoemail@example.com" }` | `200` (Éxito), `400` (Solicitud inválida), `404` (No encontrado) |
| `DELETE`   | `/usuarios/{id}`         | `N/A`                         | `{ "mensaje": "Usuario eliminado correctamente" }` | `200` (Éxito), `404` (No encontrado) |
| `POST`     | `/reservas`              | `{ "usuario_id": 1, "sala_id": 1, "butaca": 15 }` | `{ "id": 1, "usuario_id": 1, "sala_id": 1, "butaca": 15, "estado": "reservado" }` | `201` (Creado), `400` (Solicitud inválida), `409` (Conflicto: Butaca ocupada) |
| `PATCH`    | `/reservas/{id}`         | `{ "butaca": 20 }`            | `{ "id": 1, "usuario_id": 1, "sala_id": 1, "butaca": 20, "estado": "modificado" }` | `200` (Éxito), `400` (Solicitud inválida), `404` (No encontrado), `409` (Conflicto: Butaca ocupada) |
| `DELETE`   | `/reservas/{id}`         | `N/A`                         | `{ "mensaje": "Reserva cancelada correctamente" }` | `200` (Éxito), `404` (No encontrado) |
| `POST`     | `/pagos`                 | `{ "reserva_id": 1, "monto": 10.5, "metodo": "tarjeta" }` | `{ "id": 1, "reserva_id": 1, "monto": 10.5, "estado": "pagado" }` | `201` (Creado), `400` (Solicitud inválida), `404` (Reserva no encontrada), `409` (Conflicto: Reserva ya pagada) |

## Descripción de Códigos de Respuesta

- **`200 OK`**: La operación se realizó con éxito.
- **`201 Created`**: El recurso fue creado exitosamente.
- **`400 Bad Request`**: La solicitud es inválida (por ejemplo, datos faltantes o incorrectos en el JSON).
- **`404 Not Found`**: El recurso solicitado no existe en el sistema.
- **`409 Conflict`**: Existe un conflicto con la solicitud (por ejemplo, una butaca ya está ocupada o una reserva ya fue pagada).

## Notas:
- Los IDs de los recursos (`peliculas`, `salas`, `usuarios`, `reservas`, `pagos`) son numéricos y generados automáticamente.
- Los errores devuelven mensajes detallados en la respuesta para indicar el motivo del fallo.