API de un sistema de reserva de butacas de cine					
					
En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.					
					
Las operaciones que la API debe soportar son las siguientes:					
					
Crear, eliminar y modificar películas.					
Crear, eliminar y modificar (parcialmente) salas.					
Crear, eliminar y modificar (parcialmente) usuarios.					
Crear una reserva para un usuario en una sala.					
Cancelar una reserva para un usuario en una sala.					
Modificar una reserva para un usuario en una sala.					
Registrar un pago de una reserva.					


## Detalle de los Endpoints

| Método HTTP | URI                           | Query Params | Request Body                                                                     | Response Body                                 								  | Códigos HTTP de respuesta	
|-------------|-------------------------------|--------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------------------------------------------------|
| POST        | /api/v1/peliculas             | -            | `{"titulo": "Oppenheimer", "duracion": 240, "genero": "Biografía"}`              |  `{"id": 100, "titulo": "Oppenheimer", "duracion": 240, "genero": "Biografía"}` | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| POST        | /api/v1/salas                 | -            | `{"name": "Cine plus","capacity": 100}`         									|  `{"id": 1,"name": ""Cine plus","capacity": 100}`       						  | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| POST        | /api/v1/usuarios      		  | -            | `{"nombre": "Hector", "email": "hector@example.com"}` 							|  `{"id": 1, "nombre": "Hector", "email": "hector@example.com"}`                   | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| POST        | /api/v1/reservas      	      | -            | `{"usuarioId": 1, "salaId": 1, "asiento": "E5", "peliculaId": 1, "day":"Monday","time":"15:00"}` |  `{"id": 1,"usuarioId": 1, "salaId": 1, "asiento": "E5", "peliculaId": 1, "day":"Monday","time":"15:00"}` | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| POST        | /api/v1/pagos           	  | -            | `{"reservaId": 1, "monto": 15.0, "metodoPago": "Tarjeta"}`                       | `{"id": 1, "reservaId": 1, "monto": 15.0, "metodoPago": "Tarjeta"} `            | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| DELETE      | /api/v1/peliculas/{id}        | -            |  							 													|  `{"mensaje": "Película eliminada"}`											  | 200 OK, 404 Not Found, 500 Internal Server Error        | 
| DELETE      | /api/v1/salas/{id}            | -            |  							 													|  `{"mensaje": "Sala eliminada"}`											      | 200 OK, 404 Not Found, 500 Internal Server Error        | 
| DELETE      | /api/v1/usuarios /{id}        | -            |  							 													|  `{"mensaje": "Usuario eliminado"}`											  | 200 OK, 404 Not Found, 500 Internal Server Error        | 
| PUT         | /api/v1/peliculas/{id}        | -            | `{"titulo": "Oppenheimer", "duracion": 240, "genero": "Historia"}`               |  `{"id": 100, "titulo": "Oppenheimer", "duracion": 240, "genero": "Historia"}`  | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| PATCH       | /api/v1/salas/{id}            | -            | `{"capacity": 80}`         			                    						|  `{"id": 1,"name": ""Cine plus","capacity": 80}`       						  | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| PATCH       | /api/v1/usuarios/{id}         | -            | `{"email": "hector@unir.com"}` 												    |  `{"id": 1, "nombre": "Hector", "email": "hector@unir.com"}`                    | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| DELETE      | /api/v1/reservas/{id}         | -            | 																					|  `{"mensaje": "Reserva Cancelada"}` 											  | 201 Created, 400 Bad Request, 500 Internal Server Error | 
| PATCH       | /api/v1/reservas/{id}         | -            | `{"day":"Monday","time":"17:00"}` 												|  `{"id": 1,"usuarioId": 1, "salaId": 1, "asiento": "E5", "peliculaId": 1, "day":"Monday","time":"17:00"}` | 201 Created, 400 Bad Request, 500 Internal Server Error | 
