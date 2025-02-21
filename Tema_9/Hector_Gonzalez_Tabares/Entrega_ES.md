### Parte I) Generar un alias
	Genera un alias para el indice employees, que se llamará employees-alias. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.

### Request:

	curl --location 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/_aliases' \
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
### Response:
	(200-OK):
### 	
	{"acknowledged":true}
####
#




### Parte II) Inserción de elementos
	Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventartelos si lo consideras). Guarda el ID de documento que has obtenido tras la creacion del elemento.

### Request:

	curl --location 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_doc' \
	--header 'Content-Type: application/json' \
	--data '{
	   "FirstName":"Hector",
	   "LastName":"Gonzalez",
	   "Designation":"System Engineer",
	   "Salary":"1000000",
	   "DateOfJoining":"2014-01-13",
	   "Address":"Carrera 57 #51a-77 - Alto del Medio - Antioquia, Rionegro",
	   "Gender":"Male",
	   "Age":35,
	   "MaritalStatus":"Single",
	   "Interests":"Developing .net, IA, Haking, Swiming"
	}'

### Response:
	(201-Created):
####	
	{"_index":"employees","_type":"_doc","_id":"mH0EJZUBKpOR7rM2oFVm","_version":1,"result":"created","_shards":{"total":2,"successful":2,"failed":0},"_seq_no":10001,"_primary_term":1}
####
#



### Parte III) Obtención simple de elementos
	Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.

### Request:

	curl --location 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_doc/mH0EJZUBKpOR7rM2oFVm'


### Response:
	(200-OK)
####
	{"_index":"employees","_type":"_doc","_id":"mH0EJZUBKpOR7rM2oFVm","_version":1,"_seq_no":10001,"_primary_term":1,"found":true,"_source":{
	   "FirstName":"Hector",
	   "LastName":"Gonzalez",
	   "Designation":"System Engineer",
	   "Salary":"1000000",
	   "DateOfJoining":"2014-01-13",
	   "Address":"Carrera 57 #51a-77 - Alto del Medio - Antioquia, Rionegro",
	   "Gender":"Male",
	   "Age":35,
	   "MaritalStatus":"Single",
	   "Interests":"Developing .net, IA, Haking, Swiming"
	}}
####
#



###  Parte IV) Eliminación de elementos
	Elimina el elemento que has creado anteriormente.
### 
	curl --location --request DELETE 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_doc/mH0EJZUBKpOR7rM2oFVm'

### Response:
	(200-OK):
####
	{"_index":"employees","_type":"_doc","_id":"mH0EJZUBKpOR7rM2oFVm","_version":2,"result":"deleted","_shards":{"total":2,"successful":2,"failed":0},"_seq_no":10002,"_primary_term":1}
####
#


###  Parte V) Consultas
 
1 Obtener empleados cuyo puesto sea Software Engineer. Revisa la documentación sobre term queries


### Request:

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

### Response:
	(200-OK):
####
	{"took":2,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":4264,"relation":"eq"},"max_score":0.8522601,"hits":[{"_index":"employees","_type":"_doc","_id":"533kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "REYES", "LastName": "STREED", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2009-01-12", "Address": "9276 Carriage Ave. Thornton, CO 80241", "Gender": "Male", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Gardening,Parachuting,Dancing,Tombstone Rubbing,Tatting,Beachcombing"}},{"_index":"employees","_type":"_doc","_id":"6H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "ALLENA", "LastName": "ALEJO", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2012-01-04", "Address": "9431 Glen Ridge St. Yorktown, VA 23693", "Gender": "Female", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Boating,Musical Instruments,Knotting"}},{"_index":"employees","_type":"_doc","_id":"6X3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "CHARITY", "LastName": "HEITMANN", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2016-02-29", "Address": "112 S. Franklin Ave. North Miami Beach, FL 33160", "Gender": "Female", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "R/C Cars,Iceskating,Home Brewing,Body Building"}},{"_index":"employees","_type":"_doc","_id":"6n3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "MARTY", "LastName": "BATY", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2010-09-13", "Address": "67 William St. Satellite Beach, FL 32937", "Gender": "Male", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Renting movies,Exercise,Skiing,Go Kart Racing"}},{"_index":"employees","_type":"_doc","_id":"633kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "HARMONY", "LastName": "STERBACK", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2013-12-03", "Address": "9136 Ramblewood Street Huntersville, NC 28078", "Gender": "Female", "Age": 26, "MaritalStatus": "Unmarried", "Interests": "Glowsticking,World Record Breaking,Musical Instruments,Knotting,Urban Exploration,Video Games"}},{"_index":"employees","_type":"_doc","_id":"7H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "JERAMY", "LastName": "SCHOEN", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2008-02-14", "Address": "18 South Inverness Ave. Roswell, GA 30075", "Gender": "Male", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Dolls,Slingshots,Stamp Collecting,Home Theater,Entertaining,Body Building"}},{"_index":"employees","_type":"_doc","_id":"7X3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "DONETTA", "LastName": "PERARO", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2013-09-10", "Address": "333 Clinton St. New Berlin, WI 53151", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Geocaching,Lasers,Falconry,Tesla Coils"}},{"_index":"employees","_type":"_doc","_id":"7n3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "EUGENIE", "LastName": "SKOLFIELD", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2013-12-23", "Address": "36 High Ridge Ave. Middle River, MD 21220", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Compose Music,Textiles,Volunteer"}},{"_index":"employees","_type":"_doc","_id":"733kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "JARROD", "LastName": "WIERSCHEN", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2016-01-29", "Address": "641 St Paul Ave. Roseville, MI 48066", "Gender": "Male", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Motorcycles,Sewing,Slingshots,String Figures,Railfans"}},{"_index":"employees","_type":"_doc","_id":"8H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "YAN", "LastName": "BRANOT", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2008-01-15", "Address": "8 Berkshire St. Roanoke, VA 24012", "Gender": "Female", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Illusion,Train Collecting,Boomerangs,Dumpster Diving"}}]}}
####
#


### 2 Obtener empleados cuyo puesto NO sea Software Engineer

Request:

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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


### Response 
    (200-OK):
####
	{"took":2,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":5735,"relation":"eq"},"max_score":0.0,"hits":[{"_index":"employees","_type":"_doc","_id":"gH3kJJUBKpOR7rM2iSJ6","_score":0.0,"_source":{"FirstName": "CIERRA", "LastName": "TOOLS", "Designation": "Project Manager", "Salary": "61000", "DateOfJoining": "2014-01-13", "Address": "8445 Green Street Morristown, NJ 07960", "Gender": "Female", "Age": 35, "MaritalStatus": "Married", "Interests": "R/C Boats,Dolls,Cloud Watching,Animals/pets/dogs,Crocheting,Casino Gambling"}},{"_index":"employees","_type":"_doc","_id":"gX3kJJUBKpOR7rM2iSJ6","_score":0.0,"_source":{"FirstName": "JEWELL", "LastName": "URESTI", "Designation": "QA Engineer", "Salary": "66000", "DateOfJoining": "2003-02-19", "Address": "70 East Gainsway Lane West Deptford, NJ 08096", "Gender": "Male", "Age": 33, "MaritalStatus": "Unmarried", "Interests": "Running,Aircraft Spotting,Pottery,TV watching,YoYo,Juggling"}},{"_index":"employees","_type":"_doc","_id":"gn3kJJUBKpOR7rM2iSJ6","_score":0.0,"_source":{"FirstName": "HERSCHEL", "LastName": "BARTOLOME", "Designation": "QA Engineer", "Salary": "70000", "DateOfJoining": "2008-06-02", "Address": "9261 Andover St. De Pere, WI 54115", "Gender": "Male", "Age": 35, "MaritalStatus": "Unmarried", "Interests": "Cheerleading,Snorkeling,Reading To The Elderly,Writing Music,Darts"}},{"_index":"employees","_type":"_doc","_id":"g33kJJUBKpOR7rM2iSJ6","_score":0.0,"_source":{"FirstName": "DORSEY", "LastName": "CHANNER", "Designation": "Project Manager", "Salary": "61000", "DateOfJoining": "2003-02-10", "Address": "43 Carson Street East Haven, CT 06512", "Gender": "Male", "Age": 32, "MaritalStatus": "Unmarried", "Interests": "Airsofting"}},{"_index":"employees","_type":"_doc","_id":"hH3kJJUBKpOR7rM2iSJ6","_score":0.0,"_source":{"FirstName": "TAI", "LastName": "GOTTSHALL", "Designation": "QA Engineer", "Salary": "63000", "DateOfJoining": "2003-09-30", "Address": "9956 Bradford Circle Piqua, OH 45356", "Gender": "Female", "Age": 34, "MaritalStatus": "Unmarried", "Interests": "R/C Helicopters,Spending time with family/kids,Working on cars"}},{"_index":"employees","_type":"_doc","_id":"hX3kJJUBKpOR7rM2iSJ6","_score":0.0,"_source":{"FirstName": "PATRICK", "LastName": "SACHEZ", "Designation": "System Administrator", "Salary": "67000", "DateOfJoining": "2012-09-21", "Address": "46 Old Kingston Lane Great Falls, MT 59404", "Gender": "Female", "Age": 33, "MaritalStatus": "Unmarried", "Interests": "Bell Ringing"}},{"_index":"employees","_type":"_doc","_id":"hn3kJJUBKpOR7rM2iSJ6","_score":0.0,"_source":{"FirstName": "NOELLE", "LastName": "ABATE", "Designation": "Data Scientist", "Salary": "65000", "DateOfJoining": "2008-01-22", "Address": "99 Glenlake Court Yonkers, NY 10701", "Gender": "Female", "Age": 30, "MaritalStatus": "Married", "Interests": "Kayaking,Airbrushing,Gun Collecting,Cosplay"}},{"_index":"employees","_type":"_doc","_id":"h33kJJUBKpOR7rM2iSJ6","_score":0.0,"_source":{"FirstName": "MOHAMMAD", "LastName": "DENTE", "Designation": "QA Engineer", "Salary": "68000", "DateOfJoining": "2002-01-22", "Address": "7812 W. Williams Drive Severn, MD 21144", "Gender": "Male", "Age": 35, "MaritalStatus": "Married", "Interests": "Cross-Stitch,Handwriting Analysis,Legos,Kayaking"}},{"_index":"employees","_type":"_doc","_id":"iH3kJJUBKpOR7rM2iSJ6","_score":0.0,"_source":{"FirstName": "MOON", "LastName": "CAULLEY", "Designation": "Project Manager", "Salary": "68000", "DateOfJoining": "2006-02-22", "Address": "9952 S. Chestnut Drive Menasha, WI 54952", "Gender": "Female", "Age": 30, "MaritalStatus": "Married", "Interests": "Pole Dancing,Violin,Felting,Photography,Kite Boarding"}},{"_index":"employees","_type":"_doc","_id":"iX3kJJUBKpOR7rM2iSJ6","_score":0.0,"_source":{"FirstName": "MILAGRO", "LastName": "CUTCHINS", "Designation": "Data Scientist", "Salary": "67000", "DateOfJoining": "2007-01-25", "Address": "8772 Wentworth Dr. Mcallen, TX 78501", "Gender": "Female", "Age": 33, "MaritalStatus": "Unmarried", "Interests": "Socializing with friends/neighbors,Wrestling,Pyrotechnics,Collecting Swords,Soap Making,Piano,Marksmanship"}}]}}
####
#



### 3 Obtener la primera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.

### Request 

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

### Response (200-OK):

	{"took":2,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":4264,"relation":"eq"},"max_score":0.8522601,"hits":[{"_index":"employees","_type":"_doc","_id":"533kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "REYES", "LastName": "STREED", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2009-01-12", "Address": "9276 Carriage Ave. Thornton, CO 80241", "Gender": "Male", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Gardening,Parachuting,Dancing,Tombstone Rubbing,Tatting,Beachcombing"}},{"_index":"employees","_type":"_doc","_id":"6H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "ALLENA", "LastName": "ALEJO", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2012-01-04", "Address": "9431 Glen Ridge St. Yorktown, VA 23693", "Gender": "Female", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Boating,Musical Instruments,Knotting"}},{"_index":"employees","_type":"_doc","_id":"6X3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "CHARITY", "LastName": "HEITMANN", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2016-02-29", "Address": "112 S. Franklin Ave. North Miami Beach, FL 33160", "Gender": "Female", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "R/C Cars,Iceskating,Home Brewing,Body Building"}},{"_index":"employees","_type":"_doc","_id":"6n3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "MARTY", "LastName": "BATY", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2010-09-13", "Address": "67 William St. Satellite Beach, FL 32937", "Gender": "Male", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Renting movies,Exercise,Skiing,Go Kart Racing"}},{"_index":"employees","_type":"_doc","_id":"633kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "HARMONY", "LastName": "STERBACK", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2013-12-03", "Address": "9136 Ramblewood Street Huntersville, NC 28078", "Gender": "Female", "Age": 26, "MaritalStatus": "Unmarried", "Interests": "Glowsticking,World Record Breaking,Musical Instruments,Knotting,Urban Exploration,Video Games"}},{"_index":"employees","_type":"_doc","_id":"7H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "JERAMY", "LastName": "SCHOEN", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2008-02-14", "Address": "18 South Inverness Ave. Roswell, GA 30075", "Gender": "Male", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Dolls,Slingshots,Stamp Collecting,Home Theater,Entertaining,Body Building"}},{"_index":"employees","_type":"_doc","_id":"7X3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "DONETTA", "LastName": "PERARO", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2013-09-10", "Address": "333 Clinton St. New Berlin, WI 53151", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Geocaching,Lasers,Falconry,Tesla Coils"}},{"_index":"employees","_type":"_doc","_id":"7n3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "EUGENIE", "LastName": "SKOLFIELD", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2013-12-23", "Address": "36 High Ridge Ave. Middle River, MD 21220", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Compose Music,Textiles,Volunteer"}},{"_index":"employees","_type":"_doc","_id":"733kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "JARROD", "LastName": "WIERSCHEN", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2016-01-29", "Address": "641 St Paul Ave. Roseville, MI 48066", "Gender": "Male", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Motorcycles,Sewing,Slingshots,String Figures,Railfans"}},{"_index":"employees","_type":"_doc","_id":"8H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "YAN", "LastName": "BRANOT", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2008-01-15", "Address": "8 Berkshire St. Roanoke, VA 24012", "Gender": "Female", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Illusion,Train Collecting,Boomerangs,Dumpster Diving"}},{"_index":"employees","_type":"_doc","_id":"8X3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "JACQUELINE", "LastName": "MCEVER", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2010-09-02", "Address": "16 Southampton St. Pleasanton, CA 94566", "Gender": "Female", "Age": 26, "MaritalStatus": "Married", "Interests": "Planking,Hang gliding,Train Spotting,Running,Relaxing"}},{"_index":"employees","_type":"_doc","_id":"8n3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "TROY", "LastName": "FREIL", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2010-01-11", "Address": "7590 2nd Avenue Union City, NJ 07087", "Gender": "Male", "Age": 28, "MaritalStatus": "Married", "Interests": "R/C Planes,Collecting RPM Records,Storm Chasing,Amateur Radio,Windsurfing,Leathercrafting,Bowling"}},{"_index":"employees","_type":"_doc","_id":"833kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "OZELL", "LastName": "STJACQUES", "Designation": "Software Engineer", "Salary": "59000", "DateOfJoining": "2008-01-01", "Address": "8959 Armstrong Street Brooklyn, NY 11201", "Gender": "Female", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Texting,Ceramics,Belly Dancing,Archery,Pyrotechnics,Violin,Eating out"}},{"_index":"employees","_type":"_doc","_id":"9H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "TYRA", "LastName": "BRAUMAN", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2014-09-29", "Address": "211 Grant Rd. Mentor, OH 44060", "Gender": "Female", "Age": 25, "MaritalStatus": "Unmarried", "Interests": "Impersonations,Woodworking,Hang gliding,Bowling"}},{"_index":"employees","_type":"_doc","_id":"9X3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "ADAM", "LastName": "CAIAZZO", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2008-02-27", "Address": "7023 Philmont Street Kansas City, MO 64151", "Gender": "Male", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Scrapbooking,Playing music,Cartooning,Nail Art"}},{"_index":"employees","_type":"_doc","_id":"9n3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "ANGEL", "LastName": "SARLO", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2010-01-25", "Address": "531 Randall Mill Court Shrewsbury, MA 01545", "Gender": "Female", "Age": 26, "MaritalStatus": "Married", "Interests": "Soap Making,Wine Making,Protesting,Sky Diving,Camping"}},{"_index":"employees","_type":"_doc","_id":"933kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "MAUDIE", "LastName": "NICKELS", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2012-02-22", "Address": "104 East King Drive High Point, NC 27265", "Gender": "Female", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Aquarium"}},{"_index":"employees","_type":"_doc","_id":"-H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "NANCIE", "LastName": "KLEINFELD", "Designation": "Software Engineer", "Salary": "52000", "DateOfJoining": "2009-01-08", "Address": "7998 W. Ashley Dr. Marshalltown, IA 50158", "Gender": "Female", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Kayaking,Church/church activities,Frisbee Golf \u2013 Frolf"}},{"_index":"employees","_type":"_doc","_id":"-X3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "KAYE", "LastName": "OVERBECK", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2008-02-01", "Address": "37 Old Inverness Ave. Pomona, CA 91768", "Gender": "Female", "Age": 27, "MaritalStatus": "Married", "Interests": "Dodgeball,Scuba Diving,Microscopy,Dominoes,Stamp Collecting"}},{"_index":"employees","_type":"_doc","_id":"-n3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "JOSE", "LastName": "HANAGAMI", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2013-02-18", "Address": "484 S. Orange Ave. Glendora, CA 91740", "Gender": "Male", "Age": 25, "MaritalStatus": "Married", "Interests": "Tatting,Painting,Paragliding or Power Paragliding,Internet,Darts,R/C Boats"}},{"_index":"employees","_type":"_doc","_id":"-33kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "VERA", "LastName": "BUBOLZ", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2011-02-01", "Address": "1 Lawrence Dr. Hopkinsville, KY 42240", "Gender": "Female", "Age": 26, "MaritalStatus": "Married", "Interests": "Shark Fishing,Go Kart Racing,Pottery,Beadwork,Pinochle"}},{"_index":"employees","_type":"_doc","_id":"_H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "NEVILLE", "LastName": "OLTHOFF", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2014-09-22", "Address": "245 White Lane North Canton, OH 44720", "Gender": "Male", "Age": 26, "MaritalStatus": "Married", "Interests": "Macram\u00e9,Fishing,Musical Instruments,Shark Fishing,Learning An Instrument,Paragliding or Power Paragliding,Models"}},{"_index":"employees","_type":"_doc","_id":"_X3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "RENALDO", "LastName": "VONDERHEIDE", "Designation": "Software Engineer", "Salary": "59000", "DateOfJoining": "2009-02-13", "Address": "837 Baker Lane Port Chester, NY 10573", "Gender": "Male", "Age": 26, "MaritalStatus": "Unmarried", "Interests": "Casino Gambling,Sand Castles,Taxidermy,Working In A Food Pantry,Collecting Music Albums"}},{"_index":"employees","_type":"_doc","_id":"_n3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "DENITA", "LastName": "BAUTISTE", "Designation": "Software Engineer", "Salary": "56000", "DateOfJoining": "2008-02-26", "Address": "8781 Grandrose Ave. Lombard, IL 60148", "Gender": "Female", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Lawn Darts,Owning An Antique Car,Church/church activities,Cross-Stitch,Butterfly Watching"}},{"_index":"employees","_type":"_doc","_id":"_33kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "JACALYN", "LastName": "POPKEN", "Designation": "Software Engineer", "Salary": "56000", "DateOfJoining": "2010-10-15", "Address": "940 Sulphur Springs St. Tacoma, WA 98444", "Gender": "Female", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Glowsticking,Boomerangs,Skeet Shooting,R/C Cars"}},{"_index":"employees","_type":"_doc","_id":"AH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "MERVIN", "LastName": "WERRING", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2012-01-23", "Address": "936 Logan Dr. Roy, UT 84067", "Gender": "Male", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Hunting"}},{"_index":"employees","_type":"_doc","_id":"AX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "KHADIJAH", "LastName": "PINNETTE", "Designation": "Software Engineer", "Salary": "52000", "DateOfJoining": "2010-09-21", "Address": "39 Beechwood Lane Nashville, TN 37205", "Gender": "Female", "Age": 25, "MaritalStatus": "Unmarried", "Interests": "Singing In Choir"}},{"_index":"employees","_type":"_doc","_id":"An3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "CHANA", "LastName": "GRAPP", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2010-09-09", "Address": "9 Andover Road Lexington, NC 27292", "Gender": "Female", "Age": 27, "MaritalStatus": "Married", "Interests": "Treasure Hunting,Robotics,Car Racing,Exercise,Sky Diving"}},{"_index":"employees","_type":"_doc","_id":"A33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "RANDY", "LastName": "FLEISHMAN", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2015-02-10", "Address": "7093 N. Sugar St. Irvington, NJ 07111", "Gender": "Male", "Age": 30, "MaritalStatus": "Married", "Interests": "Birding,Speed Cubing,Collecting RPM Records,Knitting,Tea Tasting,Kites,Puppetry"}},{"_index":"employees","_type":"_doc","_id":"BH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "HATTIE", "LastName": "RADAKER", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2010-01-25", "Address": "16 East Sunset St. Elizabethtown, PA 17022", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Sand Castles"}},{"_index":"employees","_type":"_doc","_id":"BX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "RENALDO", "LastName": "BOHONIK", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2015-02-16", "Address": "9306 Ocean Lane Wethersfield, CT 06109", "Gender": "Male", "Age": 27, "MaritalStatus": "Unmarried", "Interests": "Jump Roping,Basketball,Building A House For Habitat For Humanity,Collecting RPM Records,Falconry,Writing Songs"}},{"_index":"employees","_type":"_doc","_id":"Bn3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "CLAUDIO", "LastName": "KULIGA", "Designation": "Software Engineer", "Salary": "50000", "DateOfJoining": "2010-01-18", "Address": "7267 Garden Ave. Seymour, IN 47274", "Gender": "Male", "Age": 25, "MaritalStatus": "Married", "Interests": "Butterfly Watching"}},{"_index":"employees","_type":"_doc","_id":"B33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "MCKENZIE", "LastName": "NOMURA", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2015-02-25", "Address": "7 Academy Court Loxahatchee, FL 33470", "Gender": "Female", "Age": 29, "MaritalStatus": "Married", "Interests": "Treasure Hunting,Lasers,Coin Collecting"}},{"_index":"employees","_type":"_doc","_id":"CH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "SAU", "LastName": "CYPRIAN", "Designation": "Software Engineer", "Salary": "50000", "DateOfJoining": "2008-01-28", "Address": "610 Glen Eagles St. Marshalltown, IA 50158", "Gender": "Female", "Age": 29, "MaritalStatus": "Married", "Interests": "Floral Arrangements,Tombstone Rubbing,Rockets,Wine Making,R/C Boats,Renaissance Faire"}},{"_index":"employees","_type":"_doc","_id":"CX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "CLEOPATRA", "LastName": "STINEBUCK", "Designation": "Software Engineer", "Salary": "57000", "DateOfJoining": "2007-01-15", "Address": "81 Olive St. Ypsilanti, MI 48197", "Gender": "Female", "Age": 29, "MaritalStatus": "Married", "Interests": "Entertaining,Scrapbooking,Shopping,Painting,Trekkie"}}]}}
####
#





### 4 Obtener la tercera página de empleados cuya designation sea Software Engineer asumiendo un tamaño de página de 35 elementos.

### Request

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

### Response 
    (200-OK):
###
	{"took":1,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":4264,"relation":"eq"},"max_score":0.8522601,"hits":[{"_index":"employees","_type":"_doc","_id":"LX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "FRANKIE", "LastName": "JENT", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2013-01-23", "Address": "37 Canal Street Hope Mills, NC 28348", "Gender": "Male", "Age": 25, "MaritalStatus": "Married", "Interests": "Singing In Choir,Hot air ballooning"}},{"_index":"employees","_type":"_doc","_id":"Ln3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "NIKOLE", "LastName": "DOBKOWSKI", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2016-02-08", "Address": "415 NE. Woodside Rd. Levittown, NY 11756", "Gender": "Female", "Age": 26, "MaritalStatus": "Married", "Interests": "Crocheting,Locksport,Skateboarding"}},{"_index":"employees","_type":"_doc","_id":"L33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "PETE", "LastName": "PEROTTI", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2009-01-20", "Address": "49 NE. Fulton Street Fall River, MA 02720", "Gender": "Male", "Age": 28, "MaritalStatus": "Married", "Interests": "Gun Collecting,Owning An Antique Car"}},{"_index":"employees","_type":"_doc","_id":"MH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "ZACKARY", "LastName": "COCKREHAM", "Designation": "Software Engineer", "Salary": "52000", "DateOfJoining": "2012-09-24", "Address": "729 Roehampton St. Englewood, NJ 07631", "Gender": "Male", "Age": 25, "MaritalStatus": "Married", "Interests": "Learn to Play Poker,Traveling,Puppetry,Taxidermy,Painting,Soap Making"}},{"_index":"employees","_type":"_doc","_id":"MX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "OMER", "LastName": "HAMMED", "Designation": "Software Engineer", "Salary": "57000", "DateOfJoining": "2008-01-09", "Address": "389 Birch Hill St. Massapequa, NY 11758", "Gender": "Male", "Age": 29, "MaritalStatus": "Married", "Interests": "Cloud Watching,Backgammon,Home Repair,R/C Cars,Sketching,Reading"}},{"_index":"employees","_type":"_doc","_id":"Mn3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "BRADLY", "LastName": "SAGE", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2012-01-19", "Address": "8204 Pierce Ave. Raleigh, NC 27603", "Gender": "Male", "Age": 25, "MaritalStatus": "Married", "Interests": "Fire Poi,Jewelry Making,Home Theater,Protesting,Shopping"}},{"_index":"employees","_type":"_doc","_id":"M33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "TORY", "LastName": "SHARROCK", "Designation": "Software Engineer", "Salary": "51000", "DateOfJoining": "2016-07-13", "Address": "92 North Rock Creek Lane Racine, WI 53402", "Gender": "Male", "Age": 27, "MaritalStatus": "Married", "Interests": "Skiing,Windsurfing,Speed Cubing,Musical Instruments,Jet Engines,Bonsai Tree,Woodworking"}},{"_index":"employees","_type":"_doc","_id":"NH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "BERNIECE", "LastName": "SAU", "Designation": "Software Engineer", "Salary": "50000", "DateOfJoining": "2016-02-18", "Address": "9107 Mammoth St. Alliance, OH 44601", "Gender": "Female", "Age": 30, "MaritalStatus": "Married", "Interests": "Casino Gambling,R/C Planes,Leathercrafting,Crossword Puzzles,Running"}},{"_index":"employees","_type":"_doc","_id":"NX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "PETER", "LastName": "SHINNICK", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2013-01-08", "Address": "30 Atlantic Ave. Milledgeville, GA 31061", "Gender": "Male", "Age": 27, "MaritalStatus": "Unmarried", "Interests": "Belly Dancing,Coloring,Gardening,Internet,Collecting Artwork,Lasers"}},{"_index":"employees","_type":"_doc","_id":"Nn3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "BROCK", "LastName": "SUHR", "Designation": "Software Engineer", "Salary": "59000", "DateOfJoining": "2011-08-02", "Address": "100 Ocean Dr. Chapel Hill, NC 27516", "Gender": "Male", "Age": 26, "MaritalStatus": "Unmarried", "Interests": "Warhammer,BMX,Crochet"}},{"_index":"employees","_type":"_doc","_id":"N33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "DOLLIE", "LastName": "STOLDT", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2011-02-16", "Address": "560 Hillcrest Street Tuscaloosa, AL 35405", "Gender": "Female", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Metal Detecting,Collecting Antiques"}},{"_index":"employees","_type":"_doc","_id":"OH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "TEODORO", "LastName": "BEEBE", "Designation": "Software Engineer", "Salary": "50000", "DateOfJoining": "2008-01-30", "Address": "8 NW. Deerfield Rd. Brunswick, GA 31525", "Gender": "Male", "Age": 27, "MaritalStatus": "Unmarried", "Interests": "Aquarium,Base Jumping,Photography"}},{"_index":"employees","_type":"_doc","_id":"OX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "MOSES", "LastName": "GABRIELE", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2016-01-21", "Address": "9769 Swanson Ave. Omaha, NE 68107", "Gender": "Male", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Skeet Shooting,Boomerangs,Juggling,Rescuing Abused Or Abandoned Animals,R/C Cars,Airsofting"}},{"_index":"employees","_type":"_doc","_id":"On3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "ALFONSO", "LastName": "VIAFARA", "Designation": "Software Engineer", "Salary": "57000", "DateOfJoining": "2010-01-27", "Address": "2 Old Honey Creek Street Sumter, SC 29150", "Gender": "Male", "Age": 27, "MaritalStatus": "Unmarried", "Interests": "Learning An Instrument,Aeromodeling,Juggling,Puppetry,Nail Art,Dolls"}},{"_index":"employees","_type":"_doc","_id":"O33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "CAROLEE", "LastName": "CYPRESS", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2016-12-19", "Address": "7287 Deerfield Drive Westfield, MA 01085", "Gender": "Female", "Age": 25, "MaritalStatus": "Unmarried", "Interests": "Collecting Sports Cards,Going to movies,Eating out,Racing Pigeons,Fly Tying,Acting"}},{"_index":"employees","_type":"_doc","_id":"PH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "MALIK", "LastName": "SURIANO", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2015-02-06", "Address": "7721 Homestead Street Pawtucket, RI 02860", "Gender": "Male", "Age": 29, "MaritalStatus": "Married", "Interests": "Gyotaku,Collecting Swords"}},{"_index":"employees","_type":"_doc","_id":"PX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "ARCHIE", "LastName": "KIRKENDOLL", "Designation": "Software Engineer", "Salary": "52000", "DateOfJoining": "2010-09-01", "Address": "7046 Sunnyslope Dr. Marlborough, MA 01752", "Gender": "Male", "Age": 25, "MaritalStatus": "Married", "Interests": "Learn to Play Poker,Dancing,Glowsticking,Legos,Airsofting,Ghost Hunting"}},{"_index":"employees","_type":"_doc","_id":"Pn3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "SANG", "LastName": "KOLKMANN", "Designation": "Software Engineer", "Salary": "57000", "DateOfJoining": "2014-01-22", "Address": "8039 Johnson Dr. Teaneck, NJ 07666", "Gender": "Male", "Age": 27, "MaritalStatus": "Unmarried", "Interests": "Guitar,Blogging,Survival,Hunting,Robotics"}},{"_index":"employees","_type":"_doc","_id":"P33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "BRAIN", "LastName": "HAWF", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2012-02-10", "Address": "195 West Pleasant Drive Gwynn Oak, MD 21207", "Gender": "Male", "Age": 29, "MaritalStatus": "Married", "Interests": "Toy Collecting,Planking,Trekkie,Skateboarding"}},{"_index":"employees","_type":"_doc","_id":"QH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "CALANDRA", "LastName": "ZUMBRENNEN", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2007-06-06", "Address": "440 E. Sugar Court Oswego, NY 13126", "Gender": "Female", "Age": 30, "MaritalStatus": "Married", "Interests": "Snorkeling,Candle Making,Legos"}},{"_index":"employees","_type":"_doc","_id":"QX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "MUOI", "LastName": "GREASON", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2010-02-26", "Address": "8779 St Paul Avenue Sulphur, LA 70663", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Drawing,Parkour,Protesting,Train Spotting,String Figures"}},{"_index":"employees","_type":"_doc","_id":"Qn3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "OTIS", "LastName": "EICK", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2010-02-22", "Address": "8467 Valley Rd. Dundalk, MD 21222", "Gender": "Male", "Age": 26, "MaritalStatus": "Married", "Interests": "Sky Diving,Roleplaying,Protesting,Fishing,Chess,Ziplining"}},{"_index":"employees","_type":"_doc","_id":"Q33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "AKIKO", "LastName": "ORTEA", "Designation": "Software Engineer", "Salary": "51000", "DateOfJoining": "2010-01-19", "Address": "8207 Lilac St. Lynchburg, VA 24502", "Gender": "Female", "Age": 26, "MaritalStatus": "Unmarried", "Interests": "Bookbinding,Button Collecting"}},{"_index":"employees","_type":"_doc","_id":"RH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "NELDA", "LastName": "LARSH", "Designation": "Software Engineer", "Salary": "51000", "DateOfJoining": "2014-03-12", "Address": "8895 Lafayette Avenue Union City, NJ 07087", "Gender": "Female", "Age": 26, "MaritalStatus": "Married", "Interests": "Internet,Letterboxing"}},{"_index":"employees","_type":"_doc","_id":"RX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "NICOL", "LastName": "LENIX", "Designation": "Software Engineer", "Salary": "51000", "DateOfJoining": "2010-01-15", "Address": "9701 Pilgrim Dr. Oakland, CA 94603", "Gender": "Female", "Age": 28, "MaritalStatus": "Married", "Interests": "Metal Detecting"}},{"_index":"employees","_type":"_doc","_id":"Rn3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "CLAUDINE", "LastName": "BOUMAN", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2009-02-11", "Address": "8200 Peachtree St. Waterford, MI 48329", "Gender": "Female", "Age": 27, "MaritalStatus": "Married", "Interests": "Body Building,Floral Arrangements,Beach/Sun tanning,Amateur Astronomy,Cloud Watching,Motorcycles,Calligraphy"}},{"_index":"employees","_type":"_doc","_id":"R33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "SHAROLYN", "LastName": "REVIER", "Designation": "Software Engineer", "Salary": "50000", "DateOfJoining": "2011-01-13", "Address": "844 Park St. Flemington, NJ 08822", "Gender": "Female", "Age": 25, "MaritalStatus": "Unmarried", "Interests": "Aquarium,Gunsmithing,Iceskating,People Watching"}},{"_index":"employees","_type":"_doc","_id":"SH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "GARRET", "LastName": "JOO", "Designation": "Software Engineer", "Salary": "59000", "DateOfJoining": "2014-02-10", "Address": "13 Airport Rd. Chelsea, MA 02150", "Gender": "Male", "Age": 26, "MaritalStatus": "Unmarried", "Interests": "Tutoring Children"}},{"_index":"employees","_type":"_doc","_id":"SX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "STERLING", "LastName": "GUIDER", "Designation": "Software Engineer", "Salary": "52000", "DateOfJoining": "2010-01-27", "Address": "165 La Sierra Rd. Oxford, MS 38655", "Gender": "Male", "Age": 28, "MaritalStatus": "Married", "Interests": "Collecting RPM Records,Windsurfing"}},{"_index":"employees","_type":"_doc","_id":"Sn3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "BOYD", "LastName": "LEOFSKY", "Designation": "Software Engineer", "Salary": "56000", "DateOfJoining": "2015-01-05", "Address": "734 Sheffield Drive Fond Du Lac, WI 54935", "Gender": "Male", "Age": 27, "MaritalStatus": "Unmarried", "Interests": "Papermaking,Surf Fishing,Spelunkering"}},{"_index":"employees","_type":"_doc","_id":"S33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "DONNY", "LastName": "TUMANENG", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2015-08-25", "Address": "8909 Hilldale St. Ballston Spa, NY 12020", "Gender": "Male", "Age": 30, "MaritalStatus": "Married", "Interests": "Belly Dancing,Soccer,Windsurfing"}},{"_index":"employees","_type":"_doc","_id":"TH3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "GARRY", "LastName": "HARKNESS", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2015-01-27", "Address": "27 W. Fieldstone Street Lithonia, GA 30038", "Gender": "Male", "Age": 25, "MaritalStatus": "Married", "Interests": "Spending time with family/kids"}},{"_index":"employees","_type":"_doc","_id":"TX3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "DORI", "LastName": "GOOKIN", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2016-09-23", "Address": "7715 Devonshire Ave. Urbandale, IA 50322", "Gender": "Female", "Age": 27, "MaritalStatus": "Married", "Interests": "Reading,Train Spotting,Ghost Hunting,Beadwork,Slot Car Racing"}},{"_index":"employees","_type":"_doc","_id":"Tn3kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "NADA", "LastName": "ALEPIN", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2008-01-16", "Address": "540 Tunnel Street Riverdale, GA 30274", "Gender": "Female", "Age": 29, "MaritalStatus": "Married", "Interests": "Roleplaying,Snowboarding,Surfing,Bell Ringing"}},{"_index":"employees","_type":"_doc","_id":"T33kJJUBKpOR7rM2iTl8","_score":0.8522601,"_source":{"FirstName": "MARCELLUS", "LastName": "VANBERGEN", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2011-02-03", "Address": "95 West Park Lane Warner Robins, GA 31088", "Gender": "Male", "Age": 27, "MaritalStatus": "Unmarried", "Interests": "Shark Fishing"}}]}}
####
#




###  5 Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares

### Request

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

### Response 
    (200-OK):
### 
	{"took":1,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1591,"relation":"eq"},"max_score":1.0,"hits":[{"_index":"employees","_type":"_doc","_id":"gn3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "HERSCHEL", "LastName": "BARTOLOME", "Designation": "QA Engineer", "Salary": "70000", "DateOfJoining": "2008-06-02", "Address": "9261 Andover St. De Pere, WI 54115", "Gender": "Male", "Age": 35, "MaritalStatus": "Unmarried", "Interests": "Cheerleading,Snorkeling,Reading To The Elderly,Writing Music,Darts"}},{"_index":"employees","_type":"_doc","_id":"h33kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "MOHAMMAD", "LastName": "DENTE", "Designation": "QA Engineer", "Salary": "68000", "DateOfJoining": "2002-01-22", "Address": "7812 W. Williams Drive Severn, MD 21144", "Gender": "Male", "Age": 35, "MaritalStatus": "Married", "Interests": "Cross-Stitch,Handwriting Analysis,Legos,Kayaking"}},{"_index":"employees","_type":"_doc","_id":"iH3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "MOON", "LastName": "CAULLEY", "Designation": "Project Manager", "Salary": "68000", "DateOfJoining": "2006-02-22", "Address": "9952 S. Chestnut Drive Menasha, WI 54952", "Gender": "Female", "Age": 30, "MaritalStatus": "Married", "Interests": "Pole Dancing,Violin,Felting,Photography,Kite Boarding"}},{"_index":"employees","_type":"_doc","_id":"l33kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "THOMAS", "LastName": "ROCCIA", "Designation": "Data Scientist", "Salary": "70000", "DateOfJoining": "2016-01-28", "Address": "29 Selby Lane Sun Prairie, WI 53590", "Gender": "Male", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Pinochle,Falconry,Cake Decorating,Exercise"}},{"_index":"employees","_type":"_doc","_id":"m33kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "GREGORY", "LastName": "SFATCU", "Designation": "System Administrator", "Salary": "69000", "DateOfJoining": "2009-01-26", "Address": "94 Lantern Rd. Manchester Township, NJ 08759", "Gender": "Male", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Butterfly Watching,Locksport,Saltwater Aquariums"}},{"_index":"employees","_type":"_doc","_id":"pn3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "ALISSA", "LastName": "CHRISTOPH", "Designation": "Database Administrator", "Salary": "70000", "DateOfJoining": "2014-01-27", "Address": "395 Colonial St. Massapequa, NY 11758", "Gender": "Female", "Age": 31, "MaritalStatus": "Married", "Interests": "Gymnastics"}},{"_index":"employees","_type":"_doc","_id":"p33kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "LIEN", "LastName": "RIEBAU", "Designation": "QA Engineer", "Salary": "68000", "DateOfJoining": "2004-01-21", "Address": "308 Smith Street Warren, MI 48089", "Gender": "Female", "Age": 32, "MaritalStatus": "Married", "Interests": "Arts,Powerboking,Wingsuit Flying,Crossword Puzzles,Fast cars,Metal Detecting,Knotting"}},{"_index":"employees","_type":"_doc","_id":"qH3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "MARK", "LastName": "PHILBROOK", "Designation": "Network Engineer", "Salary": "69000", "DateOfJoining": "2007-06-26", "Address": "952 West Oxford Rd. Enfield, CT 06082", "Gender": "Male", "Age": 34, "MaritalStatus": "Married", "Interests": "Jigsaw Puzzles"}},{"_index":"employees","_type":"_doc","_id":"rn3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "ASHLEY", "LastName": "VELZEBOER", "Designation": "DevOps Engineer", "Salary": "70000", "DateOfJoining": "2011-02-17", "Address": "638 W. Market Street Amityville, NY 11701", "Gender": "Female", "Age": 32, "MaritalStatus": "Unmarried", "Interests": "Hula Hooping,Matchstick Modeling"}},{"_index":"employees","_type":"_doc","_id":"sX3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "MAYBELLE", "LastName": "BRADEY", "Designation": "Security Analyst", "Salary": "70000", "DateOfJoining": "2010-09-13", "Address": "8691 East Golf St. Pearl, MS 39208", "Gender": "Female", "Age": 33, "MaritalStatus": "Unmarried", "Interests": "Rockets,Darts,Computer activities"}},{"_index":"employees","_type":"_doc","_id":"sn3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "TIFFANIE", "LastName": "RALPHS", "Designation": "Data Scientist", "Salary": "70000", "DateOfJoining": "2014-01-27", "Address": "8909 W. Dogwood Drive Hobart, IN 46342", "Gender": "Female", "Age": 33, "MaritalStatus": "Married", "Interests": "Swimming,Bringing Food To The Disabled,Rock Balancing,Becoming A Child Advocate,Ceramics,Sky Diving"}},{"_index":"employees","_type":"_doc","_id":"s33kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "ARDEN", "LastName": "CORDANO", "Designation": "Security Analyst", "Salary": "69000", "DateOfJoining": "2015-02-02", "Address": "523 NW. Smoky Hollow Street Beachwood, OH 44122", "Gender": "Male", "Age": 35, "MaritalStatus": "Unmarried", "Interests": "Becoming A Child Advocate,Glowsticking,Robotics,Speed Cubing,Jewelry Making"}},{"_index":"employees","_type":"_doc","_id":"tH3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "MELVA", "LastName": "DEMIK", "Designation": "Cloud Engineer", "Salary": "70000", "DateOfJoining": "2008-01-15", "Address": "8838 Beacon Dr. Daphne, AL 36526", "Gender": "Female", "Age": 31, "MaritalStatus": "Unmarried", "Interests": "Dancing,Weightlifting,Dolls"}}]}}
####
#



###  6 Obtener el número total que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.

### Request

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

### Response 
	(200-OK):
###

	{"took":0,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":8,"relation":"eq"},"max_score":1.0,"hits":[{"_index":"employees","_type":"_doc","_id":"mn3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "JONATHON", "LastName": "ZUMOT", "Designation": "System Administrator", "Salary": "62000", "DateOfJoining": "2003-05-26", "Address": "621 Ridge Street Perkasie, PA 18944", "Gender": "Male", "Age": 34, "MaritalStatus": "Unmarried", "Interests": "Wine Making,Roleplaying,Listening to music,Sand Castles,Learning An Instrument"}},{"_index":"employees","_type":"_doc","_id":"133kJJUBKpOR7rM2iSN6","_score":1.0,"_source":{"FirstName": "MITCHEL", "LastName": "MOULDING", "Designation": "Database Administrator", "Salary": "66000", "DateOfJoining": "2003-05-30", "Address": "7472 Galvin St. Oklahoma City, OK 73112", "Gender": "Male", "Age": 35, "MaritalStatus": "Unmarried", "Interests": "Genealogy,Railfans"}},{"_index":"employees","_type":"_doc","_id":"Vn3kJJUBKpOR7rM2iSZ6","_score":1.0,"_source":{"FirstName": "TORY", "LastName": "SCHAF", "Designation": "Network Engineer", "Salary": "69000", "DateOfJoining": "2003-05-05", "Address": "5 Brown Street York, PA 17402", "Gender": "Male", "Age": 35, "MaritalStatus": "Unmarried", "Interests": "Keep A Journal,Model Railroading,Slot Car Racing,Meditation"}},{"_index":"employees","_type":"_doc","_id":"on3kJJUBKpOR7rM2iSd6","_score":1.0,"_source":{"FirstName": "CODY", "LastName": "PEOPLES", "Designation": "Senior Software Engineer", "Salary": "66000", "DateOfJoining": "2003-05-13", "Address": "7772 Airport Street Lake Villa, IL 60046", "Gender": "Male", "Age": 35, "MaritalStatus": "Married", "Interests": "Base Jumping,Rock Balancing,Matchstick Modeling,Train Collecting,Paragliding or Power Paragliding"}},{"_index":"employees","_type":"_doc","_id":"K33kJJUBKpOR7rM2iS97","_score":1.0,"_source":{"FirstName": "GWYN", "LastName": "DEMAREE", "Designation": "Senior Software Engineer", "Salary": "65000", "DateOfJoining": "2003-05-08", "Address": "844 West Van Dyke St. Springfield, PA 19064", "Gender": "Female", "Age": 33, "MaritalStatus": "Unmarried", "Interests": "Shopping,Bonsai Tree,Knotting,Robotics,Amateur Radio,Fencing"}},{"_index":"employees","_type":"_doc","_id":"MX3kJJUBKpOR7rM2iTN7","_score":1.0,"_source":{"FirstName": "DEANDREA", "LastName": "BRADFUTE", "Designation": "Senior Software Engineer", "Salary": "64000", "DateOfJoining": "2003-05-08", "Address": "8 Valley Dr. Fort Myers, FL 33905", "Gender": "Female", "Age": 34, "MaritalStatus": "Unmarried", "Interests": "Painting,Tesla Coils,Dolls,Pyrotechnics"}},{"_index":"employees","_type":"_doc","_id":"K33kJJUBKpOR7rM2iTR8","_score":1.0,"_source":{"FirstName": "ADELE", "LastName": "INK", "Designation": "Senior Software Engineer", "Salary": "67000", "DateOfJoining": "2003-05-09", "Address": "509 Cooper Drive Randallstown, MD 21133", "Gender": "Female", "Age": 35, "MaritalStatus": "Married", "Interests": "Speed Cubing,Renting movies,Tombstone Rubbing,Crocheting"}},{"_index":"employees","_type":"_doc","_id":"in3kJJUBKpOR7rM2iTZ8","_score":1.0,"_source":{"FirstName": "AVERY", "LastName": "EVENSTAD", "Designation": "Senior Software Engineer", "Salary": "63000", "DateOfJoining": "2003-05-27", "Address": "8904 Spruce St. Plattsburgh, NY 12901", "Gender": "Male", "Age": 34, "MaritalStatus": "Married", "Interests": "Drawing,Traveling,Digital Photography,Genealogy,Sewing,Beachcombing"}}]}}
####
#




### 7 Obtener empleados cuyo nombre sea NATALIE

### Request

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
	--header 'Content-Type: application/json' \
	--data '{
		 "query": {
			 "match": {
				 "FirstName": "NATALIE"
			 }
		 }
	}'

### Response 
	(200-OK):
###

	{"took":1,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":8.804874,"hits":[{"_index":"employees","_type":"_doc","_id":"MH3kJJUBKpOR7rM2iSd6","_score":8.804874,"_source":{"FirstName": "NATALIE", "LastName": "SERVIS", "Designation": "Senior Software Engineer", "Salary": "61000", "DateOfJoining": "2003-09-19", "Address": "34 Kingston St. El Dorado, AR 71730", "Gender": "Female", "Age": 35, "MaritalStatus": "Unmarried", "Interests": "Guitar,Learning A Foreign Language,Blacksmithing,Embroidery,Collecting,Becoming A Child Advocate,Taxidermy"}}]}}
####
#



### 8 Obtener empleados cuya dirección sea o contenga Street

### Request

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
	--header 'Content-Type: application/json' \
	--data '{
		 "query": {
			 "wildcard": {
				 "Address": "*Street*"
			 }
		 }
	}'

### Response 
    (200-OK)
###
	{"took":2,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1580,"relation":"eq"},"max_score":1.0,"hits":[{"_index":"employees","_type":"_doc","_id":"gH3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "CIERRA", "LastName": "TOOLS", "Designation": "Project Manager", "Salary": "61000", "DateOfJoining": "2014-01-13", "Address": "8445 Green Street Morristown, NJ 07960", "Gender": "Female", "Age": 35, "MaritalStatus": "Married", "Interests": "R/C Boats,Dolls,Cloud Watching,Animals/pets/dogs,Crocheting,Casino Gambling"}},{"_index":"employees","_type":"_doc","_id":"g33kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "DORSEY", "LastName": "CHANNER", "Designation": "Project Manager", "Salary": "61000", "DateOfJoining": "2003-02-10", "Address": "43 Carson Street East Haven, CT 06512", "Gender": "Male", "Age": 32, "MaritalStatus": "Unmarried", "Interests": "Airsofting"}},{"_index":"employees","_type":"_doc","_id":"jn3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "ANDRIA", "LastName": "CONNETT", "Designation": "Security Analyst", "Salary": "66000", "DateOfJoining": "2012-01-16", "Address": "7672 Lake View Street Tiffin, OH 44883", "Gender": "Female", "Age": 32, "MaritalStatus": "Married", "Interests": "R/C Helicopters,Making Model Cars,Rock Balancing,Ziplining,Motorcycles,Astronomy,Musical Instruments"}},{"_index":"employees","_type":"_doc","_id":"mn3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "JONATHON", "LastName": "ZUMOT", "Designation": "System Administrator", "Salary": "62000", "DateOfJoining": "2003-05-26", "Address": "621 Ridge Street Perkasie, PA 18944", "Gender": "Male", "Age": 34, "MaritalStatus": "Unmarried", "Interests": "Wine Making,Roleplaying,Listening to music,Sand Castles,Learning An Instrument"}},{"_index":"employees","_type":"_doc","_id":"oH3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "BREANA", "LastName": "SLAGER", "Designation": "UI/UX Designer", "Salary": "62000", "DateOfJoining": "2013-01-07", "Address": "707 Cherry Hill Street Glen Ellyn, IL 60137", "Gender": "Female", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "People Watching,Windsurfing,Working In A Food Pantry,Rescuing Abused Or Abandoned Animals,Collecting,Cave Diving,Roleplaying"}},{"_index":"employees","_type":"_doc","_id":"pH3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "BLAKE", "LastName": "GRRIFFIN", "Designation": "Network Engineer", "Salary": "63000", "DateOfJoining": "2015-09-28", "Address": "82 Leeton Ridge Street Holland, MI 49423", "Gender": "Male", "Age": 32, "MaritalStatus": "Unmarried", "Interests": "Origami,Learning A Foreign Language,Parkour,Gardening,Nail Art,Walking,Conworlding"}},{"_index":"employees","_type":"_doc","_id":"p33kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "LIEN", "LastName": "RIEBAU", "Designation": "QA Engineer", "Salary": "68000", "DateOfJoining": "2004-01-21", "Address": "308 Smith Street Warren, MI 48089", "Gender": "Female", "Age": 32, "MaritalStatus": "Married", "Interests": "Arts,Powerboking,Wingsuit Flying,Crossword Puzzles,Fast cars,Metal Detecting,Knotting"}},{"_index":"employees","_type":"_doc","_id":"rn3kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "ASHLEY", "LastName": "VELZEBOER", "Designation": "DevOps Engineer", "Salary": "70000", "DateOfJoining": "2011-02-17", "Address": "638 W. Market Street Amityville, NY 11701", "Gender": "Female", "Age": 32, "MaritalStatus": "Unmarried", "Interests": "Hula Hooping,Matchstick Modeling"}},{"_index":"employees","_type":"_doc","_id":"s33kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "ARDEN", "LastName": "CORDANO", "Designation": "Security Analyst", "Salary": "69000", "DateOfJoining": "2015-02-02", "Address": "523 NW. Smoky Hollow Street Beachwood, OH 44122", "Gender": "Male", "Age": 35, "MaritalStatus": "Unmarried", "Interests": "Becoming A Child Advocate,Glowsticking,Robotics,Speed Cubing,Jewelry Making"}},{"_index":"employees","_type":"_doc","_id":"t33kJJUBKpOR7rM2iSJ6","_score":1.0,"_source":{"FirstName": "SHIELA", "LastName": "ZAISS", "Designation": "Project Manager", "Salary": "62000", "DateOfJoining": "2008-02-11", "Address": "37 Rockville Street Dickson, TN 37055", "Gender": "Female", "Age": 31, "MaritalStatus": "Unmarried", "Interests": "Backgammon,Ultimate Frisbee"}}]}}
####
#



### 9 Obtener empleados cuya dirección sea o contenga wood.

### Request

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
	--header 'Content-Type: application/json' \
	--data '{
		"query": {
			"match": {
				"Address": "wood"
			}
		}
	}'

### Response 
	(200-OK)
###

	{"took":0,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":19,"relation":"eq"},"max_score":6.5165105,"hits":[{"_index":"employees","_type":"_doc","_id":"I33kJJUBKpOR7rM2iSZ6","_score":6.5165105,"_source":{"FirstName": "CONRAD", "LastName": "FOULES", "Designation": "Security Analyst", "Salary": "61000", "DateOfJoining": "2005-10-19", "Address": "507 Wood Street Martinsville, VA 24112", "Gender": "Male", "Age": 35, "MaritalStatus": "Married", "Interests": "Fencing,Speed Cubing,Saltwater Aquariums,R/C Cars"}},{"_index":"employees","_type":"_doc","_id":"en3kJJUBKpOR7rM2iSZ6","_score":6.5165105,"_source":{"FirstName": "ROCHELL", "LastName": "BHANDARI", "Designation": "Senior Software Engineer", "Salary": "68000", "DateOfJoining": "2007-02-12", "Address": "44 Wood Street Naugatuck, CT 06770", "Gender": "Female", "Age": 30, "MaritalStatus": "Married", "Interests": "Jewelry Making"}},{"_index":"employees","_type":"_doc","_id":"vn3kJJUBKpOR7rM2iS97","_score":6.5165105,"_source":{"FirstName": "BRITTANEY", "LastName": "LONGSDORF", "Designation": "Senior Software Engineer", "Salary": "68000", "DateOfJoining": "2012-01-23", "Address": "77 Wood St. Titusville, FL 32780", "Gender": "Female", "Age": 35, "MaritalStatus": "Married", "Interests": "Crochet"}},{"_index":"employees","_type":"_doc","_id":"7H3kJJUBKpOR7rM2iTB7","_score":6.5165105,"_source":{"FirstName": "EASTER", "LastName": "AHLEMEYER", "Designation": "Senior Software Engineer", "Salary": "66000", "DateOfJoining": "2011-01-03", "Address": "507 Wood Street Martinsville, VA 24112", "Gender": "Female", "Age": 30, "MaritalStatus": "Married", "Interests": "Wine Making,Dolls,Soccer,Exercise,Hunting,Gyotaku,Dumpster Diving"}},{"_index":"employees","_type":"_doc","_id":"an3kJJUBKpOR7rM2iTJ7","_score":6.5165105,"_source":{"FirstName": "ROGELIO", "LastName": "GREEN", "Designation": "Senior Software Engineer", "Salary": "66000", "DateOfJoining": "2002-01-17", "Address": "46 Wood St. Danvers, MA 01923", "Gender": "Male", "Age": 33, "MaritalStatus": "Married", "Interests": "Mountain Climbing,Wine Making,Volunteer,Sky Diving,Birding"}},{"_index":"employees","_type":"_doc","_id":"Gn3kJJUBKpOR7rM2iTd8","_score":6.5165105,"_source":{"FirstName": "BERT", "LastName": "NINOS", "Designation": "Senior Software Engineer", "Salary": "60000", "DateOfJoining": "2013-02-26", "Address": "9327 Wood Drive Elkridge, MD 21075", "Gender": "Male", "Age": 33, "MaritalStatus": "Married", "Interests": "Owning An Antique Car,Kitchen Chemistry,Pinochle,Legos"}},{"_index":"employees","_type":"_doc","_id":"an3kJJUBKpOR7rM2iTt8","_score":6.5165105,"_source":{"FirstName": "SUZANN", "LastName": "LASHUTE", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2007-09-25", "Address": "421 Wood Court Parlin, NJ 08859", "Gender": "Female", "Age": 30, "MaritalStatus": "Married", "Interests": "Building Dollhouses"}},{"_index":"employees","_type":"_doc","_id":"dH3kJJUBKpOR7rM2iUN9","_score":6.5165105,"_source":{"FirstName": "ALFONZO", "LastName": "SCHOLZEN", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2012-01-09", "Address": "8570 Wood Ave. Loxahatchee, FL 33470", "Gender": "Male", "Age": 26, "MaritalStatus": "Married", "Interests": "Fishing,Fencing,Roleplaying,Leathercrafting,Inventing,Bird watching"}},{"_index":"employees","_type":"_doc","_id":"f33kJJUBKpOR7rM2iUN9","_score":6.5165105,"_source":{"FirstName": "CATHY", "LastName": "STALLCUP", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2010-02-08", "Address": "8570 Wood Ave. Loxahatchee, FL 33470", "Gender": "Female", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Electronics,Collecting RPM Records"}},{"_index":"employees","_type":"_doc","_id":"033kJJUBKpOR7rM2iUR9","_score":6.5165105,"_source":{"FirstName": "LILY", "LastName": "LARRIBEAU", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2016-02-15", "Address": "421 Wood Court Parlin, NJ 08859", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Ultimate Frisbee,Baseball,Blacksmithing,Crocheting,Walking"}}]}}
####
#



### 10. Obtener empleados interesados en Wrestling.

### Request

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
	--header 'Content-Type: application/json' \
	--data '{
		"query": {
			"match": {
				"Interests": "Wrestling"
			}
		}
	}'

### Response 
	(200-OK)
###
	{"took":1,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":154,"relation":"eq"},"max_score":6.399149,"hits":[{"_index":"employees","_type":"_doc","_id":"In3kJJUBKpOR7rM2iSl6","_score":6.399149,"_source":{"FirstName": "JAZMINE", "LastName": "VACHULA", "Designation": "Senior Software Engineer", "Salary": "61000", "DateOfJoining": "2015-02-16", "Address": "8654 Birchwood Court Saint Albans, NY 11412", "Gender": "Female", "Age": 34, "MaritalStatus": "Married", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"7X3kJJUBKpOR7rM2iSx7","_score":6.399149,"_source":{"FirstName": "BETTYE", "LastName": "GOODRICH", "Designation": "Senior Software Engineer", "Salary": "68000", "DateOfJoining": "2007-02-21", "Address": "9017 East Gregory Dr. Erie, PA 16506", "Gender": "Female", "Age": 31, "MaritalStatus": "Married", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"7H3kJJUBKpOR7rM2iTV8","_score":6.399149,"_source":{"FirstName": "ZETTA", "LastName": "LIV", "Designation": "Senior Software Engineer", "Salary": "63000", "DateOfJoining": "2005-01-21", "Address": "45 Pulaski St. Reisterstown, MD 21136", "Gender": "Female", "Age": 34, "MaritalStatus": "Unmarried", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"5X3kJJUBKpOR7rM2iTh8","_score":6.399149,"_source":{"FirstName": "GRACIA", "LastName": "DIEHL", "Designation": "Senior Software Engineer", "Salary": "61000", "DateOfJoining": "2010-02-15", "Address": "747 Vernon St. Harvey, IL 60426", "Gender": "Female", "Age": 32, "MaritalStatus": "Married", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"VX3kJJUBKpOR7rM2iUV9","_score":6.399149,"_source":{"FirstName": "DAVIS", "LastName": "HYTROS", "Designation": "Software Engineer", "Salary": "51000", "DateOfJoining": "2013-09-02", "Address": "8934 Harvard Avenue Dearborn, MI 48124", "Gender": "Male", "Age": 29, "MaritalStatus": "Married", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"mn3kJJUBKpOR7rM2iUZ-","_score":6.399149,"_source":{"FirstName": "ONITA", "LastName": "FORTINI", "Designation": "Software Engineer", "Salary": "50000", "DateOfJoining": "2009-01-30", "Address": "348 North Shore Dr. Snellville, GA 30039", "Gender": "Female", "Age": 27, "MaritalStatus": "Unmarried", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"j33kJJUBKpOR7rM2iUd-","_score":6.399149,"_source":{"FirstName": "NICOLAS", "LastName": "MADITZ", "Designation": "Software Engineer", "Salary": "52000", "DateOfJoining": "2014-01-27", "Address": "8159 West Bradford Dr. Greensburg, PA 15601", "Gender": "Male", "Age": 25, "MaritalStatus": "Married", "Interests": "Wrestling"}},{"_index":"employees","_type":"_doc","_id":"V33kJJUBKpOR7rM2iSZ6","_score":5.8533716,"_source":{"FirstName": "LEIGH", "LastName": "AQUIL", "Designation": "Project Manager", "Salary": "67000", "DateOfJoining": "2011-03-28", "Address": "7 S. Lakewood St. Little Falls, NJ 07424", "Gender": "Male", "Age": 31, "MaritalStatus": "Unmarried", "Interests": "Collecting,Wrestling"}},{"_index":"employees","_type":"_doc","_id":"1n3kJJUBKpOR7rM2iSZ6","_score":5.8533716,"_source":{"FirstName": "AILENE", "LastName": "LAPAGLIA", "Designation": "Senior Software Engineer", "Salary": "69000", "DateOfJoining": "2006-01-04", "Address": "50 Proctor St. Mundelein, IL 60060", "Gender": "Female", "Age": 31, "MaritalStatus": "Married", "Interests": "Wrestling,Quilting"}},{"_index":"employees","_type":"_doc","_id":"c33kJJUBKpOR7rM2iSl6","_score":5.8533716,"_source":{"FirstName": "PEARLY", "LastName": "TARAZON", "Designation": "Senior Software Engineer", "Salary": "70000", "DateOfJoining": "2013-01-28", "Address": "261 N. Peachtree Drive Marlborough, MA 01752", "Gender": "Female", "Age": 31, "MaritalStatus": "Married", "Interests": "Wrestling,Birding"}}]}}
####
#



### 11 Obtener el número de hombres y mujeres interesad@s en Wrestling

### Request

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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


### Response 
	(200-OK)
### 
	{"took":1,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":154,"relation":"eq"},"max_score":null,"hits":[]},"aggregations":{"gender_count":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Female","doc_count":80},{"key":"Male","doc_count":74}]}}}
####
#



### 12 En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres).

### Request


	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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


### Response 
	(200-OK)
### 

	{"took":3,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":154,"relation":"eq"},"max_score":null,"hits":[]},"aggregations":{"gender_count":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Female","doc_count":80,"average_age":{"value":30.65}},{"key":"Male","doc_count":74,"average_age":{"value":30.33783783783784}}]}}}
####
#



### 13 Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (tramo 1), entre 60.000 dólares y 67.000 dólares (tramo 2) y superior a 67.000 dólares (tramo 3).

### Request

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

### Response 
	(200-OK)
### 

	{"took":16,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":9999,"relation":"eq"},"max_score":null,"hits":[]},"aggregations":{"salary_ranges":{"buckets":[{"key":"tramo 1","to":60000.0,"doc_count":3872,"marital_status":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Unmarried","doc_count":1945},{"key":"Married","doc_count":1927}]}},{"key":"tramo 2","from":60000.0,"to":67000.0,"doc_count":4020,"marital_status":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Married","doc_count":2024},{"key":"Unmarried","doc_count":1996}]}},{"key":"tramo 3","from":67000.0,"doc_count":2107,"marital_status":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Married","doc_count":1071},{"key":"Unmarried","doc_count":1036}]}}]}}}
####
#



### 14 En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.

### Request

	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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

### Response 
	(200-OK)
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
####
#



### Parte VI) Crear otro índice y modificar el alias

1 Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo employees-v2 y mete en él todos los datos del fichero de prueba. Modifica el alias employees-alias que creaste antes para que apunte tanto al índice employees original como al nuevo employees-v2. Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.

### Request

	curl --location --request PUT 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-v2' \
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
	 
### Response 
	(200-OK)
### 
	 {
		"acknowledged": true,
		"shards_acknowledged": true,
		"index": "employees-v2"
	 }
####
#


 
### Request

	curl --location 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/_aliases' \
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

### Response 
	(200-OK)
### 
	{"acknowledged":true}
####
#

Al obtener todos los índices:

### Request

	curl --location 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/_cat/indices'

### Response 
	(200-OK)
### 
	green open employees-v2 GG_VwyJTQZCF_ZufksN-Zw 1 1     0 0   416b   208b
	green open employees    yJB-QiTMSF2CvLErYM5jqw 1 1 49995 0 57.1mb 29.7mb
### 

Se cargan en el nuevo índice los datos de prueba mediante:

	curl -XPOST https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net/employees-v2/_doc/_bulk -H "Content-Type: application/json" --data-binary @Employees_raw.json
####
#


Se modifica el alias:

### Request

	curl --location 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/_aliases' \

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
	
### Response 
	(200-OK)
### 
	{"acknowledged":true}



Al obtener todos los alias:

	curl --location 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/_alias'

### Response 
	(200-OK)
### 
	{"employees-v2":{"aliases":{"employees-alias":{}}},"employees":{"aliases":{"employees-alias":{}}}}
####
#



### 2 Realiza alguna de las consultas anteriores. ¿Qué observas?

### Request
	curl --location --request GET 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
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
### Response 
	(200-OK)
### 
### Antes:
	{"took":2,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":4264,"relation":"eq"},"max_score":0.8522601,"hits":[{"_index":"employees","_type":"_doc","_id":"533kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "REYES", "LastName": "STREED", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2009-01-12", "Address": "9276 Carriage Ave. Thornton, CO 80241", "Gender": "Male", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Gardening,Parachuting,Dancing,Tombstone Rubbing,Tatting,Beachcombing"}},{"_index":"employees","_type":"_doc","_id":"6H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "ALLENA", "LastName": "ALEJO", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2012-01-04", "Address": "9431 Glen Ridge St. Yorktown, VA 23693", "Gender": "Female", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Boating,Musical Instruments,Knotting"}},{"_index":"employees","_type":"_doc","_id":"6X3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "CHARITY", "LastName": "HEITMANN", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2016-02-29", "Address": "112 S. Franklin Ave. North Miami Beach, FL 33160", "Gender": "Female", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "R/C Cars,Iceskating,Home Brewing,Body Building"}},{"_index":"employees","_type":"_doc","_id":"6n3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "MARTY", "LastName": "BATY", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2010-09-13", "Address": "67 William St. Satellite Beach, FL 32937", "Gender": "Male", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Renting movies,Exercise,Skiing,Go Kart Racing"}},{"_index":"employees","_type":"_doc","_id":"633kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "HARMONY", "LastName": "STERBACK", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2013-12-03", "Address": "9136 Ramblewood Street Huntersville, NC 28078", "Gender": "Female", "Age": 26, "MaritalStatus": "Unmarried", "Interests": "Glowsticking,World Record Breaking,Musical Instruments,Knotting,Urban Exploration,Video Games"}},{"_index":"employees","_type":"_doc","_id":"7H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "JERAMY", "LastName": "SCHOEN", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2008-02-14", "Address": "18 South Inverness Ave. Roswell, GA 30075", "Gender": "Male", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Dolls,Slingshots,Stamp Collecting,Home Theater,Entertaining,Body Building"}},{"_index":"employees","_type":"_doc","_id":"7X3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "DONETTA", "LastName": "PERARO", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2013-09-10", "Address": "333 Clinton St. New Berlin, WI 53151", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Geocaching,Lasers,Falconry,Tesla Coils"}},{"_index":"employees","_type":"_doc","_id":"7n3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "EUGENIE", "LastName": "SKOLFIELD", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2013-12-23", "Address": "36 High Ridge Ave. Middle River, MD 21220", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Compose Music,Textiles,Volunteer"}},{"_index":"employees","_type":"_doc","_id":"733kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "JARROD", "LastName": "WIERSCHEN", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2016-01-29", "Address": "641 St Paul Ave. Roseville, MI 48066", "Gender": "Male", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Motorcycles,Sewing,Slingshots,String Figures,Railfans"}},{"_index":"employees","_type":"_doc","_id":"8H3kJJUBKpOR7rM2iTh8","_score":0.8522601,"_source":{"FirstName": "YAN", "LastName": "BRANOT", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2008-01-15", "Address": "8 Berkshire St. Roanoke, VA 24012", "Gender": "Female", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Illusion,Train Collecting,Boomerangs,Dumpster Diving"}}]}}

### Despues:
Se muestran ahora 10000 elementos y antes hubo 4264, es decir se triplicaron los resultados deberia dar alreadedor de 8528  pero hubieron comandos que se ejecutaron 2 veces.

	{"took":1,"timed_out":false,"_shards":{"total":2,"successful":2,"skipped":0,"failed":0},"hits":{"total":{"value":10000,"relation":"gte"},"max_score":0.85227454,"hits":[{"_index":"employees","_type":"_doc","_id":"533kJJUBKpOR7rM2iTh8","_score":0.85227454,"_source":{"FirstName": "REYES", "LastName": "STREED", "Designation": "Software Engineer", "Salary": "55000", "DateOfJoining": "2009-01-12", "Address": "9276 Carriage Ave. Thornton, CO 80241", "Gender": "Male", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Gardening,Parachuting,Dancing,Tombstone Rubbing,Tatting,Beachcombing"}},{"_index":"employees","_type":"_doc","_id":"6H3kJJUBKpOR7rM2iTh8","_score":0.85227454,"_source":{"FirstName": "ALLENA", "LastName": "ALEJO", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2012-01-04", "Address": "9431 Glen Ridge St. Yorktown, VA 23693", "Gender": "Female", "Age": 30, "MaritalStatus": "Unmarried", "Interests": "Boating,Musical Instruments,Knotting"}},{"_index":"employees","_type":"_doc","_id":"6X3kJJUBKpOR7rM2iTh8","_score":0.85227454,"_source":{"FirstName": "CHARITY", "LastName": "HEITMANN", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2016-02-29", "Address": "112 S. Franklin Ave. North Miami Beach, FL 33160", "Gender": "Female", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "R/C Cars,Iceskating,Home Brewing,Body Building"}},{"_index":"employees","_type":"_doc","_id":"6n3kJJUBKpOR7rM2iTh8","_score":0.85227454,"_source":{"FirstName": "MARTY", "LastName": "BATY", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2010-09-13", "Address": "67 William St. Satellite Beach, FL 32937", "Gender": "Male", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Renting movies,Exercise,Skiing,Go Kart Racing"}},{"_index":"employees","_type":"_doc","_id":"633kJJUBKpOR7rM2iTh8","_score":0.85227454,"_source":{"FirstName": "HARMONY", "LastName": "STERBACK", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2013-12-03", "Address": "9136 Ramblewood Street Huntersville, NC 28078", "Gender": "Female", "Age": 26, "MaritalStatus": "Unmarried", "Interests": "Glowsticking,World Record Breaking,Musical Instruments,Knotting,Urban Exploration,Video Games"}},{"_index":"employees","_type":"_doc","_id":"7H3kJJUBKpOR7rM2iTh8","_score":0.85227454,"_source":{"FirstName": "JERAMY", "LastName": "SCHOEN", "Designation": "Software Engineer", "Salary": "53000", "DateOfJoining": "2008-02-14", "Address": "18 South Inverness Ave. Roswell, GA 30075", "Gender": "Male", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Dolls,Slingshots,Stamp Collecting,Home Theater,Entertaining,Body Building"}},{"_index":"employees","_type":"_doc","_id":"7X3kJJUBKpOR7rM2iTh8","_score":0.85227454,"_source":{"FirstName": "DONETTA", "LastName": "PERARO", "Designation": "Software Engineer", "Salary": "60000", "DateOfJoining": "2013-09-10", "Address": "333 Clinton St. New Berlin, WI 53151", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Geocaching,Lasers,Falconry,Tesla Coils"}},{"_index":"employees","_type":"_doc","_id":"7n3kJJUBKpOR7rM2iTh8","_score":0.85227454,"_source":{"FirstName": "EUGENIE", "LastName": "SKOLFIELD", "Designation": "Software Engineer", "Salary": "58000", "DateOfJoining": "2013-12-23", "Address": "36 High Ridge Ave. Middle River, MD 21220", "Gender": "Female", "Age": 25, "MaritalStatus": "Married", "Interests": "Compose Music,Textiles,Volunteer"}},{"_index":"employees","_type":"_doc","_id":"733kJJUBKpOR7rM2iTh8","_score":0.85227454,"_source":{"FirstName": "JARROD", "LastName": "WIERSCHEN", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2016-01-29", "Address": "641 St Paul Ave. Roseville, MI 48066", "Gender": "Male", "Age": 28, "MaritalStatus": "Unmarried", "Interests": "Motorcycles,Sewing,Slingshots,String Figures,Railfans"}},{"_index":"employees","_type":"_doc","_id":"8H3kJJUBKpOR7rM2iTh8","_score":0.85227454,"_source":{"FirstName": "YAN", "LastName": "BRANOT", "Designation": "Software Engineer", "Salary": "54000", "DateOfJoining": "2008-01-15", "Address": "8 Berkshire St. Roanoke, VA 24012", "Gender": "Female", "Age": 29, "MaritalStatus": "Unmarried", "Interests": "Illusion,Train Collecting,Boomerangs,Dumpster Diving"}}]}}
####
#



### 3 Elimina employees del conjunto de índices a los que hace referencia el alias.

### Request

	curl --location --request DELETE 'https://tppcsh5kp7:zve0uxj2vg@home-search-8513126250.us-east-1.bonsaisearch.net:443/employees' \
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
 
### Response 
	(200-OK)
### 
 
	{"acknowledged":true}
####
#
 

