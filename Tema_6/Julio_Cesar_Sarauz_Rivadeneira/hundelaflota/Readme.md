# API del juego hunde la flota
En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'. Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:

- 1 barco de 4 cuadrados.
- 2 barcos de 3 cuadrados.
- 3 barcos de 2 cuadrados.
- 4 barcos de 1 cuadrado.
También es necesario que, como dicen las instrucciones, se respeten dos reglas:

Los barcos se colocan enteramente en horizontal o enteramente en vertical, es decir, no puede haber un barco en forma de L.
Siempre debe haber un cuadrado de distancia entre cualquier punto de cualquier barco, y se pueden pegar al borde de la cuadrícula.
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

¿Qué recursos tiene que manejar la API?
¿Cómo se relacionan entre sí?
¿Qué información (atributos) guarda cada recurso?

# API del Juego "Hunde la Flota" (Juego de los Barcos)

Esta API REST permite gestionar un juego de "Hundir la flota" (o "Juego de los Barcos"), donde los jugadores se enfrentan en partidas con cuadrículas de 10x10 para colocar sus barcos y disparar al rival. A continuación, se detalla la API necesaria para gestionar la creación, modificación y eliminación de partidas, jugadores, barcos y disparos.

## Recursos Identificados:
- **Partida (juego):** Representa una partida de "Hundir la flota" entre dos jugadores.
- **Jugador (jugador):** Representa a un jugador de la partida.
- **Barco (barco):** Representa los barcos de un jugador en la cuadrícula de la partida.
- **Disparo (disparo):** Representa un disparo realizado por un jugador a otro.
- **Usuario (usuario):** Representa a un usuario registrado o invitado en el sistema.

## Endpoints:

# API de Juego de Batalla Naval

## Descripción
Este documento describe la API REST para un sistema de gestión de juegos de batalla naval. La API permite crear y gestionar juegos, jugadores, barcos y disparos, proporcionando una experiencia completa de interacción.

## Endpoints

| Método HTTP | URI| Query Params | Cuerpo de la Petición | Cuerpo de la Respuesta| Códigos de Respuesta |
|-------------|---------------------------------------------|--------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| POST  | /juegos            | N/A  | `{"jugador1": "jugador1", "jugador2": "jugador2"}` | `{"juegoId": 1, "jugador1": "jugador1", "jugador2": "jugador2", "estado": "esperando"}`| 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE| /juegos/{juegoId}  | N/A  | N/A                                                | `{"mensaje": "juego eliminado"}`                                                       | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| PATCH | /juegos/{juegoId}  | N/A  | `{"estado": "iniciado"}`                           | `{"juegoId": 1, "estado": "iniciado", "jugador1": "jugador1", "jugador2": "jugador2"}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| PATCH | /juegos/{juegoId}  | N/A  | `{"estado": "terminado", "ganador": "jugador1"}`   | `{"juegoId": 1, "estado": "terminado", "ganador": "jugador1"}`                         | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| GET   | /juegos/{juegoId}  | N/A  | N/A | `{"juegoId": 1, "jugador1": "jugador1", "jugador2": "jugador2", "estado": "esperando", "ganador": null}`                              | 200 OK<br/>404 Not Found<br/>500 Internal Server Error|
| POST  | /juegos/{juegoId}/jugadores/{jugadorId}/barcos | N/A  | `{"barco": [{"tipo": "4-cuadros", "posicion": [1,1], "orientacion": "vertical"}, {...}]}` | `{"mensaje": "barco agregado con exito"}` | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE| /juegos/{juegoId}/jugadores/{jugadorId}/barcos/{barcoId} | N/A  | N/A | `{"mensaje": "barco eliminado"}`                                                                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error|
| GET   | /juegos/{juegoId}/jugadores/{jugadorId}/barcos           | N/A  | N/A | `{"barco": [{"tipo": "4-cuadros", "posicion": [1,1], "orientacion": "vertical"}, {...}]}`       | 200 OK<br/>404 Not Found<br/>500 Internal Server Error|
| POST  | /juegos/{juegoId}/jugadores/{jugadorId}/disparos | N/A  | `{"etiquetajugadorId": "jugador2", "posicion": [5,5]}` | `{"disparoId": 1, "jugadorId": "jugador1", "etiquetajugadorId": "jugador2", "posicion": [5,5], "resultado": "golpe"}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET   | /juegos/{juegoId}/disparos | N/A  | N/A | `{"disparo": [{"jugadorId": "jugador1", "etiquetajugadorId": "jugador2", "posicion": [5,5], "resultado": "golpe"}]}`          | 200 OK<br/>404 Not Found<br/>500 Internal Server Error|
| POST  | /usuarios  | N/A  | `{"usuario": "john_doe", "email": "john@example.com", "password": "password"}` | `{"usuarioId": 1, "usuario": "john_doe", "email": "john@example.com"}`| 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET   | /usuarios/{usuarioId}  | N/A  | N/A | `{"usuarioId": 1, "usuario": "john_doe", "email": "john@example.com"}`| 200 OK<br/>404 Not Found<br/>500 Internal Server Error|
| DELETE| /usuarios/{usuarioId}  | N/A  | N/A | `{"mensaje": "usuario eliminado"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error|


## Descripción de los Recursos:

### 1. **Partida (juegos):**
- **Atributos:**
  - `juegoId`: Identificador único de la partida.
  - `jugador1`: Jugador 1.
  - `jugador2`: Jugador 2.
  - `estado`: Estado de la partida (por ejemplo, `esperando`, `iniciado`, `fin`).
  - `ganador`: El ganador de la partida, si está disponible.

### 2. **Jugador (jugadores):**
- **Atributos:**
  - `jugadorId`: Identificador único del jugador.
  - `usuario`: Nombre del jugador.
  - `barco`: Barcos que el jugador ha colocado en su cuadrícula.
  - `disparo`: Disparos realizados por el jugador.

### 3. **Barco (barcos):**
- **Atributos:**
  - `barcoId`: Identificador único del barco.
  - `tipo`: Tipo de barco (4, 3, 2 o 1 cuadrado).
  - `posicion`: Posición en la cuadrícula (array de coordenadas [x, y]).
  - `orientacion`: Dirección del barco (horizontal o vertical).

### 4. **Disparo (disparos):**
- **Atributos:**
  - `disparoId`: Identificador único del disparo.
  - `jugadorId`: Jugador que realiza el disparo.
  - `etiquetajugadorId`: Jugador objetivo del disparo.
  - `posicion`: Posición del disparo (coordenada [x, y]).
  - `resultado`: resultadoado del disparo (`golpe` o `miss`).

### 5. **Usuario (usuarios):**
- **Atributos:**
  - `usuarioId`: Identificador único del usuario.
  - `usuario`: Nombre de usuario.
  - `email`: Correo electrónico.
  - `password`: Contraseña (en un entorno real debería almacenarse de forma segura, por ejemplo, con hash).
