# API de una calculadora online

En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:
- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

| Método HTTP | URI            | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|-------------|----------------|--------------|--------------|------------------|-------------------------|
| POST         | /api/v1/sumas | -            | `{"numeros": number[]}`| `{"idOperacion":number, "entrada": number[], "resultado": number}` | 201<br/> 400<br/> 500              |
|GET          | /api/v1/sumas/{idOperacion}|-          |-             |`{"idOperacion":number, "entrada": number[], "resultado": number}`|200<br/> 404|
|  POST |/api/v1/restas   |-   |`{"numeros": number[]}`   |`{"idOperaciond":number, "entrada": number[], "resultado": number}`   |201<br/>400<br/>500|
|GET          | /api/v1/restas/{idOperacion}|-          |-             |`{"idOperacion":number, "entrada": number[], "resultado": number}`|200<br/> 404|
|  POST |/api/v1/multiplicaciones   |-   |`{"numero1": number, "numero2": number}`   |`{"idOperacion": number, "entrada1": number, "entrada2": number, "resultado": number}`   |201<br/>400<br/>500|
|GET          | /api/v1/multiplicaciones/{idOperacion}|-          |-             |`{"idOperacion":number, "entrada1": number, "entrada2": number, "resultado": number}`|200<br/> 404|
|  POST |/api/v1/divisiones   |-   |`{"numero1": number, "numero2": number}` |`{"idOperacion":number, "entrada1": number, "entrada2": number, "resultado": number}`   |201<br/>400<br/>500|
|GET          | /api/v1/divisiones/{idOperacion}|-          |-             |`{"idOperacion":number, "entrada1": number, "entrada2": number, "resultado": number}`|200<br/>404|
| POST         | /api/v1/raices | -            | `{"numero": number, "raiz": number}`| `{"idOperacion": number, "entrada": number, "raiz": number, "resultado": number}` | 201<br/> 400<br/> 500|
|GET          | /api/v1/raices/{id}|-          |-             |`{"idOperacion":number, "entrada": number, "raiz": number, "resultado": number}`|200<br/> 404|
|  POST |/api/v1/potencias   |-   |`{"numero": number, "potencia": number}`   |`{"idOperacion": number, "entrada":number, "potencia": number, "resultado": number}`   |201<br/>400<br/>500|
|GET          | /api/v1/potencias/{id}|-          |-             |`{"idOperacion":number, "entrada": number, "potencia": number, "resultado": number}`|200<br/> 404|