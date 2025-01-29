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

| Método HTTP | URI            | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|-------------|----------------|--------------|--------------|------------------|-------------------------|
| POST         | /api/v1/peliculas | -            | `{"titulo": string, "imagen": string,"sinopsis":string, "duracion": number,"genero":string,"puntuacion": number }`| `{"id":number,"titulo": string, "imagen": string,"sinopsis":string, "duracion": number,"genero":string,"puntuacion": number}` | 201<br/> 400<br/> 500              |
| DELETE         | /api/v1/peliculas/{id} | -  | - | `{"resultado":boolean}` | 200<br/> 404<br/> 500|
| PUT         | /api/v1/peliculas/{id} | -            | `{"id":number,"titulo": string, "imagen": string,"sinopsis":string, "duracion": number,"genero":string,"puntuacion": number }`| `{"id":number,"titulo": string, "imagen": string,"sinopsis":string, "duracion": number,"genero":string,"puntuacion": number}` | 200<br/> 400<br/>404<br/> 500              |
| POST         | /api/v1/salas | -            | `{"nombre": string, "cantidadAsientos": number }`| `{"id":number,"nombre": string, "cantidadAsientos": number}` | 201<br/> 400<br/> 500              |
| DELETE         | /api/v1/salas/{id} | -  | - | `{"resultado":boolean}` | 200<br/> 404<br/> 500|
| PATCH         | /api/v1/salas/{id} | -            | `{"id":number,"nombre": string, "cantidadAsientos": number}`<br/> #se envian solo los datos que se quieren actualizar| `{"id":number,"nombre": string, "cantidadAsientos": number}` | 200<br/> 400<br/>404<br/> 500              |
| POST         | /api/v1/usuarios | -            | `{"nombre": string, "apellidos": string, "email": string, "usuario": string, "edad": number }`| `{"id":number,"nombre": string, "apellidos": string, "email": string, "usuario": string, "edad": number }` | 201<br/> 400<br/> 500              |
| DELETE         | /api/v1/usuarios/{id} | -  | - | `{"resultado":boolean}` | 200<br/> 404<br/> 500|
| PATCH         | /api/v1/usuarios/{id} | -            | `{"id":number,"nombre": string, "apellidos": string, "email": string, "usuario": string, "edad": number }`<br/> #se envian solo los datos que se quieren actualizar| `{"id":number,"nombre": string, "apellidos": string, "email": string, "usuario": string, "edad": number }` | 200<br/> 400<br/>404<br/> 500              |
| POST         | /api/v1/reservas | -            | `{"salaId": number, "usuarioId": number, "butacas": number[], "peliculaId": number, "fechaHora": date }`| `{"id":number,"salaId": number, "usuarioId": number, "butacas": number[], "peliculaId": number, "fechaHora": date  }` | 201<br/> 400<br/>404<br/> 500              |
| DELETE         | /api/v1/reservas/{id} | -  | - | `{"resultado":boolean}` | 200<br/> 404<br/> 500|
| PATCH         | /api/v1/reservas/{id} | -            | `{"id":number,"salaId": number, "usuarioId": number, "butacas": number[], "peliculaId": number, "fechaHora": date  }`<br/> #se envian solo los datos que se quieren actualizar| `{"id":number,"nombre": string, "apellidos": string, "email": string, "usuario": string, "edad": number }` | 200<br/> 400<br/>404<br/> 500              |
| POST         | /api/v1/pagos | -            | `{"reservaId": number, "monto": number, "medioPagoId": number }`| `{"id":number,"reservaId": number, "monto": number, "medioPagoId": number, "fechaPago": date }` | 201<br/> 400<br/>404<br/> 500              |
