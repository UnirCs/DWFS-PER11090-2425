<<<<<<< HEAD
Recuerda que debes crear una carpeta con tu nombre completo y apellidos (no con tu usuario de GitHub) e incluir dentro los ejercicios de este tema.
=======
# Tema 9: Lucene y Elasticsearch


## Repositorios con código de apoyo

| Repositorio | Descripción | Otros
|-----------|--|--|
| 📦 [Unir-Stock: Microservicio catalogo con Elasticsearch](https://github.com/UnirCs/back-end-inventory-products-elasticsearch) | Este microservicio está conectado a un clúster de Elasticsearch y expone, a través de una API REST, una serie de productos del inventario de una tienda. |
| 👨‍💼 [Unir-Employees: Facetas con Elasticsearch](https://github.com/UnirCs/back-end-facets) | Este microservicio está conectado a un clúster de Elasticsearch y expone, a través de una API REST, la posibilidad de operar con Facetas. |
| ⚙️ [Colección Postman de operaciones con Elasticsearch](https://github.com/UnirCs/elasticsearch-operations-postman) | Colección de Postman que contiene ejemplos de peticiones que se pueden realizar de forma nativa contra un clúster de Elasticsearch. |

## Ejercicio: Consultas con la API de Elasticsearch

Con este ejercicio trataremos de asimilar los conceptos estudiados en clase sobre los tipos de datos y operaciones en Elasticsearch.
Deberás crear un clúster de prueba tal como se indica en [estas instrucciones](https://github.com/UnirCs/elasticsearch-operations-postman) e insertar los datos de prueba que se presentan. Encontrarás también una colección de Postman que puede ser de gran ayuda a la hora de realizar el ejercicio y trabajar con Elasticsearch en general.
Recuerda hacer uso de la [documentación](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html).

<b> Para cada operación solicitada, incluye el comando cURL que se obtiene de Postman </b> en un archivo Entrega_ES.md

### Parte I) Generar un alias
- 1) Genera un alias para el indice employees, que se llamará ``employees-alias``. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.

### Parte II) Inserción de elementos
- 1) Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventartelos si lo consideras). Guarda el ID de documento que has obtenido tras la creacion del elemento.

### Parte III) Obtención simple de elementos
- 1) Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.

### Parte IV) Eliminación de elementos
- 1) Elimina el elemento que has creado anteriormente.

### Parte V) Consultas
- 1) Obtener empleados cuyo puesto sea ``Software Engineer``. [Revisa la documentación sobre term queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-term-query.html)
- 2) Obtener empleados cuyo puesto NO sea ``Software Engineer``. [Revisa la documentación sobre bool queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-bool-query.html)
- 3) Obtener la primera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos. [Revisa la documentación sobre paginación](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/paginate-search-results.html)
- 4) Obtener la tercera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos.
- 5) Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares. [Revisa la documentación sobre range queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-range-query.html)
- 6) Obtener <b> el número total </b> que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.
- 7) Obtener empleados cuyo nombre sea ``NATALIE``. [Revisa la documentación sobre match queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-match-query.html)
- 8) Obtener empleados cuya dirección sea o contenga ``Street``. [Revisa la documentación sobre queries sobre campos search-as-you-type](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-as-you-type.html)
- 9) Obtener empleados cuya dirección sea o contenga ``wood``.
- 10) Obtener empleados interesados en ``Wrestling``.
- 11) Obtener el número de hombres y mujeres interesad@s en ``Wrestling``.[Revisa la documentación sobre term aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-bucket-terms-aggregation.html)
- 12) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres). [Revisa la documentación sobre sub-agregaciones](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations.html) y [sobre la agregación avg](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-metrics-avg-aggregation.html)
- 13) Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (``tramo 1``), entre 60.000 dólares y 67.000 dólares (``tramo 2``) y superior a 67.000 dólares (``tramo 3``). [Revisa la documentación sobre range aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-bucket-range-aggregation.html)
- 14) En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.

### Parte VI) Crear otro índice y modificar el alias
- 1) Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo ``employees-v2`` y mete en él todos los datos del fichero de prueba. Modifica el alias ``employees-alias`` que creaste antes para que apunte tanto al índice ``employees`` original como al nuevo ``employees-v2``. Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.
- 2) Realiza alguna de las consultas anteriores. ¿Qué observas?
- 3) Elimina ``employees`` del conjunto de índices a los que hace referencia el alias.

## 2. Entrega

Dentro del repositorio de ejercicios de tu clase (encontrarás el enlace en el Aula Virtual), crea una carpeta con tu nombre y apellidos dentro de ``Tema_9``. Deberás incluir :

- Un archivo ``Entrega_ES.md`` con los comandos cURL obtenidos a través de Postman.
>>>>>>> upstream/master
