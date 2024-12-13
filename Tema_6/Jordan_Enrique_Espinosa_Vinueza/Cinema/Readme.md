## 🎬 **API de Reservas de Butacas de Cine**

### 📌 **Descripción**
Esta API permite gestionar la cartelera de un cine, la administración de salas, usuarios y la reserva de butacas. También incluye el proceso de pago de las reservas.

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

### 📌 **Recursos de la API**

| Método HTTP | URI                                  | Query Params       | Request Body                          | Response Body                                  | Códigos HTTP de respuesta |
|------------|--------------------------------------|--------------------|--------------------------------------|-----------------------------------------------|---------------------------|
| GET        | `/api/v1/peliculas`                 | -                  | -                                    | `[{"id": 1, "titulo": "Inception", "duracion": 148}]` | 200 |
| POST       | `/api/v1/peliculas`                 | -                  | `{ "titulo": "Inception", "duracion": 148 }` | `{ "id": 1, "titulo": "Inception" }` | 201, 400 |
| PUT        | `/api/v1/peliculas/{id}`            | -                  | `{ "titulo": "Interstellar" }`       | `{ "id": 1, "titulo": "Interstellar" }` | 200, 400, 404 |
| DELETE     | `/api/v1/peliculas/{id}`            | -                  | -                                    | `{ "mensaje": "Película eliminada" }` | 200, 404 |
| GET        | `/api/v1/salas`                     | -                  | -                                    | `[{"id": 1, "nombre": "Sala 1", "capacidad": 100}]` | 200 |
| POST       | `/api/v1/salas`                     | -                  | `{ "nombre": "Sala 1", "capacidad": 100 }` | `{ "id": 1, "nombre": "Sala 1" }` | 201, 400 |
| PATCH      | `/api/v1/salas/{id}`                | -                  | `{ "capacidad": 120 }`               | `{ "id": 1, "capacidad": 120 }` | 200, 400, 404 |
| DELETE     | `/api/v1/salas/{id}`                | -                  | -                                    | `{ "mensaje": "Sala eliminada" }` | 200, 404 |
| GET        | `/api/v1/usuarios`                  | -                  | -                                    | `[{"id": 1, "nombre": "Juan Perez"}]` | 200 |
| POST       | `/api/v1/usuarios`                  | -                  | `{ "nombre": "Juan Perez", "email": "juan@mail.com" }` | `{ "id": 1, "nombre": "Juan Perez" }` | 201, 400 |
| PATCH      | `/api/v1/usuarios/{id}`             | -                  | `{ "email": "juan.nuevo@mail.com" }` | `{ "id": 1, "email": "juan.nuevo@mail.com" }` | 200, 400, 404 |
| DELETE     | `/api/v1/usuarios/{id}`             | -                  | -                                    | `{ "mensaje": "Usuario eliminado" }` | 200, 404 |
| POST       | `/api/v1/reservas`                  | -                  | `{ "usuario_id": 1, "sala_id": 2, "butacas": [5,6,7] }` | `{ "id": 10, "usuario_id": 1, "sala_id": 2, "butacas": [5,6,7] }` | 201, 400 |
| DELETE     | `/api/v1/reservas/{id}`             | -                  | -                                    | `{ "mensaje": "Reserva cancelada" }` | 200, 404 |
| PUT        | `/api/v1/reservas/{id}`             | -                  | `{ "butacas": [8,9,10] }`            | `{ "id": 10, "butacas": [8,9,10] }` | 200, 400, 404 |
| POST       | `/api/v1/pagos`                     | -                  | `{ "reserva_id": 10, "monto": 15.00, "metodo": "tarjeta" }` | `{ "mensaje": "Pago registrado", "estado": "Confirmado" }` | 201, 400 |

---

### 📌 **Descripción de los Recursos**

#### 🎞️ **Gestión de Películas**
- **GET `/api/v1/peliculas`**: Obtiene la lista de películas disponibles.
- **POST `/api/v1/peliculas`**: Crea una nueva película.
- **PUT `/api/v1/peliculas/{id}`**: Modifica completamente una película existente.
- **DELETE `/api/v1/peliculas/{id}`**: Elimina una película por su ID.

#### 🎭 **Gestión de Salas**
- **GET `/api/v1/salas`**: Obtiene la lista de salas disponibles.
- **POST `/api/v1/salas`**: Crea una nueva sala de cine.
- **PATCH `/api/v1/salas/{id}`**: Modifica parcialmente una sala (por ejemplo, su capacidad).
- **DELETE `/api/v1/salas/{id}`**: Elimina una sala por su ID.

#### 👤 **Gestión de Usuarios**
- **GET `/api/v1/usuarios`**: Obtiene la lista de usuarios registrados.
- **POST `/api/v1/usuarios`**: Crea un nuevo usuario.
- **PATCH `/api/v1/usuarios/{id}`**: Modifica parcialmente los datos de un usuario.
- **DELETE `/api/v1/usuarios/{id}`**: Elimina un usuario por su ID.

#### 🎟️ **Gestión de Reservas**
- **POST `/api/v1/reservas`**: Crea una nueva reserva para un usuario en una sala específica.
- **DELETE `/api/v1/reservas/{id}`**: Cancela una reserva existente.
- **PUT `/api/v1/reservas/{id}`**: Modifica una reserva existente (por ejemplo, cambiar las butacas seleccionadas).

#### 💳 **Gestión de Pagos**
- **POST `/api/v1/pagos`**: Registra el pago de una reserva, indicando el método de pago y el monto.

