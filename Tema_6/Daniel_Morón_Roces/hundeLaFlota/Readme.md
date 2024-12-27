# API del juego hunde la flota

En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'.
Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos).
Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. 
Tal como se indica en las instrucciones, deberá haber:
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

## Recursos
**Recursos identificados:**
- Usuarios: Representan los jugadores, tanto registrados como invitados (anónimos).
- Partidas: Contienen información sobre la configuración y estado del juego.
- Barcos: Son los elementos colocados en las cuadrículas de las partidas.
- Disparos: Representan las acciones realizadas por los jugadores en las partidas.

## Operaciones
| Método HTTP | URI                                      | Query Params | Cuerpo de la Petición                                                             | Cuerpo de la Respuesta                                                                        | Códigos de Respuesta |
|-------------|------------------------------------------|--------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------|
| POST        | /partidas                                |              | { "jugador1": "Daniel", "jugador2": "Invitado" }                                  | { "id": "12", "mensaje": "Partida creada" }                                                   | 201, 400             |
| DELETE      | /partidas/{id}                           |              |                                                                                   | { "mensaje": "Partida eliminada" }                                                            | 200, 404             |
| PATCH       | /partidas/{id}                           |              | { "estado": "Iniciada" }                                                          | { "id": "1", "mensaje": "Estado actualizado", "estado": "Iniciada" }                          | 200, 400, 404, 409   |
| PATCH       | /partidas/{id}                           |              | { "estado": "Finalizada" }                                                        | { "id": "1", "mensaje": "Estado actualizado", "estado": "Finalizada" }                        | 200, 400, 404, 409   |
| GET         | /partidas/{id}                           |              |                                                                                   | { "jugador1": "Daniel", "jugador2": "Invitado", "estado": "Finalizada", "ganador": "Daniel" } | 200, 404             |
| POST        | /partidas/{id_partida}/barcos            |              | { "jugador": "Daniel", "tipo": "1", "posicion": "A1", "orientacion": "vertical" } | { "id": "13", "mensaje": "Barco añadido" }                                                    | 201, 400, 409        |
| DELETE      | /partidas/{id_partida}/barcos/{id_barco} |              |                                                                                   | { "mensaje": "Barco eliminado" }                                                              | 200, 404             |
| GET         | /partidas/{id_partida}/barcos            | jugador={id} |                                                                                   | { "barcos": [ { "tipo": "1", "posicion": "A1", "orientacion": "vertical" } ] }                | 200, 404             |
| POST        | /partidas/{id_partida}/disparos          |              | { "jugador_atacante": 1, "posicion": "B2" }                                       | { "id": "14", "mensaje": "Disparo registrado" }                                               | 201, 400, 404, 409   |
| GET         | /partidas/{id_partida}/disparos          |              |                                                                                   | { "id": "14", "mensaje": "Disparo registrado" }                                               | 200, 404             |
| POST        | /usuarios                                |              | { "nombre": "Juan", "email": "juan@mail.com" }                                    | { "id": "1", "mensaje": "Usuario creado" }                                                    | 201, 400             |
| GET         | /usuarios/{id}                           |              |                                                                                   | { "id": "1", "nombre": "Juan", "email": "juan@mail.com" }                                     | 200, 404             |
| DELETE      | /usuarios/{id}                           |              |                                                                                   | { "mensaje": "Usuario eliminado" }                                                            | 200, 404             |