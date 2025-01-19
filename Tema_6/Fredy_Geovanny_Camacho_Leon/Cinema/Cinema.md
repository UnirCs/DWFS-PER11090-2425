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

## Solución
- Esta API REST permite gestionar las operaciones necesarias para un sistema de reservas en un cine. 
- Incluye funcionalidades para administrar películas, salas, usuarios, reservas y pagos.

---

### Películas
| Método HTTP | URI                  | Query Params | Request Body                                     | Response Body                             | Códigos HTTP de respuesta |
|-------------|----------------------|--------------|------------------------------------------------|-------------------------------------------|---------------------------|
| POST        | /api/peliculas       | -            | `{ "titulo": "MUFASA", "duracion": 130, "categoria": "Todo público" }`   | `{ "id_pelicula": 1, "titulo": "MUFASA" }` | 201, 400                  |
| PUT         | /api/peliculas/{id} | -            | `{ "titulo": "MUFASA", "duracion": 120, "categoria": "Aventura"  }` | `{ "id_pelicula": 1, "titulo": "MUFASA" }` | 200, 404                  |
| DELETE      | /api/peliculas/{id} | -            | -                                              | `{ "mensaje": "Película eliminada" }`       | 200, 404                  |

### Salas
| Método HTTP | URI              | Query Params | Request Body                                  | Response Body                                 | Códigos HTTP de respuesta |
|-------------|------------------|--------------|---------------------------------------------|-----------------------------------------------|---------------------------|
| POST        | /api/salas       | -            | `{ "nombre": "Sala 1", "capacidad": 50 }` | `{ "id_sala": 1, "nombre": "Sala 1" }`       | 201, 400                  |
| PATCH       | /api/salas/{id}  | -            | `{ "capacidad": 60 }`                      | `{ "id_sala": 1, "capacidad": 60 }`         | 200, 404                  |
| DELETE      | /api/salas/{id}  | -            | -                                             | `{ "mensaje": "Sala eliminada" }`           | 200, 404                  |

### Usuarios
| Método HTTP | URI                | Query Params | Request Body                                    | Response Body                                   | Códigos HTTP de respuesta |
|-------------|--------------------|--------------|------------------------------------------------|-----------------------------------------------|---------------------------|
| POST        | /api/usuarios      | -            | `{ "nombre": "Fredy", "email": "fredy123@example.com" }` | `{ "id_usuario": 1, "nombre": "Fredy" }`       | 201, 400                  |
| PATCH       | /api/usuarios/{id} | -            | `{ "email": "fredy456@example.com" }` | `{ "id_usuario": 1, "email": "fredy456@example.com" }` | 200, 404                  |
| DELETE      | /api/usuarios/{id} | -            | -                                               | `{ "mensaje": "Usuario eliminado" }`        | 200, 404                  |

### Reservas
| Método HTTP | URI                      | Query Params | Request Body                                              | Response Body                                             | Códigos HTTP de respuesta |
|-------------|--------------------------|--------------|----------------------------------------------------------|-----------------------------------------------------------|---------------------------|
| POST        | /api/reservas            | -            | `{ "id_usuario": 1, "id_sala": 1, "butacas": [1, 2] }` | `{ "id_reserva": 1, "estado": "confirmada" }`          | 201, 400                  |
| PATCH       | /api/reservas/{id}       | -            | `{ "butacas": [3, 4] }`                                  | `{ "id_reserva": 1, "butacas": [3, 4] }`               | 200, 404                  |
| DELETE      | /api/reservas/{id}       | -            | -                                                        | `{ "mensaje": "Reserva cancelada" }`                   | 200, 404                  |

### Pagos
| Método HTTP | URI                      | Query Params | Request Body                                              | Response Body                                             | Códigos HTTP de respuesta |
|-------------|--------------------------|--------------|----------------------------------------------------------|-----------------------------------------------------------|---------------------------|
| POST        | /api/pagos               | -            | `{ "id_reserva": 1, "monto": 14.00 }`                  | `{ "id_pago": 1, "estado": "completado" }`            | 201, 400                  |

---