# API del juego hunde la flota

En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'.
Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:
- 1 barco de 4 cuadrados. small
- 2 barcos de 3 cuadrados. medium
- 3 barcos de 2 cuadrados. large
- 4 barcos de 1 cuadrado. xlarge

También es necesario que, como dicen las instrucciones, se respeten dos reglas:
- Los barcos se colocan enteramente en horizontal o enteramente en vertical, es decir, no puede haber un barco en forma de L.
- Siempre debe haber un cuadrado de distancia entre cualquier punto de cualquier barco, y se pueden pegar al borde de la cuadrícula.

El objetivo del ejercicio es diseñar una API REST que será implementada (en otros ejercicios) por un microservicio o aplicación que se encargará de tratar todos los datos de las diferentes partidas. En este ejercicio nos centraremos únicamente en el diseño de la API y no trataremos ningún detalle de la implementación.

Las operaciones que la API debe soportar son las siguientes:
- Crear una partida(1).
- Eliminar una partida(2).
- Modificar datos de una partida(2).
- Iniciar una partida(4).
- Finalizar una partida(5).
- Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida(6).
- Añadir un barco a la cuadrícula de un jugador en una partida(7).
- Eliminar un barco de la cuadrícula de un jugador en una partida(8).
- Consultar todos los barcos de un jugador de una partida(9).
- Registrar un disparo de un jugador a otro en una partida(10).
- Crear un usuario(11).
- Obtener datos de un usuario(12).
- Eliminar un usuario(13).

Ten en cuenta que podría no ser necesario definir un endpoint por cada una de las operaciones que se han listado. No obstante, dichas operaciones deben ser satisfechas por la API diseñada. Las primeras preguntas que deberás hacerte son:
- ¿Qué recursos tiene que manejar la API?
- ¿Cómo se relacionan entre sí?
- ¿Qué información (atributos) guarda cada recurso?


***Recursos identificados***
Partidas (games): Recurso que representa una partida entre dos jugadores.
Barcos (ships): Recurso que representa un barco de la cuadrícula.
Jugadores (players): Recurso que representa un jugador de una partida.
Disparos (shots): Recurso que representa un disparo de un jugador a otro.


***Atributos de los recursos***

//Para el recurso Partidas (games)//
- players: array de string. Lista con los identificadores o nombres de los jugadores que participan en la partida (ejemplo: ["player1", "player2"]).
- Estados de la partida (status): CREATED: Partida creada, esperando colocación de barcos. IN_PROGRESS: Partida en curso. FINISHED: Partida finalizada
- ships_alive_player1: integer (opcional en la respuesta). Indica cuántos barcos le quedan al jugador 1.
- ships_alive_player2: integer (opcional en la respuesta). Indica cuántos barcos le quedan al jugador 2.
- hit_shots_player1: integer (opcional en la respuesta). Dispar
- hit_shots_player2: integer (opcional en la respuesta). Dispar
- winner: string (opcional). Identificador o nombre del ganador de la partida.

//Para el recurso Barcos (ships)//
- boatSize: integer. Tipo de barco 

Barco de 4 cuadrados: boatSize: 4
Barcos de 3 cuadrados: boatSize: 3
Barcos de 2 cuadrados: boatSize: 2
Barcos de 1 cuadrado: boatSize: 1

- position: array de string (u otro formato, dependiendo de la implementación). Lista de casillas que ocupa el barco, en formato letra+número (por ejemplo, ["A1", "A2", "A3"])
- orientation: string. Indica si el barco está colocado en horizontal o vertical.

  1 2 3 4 5 6 7 8 9 10
A x x x o o o o o o o
B o o x x x o o o o x
C o o o o o o x o o x
D o o o o o o o o o x
E o o o o o o x o o x
F o o o o o o o o o o
G o o x x o o x o o o
H o o o o o o o o o o
I o x o x o o x o o o
J o x o x o o o o o o

- orientation: string. Indica si el barco está colocado en horizontal o vertical.

//Para el recurso Jugadores (players)//
- name: string. Nombre del jugador.
- email: string. Dirección de correo electrónico del jugador.
- password: string (solo en el momento de la creación o autenticación). Contraseña, por lo general no se devuelve en las respuestas por motivos de seguridad


//Para el recurso Disparos (shots)//

- shot_position: string. Posición a la que se dispara (por ejemplo, "A5").
- result: string. Indica si el disparo fue "WATER", "HIT" o "SUNK".


| Operations                                                     | 
|:---------------------------------------------------------------|
| (1)  Crear partida                                             | 
| (2)  Eliminar partida                                          |
| (3)  Modificar datos partida                                   |
| (4)  Iniciar partida                                           |
| (5)  Finalizar partida                                         |
| (6)  Consultar todos los datos partida                         |
| (7)  Añadir barco al tablero de 1 jugador en una partida       |
| (8)  Eliminar barco del tablero de 1 jugador en una partida    |
| (9)  Consultar todos los barcos de 1 jugador de una partida    |
| (10) Registrar un disparo de un jugador a otro en una partida  |
| (11) Crear un jugador                                          |
| (12) Datos de un jugador                                       |
| (13) Eliminar un jugador                                       |



| Operations | Método HTTP | URI                                               | Query Params | Cuerpo de la Petición                                                                   | Cuerpo de la Respuesta                                                                                                                                                                                                       | Códigos de Respuesta                                  |
|:-----------|-------------|---------------------------------------------------|--------------|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| (1)        | POST        | /games                                            | N/A          | { "players": ["string", "string"] }                                                     | { "id": "string", "players": ["string", "string"], "status": "string" }                                                                                                                                                      | 201 Created 400 Bad Request 500 Internal Server Error |
| (2)        | DELETE      | /games/{gameId}                                   | N/A          | N/A                                                                                     | { "message": "Game deleted successfully" }                                                                                                                                                                                   | 200 OK 404 Not found 500 Internal Server Error        |
| (3)        | PATCH       | /games/{gameId}                                   | N/A          | { "status":"string", "players": ["string", "string"] }                                  | { "id": "string", "status": "string" }                                                                                                                                                                                       | 200 OK 404 Not found 500 Internal Server Error        |
| (4)        | PATCH       | /games/{gameId}                                   | N/A          | { "status":"string" }                                                                   | { "id": "string", "status": "string" }                                                                                                                                                                                       | 200 OK 404 Not found 500 Internal Server Error        |
| (5)        | PATCH       | /games/{gameId}                                   | N/A          | { "status":"string" }                                                                   | { "id": "string", "status": "string" }                                                                                                                                                                                       | 200 OK 404 Not found 500 Internal Server Error        |
| (6)        | GET         | /games/{gameId}                                   | N/A          | N/A                                                                                     | { "id": "string", "players": ["string", "string"], "status": "string", "ships_alive_player1": "integer", "ships_alive_player2": "integer", "hit_shots_player1":"integer", "hit_shots_player2":"integer", "winner":"string" } | 200 OK 404 Not found 500 Internal Server Error        |
| (7)        | POST        | /games/{gameId}/players/{playerId}/ships          | N/A          | { "boatSize": "integer", "position": ["string",...,"string"], "orientation": "string" } | { "id": "string", "boatSize": integer, "position": ["string",...,"string"], "orientation": "string" }                                                                                                                        | 201 Created 400 Bad Request 500 Internal Server Error |
| (8)        | DELETE      | /games/{gameId}/players/{playerId}/ships/{shipId} | N/A          | N/A                                                                                     | { "message": "Ship deleted successfully" }                                                                                                                                                                                   | 200 OK 404 Not found 500 Internal Server Error        |
| (9)        | GET         | /games/{gameId}/players/{playerId}/ships          | N/A          | N/A                                                                                     | { "ships": [ { "id": "string", "boatSize": "integer", "position": ["string", "...", "string"] }, ... ] }                                                                                                                     | 200 OK 404 Not found 500 Internal Server Error        |
| (10)       | POST        | /games/{gameId}/players/{playerId}/shots          | N/A          | { "shot_position": "string" }                                                           | { "id": "string", "shot_position": "string", "result": "string" }                                                                                                                                                            | 201 Created 400 Bad Request 500 Internal Server Error |
| (11)       | POST        | /players                                          | N/A          | { "name": "string", "email": "string", "password": "string" }                           | { "id": "string", "name": "string", "email": "string" }                                                                                                                                                                      | 201 Created 400 Bad Request 500 Internal Server Error |
| (12)       | GET         | /players/{playerId}                               | N/A          | N/A                                                                                     | { "id": "string", "name": "string", "email": "string" }                                                                                                                                                                      | 200 OK 404 Not found 500 Internal Server Error        |
| (13)       | DELETE      | /players/{playerId}                               | N/A          | N/A                                                                                     | { "message": "Player deleted successfully" }                                                                                                                                                                                 | 200 OK 404 Not found 500 Internal Server Error        |


Ejemplos de respuesta:

Operación (1): Crear partida
201 Created
json
Copiar
{
"id": "gameId-UUID",
"players": ["playerId1", "playerId2"],
"status": "CREATED"
}

Operación (2): Eliminar partida
200 OK
json
Copiar
{
"message": "Game deleted successfully."
}

Operación (3): Modificar datos partida
200 OK
json
Copiar
{
"id": "gameId-UUID",
"status": "IN_PROGRESS"
}


Operación (4): Iniciar partida
200 OK
json
Copiar
{
"id": "gameId-UUID",
"status": "IN_PROGRESS"
}


Operación (5): Finalizar partida
200 OK
json
Copiar
{
"id": "gameId-UUID",
"status": "FINISHED"
}


Operación (6): Consultar todos los datos partida
200 OK
json
Copiar
{
"id": "gameId-UUID",
"players": ["playerId1", "playerId2"],
"status": "IN_PROGRESS",
"ships_alive_player1": 3,
"ships_alive_player2": 2,
"hit_shots_player1": 5,
"hit_shots_player2": 4,
"winner": "playerId" // opcional
}


Operación (7): Añadir barco al tablero de un jugador en una partida
201 Created
json
Copiar
{
"id": "shipId-UUID",
"boatSize": 3,
"position": ["A1", "A2", "A3"],
"orientation": "horizontal"
}


Operación (8): Eliminar barco del tablero de un jugador en una partida
200 OK
json
Copiar
{
"message": "Ship deleted successfully."
}


Operación (9): Consultar todos los barcos de un jugador de una partida
200 OK
json
Copiar
{
"ships": [
{
"id": "shipId-UUID",
"boatSize": 3,
"position": ["A1", "A2", "A3"],
"orientation": "horizontal"
},
// ... otros barcos
]
}


Operación (10): Registrar un disparo de un jugador a otro en una partida
201 Created
json
Copiar
{
"id": "shotId-UUID",
"shot_position": "B5",
"result": "HIT"
}


Operación (11): Crear un jugador
201 Created
json
Copiar
{
"id": "playerId-UUID",
"name": "John Doe",
"email": "john@example.com"
}


Operación (12): Obtener datos de un jugador
200 OK
json
Copiar
{
"id": "playerId-UUID",
"name": "John Doe",
"email": "john@example.com"
}


Operación (13): Eliminar un jugador
200 OK
json
Copiar
{
"message": "Player deleted successfully."
}
