
### **Archivo Consolidado: Entrega_ES_Final.md**

---

### **Parte I) Generar un alias**
1) Genera un alias para el índice `employees`, que se llamará `employees-alias`. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.

```bash
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
```

**Respuesta (200-OK):**
```json
{
    "acknowledged": true
}
```

---

### **Parte II) Inserción de elementos**
1) Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventártelos si lo consideras). Guarda el ID de documento que has obtenido tras la creación del elemento.

```bash
curl --location 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_doc' \
--header 'Content-Type: application/json' \
--data '{
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
}'
```

**Respuesta (201-Created):**
```json
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
```

---

### **Parte III) Obtención simple de elementos**
1) Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.

```bash
curl --location 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_doc/TkQY6JQBfv-mL7z3vo8b'
```

**Respuesta (200-OK):**
```json
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
}
```

---

### **Parte IV) Eliminación de elementos**
1) Elimina el elemento que has creado anteriormente.

```bash
curl --location --request DELETE 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_doc/TkQY6JQBfv-mL7z3vo8b'
```

**Respuesta (200-OK):**
```json
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
```

---

### **Parte V) Consultas**

#### 1) Obtener empleados cuyo puesto sea `Software Engineer`.

```bash
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
```

**Respuesta (200-OK):**
```json
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
        "hits": [ ... ]
    }
}
```

#### 2) Obtener empleados cuyo puesto NO sea `Software Engineer`.

```bash
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
```

**Respuesta (200-OK):**
```json
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
        "hits": [ ... ]
    }
}
```

#### 3) Obtener la primera página de empleados cuya `designation` sea `Software Engineer` asumiendo un tamaño de página de 35 elementos.

```bash
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
```

**Respuesta (200-OK):**
```json
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
        "hits": [ ... ]
    }
}
```

#### 4) Obtener la tercera página de empleados cuya `designation` sea `Software Engineer` asumiendo un tamaño de página de 35 elementos.

```bash
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
```

**Respuesta (200-OK):**
```json
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
        "hits": [ ... ]
    }
}
```

#### 5) Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares.

```bash
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
```

**Respuesta (200-OK):**
```json
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
        "hits": [ ... ]
    }
}
```

#### 6) Obtener el número total que hayan entrado en la empresa en el mes de Mayo del año 2003.

```bash
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
```

**Respuesta (200-OK):**
```json
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
        "hits": [ ... ]
    }
}
```

#### 7) Obtener empleados cuyo nombre sea `NATALIE`.

```bash
curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "match": {
            "FirstName": "NATALIE"
        }
    }
}'
```

**Respuesta (200-OK):**
```json
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
        "hits": [ ... ]
    }
}
```

#### 8) Obtener empleados cuya dirección sea o contenga `Street`.

```bash
curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "wildcard": {
            "Address": "*Street*"
        }
    }
}'
```

**Respuesta (200-OK):**
```json
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
        "hits": [ ... ]
    }
}
```

#### 9) Obtener empleados cuya dirección sea o contenga `wood`.

```bash
curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "match": {
            "Address": "wood"
        }
    }
}'
```

**Respuesta (200-OK):**
```json
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
        "hits": [ ... ]
    }
}
```

#### 10) Obtener empleados interesados en `Wrestling`.

```bash
curl --location --request GET 'https://<user>:<password>@unir-search-6369338872.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "match": {
            "Interests": "Wrestling"
        }
    }
}'
```

**Respuesta (200-OK):**
```json
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
        "hits": [ ... ]
    }
}
```

#### 11) Obtener el número de hombres y mujeres interesad@s en `Wrestling`.

```bash
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
        "Generos": {
            "terms": {
                "field": "Gender"
            }
        }
    }
}'
```

**Respuesta (200-OK):**
```json
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
        "Generos": {
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
```

#### 12) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres).

```bash
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
        "Generos": {
            "terms": {
                "field": "Gender"
            },
            "aggs": {
                "Edad media": {
                    "avg": {
                        "field": "Age"
                    }
                }
            }
        }
    }
}'
```

**Respuesta (200-OK):**
```json
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
        "Generos": {
            "doc_count_error_upper_bound":