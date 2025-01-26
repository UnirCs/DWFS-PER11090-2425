|Método HTTP|URI                               |Cuerpo de la petición                         |Cuerpo de la respuesta            |Codigos de respuesta|
|-----------|----------------------------------|----------------------------------------------|----------------------------------|--------------------|
|POST       |/peliculas                        |{"id","Titulo","Director","Duración","Genero"}|{"Mensaje":"Pelicula añadida"}    |201, 400, 500       |
|DELETE     |/peliculas/{id}                   |                                              |{"Mensaje":"Pelicula eliminada"}  |200, 404            |
|PUT        |/peliculas/{id}                   |{"id","Titulo","Director","Duración","Genero"}|{"Mensaje": "Pelicula modificada"}|200, 400, 404       |
|POST       |/salas                            |{"id","NumeroSala", "Capacidad"}              |{"Mensaje":"Sala creada"}         |201, 400, 500       |
|DELETE     |/salas/{id}                       |                                              |{"Mensaje":"Sala eliminada"}      |200, 404            |
|PATCH      |/salas/{id}                       |{"id","NumeroSala", "Capacidad"}              |{"Mensaje": "Sala modificada"}    |200, 400, 404       |
|POST       |/usuarios                         |{"id", "Nombre", "Apellidos", "Correo"}       |{"Mensaje":"Usuario creado"}      |201, 400, 500       |
|DELETE     |/usuarios/{id}                    |                                              |{"Mensaje":"Usuario eliminado"}   |200, 404            |
|PATCH      |/usuarios/{id}                    |{"id", "Nombre", "Apellidos", "Correo"}       |{"Mensaje": "Usuario eliminado"}  |200, 400, 404       |
|POST       |/usuarios/{id}/reservas/salas/{id}|{"idReserva", "FechaReserva", "Butacas"}      |{"Mensaje": "Reserva creada"}     |201, 400, 500       |
|DELETE     |/usuarios/{id}/reservas/{id}      |                                              |{"Mensaje": "Reserva eliminada"}  |200, 404            |
|PUT        |/usuaiors/{id}/reservas/{id}      |{"idReserva", "FechaReserva", "Butacas"}      |{"Mensaje": "Reserva Modificada"} |200, 400, 404       |
|POST       |/reservas/{id}/pagos              |{"idPagos", "Importe"}                        |{"Mensaje": "Pago efectuado"}     |201, 400, 500       |