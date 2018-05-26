
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PacienteSchema = Schema({
    historiaClinica: String,
    nombre: String, 
    apellido: String, 
    fechaNacimiento: String, 
    sexo: { type: String, enum: ['Masculino', 'Femenimo', 'Indefinido']},
    ultimoPeso: String, 
    superficieCorporal: String, 
    fechaUltimoCambioUF: String,
    pims : [{ type: Schema.Types.ObjectId, ref: 'Pim' }]
})

module.exports = mongoose.model('Paciente', PacienteSchema)

/*
var _pacientes = [

    {historiaClinica: 1, nombre: 'Federico', apellido:"Seeber", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" },
    {historiaClinica: 2, nombre: 'Mario', apellido:"Gomez", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" },
    {historiaClinica: 3, nombre: 'Juan', apellido:"Ruiz", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" },
    {historiaClinica: 4, nombre: 'Jimena', apellido:"Gonzalez", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" }

];

*/