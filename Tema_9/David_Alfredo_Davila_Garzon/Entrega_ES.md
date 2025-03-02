Parte I) Generar un alias
1) Genera un alias para el índice employees, que se llamará `employees-alias`. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.
    ####
    Request:
    ####
        curl --location 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/_aliases' \
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
    ####
    Response (200-OK):
    ####
        {
            "acknowledged": true
        }
#
Parte II) Inserción de elementos

1) Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventártelos si lo consideras). Guarda el ID de documento que has obtenido tras la creación del elemento.
    ####
    Request:
    ####
        curl --location 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_doc' \
        --header 'Content-Type: application/json' \
        --data '{
            "FirstName":"DAVID",
            "LastName":"DAVILA",
            "Designation":"Software Engineer",
            "Salary":"100000",
            "DateOfJoining":"2025-01-02",
            "Address":"Av. Ordoñez Lasso y Cerezos",
            "Gender":"Male",
            "Age":37,
            "MaritalStatus":"Unmarried",
            "Interests":"Developing, Java, Springboot, AWS, Azure"
        }'
    ####
    Response (201-Created):
    ####
        {
            "_index": "employees",
            "_type": "_doc",
            "_id": "TkQY6JQBfv-mL7z3vo8b",
            "_version": 1,
            "result": "created",
            "_shards": {
                "total": 2,
                "successful": 2,
                "failed": 0
            },
            "_seq_no": 9999,
            "_primary_term": 1
        }
#
Parte III) Obtención simple de elementos
1) Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.
    ####
    Request:
    ####
        curl --location 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_doc/TkQY6JQBfv-mL7z3vo8b'
    ####
    Response (200-OK):
    ####
        {
           "_index": "employees",
          "_type": "_doc",
          "_id": "TkQY6JQBfv-mL7z3vo8b",
          "_version": 1,
          "_seq_no": 9999,
          "_primary_term": 1,
          "found": true,
          "_source": {
          "FirstName": "DAVID",
          "LastName": "DAVILA",
          "Designation": "Software Engineer",
          "Salary": "100000",
          "DateOfJoining": "2025-01-02",
          "Address": "Av. Ordoñez Lasso y Cerezos",
          "Gender": "Male",
          "Age": 37,
          "MaritalStatus": "Unmarried",
          "Interests": "Developing, Java, Springboot, AWS, Azure"
        }
#
Parte IV) Eliminación de elementos
1) Elimina el elemento que has creado anteriormente.
    ####
    Request:
    ####
        curl --location --request DELETE 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_doc/TkQY6JQBfv-mL7z3vo8b'
    ####
    Response (200-OK):
    ####
        {
            "_index": "employees",
            "_type": "_doc",
            "_id": "TkQY6JQBfv-mL7z3vo8b",
            "_version": 2,
            "result": "deleted",
            "_shards": {
                "total": 2,
                "successful": 2,
                "failed": 0
            },
            "_seq_no": 10000,
            "_primary_term": 1
       }
#
Parte V) Consultas
1) Obtener empleados cuyo puesto sea Software Engineer.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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
    ####
    Response (200-OK):
    ####
        {
            "took": 2,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 4264,
                    "relation": "eq"
                },
            "max_score": 0.8522601,
            "hits": [ Por defecto trae 10 coincidencias de las 4264 ]
        }
###
2) Obtener empleados cuyo puesto NO sea Software Engineer.
   ####
   Request:
   ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
        --header 'Content-Type: application/json' \
        --data '{
            "query": {
                "bool": {
                    "must_not": {
                        "term": {
                            "Designation": {
                                "value": "Software Engineer"
                            }
                        }
                    }
                }
            }
        }'
   ####
   Response (200-OK):
   ####
        {
            "took": 2,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 5735,
                    "relation": "eq"
                },
            "max_score": 0.0,
            "hits": [ Por defecto trae 10 coincidencias de las 5735 ]
        }
###
3) Obtener la primera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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
    ####
    Response (200-OK):
    ####
        {
            "took": 2,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 4264,
                    "relation": "eq"
                },
            "max_score": 0.8522601,
            "hits": [ Trae los 35 primeros resultados ]
        }
###
4) Obtener la tercera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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
    ####
    Response (200-OK):
    ####
        {
            "took": 1,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 4264,
                    "relation": "eq"
                },
            "max_score": 0.8522601,
            "hits": [ Trae los 35 elementos correspondientes ]
        }
###
5) Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
        --header 'Content-Type: application/json' \
        --data '{
            "size": 13,
            "query": {
                "range": {
                    "Salary": {
                        "gt": 67000
                    }
                }
            }
        }'
    ####
    Response (200-OK):
    ####
        {
            "took": 1,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 1591,
                    "relation": "eq"
                },
            "max_score": 1.0,
            "hits": [ Trae los 13 primeros resultados que hacen match ]
        }
###
6) Obtener el número total que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
        --header 'Content-Type: application/json' \
        --data '{
            "query": {
                "range": {
                    "DateOfJoining": {
                        "gt": "2003-04-30",
                        "lte": "2003-05-31"
                    }
                }
            }
        }'
    ####
    Response (200-OK):
    ####
        {
            "took": 1,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 8,
                    "relation": "eq"
                },
            "max_score": 1.0,
            "hits": [ Trae los 8 resultados que hacen match ]
        }
###
7) Obtener empleados cuyo nombre sea NATALIE.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
        --header 'Content-Type: application/json' \
        --data '{
            "query": {
                "match": {
                    "FirstName": "NATALIE"
                }
            }
        }'
    ####
    Response (200-OK):
    ####
        {
            "took": 0,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 1,
                    "relation": "eq"
                },
            "max_score": 8.804874,
            "hits": [ Trae un solo resultado ]
        }
###
8) Obtener empleados cuya dirección sea o contenga Street.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
        --header 'Content-Type: application/json' \
        --data '{
            "query": {
                "wildcard": {
                    "Address": "*Street*"
                }
            }
        }'
    ####
    Response (200-OK):
    ####
        {
            "took": 2,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 1580,
                    "relation": "eq"
                },
            "max_score": 1.0,
            "hits": [ Trae los primeros 10 resultados de 1580 ]
        }
###
9) Obtener empleados cuya dirección sea o contenga wood.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
        --header 'Content-Type: application/json' \
        --data '{
            "query": {
                "match": {
                    "Address": "wood"
                }
            }
        }'
    ####
    Response (200-OK):
    ####
        {
            "took": 1,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 19,
                    "relation": "eq"
                },
            "max_score": 6.5165105,
            "hits": [ Trae los primeros 10 resultados de 19 ]
        }
###
10) Obtener empleados interesados en Wrestling.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
        --header 'Content-Type: application/json' \
        --data '{
            "query": {
                "match": {
                    "Interests": "Wrestling"
                }
            }
        }'
    ####
    Response:
    ####
        {
            "took": 1,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 154,
                    "relation": "eq"
                },
            "max_score": 6.399149,
            "hits": [ Trae los primeros 10 resultados de 154 ]
        }
###
11) Obtener el número de hombres y mujeres interesad@s en Wrestling.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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
    ####
    Response:
    ####
        {
            "took": 1,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 154,
                    "relation": "eq"
                },
                "max_score": null,
                "hits": []
            },
            "aggregations": {
                "gender_count": {
                    "doc_count_error_upper_bound": 0,
                    "sum_other_doc_count": 0,
                    "buckets": [
                        {
                            "key": "Female",
                            "doc_count": 80
                        },
                        {
                            "key": "Male",
                            "doc_count": 74
                        }
                    ]
                }
            }
        }
###
12) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres).
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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
    ####
    Respones (200-OK):
    ####
        {
            "took": 1,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 154,
                    "relation": "eq"
                },
                "max_score": null,
                "hits": []
            },
            "aggregations": {
                "gender_count": {
                    "doc_count_error_upper_bound": 0,
                    "sum_other_doc_count": 0,
                    "buckets": [
                        {
                            "key": "Female",
                            "doc_count": 80,
                            "average_age": {
                                "value": 30.65
                            }
                        },
                        {
                            "key": "Male",
                            "doc_count": 74,
                            "average_age": {
                                "value": 30.33783783783784
                            }
                        }
                    ]
                }
            }
        }
###
13) Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (tramo 1), entre 60.000 dólares y 67.000 dólares (tramo 2) y superior a 67.000 dólares (tramo 3).
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
        --header 'Content-Type: application/json' \
        --data '{
            "size": 0,
            "aggs": {
                "salary_ranges": {
                    "range": {
                        "field": "Salary",
                        "ranges": [
                            {
                                "to": 60000,
                                "key": "tramo 1"
                            },
                            {
                                "from": 60000,
                                "to": 67000,
                                "key": "tramo 2"
                            },
                            {
                                "from": 67000,
                                "key": "tramo 3"
                            }
                        ]
                    }
                }
            }
        }'
    ####
    Response (200-OK):
    ####
        {
            "took": 1,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 9999,
                    "relation": "eq"
                },
                "max_score": null,
                "hits": []
            },
            "aggregations": {
                "salary_ranges": {
                    "buckets": [
                        {
                            "key": "tramo 1",
                            "to": 60000.0,
                            "doc_count": 3872
                        },
                        {
                            "key": "tramo 2",
                            "from": 60000.0,
                            "to": 67000.0,
                            "doc_count": 4020
                        },
                        {
                            "key": "tramo 3",
                            "from": 67000.0,
                            "doc_count": 2107
                        }
                    ]
                }
            }
        }
###
14) En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
        --header 'Content-Type: application/json' \
        --data '{
            "size": 0,
            "aggs": {
                "salary_ranges": {
                    "range": {
                        "field": "Salary",
                        "ranges": [
                            {
                                "to": 60000,
                                "key": "tramo 1"
                            },
                            {
                                "from": 60000,
                                "to": 67000,
                                "key": "tramo 2"
                            },
                            {
                                "from": 67000,
                                "key": "tramo 3"
                            }
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
    ####
    Response (200-OK):
    ####
        {
            "took": 1,
            "timed_out": false,
            "_shards": {
                "total": 1,
                "successful": 1,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 9999,
                    "relation": "eq"
                },
                "max_score": null,
                "hits": []
            },
            "aggregations": {
                "salary_ranges": {
                    "buckets": [
                        {
                            "key": "tramo 1",
                            "to": 60000.0,
                            "doc_count": 3872,
                            "marital_status": {
                                "doc_count_error_upper_bound": 0,
                                "sum_other_doc_count": 0,
                                "buckets": [
                                    {
                                        "key": "Unmarried",
                                        "doc_count": 1945
                                    },
                                    {
                                        "key": "Married",
                                        "doc_count": 1927
                                    }
                                ]
                            }
                        },
                        {
                            "key": "tramo 2",
                            "from": 60000.0,
                            "to": 67000.0,
                            "doc_count": 4020,
                            "marital_status": {
                                "doc_count_error_upper_bound": 0,
                                "sum_other_doc_count": 0,
                                "buckets": [
                                    {
                                        "key": "Married",
                                        "doc_count": 2024
                                    },
                                    {
                                        "key": "Unmarried",
                                        "doc_count": 1996
                                    }
                                ]
                            }
                        },
                        {
                            "key": "tramo 3",
                            "from": 67000.0,
                            "doc_count": 2107,
                            "marital_status": {
                                "doc_count_error_upper_bound": 0,
                                "sum_other_doc_count": 0,
                                "buckets": [
                                    {
                                        "key": "Married",
                                        "doc_count": 1071
                                    },
                                    {
                                        "key": "Unmarried",
                                        "doc_count": 1036
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        }
#
Parte VI) Crear otro índice y modificar el alias
1) Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo employees-v2 y mete en él todos los datos del fichero de prueba. Modifica el alias employees-alias que creaste antes para que apunte tanto al índice employees original como al nuevo employees-v2. Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.
    ####
    Request:
    ####
        curl --location --request PUT 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-v2' \
        --header 'Content-Type: application/json' \
        --data '{
            "mappings":{
                "properties":{
                    "Address":{
                        "type":"search_as_you_type"
                    },
                    "Age":{
                        "type":"integer"
                    },
                    "DateOfJoining":{
                        "type":"date",
                        "format":"yyyy-MM-dd"
                    },
                    "Designation":{
                        "type":"keyword"
                    },
                    "FirstName":{
                        "type":"text"
                    },
                    "Gender":{
                        "type":"keyword"
                    },
                    "Interests":{
                        "type":"text"
                    },
                    "LastName":{
                        "type":"text"
                    },
                    "MaritalStatus":{
                        "type":"keyword"
                    },
                    "Salary":{
                        "type":"double"
                    }
                }
            }
        }'
    ####
    Response (200-OK):
    ####
        {
           "acknowledged": true,
           "shards_acknowledged": true,
           "index": "employees-v2"
        }
    ####
    Al obtener todos los índices:
    ####
        green open employees    yaF68aKEQMikkktIqba1Og 1 1 9999 0 13.3mb 6.6mb
        green open employees-v2 gQcODU_6SFmcypNBG5d8hg 1 1    0 0   416b  208b
    Se cargan en el nuevo índice los datos de prueba mediante:
    ####
        curl -XPUT 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-v2/_bulk' --data-binary @Employees_raw.json -H 'Content-Type: application/json'
    Se modifica el alias:
    ####
        curl --location 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/_aliases' \
        --header 'Content-Type: application/json' \
        --data '{
            "actions": [
                {
                    "add": {
                        "index": "employees-v2",
                        "alias": "employees-alias"
                    }
                }
            ]
        }'
    Al obtener todos los alias:
    ####
        {
            "employees-v2": {
                "aliases": {
                    "employees-alias": {}
                }
            },
            "employees": {
                "aliases": {
                    "employees-alias": {}
                }
           }
        }
###
2) Realiza alguna de las consultas anteriores. ¿Qué observas?
    ####
    Request:
    ####
        curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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
    ####
    Response (200-OK):
    ####
        {
            "took": 2,
            "timed_out": false,
            "_shards": {
                "total": 2,
                "successful": 2,
                "skipped": 0,
                "failed": 0
            },
            "hits": {
                "total": {
                    "value": 8528,
                    "relation": "eq"
                },
                "max_score": 0.8522687,
                "hits": [ ... ]
        }
    ####
        Se muestran ahora 8528 elementos y antes hubo 4264, es decir se duplican los resultados.
###
3) Elimina employees del conjunto de índices a los que hace referencia el alias.
    ####
    Request:
    ####
        curl --location 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/_aliases' \
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
    ####
    Response (200-OK):
    ####
        {
            "acknowledged": true
        }