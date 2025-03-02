# API del Juego "Hundir la Flota"

Esta API gestiona partidas, jugadores, barcos y disparos en el juego de "Hundir la flota".

## Recursos Identificados

- **/games**: Representa las partidas.
- **/games/{id}/ships**: Barcos de un jugador en una partida específica.
- **/games/{id}/shots**: Disparos entre jugadores de una partida.
- **/users**: Usuarios registrados en el sistema (opcional si hay jugadores anónimos).

### Operaciones principales

1. Crear, eliminar y modificar datos de una partida.
2. Iniciar y finalizar una partida.
3. Consultar todos los datos de una partida (jugadores, barcos, disparos, ganador).
4. Añadir un barco a la cuadrícula de un jugador.
5. Eliminar un barco de la cuadrícula de un jugador.
6. Consultar todos los barcos de un jugador.
7. Registrar un disparo de un jugador a otro.
8. Crear/Obtener/Eliminar un usuario.

### Tabla de Endpoints 
| Método Http | Endpoint                                  | Query Params | Cuerpo JSON de la petición                                                                                                       | Respuesta JSON de la petición                                                                                                                                               | Códigos HTTP de respuesta posibles                          |
|-------------|--------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| **POST**    | `/api/v1/games`                           | -           | `{ "player1Id": 1, "player2Id": 2 }` o `{ "player1Id": null, "player2Id": null }` (para anónimos)                                | `{ "gameId": 10, "player1Id": 1, "player2Id": 2, "status": "created", "boardSize": 10 }`                                                                                     | 201 Created, 400 Bad Request, 500 Internal Server Error      |
| **GET**     | `/api/v1/games/{gameId}`                  | -           | -                                                                                                                                 | `{ "gameId": 10, "status": "in_progress", "player1": {...}, "player2": {...}, "ships": {...}, "shots": [...], "winner": null }`                                             | 200 OK, 404 Not Found, 500 Internal Server Error            |
| **PUT**     | `/api/v1/games/{gameId}`                  | -           | `{ "status": "in_progress" }`, `{ "status": "finished" }`, etc.                                                                  | `{ "gameId": 10, "status": "in_progress", ... }`                                                                                                                             | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| **DELETE**  | `/api/v1/games/{gameId}`                  | -           | -                                                                                                                                 | `{ "message": "Game deleted successfully" }`                                                                                                                                | 200 OK, 404 Not Found, 500 Internal Server Error            |
| **POST**    | `/api/v1/games/{gameId}/ships`            | -           | `{ "playerId": 1, "shipType": "cruiser", "coordinates": [{"x":3, "y":4}, {"x":3, "y":5}, ...] }`                                  | `{ "shipId": 100, "playerId": 1, "shipType": "cruiser", "coordinates": [{"x":3,"y":4},...], "status":"placed" }`                                                             | 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| **DELETE**  | `/api/v1/games/{gameId}/ships/{shipId}`   | -           | -                                                                                                                                 | `{ "message": "Ship removed successfully" }`                                                                                                                                | 200 OK, 404 Not Found, 500 Internal Server Error            |
| **GET**     | `/api/v1/games/{gameId}/ships`            | `?playerId=1` (opcional) | -                                                                                                                        | `{ "ships": [ { "shipId": 100, "playerId":1, "coordinates":[...], ...}, ... ] }`                                                                                              | 200 OK, 404 Not Found, 500 Internal Server Error            |
| **POST**    | `/api/v1/games/{gameId}/shots`            | -           | `{ "shooterId": 1, "targetId": 2, "coordinate": {"x": 4, "y": 5} }`                                                           | `{ "shotId": 200, "gameId": 10, "shooterId": 1, "targetId": 2, "coordinate": {"x":4,"y":5}, "hit": true, "sunk": false }`                                                     | 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| **POST**    | `/api/v1/users`                           | -           | `{ "name": "string", "email": "string", "password": "string" }`                                                               | `{ "id": 1, "name": "string", "email": "string" }`                                                                                                                          | 201 Created, 400 Bad Request, 500 Internal Server Error      |
| **GET**     | `/api/v1/users/{userId}`                  | -           | -                                                                                                                                 | `{ "id": 1, "name": "string", "email": "string" }`                                                                                                                           | 200 OK, 404 Not Found, 500 Internal Server Error            |
| **DELETE**  | `/api/v1/users/{userId}`                  | -           | -                                                                                                                                 | `{ "message": "User deleted successfully" }`                                                                                                                                | 200 OK, 404 Not Found, 500 Internal Server Error            |

