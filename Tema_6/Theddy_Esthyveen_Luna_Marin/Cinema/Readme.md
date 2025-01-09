# API de un sistema de reserva de butacas de cine

## Descripción

Esta API REST permite gestionar un sistema de reserva de butacas en un cine. Incluye funcionalidades para la administración de películas, salas, usuarios y reservas. También gestiona pagos asociados a las reservas.

### Funcionalidades soportadas
1. **Gestión de películas:** Crear, eliminar y modificar información de las películas.
2. **Gestión de salas:** Crear, eliminar y modificar información de las salas.
3. **Gestión de usuarios:** Crear, eliminar y modificar información de los usuarios.
4. **Gestión de reservas:** Crear, cancelar y modificar reservas.
5. **Pagos:** Registrar pagos asociados a reservas.

---

## Recursos identificados
- **Películas (peliculas):** Representan las películas disponibles en el cine.
- **Salas (salas):** Representan las salas donde se proyectan las películas.
- **Usuarios (usuarios):** Representan los clientes que realizan reservas.
- **Reservas (reservas):** Representan la asignación de butacas para usuarios en una sala.
- **Pagos (pagos):** Representan los pagos realizados por los usuarios.

---

## Endpoints y métodos HTTP

| Método HTTP | Endpoint                      | Parámetros de consulta | Cuerpo de la petición                              | Cuerpo de la respuesta                                                                       | Códigos HTTP de respuesta                |
|-------------|-------------------------------|------------------------|---------------------------------------------------|---------------------------------------------------------------------------------------------|------------------------------------------|
| POST        | /peliculas                    | -                      | `{"titulo": "string", "duracion": "integer", "genero": "string"}` | `{"id": "integer", "titulo": "string", "duracion": "integer", "genero": "string"}`           | 201 Creado, 400 Solicitud Incorrecta    |
| PUT         | /peliculas/{idPelicula}       | -                      | `{"titulo": "string", "duracion": "integer"}`     | `{"id": "integer", "titulo": "string", "duracion": "integer", "genero": "string"}`           | 200 OK, 404 No Encontrado              |
| DELETE      | /peliculas/{idPelicula}       | -                      | -                                                 | `{"mensaje": "Película eliminada correctamente"}`                                           | 200 OK, 404 No Encontrado              |
| POST        | /salas                        | -                      | `{"numero": "integer", "capacidad": "integer"}`   | `{"id": "integer", "numero": "integer", "capacidad": "integer"}`                             | 201 Creado, 400 Solicitud Incorrecta    |
| PATCH       | /salas/{idSala}               | -                      | `{"capacidad": "integer"}`                        | `{"id": "integer", "numero": "integer", "capacidad": "integer"}`                             | 200 OK, 404 No Encontrado              |
| DELETE      | /salas/{idSala}               | -                      | -                                                 | `{"mensaje": "Sala eliminada correctamente"}`                                               | 200 OK, 404 No Encontrado              |
| POST        | /usuarios                     | -                      | `{"nombre": "string", "email": "string"}`         | `{"id": "integer", "nombre": "string", "email": "string"}`                                   | 201 Creado, 400 Solicitud Incorrecta    |
| DELETE      | /usuarios/{idUsuario}         | -                      | -                                                 | `{"mensaje": "Usuario eliminado correctamente"}`                                            | 200 OK, 404 No Encontrado              |
| POST        | /reservas                     | -                      | `{"idUsuario": "integer", "idSala": "integer", "butacas": ["A1", "A2"], "fecha": "string"}` | `{"id": "integer", "idUsuario": "integer", "idSala": "integer", "butacas": ["A1", "A2"], "fecha": "string"}` | 201 Creado, 400 Solicitud Incorrecta |
| PATCH       | /reservas/{idReserva}         | -                      | `{"butacas": ["A3", "A4"]}`                       | `{"id": "integer", "idUsuario": "integer", "idSala": "integer", "butacas": ["A3", "A4"], "fecha": "string"}` | 200 OK, 404 No Encontrado              |
| DELETE      | /reservas/{idReserva}         | -                      | -                                                 | `{"mensaje": "Reserva cancelada correctamente"}`                                             | 200 OK, 404 No Encontrado              |
| POST        | /pagos                        | -                      | `{"idReserva": "integer", "monto": "decimal", "metodoPago": "string"}` | `{"id": "integer", "idReserva": "integer", "monto": "decimal", "estado": "completado"}`       | 201 Creado, 400 Solicitud Incorrecta    |

---

## Descripción detallada de los endpoints

### **Gestión de películas**
- **Crear película:** `POST /peliculas`
    - Permite registrar una nueva película.
- **Modificar película:** `PUT /peliculas/{idPelicula}`
    - Actualiza los detalles de una película existente.
- **Eliminar película:** `DELETE /peliculas/{idPelicula}`
    - Elimina una película específica.

### **Gestión de salas**
- **Crear sala:** `POST /salas`
    - Permite registrar una nueva sala.
- **Modificar sala:** `PATCH /salas/{idSala}`
    - Modifica parcialmente una sala existente.
- **Eliminar sala:** `DELETE /salas/{idSala}`
    - Elimina una sala específica.

### **Gestión de usuarios**
- **Crear usuario:** `POST /usuarios`
    - Registra un nuevo usuario.
- **Eliminar usuario:** `DELETE /usuarios/{idUsuario}`
    - Elimina un usuario específico.

### **Gestión de reservas**
- **Crear reserva:** `POST /reservas`
    - Permite a un usuario reservar butacas en una sala.
- **Modificar reserva:** `PATCH /reservas/{idReserva}`
    - Modifica las butacas reservadas.
- **Cancelar reserva:** `DELETE /reservas/{idReserva}`
    - Cancela una reserva específica.

### **Pagos**
- **Registrar pago:** `POST /pagos`
    - Registra un pago asociado a una reserva.