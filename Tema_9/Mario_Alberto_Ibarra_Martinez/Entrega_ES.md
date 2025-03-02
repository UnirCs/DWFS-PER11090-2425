### Parte I) Generar un alias
#
i) Genera un alias para el indice employees, que se llamará employees-alias. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.

    ```
    curl --location '{{hostname}}/_aliases' \
    --header 'Content-Type: application/json' \
    --data '{
        "actions": [
            {
                "add": {
                    "index": "employees",
                    "alias": "employees-alias"
                }
            }
        ]
    }'
### Parte II) Inserción de elementos
#
i) Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventartelos si lo consideras). Guarda el ID de documento que has obtenido tras la creacion del elemento.

    ```
    curl --location '{{hostname}}/employees-alias/_doc' \
    --header 'Content-Type: application/json' \
    --data '{
    "FirstName":"MARIO",
    "LastName":"IBARRA",
    "Designation":"Software Engineer",
    "Salary":"60000",
    "DateOfJoining":"2025-01-02",
    "Address":"Milagro",
    "Gender":"Male",
    "Age":38,
    "MaritalStatus":"Married",
    "Interests":"Javascript, Java, Genexus, Python, Springboot"
    }'
### Parte III) Obtención simple de elementos
#
i) Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.

    ```
    curl --location '{{hostname}}/employees-alias/_doc/2561EZUBJW4WC4k7ZoxF'
    ```

### Parte IV) Eliminación de elementos
#
i) Elimina el elemento que has creado anteriormente.

    ```
    curl --location --request DELETE '{{hostname}}/employees-alias/_doc/2561EZUBJW4WC4k7ZoxF'
    ```

### Parte V) Consultas
#
i) Obtener empleados cuyo puesto sea Software Engineer.

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
        "query": {
            "term": {
                "Designation": {
                    "value": "Software Engineer"
                }
            }
        }
    }'
    ```

ii) Obtener empleados cuyo puesto NO sea Software Engineer.

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
        "query": {
            "bool": {
            "must_not" : {
                    "term" : {
                        "Designation" :{
                            "value": "Software Engineer"
                        }
                    }
                }
            }
        }
    }'
    ```

iii) Obtener la primera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
    "from": 0,
    "size": 35,
    "query": {
            "term": {
                "Designation": {
                    "value": "Software Engineer"
                }
            }
        }
    }'
    ```

iv) Obtener la tercera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
    "from": 70,
    "size": 35,
    "query": {
            "term": {
                "Designation": {
                    "value": "Software Engineer"
                }
            }
        }
    }'
    ```

v) Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares.

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
        "size":13,
        "query": {
                "range": {
                    "Salary": {
                        "gt": 67000
                    }
                }
        }
    }'
    ```

vi) Obtener el número total que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.

     ```
     curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
        "size": 0,
        "query": {
                "range": {
                    "DateOfJoining": {
                        "gte": "2003-05-01",
                        "lte": "2003-05-31"
                    }
                }
        }
    }'
    ```

vii) Obtener empleados cuyo nombre sea NATALIE.

    ```
    curl --request GET \
    --url '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --header 'User-Agent: insomnia/10.3.1' \
    --data '{
        "query": {
            "match": {
                "FirstName": {
                    "query": "NATALIE"
                }
            }
        }
    }'
    ```

viii) Obtener empleados cuya dirección sea o contenga Street. Revisa la documentación sobre queries sobre campos search-as-you-type

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
     "query": {
      "multi_match": {
       "query": "Street",
       "type": "bool_prefix",
       "fields": [
        "Address",
        "Address._2gram",
        "Address._3gram"
       ]
      }
     }
    }'
    ```

ix) Obtener empleados cuya dirección sea o contenga wood.

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
      "multi_match": {
      "query": "Wood",
      "type": "bool_prefix",
      "fields": [
       "Address",
       "Address._2gram",
       "Address._3gram"
       ]
      }
     }
    }'
    ```

x) Obtener empleados interesados en Wrestling.

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
     "query": {
      "match": {
       "Interests": "Wrestling"
      }
     }
    }'
    ```

xi) Obtener el número de hombres y mujeres interesad@s en Wrestling.

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
     "size": 0,
     "query": {
      "match": {
      "Interests": "Wrestling"
      }
     },
     "aggs": {
      "gender_count": {
       "terms": {
        "field": "Gender"
        }
       }
      }
    }'
    ```

xii) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres).

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
    "size": 0,
    "query": {
     "match": {
      "Interests": "Wrestling"
      }
     },
    "aggs": {
     "gender_count": {
      "terms": {
       "field": "Gender"
       },
      "aggs": {
       "average_age": {
        "avg": {
         "field": "Age"
         }
        }
       }
      }
     }
    }'
    ```

xiii) Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (tramo 1), entre 60.000 dólares y 67.000 dólares (tramo 2) y superior a 67.000 dólares (tramo 3).

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
    "size": 0,
     "aggs": {
      "salary_ranges": {
       "range": {
        "field": "Salary",
        "ranges": [
         { "to": 60000 },                   
         { "from": 60000, "to": 67000 },    
         { "from": 67000 }                  
        ]
       }
      }
     }
    }'
    ```

xiv) En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.

    ```
    curl --location --request GET '{{hostname}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
     "size": 0,
     "aggs": {
      "salary_ranges": {
       "range": {
       "field": "Salary",
       "ranges": [
        { "to": 60000 },                  
        { "from": 60000, "to": 67000 },    
        { "from": 67000 }                  
       ]
      },
      "aggs": {
       "marital_status": {
        "terms": {
         "field": "MaritalStatus"
         }
        }
       }
      }
     }
    }'
    ```


### Parte VI) Crear otro índice y modificar el alias
#

i) Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo employees-v2 y mete en él todos los datos del fichero de prueba. Modifica el alias employees-alias que creaste antes para que apunte tanto al índice employees original como al nuevo employees-v2. Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.

    ```
    curl --location '{{hostname}}/_alias'
    ```

ii) Realiza alguna de las consultas anteriores. ¿Qué observas?
   
    ```
    Se duplican los resultados
    ```

iii) Elimina employees del conjunto de índices a los que hace referencia el alias.
   
    ```
    curl --location '{{hostname}}/_aliases' \
    --header 'Content-Type: application/json' \
    --data '{
     "actions": [
     {
      "remove": {
       "index": "employees",
       "alias": "employees-alias"
       }
      }
     ]
    }'
    ```