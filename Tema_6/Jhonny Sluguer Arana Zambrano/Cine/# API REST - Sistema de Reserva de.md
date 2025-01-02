# API REST - Sistema de Reserva de Butacas de Cine

## Descripción
Esta API REST permite gestionar un sistema de cine que incluye las siguientes funcionalidades:
- **Gestión de películas:** Crear, eliminar y modificar.
- **Gestión de salas:** Crear, eliminar y modificar (parcialmente).
- **Gestión de usuarios:** Crear, eliminar y modificar (parcialmente).
- **Gestión de reservas:** Crear, cancelar y modificar reservas para un usuario en una sala.
- **Gestión de pagos:** Registrar un pago asociado a una reserva.

---

## Endpoints

### **1. Gestión de Películas**
| Operación               | Método   | Endpoint              | Descripción                                 |
|-------------------------|----------|-----------------------|---------------------------------------------|
| Crear una película      | `POST`   | `/api/peliculas`      | Crea una nueva película.                    |
| Eliminar una película   | `DELETE` | `/api/peliculas/{id}` | Elimina una película por su ID.             |
| Modificar una película  | `PUT`    | `/api/peliculas/{id}` | Modifica los datos de una película.         |

**Cuerpo de la solicitud (`POST` y `PUT`):**
```json
{
    "titulo": "Inception",
    "duracion": 148,
    "clasificacion": "PG-13",
    "genero": "Ciencia ficción",
    "sinopsis": "Un ladrón roba secretos a través de los sueños.",
    "director": "Christopher Nolan"
}
