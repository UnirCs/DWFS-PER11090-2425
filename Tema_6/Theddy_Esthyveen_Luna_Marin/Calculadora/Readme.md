# API de una calculadora online

## Descripción

Esta API REST permite realizar diversas operaciones matemáticas y registrar cada cálculo en una memoria. Cada operación genera un ID único que se puede utilizar para consultar los detalles de la misma más adelante.

### Funcionalidades soportadas
- **Sumar:** Permite sumar múltiples números.
- **Restar:** Permite restar múltiples números.
- **Multiplicar:** Permite multiplicar dos números.
- **Dividir:** Permite dividir dos números, manejando errores como divisiones por cero.
- **Raíz N-ésima:** Calcula la raíz N-ésima de un número.
- **Potencia N-ésima:** Eleva un número a una potencia N.
- **Consultar detalles:** Obtén los detalles de una operación pasada utilizando su ID.

---

## Recursos identificados
- **Operaciones (operaciones):** Representan las operaciones matemáticas realizadas por los usuarios.

---

## Endpoints y métodos HTTP

| Método HTTP | Endpoint                          | Parámetros de consulta | Cuerpo de la petición                              | Cuerpo de la respuesta                                                                       | Códigos HTTP de respuesta                |
|-------------|-----------------------------------|------------------------|---------------------------------------------------|---------------------------------------------------------------------------------------------|------------------------------------------|
| POST        | /operaciones/sumar               | -                      | `{"numeros": [2, 2, 2]}`                          | `{"resultado": 6, "idOperacion": "123"}`                                                    | 201 Creado, 400 Solicitud Incorrecta    |
| POST        | /operaciones/restar              | -                      | `{"numeros": [10, 5, 2]}`                         | `{"resultado": 3, "idOperacion": "124"}`                                                    | 201 Creado, 400 Solicitud Incorrecta    |
| POST        | /operaciones/multiplicar         | -                      | `{"numeros": [3, 5]}`                             | `{"resultado": 15, "idOperacion": "125"}`                                                   | 201 Creado, 400 Solicitud Incorrecta    |
| POST        | /operaciones/dividir             | -                      | `{"numeros": [10, 2]}`                            | `{"resultado": 5, "idOperacion": "126"}`                                                    | 201 Creado, 400 Solicitud Incorrecta, 422 División por Cero |
| POST        | /operaciones/raiz-nesima         | -                      | `{"numero": 27, "grado": 3}`                      | `{"resultado": 3, "idOperacion": "127"}`                                                    | 201 Creado, 400 Solicitud Incorrecta    |
| POST        | /operaciones/potencia-nesima     | -                      | `{"numero": 2, "exponente": 3}`                   | `{"resultado": 8, "idOperacion": "128"}`                                                    | 201 Creado, 400 Solicitud Incorrecta    |
| GET         | /operaciones/{idOperacion}       | -                      | -                                                 | `{"idOperacion": "123", "tipo": "suma", "numeros": [2, 2, 2], "resultado": 6}`              | 200 OK, 404 No Encontrado              |

---

## Descripción detallada de los endpoints

### **Operaciones básicas**

1. **Sumar números:**
    - **Endpoint:** `POST /operaciones/sumar`
    - **Descripción:** Permite sumar una lista de números. El resultado y el ID de la operación se devuelven en la respuesta.
    - **Ejemplo de petición:**
      ```json
      {
        "numeros": [3, 7, 2]
      }
      ```
    - **Ejemplo de respuesta:**
      ```json
      {
        "resultado": 12,
        "idOperacion": "123"
      }
      ```

2. **Restar números:**
    - **Endpoint:** `POST /operaciones/restar`
    - **Descripción:** Permite restar una lista de números de manera secuencial.
    - **Ejemplo de petición:**
      ```json
      {
        "numeros": [20, 5, 3]
      }
      ```
    - **Ejemplo de respuesta:**
      ```json
      {
        "resultado": 12,
        "idOperacion": "124"
      }
      ```

3. **Multiplicar números:**
    - **Endpoint:** `POST /operaciones/multiplicar`
    - **Descripción:** Multiplica dos números.
    - **Ejemplo de petición:**
      ```json
      {
        "numeros": [6, 3]
      }
      ```
    - **Ejemplo de respuesta:**
      ```json
      {
        "resultado": 18,
        "idOperacion": "125"
      }
      ```

4. **Dividir números:**
    - **Endpoint:** `POST /operaciones/dividir`
    - **Descripción:** Divide dos números. Devuelve un error si el divisor es 0.
    - **Ejemplo de petición:**
      ```json
      {
        "numeros": [10, 2]
      }
      ```
    - **Ejemplo de respuesta:**
      ```json
      {
        "resultado": 5,
        "idOperacion": "126"
      }
      ```

### **Operaciones avanzadas**

1. **Raíz N-ésima:**
    - **Endpoint:** `POST /operaciones/raiz-nesima`
    - **Descripción:** Calcula la raíz N-ésima de un número.
    - **Ejemplo de petición:**
      ```json
      {
        "numero": 27,
        "grado": 3
      }
      ```
    - **Ejemplo de respuesta:**
      ```json
      {
        "resultado": 3,
        "idOperacion": "127"
      }
      ```

2. **Potencia N-ésima:**
    - **Endpoint:** `POST /operaciones/potencia-nesima`
    - **Descripción:** Calcula la potencia de un número elevado a un exponente.
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
        "resultado": 16,
        "idOperacion": "128"
      }
      ```

### **Detalles de operación**

- **Consultar detalles de una operación pasada:**
    - **Endpoint:** `GET /operaciones/{idOperacion}`
    - **Descripción:** Devuelve los detalles de una operación previamente realizada.
    - **Ejemplo de respuesta:**
      ```json
      {
        "idOperacion": "123",
        "tipo": "suma",
        "numeros": [3, 7, 2],
        "resultado": 12
      }
      ```