# API del juego hunde la flota
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




| OPERACIÓN           | MÉTODO   | URI                       | CUERPO PETICIÓN      | RESPUESTA       | Código      |
|-----------------------------|--------|------------------------------------------|--------------------------------------------------------------------|--------------------------------------|---------------|
| Crear partida               | POST   | /api/v1/partidas                         | {"jugador1": int, "jugador2": int}                                 | {"idPartida": int}                   | 201, 400      |
| Obtener usuario             | GET    | /api/v1/usuarios/{id}                    | -                                                                  | {"idUsuario": int, ...}              | 200, 404      |
| Eliminar usuario            | DELETE | /api/v1/usuarios/{id}                    | -                                                                  | {"mensaje": "Eliminado"}             | 200, 404      |
| Eliminar partida            | DELETE | /api/v1/partidas/{id}                    | -                                                                  | {"mensaje": "Eliminado"}             | 200, 404      |
| Modificar partida           | PATCH  | /api/v1/partidas/{id}                    | {"estado": "iniciada" o "finalizada"}                              | {"mensaje": "Actualizado"}           | 200, 400, 404 |
| Consultar partida           | GET    | /api/v1/partidas/{id}                    | -                                                                  | {"datosPartida": {...}}              | 200, 404      |
| Añadir barco                | POST   | /api/v1/partidas/{id}/barcos             | {"idUsuario": int, "tipo": "string", "posicion": {x1, y1, x2, y2}} | {"idBarco": int}                     | 201, 400      |
| Eliminar barco              | DELETE | /api/v1/partidas/{id}/barcos/{idBarco}   | -                                                                  | {"mensaje": "Eliminado"}             | 200, 404      |
| Consultar barcos de jugador | GET    | /api/v1/partidas/{id}/barcos/{idUsuario} | -                                                                  | {"barcos": [...]}                    | 200, 404      |
| Registrar disparo           | POST   | /api/v1/partidas/{id}/disparos           | {"jugadorAtacante": int, "coordenadas": {x, y}}                    | {"resultado": "agua/tocado/hundido"} | 201, 400      |