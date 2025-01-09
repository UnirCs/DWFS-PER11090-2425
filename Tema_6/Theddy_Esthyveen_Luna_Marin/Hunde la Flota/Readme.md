
# API del juego "Hunde la flota"

## Descripción

Esta API REST permite gestionar partidas del juego "Hunde la flota", incluyendo la creación de partidas, gestión de jugadores y movimientos, así como el registro de barcos y disparos. Los jugadores pueden ser registrados o anónimos, y la API se encargará de validar las reglas básicas del juego.

---

## Funcionalidades soportadas
1. **Gestión de usuarios:** Crear, obtener y eliminar usuarios registrados.
2. **Gestión de partidas:** Crear, eliminar, modificar, cambiar estado y consultar datos de partidas.
3. **Gestión de barcos:** Añadir, eliminar y consultar barcos en la cuadrícula de un jugador.
4. **Gestión de disparos:** Registrar disparos entre jugadores en una partida.

---

## Recursos identificados
- **Usuarios (usuarios):** Representan a los jugadores registrados.
- **Partidas (partidas):** Representan una partida entre dos jugadores.
- **Barcos (barcos):** Representan las ubicaciones de los barcos de un jugador en una partida.
- **Disparos (disparos):** Representan los disparos realizados entre jugadores en una partida.

---

## Endpoints y métodos HTTP

| Método HTTP | Endpoint                          | Cuerpo de la petición                              | Respuesta JSON                                                                         | Códigos HTTP de respuesta                |
|-------------|-----------------------------------|---------------------------------------------------|---------------------------------------------------------------------------------------|------------------------------------------|
| POST        | /usuarios                        | `{"nombre": "string", "email": "string"}`         | `{"id": "integer", "nombre": "string", "email": "string"}`                            | 201 Creado, 400 Solicitud Incorrecta     |
| GET         | /usuarios/{idUsuario}            | -                                                 | `{"id": "integer", "nombre": "string", "email": "string"}`                            | 200 OK, 404 No Encontrado               |
| DELETE      | /usuarios/{idUsuario}            | -                                                 | `{"mensaje": "Usuario eliminado correctamente"}`                                     | 200 OK, 404 No Encontrado               |
| POST        | /partidas                        | `{"jugador1": "integer", "jugador2": "integer"}`  | `{"id": "integer", "jugador1": "integer", "jugador2": "integer", "estado": "creada"}` | 201 Creado, 400 Solicitud Incorrecta     |
| PATCH       | /partidas/{idPartida}            | `{"estado": "string", "ganador": "integer|null"}` | `{"id": "integer", "estado": "string", "ganador": "integer|null"}`                    | 200 OK, 400 Solicitud Incorrecta, 404 No Encontrado |
| GET         | /partidas/{idPartida}            | -                                                 | `{"id": "integer", "datosPartida": {...}}`                                           | 200 OK, 404 No Encontrado               |
| DELETE      | /partidas/{idPartida}            | -                                                 | `{"mensaje": "Partida eliminada correctamente"}`                                     | 200 OK, 404 No Encontrado               |
| POST        | /partidas/{idPartida}/barcos     | `{"jugador": "integer", "coordenadas": ["A1", "A2"], "orientacion": "horizontal"}` | `{"idBarco": "integer", "coordenadas": ["A1", "A2"], "jugador": "integer"}`          | 201 Creado, 400 Solicitud Incorrecta, 409 Conflicto   |
| DELETE      | /partidas/{idPartida}/barcos/{idBarco} | -                                             | `{"mensaje": "Barco eliminado correctamente"}`                                       | 200 OK, 404 No Encontrado               |
| GET         | /partidas/{idPartida}/barcos/{idJugador} | -                                           | `{"barcos": [{"idBarco": "integer", "coordenadas": ["A1", "A2"]}]}`                  | 200 OK, 404 No Encontrado               |
| POST        | /partidas/{idPartida}/disparos   | `{"jugadorAtacante": "integer", "coordenada": "B3"}` | `{"resultado": "agua"|"tocado"|"hundido", "coordenada": "B3"}`                     | 200 OK, 400 Solicitud Incorrecta, 404 No Encontrado   |

---

## Descripción detallada de los endpoints

### **Gestión de usuarios**
- **Crear usuario:** `POST /usuarios`
  - Permite registrar un nuevo usuario registrado.
- **Obtener usuario:** `GET /usuarios/{idUsuario}`
  - Recupera los datos de un usuario registrado.
- **Eliminar usuario:** `DELETE /usuarios/{idUsuario}`
  - Elimina un usuario registrado.

### **Gestión de partidas**
- **Crear partida:** `POST /partidas`
  - Registra una nueva partida entre dos jugadores.
- **Modificar estado de partida:** `PATCH /partidas/{idPartida}`
  - Permite cambiar el estado de la partida a "iniciada", "finalizada", u otros estados futuros.
- **Consultar partida:** `GET /partidas/{idPartida}`
  - Devuelve todos los datos de una partida.
- **Eliminar partida:** `DELETE /partidas/{idPartida}`
  - Elimina una partida.

### **Gestión de barcos**
- **Añadir barco:** `POST /partidas/{idPartida}/barcos`
  - Añade un barco a la cuadrícula de un jugador.
- **Eliminar barco:** `DELETE /partidas/{idPartida}/barcos/{idBarco}`
  - Elimina un barco de la cuadrícula de un jugador.
- **Consultar barcos:** `GET /partidas/{idPartida}/barcos/{idJugador}`
  - Recupera todos los barcos de un jugador en una partida.

### **Gestión de disparos**
- **Registrar disparo:** `POST /partidas/{idPartida}/disparos`
  - Registra un disparo de un jugador hacia otro y devuelve el resultado.
