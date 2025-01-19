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




| Método HTTP | URI                    | Parametros petición | Cuerpo de la Petición                                                           | Cuerpo de la Respuesta        | Códigos Respuesta    |
|-------------|------------------------|---------------------|---------------------------------------------------------------------------------|-------------------------------|----------------------|
| GET         | /api/v1/peliculas      |           -         |                   -                                                             | `{"idPelicula": int}`         | 200                  |
| POST        | /api/v1/peliculas      |           -         | `{"titulo": "string", "duracion": int}`                                         | `{"idPelicula": int}`         | 201, 400             |
| PUT         | /api/v1/peliculas/{id} |           -         | `{"titulo": "string", "duracion": int}`                                         | `{"mensaje": "Actualizado"}`  | 200, 400, 404        |
| DELETE      | /api/v1/peliculas/{id} |           -         |                   -                                                             | `{"mensaje": "Eliminado"}`    | 200, 404             |
|-------------|------------------------|---------------------|---------------------------------------------------------------------------------|-------------------------------|----------------------|
| GET         | /api/v1/salas          |           -         |                   -                                                             | `{"salas": []}`               | 200                  |
| POST        | /api/v1/salas          |           -         | `{"nombre": "string", "capacidad": int}`                                        | `{"idSala": int}`             | 201, 400             |
| PUT         | /api/v1/salas/{id}     |           -         | `{"nombre": "string", "capacidad": int}`                                        | `{"mensaje": "Actualizado"}`  | 200, 400, 404        |
| DELETE      | /api/v1/salas/{id}     |           -         |                   -                                                             | `{"mensaje": "Eliminado"}`    | 200, 404             |
|-------------|------------------------|---------------------|---------------------------------------------------------------------------------|-------------------------------|----------------------|
| GET         | /api/v1/usuarios       |           -         |                   -                                                             | `{"usuarios": []}`            | 200                  |
| POST        | /api/v1/usuarios       |           -         | `{"nombre": "string", "correo": "string"}`                                      | `{"idUsuario": int}`          | 201, 400             |
| PUT         | /api/v1/usuarios/{id}  |           -         | `{"nombre": "string", "correo": "string"}`                                      | `{"mensaje": "Actualizado"}`  | 200, 400, 404        |
| DELETE      | /api/v1/usuarios/{id}  |           -         |                   -                                                             | `{"mensaje": "Eliminado"}`    | 200, 404             |
|-------------|------------------------|---------------------|---------------------------------------------------------------------------------|-------------------------------|----------------------|
| POST        | /api/v1/reservas       |           -         | `{"idUsuario": int, "idSala": int, "idPelicula": int, "numeroAsiento": int}`    | `{"idReserva": int}`          | 201, 400, 404        |
| PATCH       | /api/v1/reservas/{id}  |           -         | `{"idSala": int, "idPelicula": int, "numeroAsiento": int}`                      | `{"mensaje": "Actualizado"}`  | 200, 400, 404        |
| DELETE      | /api/v1/reservas/{id}  |           -         |                   -                                                             | `{"mensaje": "Eliminado"}`    | 200, 404             |
|-------------|------------------------|---------------------|---------------------------------------------------------------------------------|-------------------------------|----------------------|
| POST        | /api/v1/pagos          |           -         | `{"idReserva": int, "monto": float, "metodo": "string"}`                        | `{"idPago": int}`             | 201, 400, 404        |
|-------------|------------------------|---------------------|---------------------------------------------------------------------------------|-------------------------------|----------------------|



