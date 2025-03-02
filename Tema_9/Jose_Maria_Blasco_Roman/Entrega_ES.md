Parte I) Generar un alias
Genera un alias para el indice employees, que se llamará employees-alias. A partir de ahora realizaremos las consultas
siempre sobre este alias y no sobre el índice original.

```
curl --location 'https://<<host_obtenido_de_bonsai>>/_aliases' \
--header 'Content-Type: application/json' \
--data '
{
    "actions": [
        {
            "add": {
                "index": "employees",
                "alias": "employees-alias"
            }
        }
    ]
}
'
```

Response 200 OK

```

{
"acknowledged": true
}
```

Parte II) Inserción de elementos
Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventartelos si lo consideras). Guarda el ID de
documento que has obtenido tras la creacion del elemento.

```
curl --location 'https://<<host_obtenido_de_bonsai>>/employees-alias/_doc' \
--header 'Content-Type: application/json' \
--data '
{
    "FirstName":"JOSE MARIA",
    "LastName":"BLASCO",
    "Designation":"Engineer",
    "Salary":"1",
    "DateOfJoining":"2024-10-27",
    "Address":"Cullera",
    "Gender":"MALE",
    "Age":37,
    "MaritalStatus":"Married",
    "Interests":"Science, Spearfishing, Technology"
}
'

````

Response 201 Created

````
curl --location 'https://<<host_obtenido_de_bonsai>>/employees-alias/_doc' \
--header 'Content-Type: application/json' \
--data '
{
    "_index": "employees",
    "_type": "_doc",
    "_id": "YahRSJUBKpOR7rM2KDBZ",
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
'
````

Parte III) Obtención simple de elementos
Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente
escribiste.

````
curl --location 'https://<<host_obtenido_de_bonsai>>/employees-alias/_doc/<<YahRSJUBKpOR7rM2KDBZ>>'
````

Response 200 OK

````
{
"_index": "employees",
"_type": "_doc",
"_id": "YahRSJUBKpOR7rM2KDBZ",
"_version": 1,
"_seq_no": 9999,
"_primary_term": 1,
"found": true,
"_source": {
"FirstName": "JOSE MARIA",
"LastName": "BLASCO",
"Designation": "Engineer",
"Salary": "1",
"DateOfJoining": "2024-10-27",
"Address": "Cullera",
"Gender": "MALE",
"Age": 37,
"MaritalStatus": "Married",
"Interests": "Science, Spearfishing, Technology"
}
````

Parte IV) Eliminación de elementos
Elimina el elemento que has creado anteriormente.

````
curl --location 'https://<<host_obtenido_de_bonsai>>/employees-alias/_doc/<<YahRSJUBKpOR7rM2KDBZ>>'
````

Response 200 OK

````
    {
        "_index": "employees",
        "_type": "_doc",
        "_id": "YahRSJUBKpOR7rM2KDBZ",
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
````

Parte V) Consultas

1) Obtener empleados cuyo puesto sea Software Engineer. Revisa la documentación sobre term queries

````
curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
    "query": {
        "term": {
            "Designation": {
                "value": "Software Engineer"
                }
            }
        }
    }
'

````

Response 200 OK

````
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
        "hits": [...
````

2) Obtener empleados cuyo puesto NO sea Software Engineer. Revisa la documentación sobre bool queries

````
curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
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
}
'
````

Response 200 OK

````

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
"hits": [
````

3) Obtener la primera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35
   elementos. Revisa la documentación sobre paginación

````
curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
    "from": 0,
    "size": 35,
    "query": {
        "term": {
            "Designation": {
                "value": "Software Engineer"
            }
        }
    }
}
'
````

Response 200 ok

````

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
        "hits": [
        
````

4) Obtener la tercera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35
   elementos.

````

curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
    "from": 70,
    "size": 35,
    "query": {
        "term": {
            "Designation": {
                "value": "Software Engineer"
            }
        }
    }
}
'

````

Response 200 OK

````
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
        "hits": [
            {
                "_index": "employees",
                "_type": "_doc",
                "_id": "vacPR5UBKpOR7rM2c6Rf",
                "_score": 0.8522601,
                "_source": {...
                
````

5) Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares. Revisa la documentación sobre range
   queries

````
curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
    "size": 13,
    "query": {
        "range": {
            "Salary": {
                "gt": 67000
            }
        }
    }
}
'
````

Response 200 OK

````

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
            "value": 1591,
            "relation": "eq"
        },
        "max_score": 1.0,
        "hits": [
            {
                "_index": "employees",
                "_type": "_doc",
                "_id": "EqcPR5UBKpOR7rM2c45d",
                "_score": 1.0,
                "_source": {
                    "FirstName": "HERSCHEL",
                    "LastName": "BARTOLOME",
                    "Designation": "QA Engineer",
                    "Salary": "70000",
                    "DateOfJoining": "2008-06-02",
                    "Address": "9261 Andover St. De Pere, WI 54115",
                    "Gender": "Male",
                    "Age": 35,
                    "MaritalStatus": "Unmarried",
                    "Interests": "Cheerleading,Snorkeling,Reading To The Elderly,Writing Music,Darts"
                }....
````

6) Obtener el número total que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta
   específica, solo saber el número total de hits.

````
curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
    "query": {
        "range": {
            "DateOfJoining": {
                "gt": "2003-04-30",
                "lte": "2003-05-31"
            }
        }
    }
}
'
````

Response 200 OK

````
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
        "hits": [
            {
                "_index": "employees",
                "_type": "_doc",
                "_id": "KqcPR5UBKpOR7rM2c45d",
                "_score": 1.0,
                "_source": {
                    "FirstName": "JONATHON",
                    "LastName": "ZUMOT",
                    "Designation": "System Administrator",
                    "Salary": "62000",
                    "DateOfJoining": "2003-05-26",
                    "Address": "621 Ridge Street Perkasie, PA 18944",
                    "Gender": "Male",
                    "Age": 34,
                    "MaritalStatus": "Unmarried",
                    "Interests": "Wine Making,Roleplaying,Listening to music,Sand Castles,Learning An Instrument"
                }
````

7. Obtener empleados cuyo nombre sea NATALIE. Revisa la documentación sobre match queries

````
curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
    "query": {
        "match": {
            "FirstName": "NATALIE"
        }
    }
}
'
````

Response 200 ok

````

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
            "value": 1,
            "relation": "eq"
        },
        "max_score": 8.804874,
        "hits": [
            {
                "_index": "employees",
                "_type": "_doc",
                "_id": "wKcPR5UBKpOR7rM2c5Jd",
                "_score": 8.804874,
                "_source": {
                    "FirstName": "NATALIE",
                    "LastName": "SERVIS",
                    "Designation": "Senior Software Engineer",
                    "Salary": "61000",
                    "DateOfJoining": "2003-09-19",
                    "Address": "34 Kingston St. El Dorado, AR 71730",
                    "Gender": "Female",
                    "Age": 35,
                    "MaritalStatus": "Unmarried",
                    "Interests": "Guitar,Learning A Foreign Language,Blacksmithing,Embroidery,Collecting,Becoming A Child Advocate,Taxidermy"
                }
            }
        ]
    }
}

````

8) Obtener empleados cuya dirección sea o contenga Street. (MULTI-MATCH QUERY) Revisa la documentación sobre queries
   sobre campos search-as-you-type

````
curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
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
}
'
````

Response 200 OK

````

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
            "value": 1580,
            "relation": "eq"
        },
        "max_score": 1.0,
        "hits": [
            {
                "_index": "employees",
                "_type": "_doc",
                "_id": "EKcPR5UBKpOR7rM2c45d",
                "_score": 1.0,
                "_source": {
                    "FirstName": "CIERRA",
                    "LastName": "TOOLS",
                    "Designation": "Project Manager",
                    "Salary": "61000",
                    "DateOfJoining": "2014-01-13",
                    "Address": "8445 Green Street Morristown, NJ 07960",
                    "Gender": "Female",
                    "Age": 35,....
                    
````

9) Obtener empleados cuya dirección sea o contenga wood.

````
 curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
    "query": {
        "multi_match": {
            "query": "wood",
            "type": "bool_prefix",
            "fields": [
                "Address",
                "Address._2gram",
                "Address._3gram"
            ]
        }
    }
}
'
````

Response 200 OK

````
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
            "value": 102,
            "relation": "eq"
        },
        "max_score": 1.0,
        "hits": [
            {
                "_index": "employees",
                "_type": "_doc",
                "_id": "yacPR5UBKpOR7rM2c45d",
                "_score": 1.0,
                "_source": {
                    "FirstName": "BETTINA",
                    "LastName": "SIVIE",
                    "Designation": "Data Scientist",
                    "Salary": "60000",
                    "DateOfJoining": "2006-07-24",
                    "Address": "127 Woodland Drive Stockbridge, GA 30281",
                    "Gender": "Female",
                    "Age": 32,...

````

10) Obtener empleados interesados en Wrestling.

````

 curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "match": {
            "Interests": "Wrestling"
        }
    }
}'
`````

200 OK

````
{"took":1,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":154,"relation":"eq"},"max_score":6.399149,"hits":[{"_index":"employees","_type":"_doc","_id":"sqcPR5UBKpOR7rM2c5Rd","_score":6.399149,"_source":{"FirstName": "JAZMINE", "LastName": "VACHULA", "Designation": "Senior Software Engineer", "Salary": "61000", "DateOfJoining": "2015-02-16", "Address": "8654 Birchwood Court Saint Albans, NY 11412", "Gender": "Female", "Age": 34, "MaritalStatus": "Married", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"facPR5UBKpOR7rM2c5he","_score":6.399149,"_source":{"FirstName": "BETTYE", "LastName": "GOODRICH", "Designation": "Senior Software Engineer", "Salary": "68000", "DateOfJoining": "2007-02-21", "Address": "9017 East Gregory Dr. Erie, PA 16506", "Gender": "Female", "Age": 31, "MaritalStatus": "Married", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"fKcPR5UBKpOR7rM2c6Ff","_score":6.399149,"_source":{"FirstName": "ZETTA", "LastName": "LIV", "Designation": "Senior Software Engineer", "Salary": "63000", "DateOfJoining": "2005-01-21", "Address": "45 Pulaski St. Reisterstown, MD 21136", "Gender": "Female", "Age": 34, "MaritalStatus": "Unmarried", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"dacPR5UBKpOR7rM2c6Rf","_score":6.399149,"_source":{"FirstName": "GRACIA", "LastName": "DIEHL", "Designation": "Senior Software Engineer", "Salary": "61000", "DateOfJoining": "2010-02-15", "Address": "747 Vernon St. Harvey, IL 60426", "Gender": "Female", "Age": 32, "MaritalStatus": "Married", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"5acPR5UBKpOR7rM2c7Bh","_score":6.399149,"_source":{"FirstName": "DAVIS", "LastName": "HYTROS", "Designation": "Software Engineer", "Salary": "51000", "DateOfJoining": "2013-09-02", "Address": "8934 Harvard Avenue Dearborn, MI 48124", "Gender": "Male", "Age": 29, "MaritalStatus": "Married", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"KqcPR5UBKpOR7rM2c7Jh","_score":6.399149,"_source":{"FirstName": "ONITA", "LastName": "FORTINI", "Designation": "Software Engineer", "Salary": "50000", "DateOfJoining": "2009-01-30", "Address": "348 North Shore Dr. Snellville, GA 30039", "Gender": "Female", "Age": 27, "MaritalStatus": "Unmarried", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"H6cPR5UBKpOR7rM2c7Nh","_score":6.399149,"_source":{"FirstName": "NICOLAS", "LastName": "MADITZ", "Designation": "Software Engineer", "Salary": "52000", "DateOfJoining": "2014-01-27", "Address": "8159 West Bradford Dr. Greensburg, PA 15601", "Gender": "Male", "Age": 25, "MaritalStatus": "Married", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"56cPR5UBKpOR7rM2c5Fd","_score":5.8533716,"_source":{"FirstName": "LEIGH", "LastName": "AQUIL", "Designation": "Project Manager", "Salary": "67000", "DateOfJoining": "2011-03-28", "Address": "7 S. Lakewood St. Little Falls, NJ 07424", "Gender": "Male", "Age": 31, "MaritalStatus": "Unmarried", "Interests": "Collecting,Wrestling"}},{"_index":"employees","_type":"_doc","_id":"ZqcPR5UBKpOR7rM2c5Jd","_score":5.8533716,"_source":{"FirstName": "AILENE", "LastName": "LAPAGLIA", "Designation": "Senior Software Engineer", "Salary": "69000", "DateOfJoining": "2006-01-04", "Address": "50 Proctor St. Mundelein, IL 60060", "Gender": "Female", "Age": 31, "MaritalStatus": "Married", "Interests": "Wrestling,Quilting"}},{"_index":"employees","_type":"_doc","_id":"A6cPR5UBKpOR7rM2c5Vd","_score":5.8533716,"_source":{"FirstName": "PEARLY", "LastName": "TARAZON", "Designation": "Senior Software Engineer", "Salary": "70000", "DateOfJoining": "2013-01-28", "Address": "261 N. Peachtree Drive Marlborough, MA 01752", "Gender": "Female", "Age": 31, "MaritalStatus": "Married", "Interests": "Wrestling,Birding"}}]}}

````

11) Obtener el número de hombres y mujeres interesad@s en Wrestling.Revisa la documentación sobre term aggregations (
    BUCKET AGGREGATION)

````

 curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
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
}
'
````

Response 200 OK

````

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
````

12) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres). Revisa la
    documentación sobre sub-agregaciones y sobre la agregación avg (SUB AGGREGATION)

````
 curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
  "size": 0,
  "query": {
      "match": {
          "Interests": "Wrestling"
      }
  },
  "aggs": {
      "gender_groups": {
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
}
'
````

RESPONSE 200 OK

````
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
            "value": 154,
            "relation": "eq"
        },
        "max_score": null,
        "hits": []
    },
    "aggregations": {
        "gender_groups": {
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
````

13) Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (tramo 1),
    entre60.000 dólares y 67.000 dólares (tramo 2) y superior a 67.000 dólares (tramo 3). Revisa la documentación sobre
    range
    aggregations (BUCKET AGGREGATION II)

````

curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
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
}
'

````

RESPONSE 200 OK

````

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
                    "key": "*-60000.0",
                    "to": 60000.0,
                    "doc_count": 3872
                },
                {
                    "key": "60000.0-67000.0",
                    "from": 60000.0,
                    "to": 67000.0,
                    "doc_count": 4020
                },
                {
                    "key": "67000.0-*",
                    "from": 67000.0,
                    "doc_count": 2107
                }
            ]
        }
    }
}
````

14) En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados. (SUB
    AGGREGATION)

````

curl --location --request GET 'https://<<host_obtenido_de_bonsai>>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
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
}
'
````

RESPONSE 200 OK

```
{
    "took": 11,
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
                    "key": "*-60000.0",
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
                    "key": "60000.0-67000.0",
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
                    "key": "67000.0-*",
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
````

### Parte VI) Crear otro índice y modificar el alias

1) Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo employees-v2 y mete en él todos
   los datos del fichero de prueba. Modifica el alias employees-alias que creaste antes para que apunte tanto al índice
   employees original como al nuevo employees-v2. Puedes comprobar que lo has hecho correctamente ejecutando la
   operación "Obtener todos los alias" de la colección de Postman".

Usamos la operación PUT (Creación de índice)

````
curl --location 'https://<<host_obtenido_de_bonsai>/employees-v2' \
--header 'Content-Type: application/json' \
--data
{
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
        }
````

RESPUESTA 200 OK

````

{
    "acknowledged": true,
    "shards_acknowledged": true,
    "index": "employees-v2"
}
````

Utilizamos la operación GET Obtener todos los índices

````

green open employees-v2 GkCPx9OZSiWt8YYi6jKKew 1 1    0 0   416b  208b
green open employees    ML_Y_92XTdSCLqJM-oZF6Q 1 1 9999 0 13.2mb 6.6mb
````

Cargamos los datos de nuevo desde el cmd

curl -XPUT "https://user:password@jm-search-1731630865.us-east-1.bonsaisearch.net:443/employees-v2/_bulk" --data-binary
@Employees_raw.json -H "Content-Type: application/json"

Modificamos el alias con POST (Asignar alias):

````
curl --location 'https://<<host_obtenido_de_bonsai>/_aliases' \
--header 'Content-Type: application/json' \
--data
{
            "actions": [
                {
                    "add": {
                        "index": "employees-v2",
                        "alias": "employees-alias"
                    }
                }
            ]
        }
````

RESPONSE 200 OK

````
{
    "acknowledged": true
}

````

GET Obtener todos los alias

````
{
    "employees": {
        "aliases": {
            "employees-alias": {}
        }
    },
    "employees-v2": {
        "aliases": {
            "employees-alias": {}
        }
    }
}
````
2) Realiza alguna de las consultas anteriores. ¿Qué observas?
````
curl --location --request GET 'https://<<host_obtenido_de_bonsai>/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '
{
    "query": {
        "match": {
            "FirstName": "NATALIE"
        }
    }
}
'
````

RESPONSE 200 OK

````

{
    "took": 1093,
    "timed_out": false,
    "_shards": {
        "total": 1,
        "successful": 1,
        "skipped": 0,
        "failed": 0
    },
    "hits": {
        "total": {
            "value": 2,
            "relation": "eq"
        },
        "max_score": 8.987146,
        "hits": [
            {
                "_index": "employees",
                "_type": "_doc",
                "_id": "wKcPR5UBKpOR7rM2c5Jd",
                "_score": 8.987146,
                "_source": {
                    "FirstName": "NATALIE",
                    "LastName": "SERVIS",
                    "Designation": "Senior Software Engineer",
                    "Salary": "61000",
                    "DateOfJoining": "2003-09-19",
                    "Address": "34 Kingston St. El Dorado, AR 71730",
                    "Gender": "Female",
                    "Age": 35,
                    "MaritalStatus": "Unmarried",
                    "Interests": "Guitar,Learning A Foreign Language,Blacksmithing,Embroidery,Collecting,Becoming A Child Advocate,Taxidermy"
                }
            },
            {
                "_index": "employees",
                "_type": "_doc",
                "_id": "Rq1lSZUBpSOlUxEMp3zP",
                "_score": 8.987146,
                "_source": {
                    "FirstName": "NATALIE",
                    "LastName": "SERVIS",
                    "Designation": "Senior Software Engineer",
                    "Salary": "61000",
                    "DateOfJoining": "2003-09-19",
                    "Address": "34 Kingston St. El Dorado, AR 71730",
                    "Gender": "Female",
                    "Age": 35,
                    "MaritalStatus": "Unmarried",
                    "Interests": "Guitar,Learning A Foreign Language,Blacksmithing,Embroidery,Collecting,Becoming A Child Advocate,Taxidermy"
                }
            }
        ]
    }
}

````

ANTES SOLO 1 RESULTADO, AHORA SALEN 2. RESULTADO DUPLICADOS

````

3) Elimina employees del conjunto de índices a los que hace referencia el alias.

````
````
curl --location 'https://<<host_obtenido_de_bonsai>/_aliases' \
--header 'Content-Type: application/json' \
--data '
{
    "actions": [
        {
            "remove": {
                "index": "employees",
                "alias": "employees-alias"
            }
        }
    ]
}
'

````
Response (200-OK):

````
{
"acknowledged": true
}