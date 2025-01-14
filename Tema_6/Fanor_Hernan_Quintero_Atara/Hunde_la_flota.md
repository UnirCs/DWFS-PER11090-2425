# API REST Juego Hundir la Flota

Esta documentación describe los detalles del diseño de la API REST para gestionar partidas y datos relacionados con el juego 'Hundir la Flota'.

## Tabla de Endpoints

| Método HTTP | URI                          | Query Params | Request Body                                                                              | Response Body                                                                 | Códigos HTTP de Respuesta |
|-------------|------------------------------|--------------|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|----------------------------|
| POST        | /games                       | -            | `{ "player1": "user123", "player2": "guest" }`                                     | `{ "gameId": "g001", "message": "Game created successfully" }`          | 201, 400                   |
| DELETE      | /games/{gameId}             | -            | -                                                                                        | `{ "message": "Game deleted successfully" }`                               | 200, 404                   |
| PATCH       | /games/{gameId}             | -            | `{ "status": "in-progress" }`                                                        | `{ "message": "Game updated successfully" }`                               | 200, 404, 400              |
| POST        | /games/{gameId}/start       | -            | -                                                                                        | `{ "message": "Game started successfully" }`                               | 200, 404                   |
| POST        | /games/{gameId}/end         | -            | `{ "winner": "player1" }`                                                            | `{ "message": "Game ended successfully" }`                                 | 200, 404                   |
| GET         | /games/{gameId}             | -            | -                                                                                        | `{ "game": { "player1": "user123", "player2": "guest", "status": "finished" } }` | 200, 404                   |
| POST        | /games/{gameId}/ships       | -            | `{ "player": "player1", "ship": { "type": "battleship", "coordinates": ["A1", "A2", "A3", "A4"] } }` | `{ "message": "Ship added successfully" }`                                 | 201, 400                   |
| DELETE      | /games/{gameId}/ships       | -            | `{ "player": "player1", "coordinates": ["A1", "A2", "A3", "A4"] }`             | `{ "message": "Ship removed successfully" }`                               | 200, 404                   |
| GET         | /games/{gameId}/ships       | `player=player1` | -                                                                                      | `{ "ships": [ { "type": "battleship", "coordinates": ["A1", "A2", "A3", "A4"] } ] }` | 200, 404                   |
| POST        | /games/{gameId}/shots       | -            | `{ "shooter": "player1", "target": "player2", "coordinate": "B5" }`              | `{ "message": "Shot registered successfully" }`                              | 201, 400                   |
| POST        | /users                      | -            | `{ "username": "newPlayer" }`                                                        | `{ "userId": "u123", "message": "User created successfully" }`          | 201, 400                   |
| GET         | /users/{userId}             | -            | -                                                                                        | `{ "user": { "username": "newPlayer", "games": ["g001"] } }`            | 200, 404                   |
| DELETE      | /users/{userId}             | -            | -                                                                                        | `{ "message": "User deleted successfully" }`                                | 200, 404                   |

## Descripción de los recursos

### `/games`
- **Descripción:** Gestiona las partidas del juego.
- **Operaciones:**
  - **POST:** Crear una nueva partida entre jugadores registrados o invitados.
  - **DELETE:** Eliminar una partida existente usando su `gameId`.
  - **PATCH:** Modificar el estado o detalles de una partida usando su `gameId`.

### `/games/{gameId}/start`
- **Descripción:** Inicia una partida previamente creada.
- **Operaciones:**
  - **POST:** Cambiar el estado de una partida a "in-progress".

### `/games/{gameId}/end`
- **Descripción:** Finaliza una partida indicando al ganador.
- **Operaciones:**
  - **POST:** Cambiar el estado de una partida a "finished" y registrar al ganador.

### `/games/{gameId}`
- **Descripción:** Consulta los detalles de una partida específica.
- **Operaciones:**
  - **GET:** Obtener todos los datos de una partida, incluyendo jugadores, barcos y disparos.

### `/games/{gameId}/ships`
- **Descripción:** Gestiona los barcos en una partida.
- **Operaciones:**
  - **POST:** Añadir un barco a la cuadrícula de un jugador.
  - **DELETE:** Eliminar un barco de la cuadrícula de un jugador.
  - **GET:** Consultar los barcos de un jugador específico en una partida.

### `/games/{gameId}/shots`
- **Descripción:** Registra los disparos entre jugadores.
- **Operaciones:**
  - **POST:** Registrar un disparo realizado por un jugador contra otro en una partida.

### `/users`
- **Descripción:** Gestiona los usuarios del sistema.
- **Operaciones:**
  - **POST:** Crear un usuario registrado.
  - **GET:** Consultar los datos de un usuario específico.
  - **DELETE:** Eliminar un usuario registrado.
