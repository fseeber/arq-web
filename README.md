## Trabajo Práctico 
Arquitectura Web
## Integrante
Federico Seeber
## Idea: 
Aplicación que permite calcular el PIM (Indice de Mortalidad Pediatrico)
## Tecnologías a utilizar:
* MongoDB
* NodeJS
* AngularJS
## Herramientas a utilizar: 
* Visual Studio Code 1.21
* Sublime 3.0
* Google Chrome 65
* Postman 10 
## EndPoints de la API:
**Pacientes**  
  * GET /api/pacientes/{idPaciente}
    * Descripción: Obtener un paciente según su idPaciente
    * BODY: null
    * Code: 
      * 200 - Ok
      * 400 - Bad Request
  * POST /api/pacientes
    * Descripción: Crear un nuevo paciente
    * BODY: 
    { 
     "historiaClinica": 0,
     "nombre": "string",
     "apellido": "string",
     "fechaNacimiento": "date",
     "sexo": "string",
     "ultimoPeso": "date",
     "superficieCorporal": "string",
     "fechaUltimoCambioUF": "date"
    } 
    * Code: 
      * 200 - Ok
      * 400 - Bad Request 
  * PUT /api/pacientes/{idPaciente}
    * Descripción: Actualizar los datos de un paciente según su idPaciente
    * BODY: 
    { 
     "historiaClinica": 0,
     "nombre": "string",
     "apellido": "string",
     "fechaNacimiento": "date",
     "sexo": "string",
     "ultimoPeso": "date",
     "superficieCorporal": "string",
     "fechaUltimoCambioUF": "date"
    } 
    * Code: 
      * 200 - Ok
      * 400 - Bad Request   
  * DELETE /api/pacientes/{idPaciente}
    * Descripción: Borrar un paciente según su idPaciente
    * BODY: null 
    * Code: 
      * 200 - Ok
      * 400 - Bad Request 
**PIM**    
  * GET /api/pacientes/{idPaciente}/pims/{idPim}
    * Descripción: Obtener un PIM según su idPaciente y su idPim
    * BODY: null
    * Code: 
      * 200 - Ok
      * 400 - Bad Request
  * POST /api/pacientes/{idPaciente}/pims/{idPim}
    * Descripción: Crear un nuevo paciente
    * BODY: 
    { 
     "historiaClinica": 0,
     "nombre": "string",
     "apellido": "string",
     "fechaNacimiento": "date",
     "sexo": "string",
     "ultimoPeso": "date",
     "superficieCorporal": "string",
     "fechaUltimoCambioUF": "date"
    } 
    * Code: 
      * 200 - Ok
      * 400 - Bad Request 
  * PUT /api/pacientes/{idPaciente}
    * Descripción: Actualizar los datos de un paciente según su idPaciente
    * BODY: 
    { 
     "historiaClinica": 0,
     "nombre": "string",
     "apellido": "string",
     "fechaNacimiento": "date",
     "sexo": "string",
     "ultimoPeso": "date",
     "superficieCorporal": "string",
     "fechaUltimoCambioUF": "date"
    } 
    * Code: 
      * 200 - Ok
      * 400 - Bad Request   
  * DELETE /api/pacientes/{idPaciente}
    * Descripción: Borrar un paciente según su idPaciente
    * BODY: null 
    * Code: 
      * 200 - Ok
      * 400 - Bad Request   
