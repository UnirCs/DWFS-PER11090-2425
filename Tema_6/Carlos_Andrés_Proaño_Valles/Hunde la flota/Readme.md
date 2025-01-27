# 
# API del juego hunde la flota

En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'.
Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:
- 1 barco de 4 cuadrados.
- 2 barcos de 3 cuadrados.
- 3 barcos de 2 cuadrados.
- 4 barcos de 1 cuadrado.

También es necesario que, como dicen las instrucciones, se respeten dos reglas:
- Los barcos se colocan enteramente en horizontal o enteramente en vertical, es decir, no puede haber un barco en forma de L.
- Siempre debe haber un cuadrado de distancia entre cualquier punto de cualquier barco, y se pueden pegar al borde de la cuadrícula.

El objetivo del ejercicio es diseñar una API REST que será implementada (en otros ejercicios) por un microservicio o aplicación que se encargará de tratar todos los datos de las diferentes partidas. En este ejercicio nos centraremos únicamente en el diseño de la API y no trataremos ningún detalle de la implementación.

Las operaciones que la API debe soportar son las siguientes:
- Crear una partida.
- Eliminar una partida.
- Modificar datos de una partida.
- Iniciar una partida.
- Finalizar una partida.
- Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida.
- Añadir un barco a la cuadrícula de un jugador en una partida.
- Eliminar un barco de la cuadrícula de un jugador en una partida.
- Consultar todos los barcos de un jugador de una partida.
- Registrar un disparo de un jugador a otro en una partida.
- Crear un usuario.
- Obtener datos de un usuario.
- Eliminar un usuario.

Ten en cuenta que podría no ser necesario definir un endpoint por cada una de las operaciones que se han listado. No obstante, dichas operaciones deben ser satisfechas por la API diseñada. Las primeras preguntas que deberás hacerte son:
- ¿Qué recursos tiene que manejar la API?
- ¿Cómo se relacionan entre sí?
- ¿Qué información (atributos) guarda cada recurso?

**Recursos identificados:**
- Usuario (users): Representa un usuario/jugador de Hunde la flota.
- Partida (games): Representa un los tableros de Hunde la flota.
- Barco (ships): Representa un barco en una partida para un usuario de Hunde la flota.
- Disparo (shots): Representa un disparo en una partida de Hunde la flota.

| Método Http | Endpoint                    | Query Params                                        | Cuerpo JSON de la petición                              | Respuesta JSON de la petición                                                                                                                                 | Códigos HTTP de respuesta posibles                     |
|-------------|-----------------------------|-----------------------------------------------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| POST        | /users                      |                                                     | `{ "name": "string", "email": "string", "password": "string" }` | `{ "id": "integer", "name": "string", "email": "string" }`                                                                                                        | 201 Created, 400 Bad Request, 500 Internal Server Error                           |
| GET         | /users/{userId}                 |                                                     |                                                         | `{ "id": "integer", "name": "string", "email": "string" }`                                                                                                        | 200 OK, 404 Not Found, 500 Internal Server Error                                  |                 |
| DELETE      | /users/{userId}                 |                                                     |                                                         | `{ "message": "User deleted successfully" }`                                                                                                                      | 200 OK, 404 Not Found, 500 Internal Server Error                                  |
| POST        | /games                      |                                                     | `{ "status": "in_progress", "board_size": 10, "winner" : 0 }` | `{ "id": "integer", "status": "in_progress", "board_size": 10, "winner" : 0 }`                                                                                                        | 201 Created, 400 Bad Request, 500 Internal Server Error                           |
| POST       | /games/{gameId}/ships                 |                                                     | `{ "user_id": "integer", "ship_type": "string", "coordinates": "string" }` | `{ "id": "integer", "user_id": "integer" "ship_type": "string", "coordinates": "string" }`                                                                                                        | 201 Created, 400 Bad Request, 500 Internal Server Error
| DELETE      | /games/{gameId}/ships/{shipId}                 |                                                     |                                                         | `{ "message": "Ship deleted successfully" }`                                                                                                                      | 200 OK, 404 Not Found, 500 Internal Server Error                                  |
| GET         | /games/{gameId}/users/{userId}/ships                 |                                                     |                                                         | `[ { "id": "integer", "ship_type": "string", "coordinates": "string" } ]`                                                                                                        | 200 OK, 404 Not Found, 500 Internal Server Error                                  |                 |
| POST        | /games/{gameId}/shots       |                                                     | `{ "attacker_id": "integer", "target_id": "integer", "coordinates": "string" }`        | `{ "id": "integer", "attacker_id": "integer", "target_id": "integer", "coordinates": "string", "result": "string" }`                                      | 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error
| PATCH       | /games/{gameId}                 |                                                     | `{ "status": "finished", "winner" : 1 }` | `{ "message": "Game finished" }`                                                                                                             | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error            |
| DELETE      | /games/{gameId}                 |                                                     |                                                         | `{ "message": "Game deleted successfully" }`                                                                                                                      | 200 OK, 404 Not Found, 500 Internal Server Error                                  |
| GET         | /games/{gameId}       |                                                     |                                                         | `{ "id": "integer", "status": "finished", "board_size": 10, "users": [ { "user_id": 1, "name": "string", "ships" : [ { "ship_type": "string", "coordinates": "string" } ] }, { "user_id": 2, "name": "string", "ships" : [] } ], "shots": [ { "attacker_id": "integer", "target_id": "integer", "coordinates": "string", "result": "string" } ], "winner": 1 }`                                 | 200 OK, 404 Not Found, 500 Internal Server Error                                  |
