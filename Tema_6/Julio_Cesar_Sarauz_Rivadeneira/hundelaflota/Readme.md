API del juego hunde la flota
En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'. Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:

1 barco de 4 cuadrados.
2 barcos de 3 cuadrados.
3 barcos de 2 cuadrados.
4 barcos de 1 cuadrado.
También es necesario que, como dicen las instrucciones, se respeten dos reglas:

Los barcos se colocan enteramente en horizontal o enteramente en vertical, es decir, no puede haber un barco en forma de L.
Siempre debe haber un cuadrado de distancia entre cualquier punto de cualquier barco, y se pueden pegar al borde de la cuadrícula.
El objetivo del ejercicio es diseñar una API REST que será implementada (en otros ejercicios) por un microservicio o aplicación que se encargará de tratar todos los datos de las diferentes partidas. En este ejercicio nos centraremos únicamente en el diseño de la API y no trataremos ningún detalle de la implementación.

Las operaciones que la API debe soportar son las siguientes:

Crear una partida.
Eliminar una partida.
Modificar datos de una partida.
Iniciar una partida.
Finalizar una partida.
Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida.
Añadir un barco a la cuadrícula de un jugador en una partida.
Eliminar un barco de la cuadrícula de un jugador en una partida.
Consultar todos los barcos de un jugador de una partida.
Registrar un disparo de un jugador a otro en una partida.
Crear un usuario.
Obtener datos de un usuario.
Eliminar un usuario.
Ten en cuenta que podría no ser necesario definir un endpoint por cada una de las operaciones que se han listado. No obstante, dichas operaciones deben ser satisfechas por la API diseñada. Las primeras preguntas que deberás hacerte son:

¿Qué recursos tiene que manejar la API?
¿Cómo se relacionan entre sí?
¿Qué información (atributos) guarda cada recurso?

# API del Juego "Hunde la Flota" (Juego de los Barcos)

Esta API REST permite gestionar un juego de "Hundir la flota" (o "Juego de los Barcos"), donde los jugadores se enfrentan en partidas con cuadrículas de 10x10 para colocar sus barcos y disparar al rival. A continuación, se detalla la API necesaria para gestionar la creación, modificación y eliminación de partidas, jugadores, barcos y disparos.

## Recursos Identificados:
- **Partida (games):** Representa una partida de "Hundir la flota" entre dos jugadores.
- **Jugador (players):** Representa a un jugador de la partida.
- **Barco (ships):** Representa los barcos de un jugador en la cuadrícula de la partida.
- **Disparo (shots):** Representa un disparo realizado por un jugador a otro.
- **Usuario (users):** Representa a un usuario registrado o invitado en el sistema.

## Endpoints:

| Método HTTP | URI                             | Query Params    | Cuerpo de la Petición                                                                 | Cuerpo de la Respuesta                                                                  | Códigos de Respuesta                                          |
|-------------|---------------------------------|-----------------|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-------------------------------------------------------------|
| POST        | /games                           | N/A             | `{"player1": "Player1", "player2": "Player2"}`                                          | `{"gameId": 1, "player1": "Player1", "player2": "Player2", "status": "waiting"}`          | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /games/{gameId}                 | N/A             | N/A                                                                                    | `{"message": "Game deleted"}`                                                            | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| PATCH       | /games/{gameId}                 | N/A             | `{"status": "started"}`                                                                 | `{"gameId": 1, "status": "started", "player1": "Player1", "player2": "Player2"}`          | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /games/{gameId}/start           | N/A             | N/A                                                                                    | `{"gameId": 1, "status": "started"}`                                                     | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /games/{gameId}/end             | N/A             | N/A                                                                                    | `{"gameId": 1, "status": "ended", "winner": "Player1"}`                                  | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| GET         | /games/{gameId}                 | N/A             | N/A                                                                                    | `{"gameId": 1, "player1": "Player1", "player2": "Player2", "status": "waiting", "winner": null}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| POST        | /games/{gameId}/players/{playerId}/ships | N/A     | `{"ships": [{"type": "4-square", "position": [1,1], "orientation": "vertical"}, {...}]}` | `{"message": "Ships added successfully"}`                                                 | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE      | /games/{gameId}/players/{playerId}/ships/{shipId} | N/A | N/A                                                                                   | `{"message": "Ship deleted"}`                                                            | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| GET         | /games/{gameId}/players/{playerId}/ships | N/A     | N/A                                                                                    | `{"ships": [{"type": "4-square", "position": [1,1], "orientation": "vertical"}, {...}]}`   | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| POST        | /games/{gameId}/players/{playerId}/shots | N/A     | `{"targetPlayerId": "Player2", "position": [5,5]}`                                      | `{"shotId": 1, "playerId": "Player1", "targetPlayerId": "Player2", "position": [5,5], "result": "hit"}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /games/{gameId}/shots            | N/A             | N/A                                                                                    | `{"shots": [{"playerId": "Player1", "targetPlayerId": "Player2", "position": [5,5], "result": "hit"}]}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| POST        | /users                           | N/A             | `{"username": "john_doe", "email": "john@example.com", "password": "password"}`         | `{"userId": 1, "username": "john_doe", "email": "john@example.com"}`                     | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /users/{userId}                  | N/A             | N/A                                                                                    | `{"userId": 1, "username": "john_doe", "email": "john@example.com"}`                     | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| DELETE      | /users/{userId}                  | N/A             | N/A                                                                                    | `{"message": "User deleted"}`                                                            | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |

## Descripción de los Recursos:

### 1. **Partida (games):**
- **Atributos:**
  - `gameId`: Identificador único de la partida.
  - `player1`: Jugador 1.
  - `player2`: Jugador 2.
  - `status`: Estado de la partida (por ejemplo, `waiting`, `started`, `ended`).
  - `winner`: El ganador de la partida, si está disponible.

### 2. **Jugador (players):**
- **Atributos:**
  - `playerId`: Identificador único del jugador.
  - `username`: Nombre del jugador.
  - `ships`: Barcos que el jugador ha colocado en su cuadrícula.
  - `shots`: Disparos realizados por el jugador.

### 3. **Barco (ships):**
- **Atributos:**
  - `shipId`: Identificador único del barco.
  - `type`: Tipo de barco (4, 3, 2 o 1 cuadrado).
  - `position`: Posición en la cuadrícula (array de coordenadas [x, y]).
  - `orientation`: Dirección del barco (horizontal o vertical).

### 4. **Disparo (shots):**
- **Atributos:**
  - `shotId`: Identificador único del disparo.
  - `playerId`: Jugador que realiza el disparo.
  - `targetPlayerId`: Jugador objetivo del disparo.
  - `position`: Posición del disparo (coordenada [x, y]).
  - `result`: Resultado del disparo (`hit` o `miss`).

### 5. **Usuario (users):**
- **Atributos:**
  - `userId`: Identificador único del usuario.
  - `username`: Nombre de usuario.
  - `email`: Correo electrónico.
  - `password`: Contraseña (en un entorno real debería almacenarse de forma segura, por ejemplo, con hash).

## Ejemplo de Operación:

### Crear una partida
**Request:**
```json
POST /games
Content-Type: application/json

{
  "player1": "Player1",
  "player2": "Player2"
}
