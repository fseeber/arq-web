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
  * GET /api/pacientes/{historiaClinica}
    * Descripción: Obtener un paciente según su historiaClinica
    * BODY: null
    * Code: 
      * 200 - Ok
      * 400 - Bad Request
      * 404 - Not Found
  * GET /api/pacientes?orderBy={orden}
    * Descripción: Obtener todos los pacientes 
    * BODY: null
    * Code: 
      * 200 - Ok
      * 400 - Bad Request
      * 404 - Not Found
      * 500 - Internal Server Error      
  * POST /api/pacientes
    * Descripción: Crear un nuevo paciente
    * BODY:
    ```javascript
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
    ```
    * Code: 
      * 200 - Ok
      * 400 - Bad Request 
      * 500 - Internal Server Error      
  * PUT /api/pacientes/{idPaciente}
    * Descripción: Actualizar los datos de un paciente según su idPaciente
    * BODY: 
    ```javascript
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
    ```
    * Code: 
      * 200 - Ok
      * 400 - Bad Request   
      * 500 - Internal Server Error      
  * DELETE /api/pacientes/{idPaciente}
    * Descripción: Borrar un paciente según su idPaciente
    * BODY: null 
    * Code: 
      * 200 - Ok
      * 400 - Bad Request 
      * 500 - Internal Server Error
      

**PIM**    
  * GET /api/pacientes/{idPaciente}/pims/{idPim}
    * Descripción: Obtener un PIM según su idPaciente y su idPim. En caso de que este desactualizado el score se volvera a recalcular.
    * BODY: null
    * Code: 
      * 200 - Ok
      * 400 - Bad Request
      * 500 - Internal Server Error      
  * GET /api/pacientes/{idPaciente}/pims?orderBy={orden}
    * Descripción: Obtener todos los PIM´s según su idPaciente
    * BODY: null
    * Code: 
      * 200 - Ok
      * 400 - Bad Request  
      * 500 - Internal Server Error      
  * POST /api/pacientes/{idPaciente}/pims/{idPim}
    * Descripción: Crear un PIM para un paciente determinado
    * BODY: 
    ```javascript
    { 
      "diagnosticoMuyAltoRiesgo": 0,
      "diagnosticoAltoRiesgo": 0,
      "diagnosticoBajoRiesgo": 0,
      "presionSistolica": 0,
      "excesoDeBaseEnSangre": 0,
      "fiO2": 0,
      "paO2": 0,
      "adminisionElectivaUci": 0,
      "midriasisBilateral": 0,
      "recuperacionPostQX": 0,
      "recuperacionByPassCardiaco": 0,
      "recuperacionProcCardSinByPassCardiaco": 0,
      "recuperacionOtroProcedimientoNoCardiaco": 0,
      "HIV": 0,
      "transplateHepaticoDeDonanteVivo": 0,
      "fechaCreacion": "date",
      "codigoMedico": 0,
      "usuario": "string"
    }
    ```
    * Code: 
      * 200 - Ok
      * 400 - Bad Request 
      * 500 - Internal Server Error   
  * PUT /api/pacientes/{idPaciente}/pims/{idPim}
    * Descripción: Actualizar los datos del PIM, según su {idPim} y {idPaciente}
    * BODY: 
    ```javascript
    { 
      "diagnosticoMuyAltoRiesgo": 0,
      "diagnosticoAltoRiesgo": 0,
      "diagnosticoBajoRiesgo": 0,
      "presionSistolica": 0,
      "excesoDeBaseEnSangre": 0,
      "fiO2": 0,
      "paO2": 0,
      "adminisionElectivaUci": 0,
      "midriasisBilateral": 0,
      "recuperacionPostQX": 0,
      "recuperacionByPassCardiaco": 0,
      "recuperacionProcCardSinByPassCardiaco": 0,
      "recuperacionOtroProcedimientoNoCardiaco": 0,
      "HIV": 0,
      "transplateHepaticoDeDonanteVivo": 0,
      "fechaCreacion": "date",
      "codigoMedico": 0,
      "usuario": "string",
      "estado": "string"
    }
    ```
    * Code: 
      * 200 - Ok
      * 400 - Bad Request  
      * 500 - Internal Server Error      
  
      
* DELETE /api/pacientes/{idPaciente}/pims/{idPim}
    * Descripción: Borrar un paciente según su idPaciente
    * BODY: null 
    * Code: 
      * 200 - Ok
      * 400 - Bad Request   
      * 500 - Internal Server Error      
