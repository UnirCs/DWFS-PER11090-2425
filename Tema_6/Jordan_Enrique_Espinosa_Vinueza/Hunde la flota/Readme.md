## 🎯 **API de Hundir la Flota**

### 📌 **Descripción**
Esta API permite gestionar partidas del juego **Hundir la Flota** entre usuarios registrados o anónimos. Cada partida tiene un tablero de **10x10** para cada jugador, donde se colocan barcos según las reglas del juego. Los jugadores pueden disparar, consultar el estado de la partida y registrar resultados.

### 📌 **Recursos de la API**
Para simplificar el diseño, la API manejará **tres recursos principales**:

1. **Usuarios** (`usuarios`)
    - Representan a los jugadores del juego, ya sean registrados o anónimos.
2. **Partidas** (`partidas`)
    - Gestionan las sesiones de juego entre dos jugadores.
3. **Tableros** (`tableros`)
    - Manejan la colocación de barcos y los disparos.

---

### 📌 **Operaciones Soportadas y Endpoints**

| Método HTTP | URI                                    | Query Params       | Request Body                     | Response Body                                       | Códigos HTTP de respuesta |
|------------|--------------------------------------|--------------------|--------------------------------|--------------------------------------------------|---------------------------|
| **Usuarios** |  |  |  |  |
| POST       | `/api/v1/usuarios`                 | -                  | `{ "nombre": "Juan" }`         | `{ "id": 1, "nombre": "Juan" }`                   | 201, 400 |
| GET        | `/api/v1/usuarios/{id}`            | -                  | -                              | `{ "id": 1, "nombre": "Juan" }`                   | 200, 404 |
| DELETE     | `/api/v1/usuarios/{id}`            | -                  | -                              | `{ "mensaje": "Usuario eliminado" }`             | 200, 404 |
| **Partidas** |  |  |  |  |
| POST       | `/api/v1/partidas`                 | -                  | `{ "jugador1": 1, "jugador2": 2 }` | `{ "id": 5, "estado": "creada" }`       | 201, 400 |
| PUT        | `/api/v1/partidas/{id}`            | -                  | `{ "estado": "iniciada" }`     | `{ "id": 5, "estado": "iniciada" }`             | 200, 400, 404 |
| GET        | `/api/v1/partidas/{id}`            | -                  | -                              | `{ "id": 5, "jugadores": [1,2], "estado": "activa", "ganador": null }` | 200, 404 |
| DELETE     | `/api/v1/partidas/{id}`            | -                  | -                              | `{ "mensaje": "Partida eliminada" }`             | 200, 404 |
| **Tableros (Barcos y Disparos)** |  |  |  |  |
| POST       | `/api/v1/tableros/{id}/barcos`     | -                  | `{ "jugador_id": 1, "barco": { "tipo": "submarino", "posicion": [[2,3]] }}` | `{ "mensaje": "Barco añadido" }` | 201, 400 |
| DELETE     | `/api/v1/tableros/{id}/barcos/{barco_id}` | -           | -                              | `{ "mensaje": "Barco eliminado" }`               | 200, 404 |
| GET        | `/api/v1/tableros/{id}/barcos?jugador_id=1` | -         | -                              | `{ "barcos": [{ "tipo": "submarino", "posicion": [[2,3]] }] }` | 200, 404 |
| POST       | `/api/v1/tableros/{id}/disparos`   | -                  | `{ "jugador_id": 1, "posicion": [5,5] }` | `{ "resultado": "agua" }` | 201, 400 |
| GET        | `/api/v1/tableros/{id}/disparos`   | -                  | -                              | `{ "disparos": [{ "jugador": 1, "posicion": [5,5], "resultado": "agua" }] }` | 200, 404 |

---

### 📌 **Descripción de los Recursos**

#### 🎭 **Gestión de Usuarios**
- **POST `/api/v1/usuarios`**: Crea un usuario (puede ser un usuario registrado o un anónimo con ID generado).
- **GET `/api/v1/usuarios/{id}`**: Obtiene la información de un usuario.
- **DELETE `/api/v1/usuarios/{id}`**: Elimina un usuario del sistema.

#### 🏆 **Gestión de Partidas**
- **POST `/api/v1/partidas`**: Crea una nueva partida entre dos jugadores.
- **PUT `/api/v1/partidas/{id}`**: Modifica el estado de una partida (ej. "iniciada", "finalizada").
- **GET `/api/v1/partidas/{id}`**: Obtiene el estado actual de una partida.
- **DELETE `/api/v1/partidas/{id}`**: Elimina una partida.

#### 🚢 **Gestión de Tableros y Disparos**
- **POST `/api/v1/tableros/{id}/barcos`**: Agrega un barco al tablero de un jugador, asegurando que siga las reglas.
- **DELETE `/api/v1/tableros/{id}/barcos/{barco_id}`**: Elimina un barco del tablero de un jugador.
- **GET `/api/v1/tableros/{id}/barcos?jugador_id=1`**: Obtiene la lista de barcos de un jugador en la partida.
- **POST `/api/v1/tableros/{id}/disparos`**: Registra un disparo de un jugador hacia una posición en el tablero rival.
- **GET `/api/v1/tableros/{id}/disparos`**: Consulta los disparos registrados en la partida.

---

### 📌 **Relaciones entre Recursos**
1. **Usuarios pueden jugar varias partidas**, pero en cada partida solo pueden jugar dos jugadores.
2. **Cada partida tiene un tablero asociado a cada jugador**.
3. **Los barcos se almacenan en los tableros** de los jugadores.
4. **Cada disparo queda registrado** en el tablero del jugador contrario.
