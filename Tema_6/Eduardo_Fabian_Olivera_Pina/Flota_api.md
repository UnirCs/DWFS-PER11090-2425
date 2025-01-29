# API REST: Hundir la Flota

## Recursos y Endpoints

### Partidas

| Método HTTP | URI               | Query Params | Cuerpo de la Petición                                | Cuerpo de la Respuesta                                                                 | Códigos de Respuesta |
|-------------|-------------------|--------------|----------------------------------------------------|---------------------------------------------------------------------------------------|----------------------|
| POST        | `/partidas`       | -            | `{ "jugador1": "Daniel", "jugador2": "Invitado" }` | `{ "id": "12", "mensaje": "Partida creada" }`                                         | 201, 400             |
| DELETE      | `/partidas/{id}`  | -            | -                                                  | `{ "mensaje": "Partida eliminada" }                                                   | 200, 404             |
| PUT         | `/partidas/{id}`  | -            | `{ "estado": "iniciada" }`                         | `{ "mensaje": "Partida actualizada" }                                                 | 200, 400, 404        |
| GET         | `/partidas/{id}`  | -            | -                                                  | `{ "id": "12", "jugadores": [...], "barcos": [...], "disparos": [...], "ganador": "Daniel" }` | 200, 404             |

**Notas:**
- El endpoint `/partidas` permite crear partidas.
- `/partidas/{id}` permite consultar, actualizar (modificar datos o iniciar la partida) y eliminar una partida específica.

---

### Barcos

| Método HTTP | URI                        | Query Params | Cuerpo de la Petición                              | Cuerpo de la Respuesta       | Códigos de Respuesta |
|-------------|----------------------------|--------------|---------------------------------------------------|------------------------------|----------------------|
| POST        | `/partidas/{id}/barcos`    | -            | `{ "jugador": "1", "coordenadas": ["A1", "A2"] }` | `{ "mensaje": "Barco añadido" }` | 200, 400, 404        |
| DELETE      | `/partidas/{id}/barcos`    | -            | `{ "jugador": "1", "coordenadas": ["A1", "A2"] }` | `{ "mensaje": "Barco eliminado" }` | 200, 404             |
| GET         | `/partidas/{id}/barcos`    | `jugador=1`  | -                                                 | `[ { "coordenadas": ["A1", "A2"] }, ... ]` | 200, 404             |

**Notas:**
- Los barcos se agregan, eliminan y consultan por partida y jugador.
- La validación de las reglas del juego debe realizarse en el backend.

---

### Disparos

| Método HTTP | URI                         | Query Params | Cuerpo de la Petición                         | Cuerpo de la Respuesta       | Códigos de Respuesta |
|-------------|-----------------------------|--------------|-----------------------------------------------|------------------------------|----------------------|
| POST        | `/partidas/{id}/disparos`   | -            | `{ "jugador": "1", "coordenada": "B4" }`      | `{ "resultado": "Tocado" }`  | 200, 400, 404        |

**Notas:**
- El endpoint `/partidas/{id}/disparos` permite registrar disparos y verificar resultados.

---

### Usuarios

| Método HTTP | URI              | Query Params | Cuerpo de la Petición        | Cuerpo de la Respuesta               | Códigos de Respuesta |
|-------------|------------------|--------------|------------------------------|---------------------------------------|-----------------------|
| POST        | `/usuarios`      | -            | `{ "nombre": "Daniel", "email": "daniel@email.com" }` | `{ "id": "1", "mensaje": "Usuario creado" }` | 201, 400             |
| GET         | `/usuarios/{id}` | -            | -                            | `{ "id": "1", "nombre": "Daniel" }`   | 200, 404             |
| DELETE      | `/usuarios/{id}` | -            | -                            | `{ "mensaje": "Usuario eliminado" }`  | 200, 404             |

**Notas:**
- `/usuarios` maneja la creación, consulta y eliminación de usuarios registrados.

---

## Atributos principales por recurso

### Partidas
- `id`: Identificador único.
- `jugadores`: Lista de jugadores.
- `barcos`: Barcos asociados a cada jugador.
- `estado`: Estado de la partida (*creada, iniciada, finalizada*).
- `disparos`: Disparos realizados por los jugadores.
- `ganador`: Jugador que ganó la partida.

### Barcos
- `jugador`: Jugador al que pertenece el barco.
- `coordenadas`: Lista de posiciones que ocupa el barco.
- `tipo`: Tamaño del barco (1, 2, 3 o 4 cuadrados).

### Disparos
- `jugador`: Jugador que realizó el disparo.
- `coordenada`: Posición disparada.
- `resultado`: Resultado del disparo (*agua, tocado, hundido*).

### Usuarios
- `id`: Identificador único.
- `nombre`: Nombre del usuario.
- `email`: Email del usuario.
