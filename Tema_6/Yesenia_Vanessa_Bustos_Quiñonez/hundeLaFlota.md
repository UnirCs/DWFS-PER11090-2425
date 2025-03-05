# API del juego hunde la flota

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

--------------------------------------------------------------------------------------
Recursos identificados:
Partida (partidas): Representa un juegos de "hunde la flota".
Jugador (jugadores): Representa un jugador que está jugando la partida.
Usuario (usuarios): Representan un jugador registrado en la aplicación.
Barco (barcos): Representa un barco de la partida.
Disparo (disparos): Representa un disparo del barco.

-----------------------------------------------------------------------
Atributos de cada recurso:
Partida: ID, jugadores, estado(iniciando, en_curso, terminada), barcos, disparos, ganador.
Barco: ID, tipo(grande, mediano, pequeño, mini), coordenadas("letra"+"número"[array]), orientacion.
Disparo: ID, coordenada, resultado.
Jugador: ID, nombre, tipo (anónimo, usuario).
Usuario: ID, nombre, correo, password, partidas_jugadas.

------------------------------------------------------------------------
Relación de los recursos:
Partida: Una partida está asociada con dos jugadores y contiene dos tableros. Cada jugador tiene una lista de barcos en su tablero y puede realizar disparos al tablero del otro jugador.
Jugador: Un jugador puede tener varios barcos asociados (uno de cada tipo: 4 cuadrados, 3 cuadrados, 2 cuadrados, 1 cuadrado), y puede estar asociado con una partida.
Barco: Un barco pertenece a un jugador y está asociado con coordenadas específicas en la cuadrícula (horizontal o vertical).
Disparo: Un disparo se realiza de un jugador a otro y afecta la cuadrícula del oponente.
Usuario: Un usuario está asociado a un jugador (registrado), y gestiona la autenticación o la identidad del jugador.

---------------------------------------------------------------------------------------
| Método HTTP | URI                                                                   | Query Params | Cuerpo JSON de la petición                                     | Cuerpo de la Respuesta                                                                                                                                                              | Código de Respuesta                                     |
|-------------|-----------------------------------------------------------------------|--------------|----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| POST        | /partidas                                                             |              | {"jugador1Id":"integer", "jugador2Id":"integer"}               | {"id":"integer", "jugador1Id":"integer", "jugador2Id":"integer", "estado":"string"}                                                                                                 | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /partidas/{partidaId}                                                 |              |                                                                | {"mensaje":"Partida eliminada"}                                                                                                                                                     | 200 OK, 404 Not Found, 500 Internal Server Error        |
| PATCH       | /partidas/{partidaId}                                                 |              | {"estado":"string"}                                            | {"id":"integer", "jugador1Id":"integer", "jugador2Id":"integer", "estado":"string"}                                                                                                 | 200 OK, 404 Not Found, 500 Internal Server Error        |
| GET         | /partidas/{partidaId}                                                 |              |                                                                | {"id":"integer", "jugador1Id":"integer", "jugador2Id":"integer", "estado":"string", "ganador":"integer", "barcosJ1":[...], "barcosJ2":[...], "disparosJ1":[...],"disparosJ2":[...]} | 200 OK, 404 Not Found, 500 Internal Server Error        |
| POST        | /partidas/{partidaId}/barcos                                          |              | {"tipo":"string", "coordenadas":[...], "orientacion":"string"} | {"id":"integer", "tipo":"string", "coordenadas":[...], "orientacion":"string"}                                                                                                      | 201 Created, 400 Bad Request, 500 Internal Server Error |
| DELETE      | /partidas/{partidaId}/barcos/{barcoId}                                |              |                                                                | {"mensaje":"Barco eliminado"}                                                                                                                                                       | 200 OK, 404 Not Found, 500 Internal Server Error        |
| GET         | /partidas/{partidaId}/jugadores/{jugadorId}/barcos                    |              |                                                                | {"id":"integer", "barcos":[...]"}                                                                                                                                                   | 200 OK, 404 Not Found, 500 Internal Server Error        |
| POST        | /partidas/{partidaId}/jugadores/{jugadorId}/barcos/{barcoId}/disparos |              | {"coordenadas":[...], "resultado":"string"}                    | {"id":"integer", "coordenadas":[...], "resultado":"string"}                                                                                                                         | 201 Created, 400 Bad Request, 500 Internal Server Error |
| POST        | /usuarios                                                             |              | {"nombre":"string", "correo":"string", "password":"string"}    | {"id":"integer", "nombre":"string", "correo":"string", "password":"string", "partidas_jugadas":"integer"}                                                                           | 201 Created, 400 Bad Request, 500 Internal Server Error |
| GET         | /usuarios/{usuarioId}                                                 |              |                                                                | {"id":"integer", "nombre":"string", "correo":"string", "password":"string", "partidas_jugadas":"integer"}                                                                           | 200 OK, 404 Not Found, 500 Internal Server Error        |
| DELETE      | /usuarios/{usuarioId}                                                 |              |                                                                | {"mensaje":"Usuario eliminado"}                                                                                                                                                     | 200 OK, 404 Not Found, 500 Internal Server Error        |

