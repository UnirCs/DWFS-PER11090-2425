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

# Recursos
    peliculas(movies) : recurso para la gestion de las peliculas
    salas (rooms): recurso para las salas
    usuarios (users): recurso para los usuarios
    reservas(reservations): recurso para las reservas
    pagos (payments): recurso para los pagos de las reservas
# Tabla de Api
| Método Http | Endpoint            | Query Params             | Cuerpo JSON de la petición     | Respuesta JSON de la petición                              | Códigos HTTP de respuesta posibles       |
|-------------|---------------------|--------------------------|--------------------------------|------------------------------------------------------------|----------------------------------------------------|
| POST        | /movies          | Ninguno                  | `{"name":"string", "description":"string","rating":"integer", "category": "string"`     |  `{"idmovie": "integer","name":"string","description":"string","rating":"integer", "category": "string"}`                    | 201 Created, 400 Bad Request              |    
| PUT         | /movies/{idmovie} | Ninguno                 | `{"name":"string", "description":"string","rating":"integer", "category": "string"}`    |  `{"idmovie": "integer","name":"string","description":"string","rating":"integer", "category": "string"}`                                  | 200 OK, 404 Not Found              |   
| DELETE      | /movies/{idmovie}      | Ninguno             |                                                                         | `{ "message": "Movie deleted successfully"}`     | 200 OK, 404 Not Found              |    
| POST        | /rooms          | Ninguno                  | `{"name":"string", "capacity":"integer","state":"booleam"}    `     |  `{"idroom": "integer","name":"string", "capacity":"integer","state":"booleam"}`                    | 201 Created, 400 Bad Request              |    
| PATCH       | /rooms/{idroom} | Ninguno                  | `{"capacity":"integer"}    `     |  `{"idroom": "integer","name":"string", "capacity":"integer","state":"booleam"}`                    | 200 OK, 404 NO FOUND              |    
| DELETE      | /rooms/{idroom}      | Ninguno             |                                                                         | `{ "message": "Room deleted successfully"}`      | 200 OK,404 Not Found              |    
| POST        | /users          | Ninguno                   | `{"name":"string","address":"string","phone":"string"}`     |  `{"iduser": "integer","address":"string","phone":"string"}`                    | 201 Created, 400 Bad Request              |    
| PATCH       | /users/{iduser} | Ninguno                  | `{"address":"string","phone":"string"}`     | `{"iduser":"integer",  "address":"string","phone":"string"}`        | 200 OK, 404 NO Found              |    
| DELETE      | /users/{iduser}      | Ninguno             |                                                                         | `{ "message": "User deleted successfully"}`    | 200 OK,404 Not Found              |    
| POST        | /reservations  | Ninguno                   | `{"iduser":"integer", "idroom":"integer", "seat":"string","date":"datetime"}`     |  `{"idreservation":"integer","iduser":"integer", "idroom":"integer","seat":"string","date":"datetime"}`   | 201 Created, 400 Bad Request   |
| PATCH       | /reservations/{iduser}  | Ninguno                   | `{"seat":"string"}`     |  `{"idreservation":"integer","iduser":"integer", "idroom":"integer","seat":"string","date":"datetime"}`   | 200 OK, 404 NO Found  |
| DELETE      | /reservations/{iduser}   | Ninguno             |                                                                         | `{ "message": "Reservation deleted successfully"}`    | 200 OK,404 Not Found              |    
| POST        | /payments  | Ninguno                   | `{"idreservation":"integer", "amount":"number"}`     |  `{"idpayment":"integer","idreservation":"integer","amount":"number"}`   | 201 Created, 400 Bad Request   |