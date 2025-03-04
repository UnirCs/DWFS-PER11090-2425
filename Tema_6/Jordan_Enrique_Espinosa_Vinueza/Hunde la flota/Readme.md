## 🎯 **API de Hundir la Flota**

### 📌 **Descripción**
Esta API permite gestionar partidas del juego **Hundir la Flota** entre usuarios registrados o anónimos. Cada partida tiene un tablero de **10x10** para cada jugador, donde se colocan barcos según las reglas del juego. Los jugadores pueden disparar, consultar el estado de la partida y registrar resultados

### 📌 **Recursos de la API**
Para simplificar el diseño, la API manejará **tres recursos principales**:

1. **Usuarios** (`usuarios`)
    - Representan a los jugadores del juego, ya sean registrados o anónimos.
2. **Partidas** (`partidas`)
    - Gestionan las sesiones de juego entre dos jugadores.
3. **Tableros** (`tableros`)
    - Manejan la colocación de barcos y los disparos.

---

### 📌 **Operaciones Soportadas y Endpoints**
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

---

### 📌 **Relaciones entre Recursos**
1. **Usuarios pueden jugar varias partidas**, pero en cada partida solo pueden jugar dos jugadores.
2. **Cada partida tiene un tablero asociado a cada jugador**.
3. **Los barcos se almacenan en los tableros** de los jugadores.
4. **Cada disparo queda registrado** en el tablero del jugador contrario.
