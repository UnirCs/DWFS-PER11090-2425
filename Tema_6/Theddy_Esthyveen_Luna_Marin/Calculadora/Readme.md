# API de una calculadora online

## Descripción

Esta API REST permite realizar diversas operaciones matemáticas y registrar cada cálculo en una memoria. Cada operación genera un ID único que se puede utilizar para consultar los detalles de la misma más adelante.

### Funcionalidades soportadas
- **Sumar, Restar, Multiplicar, Dividir, Raíz N-ésima y Potencia N-ésima:** Realiza operaciones matemáticas específicas.
- **Consultar detalles de las operaciones:** Obtén los detalles de las operaciones realizadas utilizando su ID.

---

## Recursos identificados
1. **Operaciones específicas (sumas, restas, multiplicaciones, divisiones, raíces, potencias):** Recursos separados para cada tipo de cálculo.

---

## Endpoints y métodos HTTP

### **Modelo Específico (orientado a recursos separados)**

| Método HTTP | Endpoint            | Parámetros de consulta | Cuerpo de la petición                          | Cuerpo de la respuesta                                                                  | Códigos HTTP de respuesta                |
|-------------|---------------------|------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|------------------------------------------|
| POST        | /sumas              | -                      | `{"numeros": [3, 4]}`                         | `{"idOperacion": "123", "resultado": 7}`                                               | 201 Creado, 400 Solicitud Incorrecta     |
| POST        | /restas             | -                      | `{"numeros": [10, 3]}`                        | `{"idOperacion": "124", "resultado": 7}`                                               | 201 Creado, 400 Solicitud Incorrecta     |
| POST        | /multiplicaciones   | -                      | `{"numeros": [3, 4]}`                         | `{"idOperacion": "125", "resultado": 12}`                                              | 201 Creado, 400 Solicitud Incorrecta     |
| POST        | /divisiones         | -                      | `{"numeros": [10, 2]}`                        | `{"idOperacion": "126", "resultado": 5}`                                               | 201 Creado, 400 Solicitud Incorrecta, 422 División por Cero |
| POST        | /raices             | -                      | `{"numero": 27, "grado": 3}`                  | `{"idOperacion": "127", "resultado": 3}`                                               | 201 Creado, 400 Solicitud Incorrecta     |
| POST        | /potencias          | -                      | `{"numero": 2, "exponente": 3}`               | `{"idOperacion": "128", "resultado": 8}`                                               | 201 Creado, 400 Solicitud Incorrecta     |
| GET         | /operaciones/{id}   | -                      | -                                             | `{"idOperacion": "123", "tipo": "suma", "numeros": [3, 4], "resultado": 7}`            | 200 OK, 404 No Encontrado                |

---

## Descripción detallada de los endpoints

### **Modelo Específico (recursos separados)**

1. **Crear una suma:**
   - **Endpoint:** `POST /sumas`
   - **Descripción:** Suma los números proporcionados.
   - **Ejemplo de petición:**
     ```json
     {
       "numeros": [3, 4]
     }
     ```
   - **Ejemplo de respuesta:**
     ```json
     {
       "idOperacion": "123",
       "resultado": 7
     }
     ```

2. **Crear una resta:**
   - **Endpoint:** `POST /restas`
   - **Descripción:** Resta los números proporcionados.
   - **Ejemplo de petición:**
     ```json
     {
       "numeros": [10, 3]
     }
     ```
   - **Ejemplo de respuesta:**
     ```json
     {
       "idOperacion": "124",
       "resultado": 7
     }
     ```

3. **Crear una multiplicación:**
   - **Endpoint:** `POST /multiplicaciones`
   - **Descripción:** Multiplica los números proporcionados.
   - **Ejemplo de petición:**
     ```json
     {
       "numeros": [6, 3]
     }
     ```
   - **Ejemplo de respuesta:**
     ```json
     {
       "idOperacion": "125",
       "resultado": 18
     }
     ```

4. **Crear una división:**
   - **Endpoint:** `POST /divisiones`
   - **Descripción:** Divide los números proporcionados. Devuelve un error si el divisor es 0.
   - **Ejemplo de petición:**
     ```json
     {
       "numeros": [10, 2]
     }
     ```
   - **Ejemplo de respuesta:**
     ```json
     {
       "idOperacion": "126",
       "resultado": 5
     }
     ```

5. **Calcular una raíz N-ésima:**
   - **Endpoint:** `POST /raices`
   - **Descripción:** Calcula la raíz N-ésima de un número.
   - **Ejemplo de petición:**
     ```json
     {
       "numero": 27,
       "grado": 3
     }
     ```
     ```
   - **Ejemplo de respuesta:**
     ```json
     {
       "idOperacion": "127",
       "resultado": 3
     }
     ```

6. **Calcular una potencia N-ésima:**
   - **Endpoint:** `POST /potencias`
   - **Descripción:** Eleva un número al exponente indicado.
   - **Ejemplo de petición:**
     ```json
     {
       "numero": 2,
       "exponente": 4
     }
     ```
   - **Ejemplo de respuesta:**
     ```json
     {
       "idOperacion": "128",
       "resultado": 16
     }
     ```

7. **Consultar detalles de una operación:**
   - **Endpoint:** `GET /operaciones/{id}`
   - **Descripción:** Obtén detalles de una operación específica utilizando su ID.
   - **Ejemplo de respuesta:**
     ```json
     {
       "idOperacion": "123",
       "tipo": "suma",
       "numeros": [3, 4],
       "resultado": 7
     }
     ```
