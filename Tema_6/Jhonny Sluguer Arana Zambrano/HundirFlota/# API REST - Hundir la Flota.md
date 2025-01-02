# API REST - Hundir la Flota

## Descripción
Esta API REST permite gestionar el juego "Hundir la flota". Proporciona funcionalidades para crear y gestionar partidas entre usuarios registrados o invitados, manejar cuadrículas, barcos, disparos y determinar un ganador.

---

## Recursos Principales

### **1. Usuario**
Representa a los jugadores que participan en las partidas. Los usuarios pueden ser registrados o invitados (anónimos).

| Atributo   | Tipo     | Descripción                           |
|------------|----------|---------------------------------------|
| `id`       | Integer  | Identificador único del usuario.      |
| `nombre`   | String   | Nombre del usuario (o "Invitado").    |
| `email`    | String   | Email del usuario (opcional).         |

### **2. Partida**
Representa una partida del juego.

| Atributo        | Tipo       | Descripción                                    |
|-----------------|------------|------------------------------------------------|
| `id`            | Integer    | Identificador único de la partida.            |
| `estado`        | String     | Estado de la partida: `pendiente`, `activa`, `finalizada`. |
| `jugadores`     | Array      | Lista de IDs de los usuarios participantes.    |
| `ganador`       | Integer    | ID del usuario ganador (nulo si no hay).       |

### **3. Barco**
Representa un barco en la cuadrícula de un jugador.

| Atributo        | Tipo       | Descripción                                    |
|-----------------|------------|------------------------------------------------|
| `id`            | Integer    | Identificador único del barco.                |
| `tipo`          | String     | Tipo del barco: `1x1`, `1x2`, `1x3`, `1x4`.   |
| `posiciones`    | Array      | Coordenadas ocupadas por el barco (e.g., `["A1", "A2"]`). |

### **4. Disparo**
Representa un disparo realizado por un jugador a otro.

| Atributo        | Tipo       | Descripción                                    |
|-----------------|------------|------------------------------------------------|
| `id`            | Integer    | Identificador único del disparo.              |
| `origen`        | Integer    | ID del jugador que dispara.                   |
| `destino`       | Integer    | ID del jugador objetivo.                      |
| `coordenada`    | String     | Coordenada del disparo (e.g., `B3`).          |
| `resultado`     | String     | Resultado del disparo: `agua`, `tocado`, `hundido`. |

---

## Endpoints

### **1. Gestión de Usuarios**
| Operación          | Método   | Endpoint                | Descripción                                |
|--------------------|----------|-------------------------|--------------------------------------------|
| Crear un usuario   | `POST`   | `/api/usuarios`         | Crea un nuevo usuario.                     |
| Obtener un usuario | `GET`    | `/api/usuarios/{id}`    | Obtiene los datos de un usuario por su ID. |
| Eliminar un usuario| `DELETE` | `/api/usuarios/{id}`    | Elimina un usuario por su ID.              |

**Cuerpo de la solicitud (Crear usuario):**
```json
{
    "nombre": "Juan Pérez",
    "email": "juan.perez@example.com"
}
