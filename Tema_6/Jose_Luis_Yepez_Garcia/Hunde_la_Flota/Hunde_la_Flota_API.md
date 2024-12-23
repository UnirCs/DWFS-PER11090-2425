# API para el juego Hundir la Flota

Las operaciones que la API debe soportar son las siguientes:

**Recursos identificados:**
- Partida (games): Representa una partida entre dos jugadores.
- Jugador (players): Representa un jugador registrado o invitado.
- Barco (ships): Representa un barco colocado en la cuadrícula de un jugador dentro de una partida.
- Disparo (shots): Representa un disparo realizado por un jugador a otro durante una partida.

| Método HTTP | Endpoint                            | Query Params                  | Cuerpo JSON de la petición                                          | Respuesta JSON de la petición                                                                                                   | Códigos HTTP de respuesta posibles                     |
|-------------|-------------------------------------|-------------------------------|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| POST        | /games                              |                               | `{ "player1Id": 1, "player2Id": 2 }`                             | `{ "gameId": 1, "player1Id": 1, "player2Id": 2, "status": "created" }`                                               | 201 Created, 400 Bad Request                           |
| DELETE      | /games/{gameId}                    |                               | N/A                                                                  | `{ "message": "Game deleted successfully" }`                                                                               | 200 OK, 404 Not Found                                  |
| PATCH       | /games/{gameId}                    |                               | `{ "status": "in-progress" }`                                     | `{ "gameId": 1, "status": "in-progress" }`                                                                               | 200 OK, 400 Bad Request, 404 Not Found                 |
| GET         | /games/{gameId}                    |                               | N/A                                                                  | `{ "gameId": 1, "player1": {...}, "player2": {...}, "ships": [...], "shots": [...], "winner": null }`              | 200 OK, 404 Not Found                                  |
| POST        | /games/{gameId}/players/{playerId}/ships |                               | `{ "type": "battleship", "coordinates": [[1,1], [1,2], [1,3], [1,4]] }` | `{ "shipId": 1, "type": "battleship", "coordinates": [[1,1], [1,2], [1,3], [1,4]] }`                                    | 201 Created, 400 Bad Request, 422 Unprocessable Entity |
| DELETE      | /games/{gameId}/players/{playerId}/ships/{shipId} |                               | N/A                                                                  | `{ "message": "Ship deleted successfully" }`                                                                               | 200 OK, 404 Not Found                                  |
| GET         | /games/{gameId}/players/{playerId}/ships |                               | N/A                                                                  | `[ { "shipId": 1, "type": "battleship", "coordinates": [[1,1], [1,2], [1,3], [1,4]] } ]`                               | 200 OK, 404 Not Found                                  |
| POST        | /games/{gameId}/players/{playerId}/shots              |                               | `{ "targetCoordinates": [2,2] }`                 | `{ "shotId": 1, "shooterId": 1, "targetCoordinates": [2,2], "hit": true }`                                             | 201 Created, 400 Bad Request, 404 Not Found            |
| POST        | /users                             |                               | `{ "name": "string", "email": "string" }`                      | `{ "userId": 1, "name": "string", "email": "string" }`                                                               | 201 Created, 400 Bad Request                           |
| GET         | /users/{userId}                    |                               | N/A                                                                  | `{ "userId": 1, "name": "string", "email": "string" }`                                                               | 200 OK, 404 Not Found                                  |
| DELETE      | /users/{userId}                    |                               | N/A                                                                  | `{ "message": "User deleted successfully" }`                                                                               | 200 OK, 404 Not Found                                  |

**Notas adicionales:**
- Cada partida tiene dos jugadores, con sus respectivas cuadrículas de 10x10.
- Los barcos deben cumplir las reglas de colocación descritas: orientación, distancia, y bordes.
- Los disparos registran si impactaron o no en un barco enemigo.
- La API valida las acciones para garantizar las reglas del juego.
