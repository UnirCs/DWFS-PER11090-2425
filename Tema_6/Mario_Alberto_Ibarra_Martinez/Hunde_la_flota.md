# API del juego hunde la flota

En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'. Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:

-   1 barco de 4 cuadrados.
-   2 barcos de 3 cuadrados.
-   3 barcos de 2 cuadrados.
-   4 barcos de 1 cuadrado.

También es necesario que, como dicen las instrucciones, se respeten dos reglas:

-   Los barcos se colocan enteramente en horizontal o enteramente en vertical, es decir, no puede haber un barco en forma de L.
-   Siempre debe haber un cuadrado de distancia entre cualquier punto de cualquier barco, y se pueden pegar al borde de la cuadrícula.

El objetivo del ejercicio es diseñar una API REST que será implementada (en otros ejercicios) por un microservicio o aplicación que se encargará de tratar todos los datos de las diferentes partidas. En este ejercicio nos centraremos únicamente en el diseño de la API y no trataremos ningún detalle de la implementación.

Las operaciones que la API debe soportar son las siguientes:

-   Crear una partida.
-   Eliminar una partida.
-   Modificar datos de una partida.
-   Iniciar una partida.
-   Finalizar una partida.
-   Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida.
-   Añadir un barco a la cuadrícula de un jugador en una partida.
-   Eliminar un barco de la cuadrícula de un jugador en una partida.
-   Consultar todos los barcos de un jugador de una partida.
-   Registrar un disparo de un jugador a otro en una partida.
-   Crear un usuario.
-   Obtener datos de un usuario.
-   Eliminar un usuario.

Ten en cuenta que podría no ser necesario definir un endpoint por cada una de las operaciones que se han listado. No obstante, dichas operaciones deben ser satisfechas por la API diseñada. Las primeras preguntas que deberás hacerte son:

-   ¿Qué recursos tiene que manejar la API?
-   ¿Cómo se relacionan entre sí?
-   ¿Qué información (atributos) guarda cada recurso?


### Detalle de recursos y relaciones:

1.  **`/partidas`**: Maneja las partidas del juego. Cada partida incluye jugadores, estado, barcos, disparos y ganador.
2.  **`/partidas/{idPartida}`**: Representa una partida específica, permite consultar, actualizar, iniciar y finalizar una partida.
3.  **`/partidas/{idPartida}/barcos`**: Maneja los barcos de cada jugador dentro de una partida.
4.  **`/partidas/{idPartida}/disparos`**: Registra disparos entre los jugadores de una partida.
5.  **`/usuarios`**: Gestiona usuarios registrados o invitados.
6.  **`/usuarios/{idUsuario}`**: Consulta o elimina información de un usuario específico.


### Atributos esenciales:

-   **Partidas**: ID, jugadores, estado, barcos, disparos, ganador.
-   **Barcos**: Tipo, coordenadas, orientación.
-   **Disparos**: Atacante, objetivo, coordenada, resultado.
-   **Usuarios**: ID, nombre, email, partidas jugadas.

| **Método HTTP** | **URI**                    | **Query Params**         | **Cuerpo de la Petición**                                                                            | **Cuerpo de la Respuesta**                                                                            | **Códigos HTTP de respuesta**                    |
|------------------|---------------------------|---------------------------|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| POST             | /partidas                 | -                         | `{ "jugador1": "usuario1", "jugador2": "usuario2", "anonimo": true }`                                 | `{ "idPartida": "abc123", "estado": "creada" }`                                                       | 201 Creada, 400 Solicitud Incorrecta             |
| DELETE           | /partidas/{idPartida}     | -                         | -                                                                                                     | `{ "mensaje": "Partida eliminada exitosamente" }`                                                     | 200 OK, 404 No Encontrada                        |
| PUT              | /partidas/{idPartida}     | -                         | `{ "jugador1": "nuevoUsuario1", "jugador2": "nuevoUsuario2" }`                                        | `{ "idPartida": "abc123", "estado": "actualizada" }`                                                  | 200 OK, 400 Solicitud Incorrecta, 404 No Encontrada |
| PATCH             | /partidas/{idPartida} | -                       | `{ "estado": "iniciada" }`                                                                                                    | `{ "idPartida": "abc123", "estado": "iniciada" }`                                                     | 200 OK, 400 Solicitud Incorrecta, 404 No Encontrada                       |
| GET              | /partidas/{idPartida}     | -                         | -                                                                                                     | `{ "idPartida": "abc123", "jugadores": ["usuario1", "usuario2"], "estado": "en curso","barcos": [...], "disparos": [...], "ganador": null ... }`         | 200 OK, 404 No Encontrada                        |
| POST             | /partidas/{idPartida}/barcos | jugadorId={jugadorId}   | `{ "tipoBarco": "destructor", "coordenadas": [[1, 1], [1, 2], [1, 3]], "orientacion": "horizontal" }` | `{ "mensaje": "Barco añadido exitosamente" }`                                                         | 201 Creada, 400 Solicitud Incorrecta, 404 No Encontrada |
| DELETE           | /partidas/{idPartida}/barcos | jugadorId={jugadorId}   | `{ "coordenadas": [[1, 1], [1, 2], [1, 3]] }`                                                        | `{ "mensaje": "Barco eliminado exitosamente" }`                                                       | 200 OK, 400 Solicitud Incorrecta, 404 No Encontrada |
| GET              | /partidas/{idPartida}/barcos | jugadorId={jugadorId}   | -                                                                                                     | `{ "barcos": [{ "tipoBarco": "destructor", "coordenadas": [[1, 1], [1, 2], [1, 3]] }, ... ] }`        | 200 OK, 404 No Encontrada                        |
| POST             | /partidas/{idPartida}/disparos | -                      | `{ "atacante": "usuario1", "objetivo": "usuario2", "coordenada": [4, 5] }`                           | `{ "resultado": "impacto", "hundido": false, "mensaje": "Disparo registrado" }`                       | 201 Creada, 400 Solicitud Incorrecta, 404 No Encontrada |
| POST             | /usuarios                 | -                         | `{ "nombreUsuario": "usuario1", "email": "usuario1@ejemplo.com", "anonimo": false }`                  | `{ "idUsuario": "usuario1", "estado": "creado" }`                                                     | 201 Creada, 400 Solicitud Incorrecta             |
| GET              | /usuarios/{idUsuario}     | -                         | -                                                                                                     | `{ "idUsuario": "usuario1", "nombreUsuario": "usuario1", "email": "usuario1@ejemplo.com", ... }`      | 200 OK, 404 No Encontrada                        |
| DELETE           | /usuarios/{idUsuario}     | -                         | -                                                                                                     | `{ "mensaje": "Usuario eliminado exitosamente" }`                                                     | 200 OK, 404 No Encontrada                        |



