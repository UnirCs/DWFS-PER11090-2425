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

## Solución
- Esta API REST permite gestionar partidas y usuarios para el juego "Hundir la Flota". 
- Incluye funcionalidades para registrar usuarios, gestionar partidas, colocar barcos en cuadrículas, registrar disparos, y consultar información relacionada con el estado de las partidas y jugadores.

---

## Recursos Principales
### **Usuarios**: Representan a los jugadores (registrados o invitados).
  - `id`
  - `nombre`
  - `tipo` (registrado/invitado).
### **Partidas**: Representan el contexto de juego entre dos usuarios.
   - `id`
   - `estado` (pendiente, en curso, finalizada)
   - `jugadores`
   - `ganador`.
### **Barcos**: Representan los barcos en la cuadrícula de un jugador.
   - `id`
   - `longitud`
   - `posición` (coordenadas iniciales y orientación).
### **Disparos**: Representan los disparos realizados por un jugador hacia el oponente.
   - `id`
   - `coordenadas`
   - `resultado` (agua, tocado, hundido).

---

## Endpoints

### Usuarios
| Método HTTP | URI               | Query Params | Request Body                                  | Response Body                                   | Códigos HTTP de respuesta |
|-------------|-------------------|--------------|-----------------------------------------------|------------------------------------------------|---------------------------|
| POST        | /api/usuarios     | -            | `{ "nombre": "Fredy", "tipo": "registrado" }` | `{ "id": 1, "nombre": "Fredy", "tipo": "registrado" }` | 201, 400                  |
| GET         | /api/usuarios/{id}| -            | -                                             | `{ "id": 1, "nombre": "Fredy", "tipo": "registrado" }` | 200, 404                  |
| DELETE      | /api/usuarios/{id}| -            | -                                             | `{ "mensaje": "Usuario eliminado" }`         | 200, 404                  |

### Partidas
| Método HTTP | URI                | Query Params | Request Body                                 | Response Body                                                                 | Códigos HTTP de respuesta |
|-------------|--------------------|--------------|----------------------------------------------|--------------------------------------------------------------------------------|---------------------------|
| POST        | /api/partidas      | -            | `{ "jugadores": [1, 2] }`                  | `{ "id": 1, "estado": "pendiente", "jugadores": [1, 2] }`                 | 201, 400                  |
| DELETE      | /api/partidas/{id} | -            | -                                            | `{ "mensaje": "Partida eliminada" }`                                       | 200, 404                  |
| PATCH       | /api/partidas/{id} | -            | `{ "estado": "en curso" }`                | `{ "id": 1, "estado": "en curso" }`                                       | 200, 404                  |
| GET         | /api/partidas/{id} | -            | -                                            | `{ "id": 1, "estado": "finalizada", "ganador": 1, "jugadores": [...], "barcos": [...] }` | 200, 404                  |

### Barcos
| Método HTTP | URI                               | Query Params | Request Body                                | Response Body                                   | Códigos HTTP de respuesta |
|-------------|-----------------------------------|--------------|---------------------------------------------|------------------------------------------------|---------------------------|
| POST        | /api/partidas/{id}/jugadores/{id}/barcos | -            | `{ "longitud": 4, "posición": { "x": 0, "y": 0, "orientación": "horizontal" } }` | `{ "id": 1, "longitud": 4, "posición": { ... } }`        | 201, 400                  |
| DELETE      | /api/partidas/{id}/jugadores/{id}/barcos/{id} | -            | -                                           | `{ "mensaje": "Barco eliminado" }`                         | 200, 404                  |
| GET         | /api/partidas/{id}/jugadores/{id}/barcos | -            | -                                           | `{ "barcos": [{ "id": 1, "longitud": 4, "posición": { ... } }, ...] }`   | 200, 404                  |

### Disparos
| Método HTTP | URI                               | Query Params | Request Body                                | Response Body                                   | Códigos HTTP de respuesta |
|-------------|-----------------------------------|--------------|---------------------------------------------|------------------------------------------------|---------------------------|
| POST        | /api/partidas/{id}/disparos       | -            | `{ "jugador": 1, "coordenadas": { "x": 5, "y": 5 } }` | `{ "resultado": "tocado" }`                                | 201, 400                  |

---

## Consideraciones
- Las partidas no pueden iniciarse hasta que ambos jugadores hayan colocado sus barcos.
- Los disparos solo se pueden registrar si la partida está en curso.
- Las reglas del juego se validan en el backend para asegurar que los barcos cumplan con las restricciones (orientación y distancia).
- Los usuarios pueden ser registrados o invitados. Los invitados no tienen persistencia en el sistema.