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

*Recursos:*
- Peliculas
- Salas
- Usuarios
- Pagos


| Método HTTP | URI               | Cuerpo de la Petición                                                                            | Cuerpo de la Respuesta                                                                                    | Códigos de Respuesta                                       |
|-------------|-------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| POST        | /peliculas        | `{"title":"Gladiator II", "director":"Ridley Scott", "duration":148, "genre":"Acción/Aventura"}` | `{"id":"1", title":"Gladiator II", "director":"Ridley Scott", "duration":148, "genre":"Acción/Aventura"}` | 201, 400                                                   |
| DELETE      | /peliculas/{id}   | N/A                                                                                              | N/A                                                                                                       | 200, 404                                                   |
| PUT         | /peliculas/{id}   | `{"title":"Gladiator II", "director":"Ridley Scott", "duration":148, "genre":"Acción/Aventura"}` | `{"id":"1", title":"Gladiator II", "director":"Ridley Scott", "duration":148, "genre":"Acción/Aventura"}` | 200, 404                                                   |
| POST        | /salas            | `{"name":"Sala DiCaprio", "capacity":100, "usable":true}`                                        | `{"id":"1", "name":"Sala DiCaprio", "capacity":100, "usable":true}`                                       | 201, 400                                                   |
| DELETE      | /salas/{id}       | N/A                                                                                              | N/A                                                                                                       | 200, 404                                                   |
| PATCH       | /salas/{id}       | `{"name":"Sala DiCaprio", "capacity":100, "usable":true}`                                        | `{"id":"1", "name":"Sala DiCaprio", "capacity":100, "usable":true}`                                       | 200, 404                                                   |
| POST        | /usuarios         | `{"name":"Mario José Triviño Martínez", "email":"email@email.com", "phone":111111111}`           | `{"id":"1", "name":"Mario José Triviño Martínez", "email":"email@email.com", "phone":111111111}`          | 201, 400                                                   |
| DELETE      | /usuarios/{id}    | N/A                                                                                              | N/A                                                                                                       | 200, 404                                                   |
| PATCH       | /usuarios/{id}    | `{"name":"Mario José Triviño Martínez", "email":"email@email.com", "phone":111111111}`           | `{"id":"1", "name":"Mario José Triviño Martínez", "email":"email@email.com", "phone":111111111}`          | 200, 404                                                   |
| POST        | /reservas         | `{"userId":1, "roomId":1, "seat":1, "session":"12:30"}`                                          | `{"id":"1", "userId":1, "roomName":"Sala DiCaprio, "seat":1, "session":"12:30"}`                          | 201, 400                                                   |
| DELETE      | /reservas/{id}    | N/A                                                                                              | N/A                                                                                                       | 200, 404                                                   |
| PUT         | /reservas/{id}    | `{"seat":1, "session":"12:30"}`                                                                  | `{"id":"1", "userId":1, "roomName":"Sala DiCaprio, "seat":1, "session":"12:30"}`                          | 200, 404                                                   |
| POST        | /pagos            | `{"reservationId":1, "price":3.50, "userId":1, "cardNumber": "string"}`                          | `{"id":"1", "reservationId":1, "price":3.50, "userId":1, "cardNumber": "string"}`                         | 201, 400                                                   |


