### Parte I) Generar un alias
#
1) Genera un alias para el indice employees, que se llamará employees-alias. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.
    ```
    curl --location '{{elasticsearch-host}}/_aliases' \
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
1) Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventartelos si lo consideras). Guarda el ID de documento que has obtenido tras la creacion del elemento.
    ```
    curl --location '{{elasticsearch-host}}/employees-alias/_doc' \
    --header 'Content-Type: application/json' \
    --data '{
    "FirstName":"THEDDY",
    "LastName":"LUNA",
    "Designation":"Software Engineer",
    "Salary":"1000000",
    "DateOfJoining":"2025-01-02",
    "Address":"Cuenca",
    "Gender":"Male",
    "Age":30,
    "MaritalStatus":"Married",
    "Interests":"Java, Genexus, Python, Springboot"
    }'
### Parte III) Obtención simple de elementos
#
1) Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.
    ```
    curl --location '{{elasticsearch-host}}/employees-alias/_doc/2561EZUBJW4WC4k7ZoxF'
### Parte IV) Eliminación de elementos
#
1) Elimina el elemento que has creado anteriormente.
    ```
    curl --location --request DELETE '{{elasticsearch-host}}/employees-alias/_doc/2561EZUBJW4WC4k7ZoxF'
### Parte V) Consultas
#
1) Obtener empleados cuyo puesto sea Software Engineer.
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
2) Obtener empleados cuyo puesto NO sea Software Engineer.
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
3) Obtener la primera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
4) Obtener la tercera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
5) Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares.
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
6) Obtener el número total que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.
     ```
     curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
7) Obtener empleados cuyo nombre sea NATALIE.
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
        "query": {
            "match": {
                "FirstName": {
                "query": "NATALIE"
                }
            }
        }
   }'
8) Obtener empleados cuya dirección sea o contenga Street. Revisa la documentación sobre queries sobre campos search-as-you-type
    ```
   curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
9) Obtener empleados cuya dirección sea o contenga wood.
    ```
   curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
10) Obtener empleados interesados en Wrestling.
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
     "query": {
      "match": {
       "Interests": "Wrestling"
      }
     }
    }'
11) Obtener el número de hombres y mujeres interesad@s en Wrestling.
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
12) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres).
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
13) Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (tramo 1), entre 60.000 dólares y 67.000 dólares (tramo 2) y superior a 67.000 dólares (tramo 3).
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
14) En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.
    ```
    curl --location --request GET '{{elasticsearch-host}}/employees-alias/_search' \
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
### Parte VI) Crear otro índice y modificar el alias
#
1) Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo employees-v2 y mete en él todos los datos del fichero de prueba. Modifica el alias employees-alias que creaste antes para que apunte tanto al índice employees original como al nuevo employees-v2. Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.
    ```
   curl --location '{{elasticsearch-host}}/_alias'
2) Realiza alguna de las consultas anteriores. ¿Qué observas?
    ```
   Se duplican los resultados
3) Elimina employees del conjunto de índices a los que hace referencia el alias.
    ```
   curl --location '{{elasticsearch-host}}/_aliases' \
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