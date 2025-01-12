# API de una calculadora online

## Descripción

Esta API REST permite realizar diversas operaciones matemáticas y registrar cada cálculo en una memoria. Cada tipo de operación tiene su propio recurso, y todas las operaciones realizadas pueden ser consultadas.

---

## Funcionalidades soportadas

1. **Operaciones básicas:**
    - Sumas
    - Restas
    - Multiplicaciones
    - Divisiones
    - Raíces N-ésimas
    - Potencias N-ésimas
2. **Gestión de operaciones:**
    - Consultar todas las operaciones de un tipo específico.
    - Consultar detalles de cualquier operación registrada.

---

## Recursos identificados

- **Sumas (sumas):** Representan todas las sumas realizadas.
- **Restas (restas):** Representan todas las restas realizadas.
- **Multiplicaciones (multiplicaciones):** Representan todas las multiplicaciones realizadas.
- **Divisiones (divisiones):** Representan todas las divisiones realizadas.
- **Raíces (raices):** Representan todas las raíces N-ésimas realizadas.
- **Potencias (potencias):** Representan todas las potencias N-ésimas realizadas.

---

## Endpoints y métodos HTTP

| Método HTTP | Endpoint        | Parámetros de consulta | Cuerpo de la petición                       | Respuesta JSON                                    | Códigos HTTP                 |
|-------------|-----------------|------------------------|---------------------------------------------|--------------------------------------------------|------------------------------|
| POST        | /sumas          | -                      | `{"numeros": [3, 4]}`                       | `{"id": "integer", "resultado": 7}`              | 201 Creado, 400 Bad Request  |
| GET         | /sumas          | -                      | -                                           | `[{"id": "integer", "numeros": [3, 4], "resultado": 7}]` | 200 OK                       |
| POST        | /restas         | -                      | `{"numeros": [10, 4]}`                      | `{"id": "integer", "resultado": 6}`              | 201 Creado, 400 Bad Request  |
| GET         | /restas         | -                      | -                                           | `[{"id": "integer", "numeros": [10, 4], "resultado": 6}]` | 200 OK                       |
| POST        | /multiplicaciones | -                    | `{"numeros": [2, 5]}`                       | `{"id": "integer", "resultado": 10}`             | 201 Creado, 400 Bad Request  |
| GET         | /multiplicaciones | -                    | -                                           | `[{"id": "integer", "numeros": [2, 5], "resultado": 10}]` | 200 OK                       |
| POST        | /divisiones     | -                      | `{"numeros": [10, 2]}`                      | `{"id": "integer", "resultado": 5}`              | 201 Creado, 400 Bad Request, 422 División por Cero |
| GET         | /divisiones     | -                      | -                                           | `[{"id": "integer", "numeros": [10, 2], "resultado": 5}]` | 200 OK                       |
| POST        | /raices         | -                      | `{"numero": 16, "grado": 2}`                | `{"id": "integer", "resultado": 4}`              | 201 Creado, 400 Bad Request  |
| GET         | /raices         | -                      | -                                           | `[{"id": "integer", "numero": 16, "grado": 2, "resultado": 4}]` | 200 OK                       |
| POST        | /potencias      | -                      | `{"numero": 2, "exponente": 3}`             | `{"id": "integer", "resultado": 8}`              | 201 Creado, 400 Bad Request  |
| GET         | /potencias      | -                      | -                                           | `[{"id": "integer", "numero": 2, "exponente": 3, "resultado": 8}]` | 200 OK                       |

---

## Descripción detallada de los endpoints

### **Operaciones básicas**

1. **Sumas**
    - **Crear suma:** `POST /sumas`
        - Registra una nueva suma.
        - **Ejemplo de petición:**
          ```json
          {
            "numeros": [3, 4]
          }
          ```
        - **Ejemplo de respuesta:**
          ```json
          {
            "id": 1,
            "resultado": 7
          }
          ```
    - **Consultar todas las sumas:** `GET /sumas`
        - Recupera todas las sumas registradas.
        - **Ejemplo de respuesta:**
          ```json
          [
            {
              "id": 1,
              "numeros": [3, 4],
              "resultado": 7
            }
          ]
          ```

2. **Restas**
    - **Crear resta:** `POST /restas`
        - Registra una nueva resta.
        - **Ejemplo de petición:**
          ```json
          {
            "numeros": [10, 4]
          }
          ```
        - **Ejemplo de respuesta:**
          ```json
          {
            "id": 2,
            "resultado": 6
          }
          ```
    - **Consultar todas las restas:** `GET /restas`
        - Recupera todas las restas registradas.
        - **Ejemplo de respuesta:**
          ```json
          [
            {
              "id": 2,
              "numeros": [10, 4],
              "resultado": 6
            }
          ]
          ```