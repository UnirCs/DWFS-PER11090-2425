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

*Recursos:*
- Partidas
- Barcos
- Jugadores
- Disparos
- Usuarios

**Explicación operaciones:**
- El primer método POST cubre la operación de Crear una partidad (además será la que usará el segundo jugador para entrar a una partida ya creada).
- El primer método DELETE cubre la operación de Eliminar una partida.
- El primer método PATCH cubre las operaciones de: modificar datos de una partida e iniciar y finalizar partida. El estado Ready será cuando estén dos jugadores asociados a una partida, el estado Playing cuando estén jugando y Finished cuando haya acabado.
- El primer método GET cubre la funcionalidad de obtener todos los datos de una partida.
- El primer método PUT cubre la funcionalidad de añadir un barco a la cuadrícula. Importante mencionar que cada uno de los 10 barcos (suma total de todos ellos) tendrán un ID fijo que servirá para identificarlo a través de toda la aplicación.
- El segundo método DELETE cubre la funcionalidad de eliminar un barco de la cuadrícula.
- El segundo método GET cubre la funcionalidad de consultar los barcos de un jugador.
- El segundo método POST cubre la funcionalidad de realizar un disparo. La respuesta nos indicará si hemos acertado o no.
- El tercer método POST cubre la funcionalidad de registro.
- El tercer método GET cubre la funcionalidad de obtener datos de un usuario.
- El tercer método DELETE cubre la funcionalidad de eliminar un jugador.

**Operaciones:**

| Método HTTP | URI                                                    | Cuerpo de la Petición                                              | Cuerpo de la Respuesta                                                                                                                  | Códigos de Respuesta                                                               |
|-------------|--------------------------------------------------------|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| POST        | /partidas                                              | `{"playerA": "Mario", "playerB": empty}`                           | `{"id":1, "playerA": "Mario", "playerB": empty, status="waiting"}`                                                                      | 201 (no existe partida en estado waiting), 200 (jugadorB se une a la partida), 400 |
| DELETE      | /partidas/{id}                                         | N/A                                                                | N/A                                                                                                                                     | 200, 404                                                                           |
| PATCH       | /partidas/{id}                                         | `{"status": "ready"}`  `{status="playing"}   {status="finished"}`  | `{"id":1, "playerA": "Mario", "playerB": "Pepe", status="ready"}`                                                                       | 200, 400                                                                           |
| GET         | /partidas/{id}                                         | N/A                                                                | `{"id":1, "playerA": "Mario", "playerB": "Pepe", status="playing", "shipsA"={}, "shipsB"={}, "shotsA"=[], "shotsB"=[], "winner"=empty}` | 200, 400, 404                                                                      |
| PUT         | /partidas/{id_partida}/barcos/{id_barco}               | `{"positionX":[3,4],"positionY":[2,2]}`                            | `{"ships":{ "boatId": {32:"alive",42:"alive"} } }`                                                                                      | 200, 400                                                                           |
| DELETE      | /partidas/{id_partida}/barcos/{id_barco}               | N/A                                                                | `{"ships":{(whitout the boat deleted)}}`                                                                                                | 200, 404                                                                           |
| GET         | /partidas/{id_partida}/jugadores/{id_jugador}/barcos   | N/A                                                                | `{"ships":{ "boatId": {32:"touched",42:"alive"}, "boatId":{11:"touched",12:"alive",13:"touched",14:"alive"}}`                           | 200, 404                                                                           |
| POST        | /partidas/{id_partida}/disparos                        | `{"player":"Mario", "shotX"=1,"shotY"=2 }`                         | `{"message":"touched"}`                                                                                                                 | 201, 400, 404                                                                      |
| POST        | /usuarios                                              | `{"name":"Mario", "email":"email@email.com", "password":PASSWORD}` | `{"id":1, "name":"Mario", "email":"email@email.com"}`                                                                                   | 201, 400                                                                           |
| GET         | /usuarios/{id}                                         | N/A                                                                | `{"id":1, "name":"Mario", "email":"email@email.com"}`                                                                                   | 200, 404                                                                           |
| DELETE      | /usuarios/{id}                                         | N/A                                                                | N/A                                                                                                                                     | 200, 404                                                                           |



