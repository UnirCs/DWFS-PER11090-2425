# API de un cine

## Introducción
En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:

- Crear, eliminar y modificar películas.
- Crear, eliminar y modificar (parcialmente) salas.
- Crear, eliminar y modificar (parcialmente) usuarios.
- Crear una reserva para un usuario en una sala.
- Cancelar una reserva para un usuario en una sala.
- Modificar una reserva para un usuario en una sala.
- Registrar un pago de una reserva.

## Recursos
**Recursos identificados:**
- Películas
- Salas
- Usuarios
- Reservas
- Pagos

## Operaciones
| Método HTTP | URI                                             | Query Params | Cuerpo de la Petición                                                                              | Cuerpo de la Respuesta                       | Códigos de Respuesta |
|-------------|-------------------------------------------------|--------------|----------------------------------------------------------------------------------------------------|----------------------------------------------|----------------------|
| POST        | /peliculas                                      |              | { "titulo": "El Padrino", "director": "Francis Ford Coppola", "duracion": 175, "genero": "Drama" } | { "id": "12", "mensaje": "Película creada" } | 201, 400             |
| PUT         | /peliculas/{id}                                 |              | { "titulo": "El Padrino", "director": "Francis Ford Coppola", "duracion": 175, "genero": "Drama" } | { "mensaje": "Película modificada" }         | 200, 400, 404        |
| DELETE      | /peliculas/{id}                                 |              |                                                                                                    | { "mensaje": "Película eliminada" }          | 200, 404             |
| POST        | /salas                                          |              | { "nombre": "Sala 1", "butacas": 100 }                                                             | { "id": "13", "mensaje": "Sala creada" }     | 201, 400             |
| PATCH       | /salas/{id}                                     |              | { "nombre": "Sala 1", "butacas": 100 }                                                             | { "mensaje": "Sala modificada" }             | 200, 400, 404        |
| DELETE      | /salas/{id}                                     |              |                                                                                                    | { "mensaje": "Sala eliminada" }              | 200, 404             |
| POST        | /usuarios                                       |              | { "nombre": "Daniel", "apellidos": "Morón Roces", "email": "                                       |                                              |                      |
| PATCH       | /usuarios/{id}                                  |              | { "nombre": "Daniel", "apellidos": "Morón Roces", "email": "                                       |                                              |                      |
| DELETE      | /usuarios/{id}                                  |              |                                                                                                    | { "mensaje": "Usuario eliminado" }           | 200, 404             |
| POST        | /usuarios/{id_usuario}/salas/{id_sala}/reservas |              | { "fecha": "2021-12-25", "butacas": 2 }                                                            | { "id": "14", "mensaje": "Reserva creada" }  | 201, 400             |
| DELETE      | /reservas/{id_reserva}                          |              |                                                                                                    | { "mensaje": "Reserva eliminada" }           | 200, 404             |
| PUT         | /reservas/{id_reserva}                          |              | { "fecha": "2021-12-25", "butacas": 2 }                                                            | { "mensaje": "Reserva modificada" }          | 200, 400, 404        |
| POST        | /reservas/{id_reserva}/pagos                    |              | { "importe": 10 }                                                                                  | { "id": "15", "mensaje": "Pago registrado" } | 201, 400             |