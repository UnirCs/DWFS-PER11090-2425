# API de un sistema de reserva de butacas de cine
En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:

-   Crear, eliminar y modificar películas.
-   Crear, eliminar y modificar (parcialmente) salas.
-   Crear, eliminar y modificar (parcialmente) usuarios.
-   Crear una reserva para un usuario en una sala.
-   Cancelar una reserva para un usuario en una sala.
-   Modificar una reserva para un usuario en una sala.
-   Registrar un pago de una reserva.

Recursos:
- Salas (salas): representa una sala de cine.
- Reservas (reserva): representa una reserva para un usuario en una sala.
- Usuarios (usuarios): representa un usuario.
- Peliculas (peliculas): representa una pelicula.
- Pagos(pago): representa el pago regustrado de una reserva.

|Método HTTP|URI|Query Params|Body Request|Response Body|Códigos HTTP de respuesta|
|--|--|--|--|--|--|
|POST|/salas|N/A|{"tipo":"3D",     "categoria":"VIP"    }|{"id":698,    "tipo":"3D",     "categoria":"VIP"    }| 201,400,500|
|DELETE|/salas/{salaId}|N/A|N/A|{"message": "salas returned"}|200, 404,500|
|PATCH|/salas/salaId}|N/A|{"categoria":"Normal"}|{"id":698,    "tipo":"3D",     "categoria":"Normal",    "peliculaId":  896  }|200,404,500|
|POST|/peliculas|N/A|{"titulo":"MI Villano Favorito",     "clasificacion":"A",    "director":"Pierre Coffin"    }|{"id":896,    "titulo":"MI Villano Favorito",     "clasificacion":"A",    "director":"Pierre Coffin"     }| 201,400,500|
|DELETE|/peliculas/{peliculaId}|N/A|N/A|{"message": "peliculas returned"}|200, 404,500|
|PUT|/peliculas/{peliculaId}|N/A|{"titulo":"MI Villano Favorito 2",     "clasificacion":"A",    "director":["Pierre Coffin","Chris Renaud"] }|{"id":896,    "titulo":"MI Villano Favorito 2",     "clasificacion":"A",    "director":["Pierre Coffin","Chris Renaud"    }|200,404,500|
|POST|/usuarios|N/A|{"nombre":"Maria Fernanda Barahona",     "estado":"Activo", "tipo_membresia": "Gold"    }|{"id":598,    "nombre":"Maria Fernanda Barahona",     "estado":"Activo", "tipo_membresia": "Gold"    }| 201,400,500|
|DELETE|/usuarios/{usuaroId}|N/A|N/A|{"message": "usuarios returned"}|200, 404,500|
|PATCH|/usuarios/{usuaroId}|N/A|{"membresia":"Basica"}|{"usuarioId":598,    "nombre":"Maria Fernanda Barahona",     "estado":"Activo", "tipo_membresia": "Basica"    }|200,404,500|
|POST|/reservas|N/A|{"userId": 598",     "salaId", : 698,     "asientos":["C13","C14"],    "fecha": "04-04-2025",    "funcion":"7:00 PM",    "estado":"Pendiente"  }|{"reservaId":789,    "userId": 598",     "salaId", : 698,     "asientos":["C13","C14"],    "fecha": "04-04-2025",    "funcion":"7:00 PM",    "estado":"Pendiente"  }| 201,400,500|
|PUT|/reservas/{reservaId}|N/A|{ "userId": 598",     "salaId", : 698,     "asientos":["C5","C6"],    "fecha": "04-04-2025",    "funcion":"7:00 PM",    "estado":"Pendiente"   }|{"reservaId":789,    "userId": 598",     "salaId", : 698,     "asientos":["C5","C6"],    "fecha": "04-04-2025",    "funcion":"7:00 PM",    "estado":"Pendiente"  }|200,404,500|
|PATCH|/reservas/{reservaId}|N/A|{ "estado":"Cancelado" }|{"reservaId":789,    "userId": 598",     "salaId", : 698,     "asientos":["C13","C14"],    "fecha": "04-04-2025",    "funcion":"7:00 PM",    "estado":"Cancelado"  }|200,404,500|
|POST|/pagos|N/A|{"reservaId": 896",     "usuarioId", : 986,         "fecha": "04-04-2025",    "Total": 25.70  }|{"pagoId":"556"    reservaId": 896",     "usuarioId", : 986,         "fecha": "04-04-2025",    "Total": 25.70    }|201,400,500|
