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


## 1️⃣ Recursos Identificados

1. **Usuarios (`/usuarios`)**: Representa a los jugadores del sistema. Pueden ser registrados o anónimos.
2. **Partidas (`/partidas`)**: Representa una sesión de juego entre dos jugadores, con sus respectivas cuadrículas.
3. **Barcos (`/partidas/{id}/jugadores/{id}/barcos`)**: Representa los barcos de cada jugador dentro de una partida específica.
4. **Disparos (`/partidas/{id}/disparos`)**: Representa los ataques realizados entre jugadores en una partida.

---

## 2️⃣ Relación entre Recursos

- **Usuarios** pueden **crear o unirse** a **partidas**.
- **Partidas** contienen **dos jugadores**, cada uno con su propia **cuadrícula de 10x10**.
- Cada jugador en una **partida** tiene una lista de **barcos**, que deben cumplir reglas de colocación.
- Durante una **partida**, los jugadores pueden registrar **disparos** contra la cuadrícula del oponente.
- Cuando una partida finaliza, se almacena el **ganador**.

---

## 3️⃣ Atributos de los Recursos

### 🟢 Usuario (`/usuarios`)
- `id` (int) → Identificador único.
- `nombre` (string) → Nombre del jugador (opcional para invitados).
- `email` (string) → Correo electrónico (solo usuarios registrados).
- `fecha_registro` (datetime) → Fecha en la que el usuario se registró.

### 🟢 Partida (`/partidas`)
- `id` (int) → Identificador único de la partida.
- `jugador1Id` (int) → ID del primer jugador.
- `jugador2Id` (int) → ID del segundo jugador (opcional hasta que se una).
- `estado` (string) → Estado de la partida (`esperando`, `en curso`, `finalizada`).
- `ganadorId` (int) → ID del ganador de la partida (nulo si no ha terminado).

### 🟢 Barco (`/partidas/{id}/jugadores/{id}/barcos`)
- `id` (int) → Identificador único del barco.
- `tipo` (string) → Tipo de barco (`portaaviones`, `submarino`, `destructor`, `fragata`).
- `coordenadas` (array) → Lista de coordenadas en formato `{"x": int, "y": int}`.

### 🟢 Disparo (`/partidas/{id}/disparos`)
- `id` (int) → Identificador único del disparo.
- `jugadorId` (int) → ID del jugador que dispara.
- `coordenada` (objeto) → `{"x": int, "y": int}`.
- `resultado` (string) → `agua`, `tocado`, `hundido`.

---

## 4️⃣ Endpoints

| Método HTTP | Endpoint                            | Cuerpo JSON de la petición                            | Respuesta JSON de la petición                         | Códigos HTTP de respuesta posibles |
|------------|-------------------------------------|------------------------------------------------------|------------------------------------------------------|----------------------------------|
| `POST`     | `/usuarios`                        | `{ "nombre": "Juan", "email": "juan@example.com" }`  | `{ "id": 1, "nombre": "Juan", "email": "juan@example.com" }` | `201` (Creado), `400` (Solicitud inválida) |
| `GET`      | `/usuarios/{id}`                   | `N/A`                                                | `{ "id": 1, "nombre": "Juan", "email": "juan@example.com" }` | `200` (Éxito), `404` (Usuario no encontrado) |
| `DELETE`   | `/usuarios/{id}`                   | `N/A`                                                | `{ "mensaje": "Usuario eliminado con éxito" }`       | `200` (Éxito), `404` (Usuario no encontrado) |
| `POST`     | `/partidas`                        | `{ "jugador1Id": 1 }`                                | `{ "id": 100, "jugador1Id": 1, "estado": "esperando" }` | `201` (Creado), `400` (Solicitud inválida) |
| `POST`     | `/partidas/{id}/unirse`            | `{ "jugador2Id": 2 }`                                | `{ "id": 100, "jugador1Id": 1, "jugador2Id": 2, "estado": "en curso" }` | `200` (Éxito), `400` (Error en solicitud), `404` (Partida no encontrada) |
| `DELETE`   | `/partidas/{id}`                   | `N/A`                                                | `{ "mensaje": "Partida eliminada con éxito" }`       | `200` (Éxito), `404` (Partida no encontrada) |
| `POST`     | `/partidas/{id}/barcos`            | `{ "jugadorId": 1, "tipo": "submarino", "coordenadas": [{"x": 1, "y": 1}, {"x": 1, "y": 2}, {"x": 1, "y": 3}] }` | `{ "id": 200, "jugadorId": 1, "tipo": "submarino" }` | `201` (Creado), `400` (Error en colocación), `404` (Partida o jugador no encontrado) |
| `DELETE`   | `/partidas/{id}/barcos/{id}`       | `N/A`                                                | `{ "mensaje": "Barco eliminado con éxito" }`         | `200` (Éxito), `404` (Barco no encontrado) |
| `GET`      | `/partidas/{id}/jugadores/{id}/barcos` | `N/A`                                           | `{ "barcos": [{"id": 200, "tipo": "submarino", "coordenadas": [{"x": 1, "y": 1}, {"x": 1, "y": 2}, {"x": 1, "y": 3}]}] }` | `200` (Éxito), `404` (Partida o jugador no encontrado) |
| `POST`     | `/partidas/{id}/disparos`          | `{ "jugadorId": 1, "coordenada": {"x": 5, "y": 5} }` | `{ "id": 300, "resultado": "agua" }`                 | `201` (Creado), `400` (Error en solicitud), `404` (Partida o jugador no encontrado) |
| `POST`     | `/partidas/{id}/finalizar`         | `{ "ganadorId": 2 }`                                | `{ "mensaje": "Partida finalizada. Ganador: jugador 2" }` | `200` (Éxito), `400` (Error en solicitud), `404` (Partida no encontrada) |

---

## 5️⃣ Descripción de Códigos de Respuesta

- **`200 OK`**: La operación se realizó con éxito.
- **`201 Created`**: El recurso fue creado exitosamente.
- **`400 Bad Request`**: La solicitud es inválida (por ejemplo, datos faltantes o incorrectos en el JSON).
- **`404 Not Found`**: El recurso solicitado no existe (por ejemplo, usuario, partida, barco o disparo no encontrados).
- **`422 Unprocessable Entity`**: No se puede procesar la solicitud debido a reglas del juego (por ejemplo, colocar un barco en forma de L o pegarlo a otro barco).

---

## 📌 Notas:
- Cada barco debe cumplir con las reglas de colocación.
- Un jugador no puede disparar dos veces seguidas sin respuesta del oponente.
- Una partida solo puede finalizar cuando un jugador ha hundido todos los barcos del oponente.
