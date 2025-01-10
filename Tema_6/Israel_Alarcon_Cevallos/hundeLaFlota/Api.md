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

Recursos identificados:

    Games
    Boards
    Ships
    Shots
    Users

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Método Http |	                Endpoint                        |   Query Params    |                    	Cuerpo JSON de la petición                  |                    	Respuesta JSON de la petición                                           | 	Códigos HTTP respuesta  |
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    POST    | 	/games                                          |                   | {"status": "string"}                                              | 	{"id": "integer", "status": "string"}                                                       | 	201, 400                |
    PATCH   | 	/games/{gameId}                                 |                   | {"player1Id": "integer", "player2Id": "integer"}                  | 	{"id": "integer", "player1Id": "integer", "player2Id": "integer", "status": "string"}       |	200, 404                |
    DELETE  | 	/games/{gameId}                                 |                   | {"player1Id/player2Id": "integer"	}                               |   {"message" : "Jugador 1 o 2 eliminado"}                                                     |   200, 404                |
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    POST    | 	/games/{gameId}/boards                          |                   | {"playerId": "integer"}                                           | 	{"id": "integer", "gameId": "integer", "playerId": "integer"}                               | 	201, 400                |
    POST    | 	/games/{gameId}/boards/{boardId}/ships          |                   | {"type": "string", "size": "integer", "trips": "integer"}         |	{"id": "integer", "type": "string", "size": "integer"}                                      | 	201, 400                |
    DELETE  | 	/games/{gameId}/boards/{boardId}/ships/{shipId} |                   |                                                                   |	{"message" : "Nave eliminada"}                                                              |   200, 404                |
    GET     | 	/games/{gameId}                                 | {boardId, ShipId} | {"type": "string", "size": "integer", "trips": "integer"}         |	{"ships": ["array"]}                                                                        | 	200, 400                |
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    POST    | 	/games/{gameId}/shots                           |                   | {"playerId": "integer", "X": "integer", "Y": "integer"}           | 	{"id": "integer", "result": "string"}                                                       | 	201, 400, 200           |
    GET     | 	/games/{gameId}                                 |                   | {"playerId": "integer", "X": "integer", "Y": "integer"}           |   {"id": "integer", "player1Id": "integer", "player2Id": "integer", "status": "string",       |                           |
            |                                                   |                   |                                                                   |    "winner": "integer", "boards": "array", "shots": "array"}                                  |   200, 400                |
    GET     | 	/games/{gameId}/                                |       shots       | {"id": "integer", "playerId": "integer"}                          | 	{"id": "integer", "playerId": "integer", "X": "integer", "Y": "integer", "result": "string"}|   200, 400                |
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    POST    | 	/users                                          | 		            | {"username": "string", "password": "string", email": "string"}    | 	{"id": "integer", "username": "string", "password": "string", email": "string"}             | 	201, 400, 200           |
    GET     | 	/users/{userId}                                 | 			        | {"id": "integer", "username": "string", "password": "string"}     | 	{"id": "integer", "username": "string", "password": "string", email": "string"}             |   200, 400                |
    DELETE  | 	/users/{userId}                                 |                   |                                                                   |   {"message" : "Usuario eliminado"}                                                           |  	200, 404                |
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------