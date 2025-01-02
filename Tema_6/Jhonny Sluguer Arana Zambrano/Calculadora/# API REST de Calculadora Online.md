# API REST de Calculadora Online

El objetivo de esta API es proporcionar servicios de cálculo mediante operaciones aritméticas básicas y avanzadas. Además, permite consultar el historial de las operaciones realizadas, identificándolas por un ID único.

## Endpoints de la API

### Operaciones Aritméticas

1. **Suma de N elementos**
   - **Método:** `POST`
   - **Endpoint:** `/api/calculadora/suma`
   - **Descripción:** Realiza la suma de una lista de números proporcionada por el usuario.
   - **Cuerpo de la solicitud (JSON):**
     ```json
     {
         "numeros": [2, 3, 5]
     }
     ```
   - **Respuesta (JSON):**
     ```json
     {
         "id": 1,
         "resultado": 10
     }
     ```

2. **Resta de N elementos**
   - **Método:** `POST`
   - **Endpoint:** `/api/calculadora/resta`
   - **Descripción:** Realiza la resta de una lista de números proporcionada por el usuario.
   - **Cuerpo de la solicitud (JSON):**
     ```json
     {
         "numeros": [10, 3, 2]
     }
     ```
   - **Respuesta (JSON):**
     ```json
     {
         "id": 2,
         "resultado": 5
     }
     ```

3. **Multiplicación de 2 elementos**
   - **Método:** `POST`
   - **Endpoint:** `/api/calculadora/multiplicacion`
   - **Descripción:** Calcula el producto de dos números.
   - **Cuerpo de la solicitud (JSON):**
     ```json
     {
         "a": 4,
         "b": 5
     }
     ```
   - **Respuesta (JSON):**
     ```json
     {
         "id": 3,
         "resultado": 20
     }
     ```

4. **División de 2 elementos**
   - **Método:** `POST`
   - **Endpoint:** `/api/calculadora/division`
   - **Descripción:** Calcula la división de dos números.
   - **Cuerpo de la solicitud (JSON):**
     ```json
     {
         "a": 10,
         "b": 2
     }
     ```
   - **Respuesta (JSON):**
     ```json
     {
         "id": 4,
         "resultado": 5
     }
     ```
   - **Nota:** Si `b = 0`, se devolverá un error indicando que no se puede dividir entre cero.

5. **Raíz N-ésima**
   - **Método:** `POST`
   - **Endpoint:** `/api/calculadora/raiz`
   - **Descripción:** Calcula la raíz N-ésima de un número.
   - **Cuerpo de la solicitud (JSON):**
     ```json
     {
         "numero": 8,
         "indice": 3
     }
     ```
   - **Respuesta (JSON):**
     ```json
     {
         "id": 5,
         "resultado": 2
     }
     ```

6. **Potencia N-ésima**
   - **Método:** `POST`
   - **Endpoint:** `/api/calculadora/potencia`
   - **Descripción:** Calcula la potencia N-ésima de un número base.
   - **Cuerpo de la solicitud (JSON):**
     ```json
     {
         "base": 2,
         "exponente": 3
     }
     ```
   - **Respuesta (JSON):**
     ```json
     {
         "id": 6,
         "resultado": 8
     }
     ```

---

### Historial de Operaciones

1. **Consultar todas las operaciones**
   - **Método:** `GET`
   - **Endpoint:** `/api/calculadora/operaciones`
   - **Descripción:** Devuelve un listado de todas las operaciones realizadas.
   - **Respuesta (JSON):**
     ```json
     [
         {
             "id": 1,
             "tipo": "suma",
             "datos": [2, 3, 5],
             "resultado": 10
         },
         {
             "id": 2,
             "tipo": "resta",
             "datos": [10, 3, 2],
             "resultado": 5
         }
     ]
     ```

2. **Consultar operación por ID**
   - **Método:** `GET`
   - **Endpoint:** `/api/calculadora/operaciones/{id}`
   - **Descripción:** Devuelve los detalles de una operación específica.
   - **Parámetro de ruta:**
     - `{id}`: ID de la operación.
   - **Respuesta (JSON):**
     ```json
     {
         "id": 1,
         "tipo": "suma",
         "datos": [2, 3, 5],
         "resultado": 10
     }
     ```

   - **Error si el ID no existe:**
     ```json
     {
         "error": "Operación no encontrada."
     }
     ```

---

### Notas Adicionales
1. **Formato de entrada y salida:**
   - Todas las solicitudes y respuestas utilizan el formato JSON.
2. **Validación:**
   - Se debe validar que los parámetros proporcionados sean números válidos y que las operaciones cumplan las condiciones necesarias (por ejemplo, no dividir entre cero).

---

Este diseño proporciona un esquema claro de los endpoints y sus funcionalidades según las operaciones requeridas. Si necesitas algo más, ¡avísame! 😊
