Parte I) Generar un alias
curl --location 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/_aliases' \
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

Parte II) Inserción de elementos

curl --location 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_doc' \
--header 'Content-Type: application/json' \
--data '{
"FirstName":"RICARDO",
"LastName":"ALONSO",
"Designation":"Software Architect",
"Salary":"1000000",
"DateOfJoining":"2014-01-13",
"Address":"8445 Green Street Morristown, NJ 07960",
"Gender":"Male",
"Age":35,
"MaritalStatus":"Married",
"Interests":"R/C Boats,Dolls,Cloud Watching,Animals/pets/dogs,Crocheting,Casino Gambling"
}'

Parte III) Obtención simple de elementos

curl --location 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_doc/L-Vc65QBq5NNbyinkTIo'

Parte IV) Eliminación de elementos

curl --location --request DELETE 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_doc/L-Vc65QBq5NNbyinkTIo'

Parte V) Consultas

i.Obtener empleados cuyo puesto sea Software Engineer

curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
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

ii.Obtener empleados cuyo puesto NO sea Software Engineer
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
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

iii. Obtener la primera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
--header 'Content-Type: application/json' \
--data '{
"size": 35,
"query": {
"bool": {
"must": {
"match": {
"Designation": "Software Engineer"
}
}
}
}
}'

iv.Obtener la tercera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
--header 'Content-Type: application/json' \
--data '{
"from": 70,
"size": 35,
"query": {
"bool": {
"must": {
"match": {
"Designation": "Software Engineer"
}
}
}
}
}
'

v. Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares.
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
--header 'Content-Type: application/json' \
--data '{
"size": 13,
"query": {
"bool": {
"filter": {
"range": {
"Salary": {
"gt": 67000
}
}
}
}
}
}'


vi. Obtener el número total que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
--header 'Content-Type: application/json' \
--data '{
"size": 0,
"query": {
"bool": {
"filter": {
"range": {
"DateOfJoining": {
"gte": "2003-05-01",
"lte": "2003-05-31",
"format": "yyyy-MM-dd"
}
}
}
}
}
}
'

vii. Obtener empleados cuyo nombre sea NATALIE.
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
--header 'Content-Type: application/json' \
--data '{
"query": {
"match": {
"FirstName": "NATALIE"
}
}
}'

viii. Obtener empleados cuya dirección sea o contenga Street.
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
--header 'Content-Type: application/json' \
--data '{
"query": {
"match": {
"Address": "Street"
}
}
}'

ix. Obtener empleados cuya dirección sea o contenga wood.
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
--header 'Content-Type: application/json' \
--data '{
"query": {
"match": {
"Address": "wood"
}
}
}'

x. Obtener empleados interesados en Wrestling.
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
--header 'Content-Type: application/json' \
--data '{
"query": {
"match": {
"Interests": "Wrestling"
}
}
}'

xi. Obtener el número de hombres y mujeres interesad@s en Wrestling.
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
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


xii. En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres).
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
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
"aggs":{
"Edad media":{
"avg":{
"field":"Age"
}
}
}
}
}
}'

xiii. Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (tramo 1), entre 60.000 dólares y 67.000 dólares (tramo 2) y superior a 67.000 dólares (tramo 3).
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
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

xiv. En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.
curl --location --request GET 'https://o708t3gy29:gemktomff9@unir-search-3996528347.us-east-1.bonsaisearch.net:443/employees/_search' \
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
}
'