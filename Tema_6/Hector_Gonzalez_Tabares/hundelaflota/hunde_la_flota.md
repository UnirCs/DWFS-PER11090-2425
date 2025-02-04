API del juego hunde la flota					
					
En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'. Si no conoces este juego puedes 
echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida.
La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). 
Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha 
cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:					
					
1 barco de 4 cuadrados.					
2 barcos de 3 cuadrados.					
3 barcos de 2 cuadrados.					
4 barcos de 1 cuadrado.					
					
También es necesario que, como dicen las instrucciones, se respeten dos reglas:					
					
Los barcos se colocan enteramente en horizontal o enteramente en vertical, es decir, no puede haber un barco en forma de L.					
Siempre debe haber un cuadrado de distancia entre cualquier punto de cualquier barco, y se pueden pegar al borde de la cuadrícula.					
					
El objetivo del ejercicio es diseñar una API REST que será implementada (en otros ejercicios) por un microservicio o aplicación que se encargará de tratar 
todos los datos de las diferentes partidas. En este ejercicio nos centraremos únicamente en el diseño de la API y no trataremos ningún detalle de la implementación.					
					
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
					
Ten en cuenta que podría no ser necesario definir un endpoint por cada una de las operaciones que se han listado. No obstante, dichas operaciones deben ser satisfechas por 
la API diseñada. Las primeras preguntas que deberás hacerte son:					
					
¿Qué recursos tiene que manejar la API?					
¿Cómo se relacionan entre sí?					
¿Qué información (atributos) guarda cada recurso?					

** Recursos Identificados
**Jugador** Representa un usuario registrado en el juego.
**Partidas**: Representa una partida entre dos jugadores.
**Tablero** Tablero donde se juega la partida
**Barcos** Representa un barco dentro de una partida.
**Flota**  Conjunto de barcos
**Disparos** Representa un disparo realizado por un jugador a otro en una partida.

  
## Detalle de los Endpoints

| Método HTTP | URI                                   | Query Params | Request Body                                                 | Response Body                                                                                                                  | Códigos HTTP de respuesta                                        |
|-------------|---------------------------------------|--------------|--------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| POST        | /api/v1/jugadores                     | -            | `{"nombre": "Jugador1", "flota": 1}` 						 						|  `{"id": 1, "nombre": "Jugador1","flota": 1, "Puntuacion": 0}`                                         | 201 Created, 400 Bad Request, 500 Internal Server Error 		    | 
| GET         | /api/v1/jugadores/{id}                | -            | 						 						 						 				|  `{"id": 1, "nombre": "Jugador1","flota": 1, "Puntuacion": 0}`                                         | 200 OK, 404 Not Found, 500 Internal Server Error        		    | 
| DELETE      | /api/v1/jugadores/{id}                | -            |  							 				 										|  `{"mensaje": "Jugador eliminado"}`                                                                    | 200 OK, 404 Not Found, 500 Internal Server Error       		    | 
| POST        | /api/v1/partidas                      | -            | `{"jugador": "Jugador1", "jugador2": "invitado","estado": "iniciado","tablero": 1}`	|  `{"idPartida": "1", "jugador1": "Jugador1", "jugador2": "invitado","estado": "iniciado","tablero": 1}`| 201 Created, 400 Bad Request, 500 Internal Server Error 		    | 
| DELETE      | /api/v1/partidas/{id}                 | -            |  							 								 						|  `{"mensaje": "Partida eliminada"}`                                                                    | 200 OK, 404 Not Found, 500 Internal Server Error       		    | 
| PUT         | /api/v1/partidas/{id}                 | -            | `{"jugador": "Jugador1", "jugador2": "invitado"}`			 						|  `{"idPartida": "1", "jugador1": "Jugador1", "jugador2": "invitado","estado": "iniciado","tablero": 1}`| 201 Created, 400 Bad Request, 500 Internal Server Error 		    | 
| POST        | /api/v1/partidas/{idPartida}/disparos | -            | `{"jugador": "Jugador1", "posicion": {"x": 5, "y": 5}}` 							    |  `{"idDisparo": "010", "jugador": "Jugador1", "posicion": {"x": 5, "y": 5}, "resultado": "tocado"}`    | 201 Created, 400 Bad Request, 500 Internal Server Error          |
| GET         | /api/v1/partidas/{idPartida}/disparos | `jugador`    | `{"jugador": "Jugador1", "jugador2": "invitado","en curso": "iniciado","tablero":1}` |  `{"idPartida": "1", "jugador": "Jugador1", "jugador2": "invitado","estado": "en curso","tablero": 1}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| POST        | /api/v1/partidas/{idPartida}/barcos   | -            | `{"jugador": "Jugador1", "tipo": "Acorazado", "posicion": {"x": 1, "y": 1}, "orientacion": "horizontal"}` | `{"idBarco": "11", "jugador": "Jugador1", "tipo": "Acorazado", "posicion": {"x": 1, "y": 1}, "orientacion": "horizontal"}` | 201 Created, 400 Bad Request, 500 Internal Server Error          |
| GET         | /api/v1/partidas/{idPartida}/barcos   | `jugador`    | -                                                            						 | `{"barcos": [{"idBarco": "11", "jugador": "Jugador1", "tipo": "Acorazado", "posicion": {"x": 1, "y": 1}, "orientacion": "horizontal"}]}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error |
| DELETE      | /api/v1/partidas/{idPartida}/barcos/{idBarco}| -    | -                                                           						     | `{"message": "Barco eliminado"}`                                                                       | 200 OK, 404 Not Found, 500 Internal Server Error                  |
