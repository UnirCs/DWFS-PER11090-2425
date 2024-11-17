# API para alquiler de coches (operaciones de cliente)


En esta ocasión diseñaremos una API REST para gestionar el alquiler de coches. La API estará enfocada en las operaciones que pueden realizar los usuarios finales a través de web o app y no incluirá endpoints para el personal de administración del sistema. Los usuarios podrán registrarse, actualizar su información, eliminar sus cuentas, buscar coches disponibles y gestionar sus propios alquileres de coches.

Tu API debe incluir las siguientes funcionalidades:

**Gestión de Usuarios:**

•  **Crear Usuario:** Un endpoint que permita a nuevos usuarios registrarse proporcionando nombre, correo electrónico y contraseña.

•  **Obtener Información de Usuario:** Un endpoint que permita a un usuario obtener su información usando su ID de usuario. Se utilizará para obtener la información del usuario cuando se dirija a su página de perfil.

•  **Actualizar Usuario:** Un endpoint que permita a un usuario actualizar parcialmente su información. Se usará cuando el usuario quiera modificar su nombre, correo electrónico o contraseña.

•  **Eliminar Usuario:** Un endpoint que permita a un usuario eliminar su cuenta. Se usará cuando el usuario quiera borrar sus datos de la aplicación de alquileres.

**Gestión de Alquileres:**

Dado que estamos creando alquileres dentro de la sesión del usuario y desde dicho punto de vista los alquileres siempre estarán ligados a ese usuario, no se diseñará un endpoint donde el propio alquiler sea un recurso de primer nivel.

•  **Crear Alquiler:** Un endpoint que permita a un usuario alquilar un coche proporcionando el ID del coche y la fecha de alquiler.

•  **Listar Alquileres de un Usuario:** Un endpoint que permita a un usuario listar todos sus alquileres.

**Búsqueda de Coches:**

•  **Buscar Coches Disponibles:** Un endpoint que permita a los usuarios buscar coches disponibles utilizando parámetros de consulta como marca, modelo, tipo de combustible, tipo de caja de cambios y número de plazas.

**Recursos identificados:**
- Usuario (users): Representa un usuario del sistema.
- Coches (cars): Representa un coche del sistema.
- Alquileres (rents): Representa un alquiler asociado a un usuario.

| Método Http | Endpoint                    | Query Params                                        | Cuerpo JSON de la petición                              | Respuesta JSON de la petición                                                                                                                                 | Códigos HTTP de respuesta posibles                     |
|-------------|-----------------------------|-----------------------------------------------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| POST        | /users                      |                                                     | `{ "name": "string", "email": "string", "password": "string" }` | `{ "id": "integer", "name": "string", "email": "string" }`                                                                                                        | 201 Created, 400 Bad Request                           |
| GET         | /users/{userId}                 |                                                     |                                                         | `{ "id": "integer", "name": "string", "email": "string" }`                                                                                                        | 200 OK, 404 Not Found                                  |
| PATCH       | /users/{userId}                 |                                                     | `{"password": "string" }` | `{ "id": "integer", "name": "string", "email": "string" }`                                                                                                        | 200 OK, 400 Bad Request, 404 Not Found                 |
| DELETE      | /users/{userId}                 |                                                     |                                                         | `{ "message": "User deleted successfully" }`                                                                                                                      | 200 OK, 404 Not Found                                  |
| GET         | /cars                       | brand, model, fuel_type, transmission, seats         |                                                         | `[ { "id": "integer", "brand": "string", "model": "string", "fuel_type": "string", "transmission": "string", "seats": "integer", "availability": "boolean" } ]`   | 200 OK, 404 Not Found                                  |
| POST        | /users/{userId}/rents       |                                                     | `{ "car_id": "integer", "rental_date": "string" }`        | `{ "id": "integer", "user_id": "integer", "car_id": "integer", "rental_date": "string", "return_date": "string" }`                                      | 201 Created, 400 Bad Request, 404 Not Found            |
| GET         | /users/{userId}/rents       |                                                     |                                                         | `[ { "id": "integer", "user_id": "integer", "car_id": "integer", "rental_date": "string", "return_date": "string" }` ]                                 | 200 OK, 404 Not Found                                  |
