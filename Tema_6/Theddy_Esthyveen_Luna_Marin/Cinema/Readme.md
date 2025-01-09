
# API de un sistema de reserva de butacas de cine

## Descripción

Esta API REST permite gestionar un sistema de reserva de butacas en un cine. Incluye funcionalidades para la administración de películas, salas, usuarios y reservas. También gestiona pagos asociados a las reservas.

---

## Funcionalidades soportadas

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

### Películas
| Método HTTP | Endpoint                      | Cuerpo de la petición                              | Respuesta JSON | Códigos HTTP                |
|-------------|-------------------------------|---------------------------------------------------|----------------|-----------------------------|
| POST        | /peliculas                    | `{"titulo": "string", "duracion": "integer", "genero": "string"}` | `{"id": "integer", "titulo": "string", "duracion": "integer", "genero": "string"}` | 201, 400 |
| PUT         | /peliculas/{idPelicula}       | `{"titulo": "string", "duracion": "integer"}`     | `{"id": "integer", "titulo": "string", "duracion": "integer", "genero": "string"}` | 200, 404 |
| DELETE      | /peliculas/{idPelicula}       | -                                                 | `{"mensaje": "Película eliminada correctamente"}` | 200, 404 |

### Salas
| Método HTTP | Endpoint                      | Cuerpo de la petición                              | Respuesta JSON | Códigos HTTP                |
|-------------|-------------------------------|---------------------------------------------------|----------------|-----------------------------|
| POST        | /salas                        | `{"numero": "integer", "capacidad": "integer"}`   | `{"id": "integer", "numero": "integer", "capacidad": "integer"}` | 201, 400 |
| PATCH       | /salas/{idSala}               | `{"capacidad": "integer"}`                        | `{"id": "integer", "numero": "integer", "capacidad": "integer"}` | 200, 404 |
| DELETE      | /salas/{idSala}               | -                                                 | `{"mensaje": "Sala eliminada correctamente"}` | 200, 404 |

### Usuarios
| Método HTTP | Endpoint                      | Cuerpo de la petición                              | Respuesta JSON | Códigos HTTP                |
|-------------|-------------------------------|---------------------------------------------------|----------------|-----------------------------|
| POST        | /usuarios                     | `{"nombre": "string", "email": "string"}`         | `{"id": "integer", "nombre": "string", "email": "string"}` | 201, 400 |
| DELETE      | /usuarios/{idUsuario}         | -                                                 | `{"mensaje": "Usuario eliminado correctamente"}` | 200, 404 |

### Reservas
| Método HTTP | Endpoint                      | Cuerpo de la petición                              | Respuesta JSON | Códigos HTTP                |
|-------------|-------------------------------|---------------------------------------------------|----------------|-----------------------------|
| POST        | /reservas                     | `{"idUsuario": "integer", "idSala": "integer", "butacas": ["A1", "A2"], "fecha": "string"}` | `{"id": "integer", "idUsuario": "integer", "idSala": "integer", "butacas": ["A1", "A2"], "fecha": "string"}` | 201, 400 |
| PATCH       | /reservas/{idReserva}         | `{"butacas": ["A3", "A4"]}`                       | `{"id": "integer", "idUsuario": "integer", "idSala": "integer", "butacas": ["A3", "A4"], "fecha": "string"}` | 200, 404 |
| DELETE      | /reservas/{idReserva}         | -                                                 | `{"mensaje": "Reserva cancelada correctamente"}` | 200, 404 |

### Pagos
| Método HTTP | Endpoint                      | Cuerpo de la petición                              | Respuesta JSON | Códigos HTTP                |
|-------------|-------------------------------|---------------------------------------------------|----------------|-----------------------------|
| POST        | /pagos                        | `{"idReserva": "integer", "monto": "decimal", "metodoPago": "string"}` | `{"id": "integer", "idReserva": "integer", "monto": "decimal", "estado": "completado"}` | 201, 400, 422 |

---

## Ejemplos de peticiones y respuestas
### Crear reserva
**POST /reservas**
#### Petición:
```json
{
  "idUsuario": 1,
  "idSala": 2,
  "butacas": ["A1", "A2"],
  "fecha": "2025-01-15"
}
```
#### Respuesta:
```json
{
  "id": 101,
  "idUsuario": 1,
  "idSala": 2,
  "butacas": ["A1", "A2"],
  "fecha": "2025-01-15"
}
```

### Registrar pago
**POST /pagos**
#### Petición:
```json
{
  "idReserva": 101,
  "monto": 20.00,
  "metodoPago": "tarjeta"
}
```
#### Respuesta:
```json
{
  "id": 201,
  "idReserva": 101,
  "monto": 20.00,
  "estado": "completado"
}
```
