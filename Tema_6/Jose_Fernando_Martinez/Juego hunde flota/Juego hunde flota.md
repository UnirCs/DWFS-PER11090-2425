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

**Recursos identificados:**
- Partida: Es una partida del juego 'Hundir la flota'.
- Barco: Es un barco que se coloca en la cuadrícula de un jugador.
- Turno: Es un disparo que un jugador realiza a otro en una partida.
- Usuario: Es un Jugador registrado.


| Método Http  | Endpoint                     | Query Params | Cuerpo JSON de la petición                                                                                                                                              | Respuesta JSON de la petición                                                                                                                                                                                                                      | Códigos HTTP de respuesta posibles     |
|--------------|------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| POST         | /partida                     |              | `{"jugador_1":"Paco","jugador_2":"hugo", "barcos":{"barco4cuadrados":2,"barcos3cuadrados":4,"barcos2cuadrados":6,"barcos1cuadrado":8}, "estado":"en espera"}`           | `{   "id_partida": 1, "operacion_realizada": "creacion de partida", "resultado": "exito" }`                                                                                                                                                        | 200 OK, 400 Bad Request                |
| PUT          | /partida/{id_partida}        |              | `{"jugador_1":"Luis","jugador_2":"hugo@gmail.com", "barcos":{"barco4cuadrados":2,"barcos3cuadrados":4,"barcos2cuadrados":6,"barcos1cuadrado":8}, "estado":"en espera"}` | `{   "operacion_realizada": "modificacion de partida", "resultado": "exito" }`                                                                                                                                                                     | 200 OK, 400 Bad Request, 404 Not Found |
| DELETE       | /partida/{id_partida}        |              |                                                                                                                                                                         | `{   "operacion_realizada": "eliminacion de partida", "resultado": "exito" }`                                                                                                                                                                      | 200 OK, 400 Bad Request, 404 Not Found |
| PATCH        | /partida/{id_partida}        |              | `{"estado":"juego iniciado"}`                                                                                                                                           | `{   "operacion_realizada": "inicio de partida", "resultado": "exito" }`                                                                                                                                                                           | 200 OK, 400 Bad Request, 404 Not Found |
| GET          | /partida/{id_partida}        |              |                                                                                                                                                                         | `{   "id_partida": 1, "jugador_1":"Paco","jugador_2":"hugo", "barcos":{"barco4cuadrados":2,"barcos3cuadrados":4,"barcos2cuadrados":6,"barcos1cuadrado":8}, "estado":"finalizada","ganador":"Luis", "duracion_de_partida":"30 minutos" }`           | 200 OK, 404 Not Found                  |
| POST         | /barco                       |              | `{"numeroBarco": 1, "id_jugador": "Paco", "tipo_barco": "barco4cuadrados", "posicion": "A1,A2,A3,A4"}`                                                                  | `{   "numeroBarco": 1, "operacion_realizada": "adicion de barco", "resultado": "exito" }`                                                                                                                                                          | 200 OK, 400 Bad Request                |
| DELETE       | /barco/{id_barco}            |              |                                                                                                                                                                         | `{   "operacion_realizada": "eliminacion de barco", "resultado": "exito" }`                                                                                                                                                                        | 200 OK, 400 Bad Request, 404 Not Found |
| GET          | /barco/{id_jugador}          |              |                                                                                                                                                                         | `{   "id_jugador": "Paco", "barcos":{"barco4cuadrados":2,"barcos3cuadrados":4,"barcos2cuadrados":6,"barcos1cuadrado":8} }`                                                                                                                         | 200 OK, 404 Not Found                  |
| POST         | /turno                       |              | `{"id_partida": 1, "id_jugador": "Paco", "posicion": "A1"}`                                                                                                             | `{   "id_turno": 1, "operacion_realizada": "disparo realizado", "resultado": "agua" }`                                                                                                                                                             | 200 OK, 400 Bad Request                |
| POST         | /usuario                     |              | `{"nombre": "Hugo", "apellido": "Mcpato", "email": "hugo@gmail.com"}`                                                                                                   | `{   "id_usuario": "hugo@gmail.com", "operacion_realizada": "creacion de usuario", "resultado": "exito" }`                                                                                                                                         | 200 OK, 400 Bad Request                |
| GET          | /usuario/{id_usuario}        |              |                                                                                                                                                                         | `{   "id_usuario": "hugo@gmail.com", "nombre": "Hugo", "apellido": "Mcpato"}`                                                                                                                                                                      | 200 OK, 404 Not Found                  |
| DELETE       | /usuario/{id_usuario}        |              |                                                                                                                                                                         | `{   "operacion_realizada": "eliminacion de usuario hugo@gmail.com", "resultado": "exito" }`                                                                                                                                                       | 200 OK, 400 Bad Request, 404 Not Found |