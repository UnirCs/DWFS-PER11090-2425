### Ejercicio: Consultas con la API de Elasticsearch

Parte I) Generar un alias

i. Genera un alias para el indice employees, que se llamará employees-alias. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.

###

Request:

###

    curl --location 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/_aliases' \
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

###

Response: 200 - OK

###

      {
      "acknowledged": true
      }

Parte II) Inserción de elementos
i. Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventartelos si lo consideras). Guarda el ID de documento que has obtenido tras la creacion del elemento.

###

Request:

###

    curl --location 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_doc' \
    --header 'Content-Type: application/json' \
    --data '{"FirstName":"KARLA","LastName":"QUINLIVAN","Designation":"CEO","Salary":156000,"DateOfJoining":"2012-02-27","Address":"449 Woodsman Ave. Herndon, VA 20170","Gender":"Female","Age":48,"MaritalStatus":"Married","Interests":"Amateur Astronomy,Ghost Hunting,Skiing,Photography"}
    '

###

Response: 201 - OK

###

    {
        "_index": "employees",
        "_id": "O1MxX5UBk5WG9YzOEeBC",
        "_version": 1,
        "result": "created",
        "_shards": {
            "total": 2,
            "successful": 2,
            "failed": 0
        },
        "_seq_no": 0,
        "_primary_term": 1
    }

Parte III) Obtención simple de elementos
i. Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.

###

Request:

###

        curl --location 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias-alias/_doc/O1MxX5UBk5WG9YzOEeBC'

###

Response: 200 - OK

###

    {
        "_index": "employees",
        "_id": "O1MxX5UBk5WG9YzOEeBC",
        "_version": 1,
        "_seq_no": 0,
        "_primary_term": 1,
        "found": true,
        "_source": {
            "FirstName": "KARLA",
            "LastName": "QUINLIVAN",
            "Designation": "CEO",
            "Salary": 156000,
            "DateOfJoining": "2012-02-27",
            "Address": "449 Woodsman Ave. Herndon, VA 20170",
            "Gender": "Female",
            "Age": 48,
            "MaritalStatus": "Married",
            "Interests": "Amateur Astronomy,Ghost Hunting,Skiing,Photography"
        }
    }

Parte IV) Eliminación de elementos
i. Elimina el elemento que has creado anteriormente.

###

Request:

###

    curl --location --request DELETE 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_doc/O1MxX5UBk5WG9YzOEeBC' \
    --data ''

###

Response: 200 - OK

###

    {
        "_index": "employees",
        "_id": "O1MxX5UBk5WG9YzOEeBC",
        "_version": 2,
        "result": "deleted",
        "_shards": {
            "total": 2,
            "successful": 2,
            "failed": 0
        },
        "_seq_no": 1,
        "_primary_term": 1
    }

Parte V) Consultas

Dado la limitación del cluster de prueba de Elastic Search se trabaja con un total de documentos:

    curl --location 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_count?pretty=null'

    {
        "count": 37500,
        "_shards": {
            "total": 1,
            "successful": 1,
            "skipped": 0,
            "failed": 0
        }
    }

i. Obtener empleados cuyo puesto sea Software Engineer. Revisa la documentación sobre term queries

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
        "term": {
          "Designation": "Software Engineer"
        }
      }
    }'

###

Response: 200 - OK

###

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
                "value": 6323,
                "relation": "eq"
            },
            "max_score": 1.7800946,
            "hits": [
                {
                    "_index": "employees",
                    "_id": "2So7X5UB8HnSeTEv0aFy",
                    "_score": 1.7800946,
                    "_source": {
                        "FirstName": "JOSHUA",
                        "LastName": "HUSKI",
                        "Designation": "Software Engineer",
                        "Salary": "60000",
                        "DateOfJoining": "2005-09-26",
                        "Address": "667 Bridle Lane Billings, MT 59101",
                        "Gender": "Male",
                        "Age": 30,
                        "MaritalStatus": "Married",
                        "Interests": "Lacrosse,Rafting"
                    }
                },
                {
                    "_index": "employees",
                    "_id": "2io7X5UB8HnSeTEv0aFy",
                    "_score": 1.7800946,
                    "_source": {
                        "FirstName": "BAMBI",
                        "LastName": "RION",
                        "Designation": "Software Engineer",
                        "Salary": "54000",
                        "DateOfJoining": "2011-06-22",
                        "Address": "14 Broad Ave. Cambridge, MA 02138",
                        "Gender": "Female",
                        "Age": 28,
                        "MaritalStatus": "Married",
                        "Interests": "Treasure Hunting,Fishing,Walking"
                    }
                },...

ii. Obtener empleados cuyo puesto NO sea Software Engineer. Revisa la documentación sobre bool queries

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
        "bool": {
          "must_not": {
            "match": {
              "Designation": "Software Engineer"
            }
          }
        }
      }
    }'

###

Response: 200 - OK

###

    {
    "took": 3,
    "timed_out": false,
    "_shards": {
        "total": 1,
        "successful": 1,
        "skipped": 0,
        "failed": 0
    },
    "hits": {
        "total": {
            "value": 10000,
            "relation": "gte"
        },
        "max_score": 0.0,
        "hits": [
            {
                "_index": "employees",
                "_id": "oIw6X5UB59lxY3P3sQz9",
                "_score": 0.0,
                "_source": {
                    "FirstName": "KARLA",
                    "LastName": "QUINLIVAN",
                    "Designation": "CEO",
                    "Salary": "156000",
                    "DateOfJoining": "2012-02-27",
                    "Address": "449 Woodsman Ave. Herndon, VA 20170",
                    "Gender": "Female",
                    "Age": 48,
                    "MaritalStatus": "Married",
                    "Interests": "Amateur Astronomy,Ghost Hunting,Skiing,Photography"
                }
            },
            {
                "_index": "employees",
                "_id": "oYw6X5UB59lxY3P3sQz9",
                "_score": 0.0,
                "_source": {
                    "FirstName": "MAURICE",
                    "LastName": "HELT",
                    "Designation": "President",
                    "Salary": "129000",
                    "DateOfJoining": "2006-02-06",
                    "Address": "8649 Howard Drive Westfield, MA 01085",
                    "Gender": "Female",
                    "Age": 52,
                    "MaritalStatus": "Unmarried",
                    "Interests": "Making Model Cars,Socializing with friends/neighbors"
                }
            },....

iii. Obtener la primera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos. Revisa la documentación sobre paginación

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
        "term": {
          "Designation": "Software Engineer"
        }
      },
      "size": 35,
      "from": 0
    }'

###

Response: 200 - OK

###

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
                "value": 6323,
                "relation": "eq"
            },
            "max_score": 1.7800946,
            "hits": [
                {
                    "_index": "employees",
                    "_id": "2So7X5UB8HnSeTEv0aFy",
                    "_score": 1.7800946,
                    "_source": {
                        "FirstName": "JOSHUA",
                        "LastName": "HUSKI",
                        "Designation": "Software Engineer",
                        "Salary": "60000",
                        "DateOfJoining": "2005-09-26",
                        "Address": "667 Bridle Lane Billings, MT 59101",
                        "Gender": "Male",
                        "Age": 30,
                        "MaritalStatus": "Married",
                        "Interests": "Lacrosse,Rafting"
                    }
                },
                {
                    "_index": "employees",
                    "_id": "2io7X5UB8HnSeTEv0aFy",
                    "_score": 1.7800946,
                    "_source": {
                        "FirstName": "BAMBI",
                        "LastName": "RION",
                        "Designation": "Software Engineer",
                        "Salary": "54000",
                        "DateOfJoining": "2011-06-22",
                        "Address": "14 Broad Ave. Cambridge, MA 02138",
                        "Gender": "Female",
                        "Age": 28,
                        "MaritalStatus": "Married",
                        "Interests": "Treasure Hunting,Fishing,Walking"
                    }
                },....

iv. Obtener la tercera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
        "term": {
          "Designation": "Software Engineer"
        }
      },
      "size": 35,
      "from": 70
    }'

###

Response: 200 - OK

###

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
                "value": 6323,
                "relation": "eq"
            },
            "max_score": 1.7800946,
            "hits": [
                {
                    "_index": "employees",
                    "_id": "Hyo7X5UB8HnSeTEv0aJy",
                    "_score": 1.7800946,
                    "_source": {
                        "FirstName": "ASIA",
                        "LastName": "MELLOTT",
                        "Designation": "Software Engineer",
                        "Salary": "51000",
                        "DateOfJoining": "2015-01-12",
                        "Address": "78 North Peg Shop Court Birmingham, AL 35209",
                        "Gender": "Female",
                        "Age": 25,
                        "MaritalStatus": "Unmarried",
                        "Interests": "Chess,Volunteer,Cigar Smoking,Mountain Biking,Home Theater"
                    }
                },
                {
                    "_index": "employees",
                    "_id": "ICo7X5UB8HnSeTEv0aJy",
                    "_score": 1.7800946,
                    "_source": {
                        "FirstName": "KIMIKO",
                        "LastName": "LANGHANS",
                        "Designation": "Software Engineer",
                        "Salary": "58000",
                        "DateOfJoining": "2014-02-20",
                        "Address": "328 Shirley Ave. Gloucester, MA 01930",
                        "Gender": "Female",
                        "Age": 30,
                        "MaritalStatus": "Unmarried",
                        "Interests": "Coloring,Snowboarding,Sewing,Traveling"
                    }
                },...

v. Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares. Revisa la documentación sobre range queries

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
        "range": {
          "Salary": {
            "gt": 67000
          }
        }
      },
      "size": 13,
      "from": 0
    }'

###

Response: 200 - OK

###

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
                "value": 10000,
                "relation": "gte"
            },
            "max_score": 1.0,
            "hits": [
                {
                    "_index": "employees",
                    "_id": "oIw6X5UB59lxY3P3sQz9",
                    "_score": 1.0,
                    "_source": {
                        "FirstName": "KARLA",
                        "LastName": "QUINLIVAN",
                        "Designation": "CEO",
                        "Salary": "156000",
                        "DateOfJoining": "2012-02-27",
                        "Address": "449 Woodsman Ave. Herndon, VA 20170",
                        "Gender": "Female",
                        "Age": 48,
                        "MaritalStatus": "Married",
                        "Interests": "Amateur Astronomy,Ghost Hunting,Skiing,Photography"
                    }
                },
                {
                    "_index": "employees",
                    "_id": "oYw6X5UB59lxY3P3sQz9",
                    "_score": 1.0,
                    "_source": {
                        "FirstName": "MAURICE",
                        "LastName": "HELT",
                        "Designation": "President",
                        "Salary": "129000",
                        "DateOfJoining": "2006-02-06",
                        "Address": "8649 Howard Drive Westfield, MA 01085",
                        "Gender": "Female",
                        "Age": 52,
                        "MaritalStatus": "Unmarried",
                        "Interests": "Making Model Cars,Socializing with friends/neighbors"
                    }
                },
                {
                    "_index": "employees",
                    "_id": "oow6X5UB59lxY3P3sQz9",
                    "_score": 1.0,
                    "_source": {
                        "FirstName": "MAURO",
                        "LastName": "MACINNES",
                        "Designation": "President",
                        "Salary": "129000",
                        "DateOfJoining": "2013-04-22",
                        "Address": "16 Pheasant Drive Brooklyn, NY 11201",
                        "Gender": "Male",
                        "Age": 63,
                        "MaritalStatus": "Unmarried",
                        "Interests": "Astrology"
                    }
                },...

vi. Obtener el número total que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
        "range": {
          "DateOfJoining": {
            "gte": "2003-05-01",
            "lte": "2003-05-31",
            "format": "yyyy-MM-dd"
          }
        }
      },
      "size": 0
    }'

###

Response: 200 - OK

###

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
            "max_score": null,
            "hits": []
        }
    }

vii. Obtener empleados cuyo nombre sea NATALIE. Revisa la documentación sobre match queries

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
        "match": {
          "FirstName": "NATALIE"
        }
      }
    }'

###

Response: 200 - OK

###

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
                "value": 5,
                "relation": "eq"
            },
            "max_score": 8.827374,
            "hits": [
                {
                    "_index": "employees",
                    "_id": "Aow6X5UB59lxY3P3sRv_",
                    "_score": 8.827374,
                    "_source": {
                        "FirstName": "NATALIE",
                        "LastName": "WEATHERSBEE",
                        "Designation": "Architect",
                        "Salary": "86000",
                        "DateOfJoining": "1999-03-01",
                        "Address": "7 George Street Birmingham, AL 35209",
                        "Gender": "Female",
                        "Age": 39,
                        "MaritalStatus": "Married",
                        "Interests": "Building Dollhouses,Animals/pets/dogs,R/C Planes"
                    }
                },
                {
                    "_index": "employees",
                    "_id": "s1M7X5UBk5WG9YzOiOCb",
                    "_score": 8.827374,
                    "_source": {
                        "FirstName": "NATALIE",
                        "LastName": "MARINERO",
                        "Designation": "Senior Software Engineer",
                        "Salary": "63000",
                        "DateOfJoining": "2015-09-14",
                        "Address": "210 Fulton Street Newington, CT 06111",
                        "Gender": "Female",
                        "Age": 30,
                        "MaritalStatus": "Unmarried",
                        "Interests": "Roleplaying,Boating,Puppetry,Needlepoint,Locksport,Compose Music,Learning A Foreign Language"
                    }
                },....

viii. Obtener empleados cuya dirección sea o contenga Street. Revisa la documentación sobre queries sobre campos search-as-you-type

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

###

Response: 200 - OK

###

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
                "value": 5989,
                "relation": "eq"
            },
            "max_score": 1.0,
            "hits": [
                {
                    "_index": "employees",
                    "_id": "o4w6X5UB59lxY3P3sQz9",
                    "_score": 1.0,
                    "_source": {
                        "FirstName": "TOD",
                        "LastName": "GOODSPEED",
                        "Designation": "President",
                        "Salary": "118000",
                        "DateOfJoining": "1995-01-30",
                        "Address": "342 Old Hilltop Street Rossville, GA 30741",
                        "Gender": "Male",
                        "Age": 45,
                        "MaritalStatus": "Married",
                        "Interests": "Collecting Artwork,Impersonations,Iceskating,Scuba Diving,Butterfly Watching,Cigar Smoking"
                    }
                },
                {
                    "_index": "employees",
                    "_id": "qYw6X5UB59lxY3P3sQz9",
                    "_score": 1.0,
                    "_source": {
                        "FirstName": "DWIGHT",
                        "LastName": "KONDO",
                        "Designation": "Vice President",
                        "Salary": "106000",
                        "DateOfJoining": "1997-01-27",
                        "Address": "254 Fulton Street Elizabethton, TN 37643",
                        "Gender": "Male",
                        "Age": 46,
                        "MaritalStatus": "Unmarried",
                        "Interests": "Diecast Collectibles"
                    }
                },....

ix. Obtener empleados cuya dirección sea o contenga wood.

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

###

Response: 200 - OK

###

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
                "value": 356,
                "relation": "eq"
            },
            "max_score": 1.0,
            "hits": [
                {
                    "_index": "employees",
                    "_id": "oIw6X5UB59lxY3P3sQz9",
                    "_score": 1.0,
                    "_source": {
                        "FirstName": "KARLA",
                        "LastName": "QUINLIVAN",
                        "Designation": "CEO",
                        "Salary": "156000",
                        "DateOfJoining": "2012-02-27",
                        "Address": "449 Woodsman Ave. Herndon, VA 20170",
                        "Gender": "Female",
                        "Age": 48,
                        "MaritalStatus": "Married",
                        "Interests": "Amateur Astronomy,Ghost Hunting,Skiing,Photography"
                    }
                },
                {
                    "_index": "employees",
                    "_id": "AYw6X5UB59lxY3P3sQ39",
                    "_score": 1.0,
                    "_source": {
                        "FirstName": "JARROD",
                        "LastName": "ARMFIELD",
                        "Designation": "Delivery Manager",
                        "Salary": "98000",
                        "DateOfJoining": "1996-01-29",
                        "Address": "66 Woodside St. Clearwater, FL 33756",
                        "Gender": "Male",
                        "Age": 44,
                        "MaritalStatus": "Unmarried",
                        "Interests": "Four Wheeling,Rockets,Acting,Singing In Choir,Fishing"
                    }
                },....

x. Obtener empleados interesados en Wrestling.

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
        "match": {
          "Interests": "Wrestling"
        }
      }
    }'

###

Response: 200 - OK

###

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
                "value": 451,
                "relation": "eq"
            },
            "max_score": 6.780246,
            "hits": [
                {
                    "_index": "employees",
                    "_id": "GYw6X5UB59lxY3P3sRf-",
                    "_score": 6.780246,
                    "_source": {
                        "FirstName": "GREGORY",
                        "LastName": "HONORE",
                        "Designation": "Human Resource Manager",
                        "Salary": "73000",
                        "DateOfJoining": "2008-01-14",
                        "Address": "7142 Poplar Ave. Chevy Chase, MD 20815",
                        "Gender": "Female",
                        "Age": 31,
                        "MaritalStatus": "Married",
                        "Interests": "Wrestling"
                    }
                },
                {
                    "_index": "employees",
                    "_id": "zio7X5UB8HnSeTEvAIWp",
                    "_score": 6.780246,
                    "_source": {
                        "FirstName": "CHIN",
                        "LastName": "MONTROY",
                        "Designation": "Team Lead",
                        "Salary": "72000",
                        "DateOfJoining": "2016-01-11",
                        "Address": "8783 Prince St. Nutley, NJ 07110",
                        "Gender": "Female",
                        "Age": 32,
                        "MaritalStatus": "Married",
                        "Interests": "Wrestling"
                    }
                },....

xi. Obtener el número de hombres y mujeres interesad@s en Wrestling.Revisa la documentación sobre term aggregations

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

###

Response: 200 - OK

###

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
                "value": 451,
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
                        "doc_count": 233
                    },
                    {
                        "key": "Male",
                        "doc_count": 218
                    }
                ]
            }
        }
    }

xii. En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres). Revisa la documentación sobre sub-agregaciones y sobre la agregación avg

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
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
    }'

###

Response: 200 - OK

###

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
                "value": 451,
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
                        "doc_count": 233,
                        "average_age": {
                            "value": 33.06866952789699
                        }
                    },
                    {
                        "key": "Male",
                        "doc_count": 218,
                        "average_age": {
                            "value": 32.91284403669725
                        }
                    }
                ]
            }
        }
    }

xiii. Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (tramo 1), entre 60.000 dólares y 67.000 dólares (tramo 2) y superior a 67.000 dólares (tramo 3).

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

###

Response: 200 - OK

###

    {
        "took": 10,
        "timed_out": false,
        "_shards": {
            "total": 1,
            "successful": 1,
            "skipped": 0,
            "failed": 0
        },
        "hits": {
            "total": {
                "value": 10000,
                "relation": "gte"
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
                        "doc_count": 5757
                    },
                    {
                        "key": "60000.0-67000.0",
                        "from": 60000.0,
                        "to": 67000.0,
                        "doc_count": 11530
                    },
                    {
                        "key": "67000.0-*",
                        "from": 67000.0,
                        "doc_count": 20213
                    }
                ]
            }
        }
    }

ix. En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "size": 0,
      "aggs": {
        "salary_ranges": {
          "range": {
            "field": "Salary",
            "ranges": [
              { "key": "Tramo 1 (<60K)", "to": 60000 },
              { "key": "Tramo 2 (60K-67K)", "from": 60000, "to": 67000 },
              { "key": "Tramo 3 (>67K)", "from": 67000 }
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

###

Response: 200 - OK

###

    {
        "took": 5,
        "timed_out": false,
        "_shards": {
            "total": 1,
            "successful": 1,
            "skipped": 0,
            "failed": 0
        },
        "hits": {
            "total": {
                "value": 10000,
                "relation": "gte"
            },
            "max_score": null,
            "hits": []
        },
        "aggregations": {
            "salary_ranges": {
                "buckets": [
                    {
                        "key": "Tramo 1 (<60K)",
                        "to": 60000.0,
                        "doc_count": 5757,
                        "marital_status": {
                            "doc_count_error_upper_bound": 0,
                            "sum_other_doc_count": 0,
                            "buckets": [
                                {
                                    "key": "Unmarried",
                                    "doc_count": 2887
                                },
                                {
                                    "key": "Married",
                                    "doc_count": 2870
                                }
                            ]
                        }
                    },
                    {
                        "key": "Tramo 2 (60K-67K)",
                        "from": 60000.0,
                        "to": 67000.0,
                        "doc_count": 11530,
                        "marital_status": {
                            "doc_count_error_upper_bound": 0,
                            "sum_other_doc_count": 0,
                            "buckets": [
                                {
                                    "key": "Married",
                                    "doc_count": 5807
                                },
                                {
                                    "key": "Unmarried",
                                    "doc_count": 5723
                                }
                            ]
                        }
                    },
                    {
                        "key": "Tramo 3 (>67K)",
                        "from": 67000.0,
                        "doc_count": 20213,
                        "marital_status": {
                            "doc_count_error_upper_bound": 0,
                            "sum_other_doc_count": 0,
                            "buckets": [
                                {
                                    "key": "Married",
                                    "doc_count": 10191
                                },
                                {
                                    "key": "Unmarried",
                                    "doc_count": 10022
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }

Parte VI) Crear otro índice y modificar el alias

i. Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo employees-v2 y mete en él todos los datos del fichero de prueba. Modifica el alias employees-alias que creaste antes para que apunte tanto al índice employees original como al nuevo employees-v2. Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.

Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo employees-v2

###

Request:

###

    curl --location --request PUT 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-v2' \
    --data ''

###

Response: 200 - OK

###

    {
        "acknowledged": true,
        "shards_acknowledged": true,
        "index": "employees-v2"
    }

Mete en él todos los datos del fichero de prueba, se crea el mapping

###

Request:

###

    curl --location --request PUT 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-v2/_mapping' \
    --header 'Content-Type: application/json' \
    --data '{
        "properties": {
          "FirstName": { "type": "text" },
          "LastName": { "type": "text" },
          "Designation": { "type": "keyword" },
          "Salary": { "type": "double" },
          "DateOfJoining": { "type": "date", "format": "yyyy-MM-dd" },
          "Address": { "type": "search_as_you_type" },
          "Gender": { "type": "keyword" },
          "Age": { "type": "integer" },
          "MaritalStatus": { "type": "keyword" },
          "Interests": { "type": "text" }
        }
    }'

###

Response: 200 - OK

###

    {
        "acknowledged": true
    }

Obtener todos los indices:

###

Request:

###

    curl --location 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/_cat/indices'

###

Response: 200 - OK

###

    green open employees-v2 OSguqrQHQjWtBcCZ-DFaHg 1 1     0 0   416b   208b
    green open employees    bGL3TzNnTgKS6ioB2SyU6g 1 1 75000 0 79.7mb 39.8mb

Se cargan los mismos 37500 documentos en este nuevo indice creado employees-v2.

###

Request:

###

    curl --location 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-v2/_bulk' \
    --header 'Content-Type: application/json' \
    --data '{ "index": { "_index": "employees-v2" } }
    {"FirstName":"KARLA","LastName":"QUINLIVAN","Designation":"CEO","Salary":"156000","DateOfJoining":"2012-02-27","Address":"449 Woodsman Ave. Herndon, VA 20170","Gender":"Female","Age":48,"MaritalStatus":"Married","Interests":"Amateur Astronomy,Ghost Hunting,Skiing,Photography"}
    { "index": { "_index": "employees-v2" } }
    {"FirstName":"MAURICE","LastName":"HELT","Designation":"President","Salary":"129000","DateOfJoining":"2006-02-06","Address":"8649 Howard Drive Westfield, MA 01085","Gender":"Female","Age":52,"MaritalStatus":"Unmarried","Interests":"Making Model Cars,Socializing with friends/neighbors"}
    { "index": { "_index": "employees-v2" } }

###

Response: 200 - OK

###

    {
    "took": 1625,
    "errors": false,
    "items": [
        {
            "index": {
                "_index": "employees-v2",
                "_id": "HYyoX5UB59lxY3P3HJ-u",
                "_version": 1,
                "result": "created",
                "_shards": {
                    "total": 2,
                    "successful": 2,
                    "failed": 0
                },
                "_seq_no": 0,
                "_primary_term": 1,
                "status": 201
            }
        },
        {
            "index": {
                "_index": "employees-v2",
                "_id": "HoyoX5UB59lxY3P3HJ-u",
                "_version": 1,
                "result": "created",
                "_shards": {
                    "total": 2,
                    "successful": 2,
                    "failed": 0
                },
                "_seq_no": 1,
                "_primary_term": 1,
                "status": 201
            }
        },
        {
            "index": {
                "_index": "employees-v2",
                "_id": "H4yoX5UB59lxY3P3HJ-u",
                "_version": 1,
                "result": "created",
                "_shards": {
                    "total": 2,
                    "successful": 2,
                    "failed": 0
                },
                "_seq_no": 2,
                "_primary_term": 1,
                "status": 201
            }
        },......

###

Response: 200 - OK

###

Modifica el alias employees-alias que creaste antes para que apunte tanto al índice employees original como al nuevo employees-v2.

###

Request:

###

    curl --location 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/_aliases' \
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

###

Response: 200 - OK

###

    {
        "acknowledged": true
    }

Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.

###

Request:

###

    curl --location 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/_alias'

###

Response: 200 - OK

###

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

ii. Realiza alguna de las consultas anteriores. ¿Qué observas?

Obtener el número total que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.

ANTES

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
        "range": {
          "DateOfJoining": {
            "gte": "2003-05-01",
            "lte": "2003-05-31",
            "format": "yyyy-MM-dd"
          }
        }
      },
      "size": 0
    }'

###

Response: 200 - OK

###

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
            "max_score": null,
            "hits": []
        }
    }

DESPUES

###

Request:

###

    curl --location --request GET 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
    --header 'Content-Type: application/json' \
    --data '{
      "query": {
        "range": {
          "DateOfJoining": {
            "gte": "2003-05-01",
            "lte": "2003-05-31",
            "format": "yyyy-MM-dd"
          }
        }
      },
      "size": 0
    }'

###

Response: 200 - OK

###

    {
        "took": 1,
        "timed_out": false,
        "_shards": {
            "total": 2,
            "successful": 2,
            "skipped": 0,
            "failed": 0
        },
        "hits": {
            "total": {
                "value": 38,
                "relation": "eq"
            },
            "max_score": null,
            "hits": []
        }
    }

CONCLUSION: El número de documentos se ha duplicado en employees-alias

iii. Elimina employees del conjunto de índices a los que hace referencia el alias.

###

Request:

###

    curl --location 'https://ucyipnubv7:25sla1ymlz@gio-5545669255.us-east-1.bonsaisearch.net:443/_aliases' \
    --header 'Content-Type: application/json' \
    --data '{
      "actions": [
        { "remove": { "index": "employees", "alias": "employees-alias" } }
      ]
    }'

###

Response: 200 - OK

###

    {
        "acknowledged": true
    }

CONCLUSION: Ahora del total de documentos estarían repartidos así: 37500 en el índice employees y 37500 en en índice employees-v2 que mantiene el alias employees-alias
