# API del juego Hunde la flota

Esta API permite gestionar el juego Hunde la flota, permitiendo tanto usuarios registrados como invitados (anónimos). 
La aplicación gestiona principalmente partidas entre jugadores y sus respectivos tableros.

La API incluye las siguientes funcionalidades:

**Gestión de partidas:**

• **Crear una partida:** Un endpoint que permite crear una nueva partida entre dos jugadores.

• **Modificar una partida:** Un endpoint que permite modificar el estado de una partida existente.

• **Eliminar una partida:** Un endpoint que permite eliminar una partida existente.

• **Iniciar una partida:** Un endpoint que permite comenzar una partida cuando los jugadores están listos.

• **Finalizar una partida:** Un endpoint que permite finalizar una partida y registrar al ganador.

**Gestión de tableros:**

• **Crear un tablero:** Un endpoint que permite crear un nuevo tablero para un jugador en una partida.

• **Colocar un barco:** Un endpoint que permite colocar un barco en el tablero de un jugador.

• **Eliminar un barco:** Un endpoint que permite eliminar un barco del tablero de un jugador.

• **Consultar barcos:** Un endpoint que permite obtener todos los barcos de un jugador.

**Gestión de disparos:**

• **Realizar un disparo:** Un endpoint que permite registrar un disparo de un jugador a otro.

• **Consultar los disparos:** Un endpoint que permite obtener el historial de disparos en una partida.

**Gestión de usuarios:**

• **Creart un usuario:** Un endpoint que permite crear un nuevo usuario.

• **Eliminar un usuario:** Un endpoint que permite eliminar un usuario existente.

**Recursos identificados:**
- Partidas (games)
- Tableros (boards)
- Barcos (ships)
- Disparos (shots)
- Usuarios (users)

**Estados de la partida (status):**
- CREATED: Partida creada, esperando colocación de barcos
- IN_PROGRESS: Partida en curso
- FINISHED: Partida finalizada

**Resultados de disparo (result):**
- WATER: El disparo cae en agua (casilla vacía)
- HIT: El disparo impacta en parte de un barco
- SUNK: El disparo hunde completamente un barco (último impacto en el barco)

| Método Http | Endpoint                                        | Query Params | Cuerpo JSON de la petición                                                                 | Respuesta JSON de la petición                                                                                                                     | Códigos HTTP de respuesta posibles |
|-------------|-------------------------------------------------|--------------|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| POST        | /games                                          |              | `{"player1Id": "integer", "player2Id": "integer"}`                                         | `{"id": "integer", "player1Id": "integer", "player2Id": "integer", "status": "string"}`                                                           | 201 Created, 400 Bad Request       |
| PATCH       | /games/{gameId}                                 |              | `{"status": "string"}`                                                                     | `{"id": "integer", "status": "string"}`                                                                                                           | 200 OK, 404 NotFound               |
| DELETE      | /games/{gameId}                                 |              |                                                                                            |                                                                                                                                                   | 200 OK, 404 Not Found              |
| POST        | /games/{gameId}/boards                          |              | `{"playerId": "integer"}`                                                                  | `{"id": "integer", "gameId": "integer", "playerId": "integer"}`                                                                                   | 201 Created, 400 Bad Request       |
| POST        | /games/{gameId}/boards/{boardId}/ships          |              | `{"type": "string", "size": "integer", "coordinates": [{"x": "integer", "y": "integer"}]}` | `{"id": "integer", "type": "string", "coordinates": "array"}`                                                                                     | 201 Created, 400 Bad Request       |
| DELETE      | /games/{gameId}/boards/{boardId}/ships/{shipId} |              |                                                                                            |                                                                                                                                                   | 200 OK, 404 Not Found              |
| GET         | /games/{gameId}/boards/{boardId}/ships          |              |                                                                                            | `{"ships": ["array"]}`                                                                                                                            | 200 OK, 400 Bad Request            |
| POST        | /games/{gameId}/shots                           |              | `{"playerId": "integer", "targetX": "integer", "targetY": "integer"}`                      | `{"id": "integer", "result": "string"}`                                                                                                           | 201 Created, 400 Bad Request       |
| GET         | /games/{gameId}                                 |              |                                                                                            | `{"id": "integer", "player1Id": "integer", "player2Id": "integer", "status": "string", "winner": "integer", "boards": "array", "shots": "array"}` | 200 OK, 400 Bad Request            |
| GET         | /games/{gameId}/shots                           |              |                                                                                            | `{"id": "integer", "playerId": "integer", "targetX": "integer", "targetY": "integer", "result": "string"}`                                        | 200 OK, 400 Bad Request            |
| POST        | /users                                          |              | `{"username": "string", "email": "string"}`                                                | `{"id": "integer", "username": "string", "email": "string"}`                                                                                      | 201 Created, 400 Bad Request       |
| GET         | /users/{userId}                                 |              |                                                                                            | `{"id": "integer", "username": "string", "email": "string"}`                                                                                      | 200 OK, 400 Bad Request            |
| DELETE      | /users/{userId}                                 |              |                                                                                            |                                                                                                                                                   | 200 OK, 404 Not Found              |