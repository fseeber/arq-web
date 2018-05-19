const express     = require('express');
const bodyParser  = require('body-parser');
const moment      = require('moment');
const calcPim = require('./calcularPim');
const app = express();

var _pacientes = [

    {historiaClinica: 1, nombre: 'Federico', apellido:"Seeber", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" },
    {historiaClinica: 2, nombre: 'Mario', apellido:"Gomez", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" },
    {historiaClinica: 3, nombre: 'Juan', apellido:"Ruiz", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" },
    {historiaClinica: 4, nombre: 'Jimena', apellido:"Gonzalez", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" }

];


var _pims = [

    { 
        idPim: 1,
        historiaClinica: 1,
        diagnosticoMuyAltoRiesgo: 0,
        diagnosticoAltoRiesgo: 0,
        diagnosticoBajoRiesgo: 0,
        presionSistolica: 30,
        excesoDeBaseEnSangre: 5,
        fiO2: 21,
        paO2: 750,
        adminisionElectivaUci: 0,
        midriasisBilateral: 0,
        asistenciaRespiracionMecanica: 0,
        recuperacionPostQX: 0,
        recuperacionByPassCardiaco: 0,
        recuperacionProcCardSinByPassCardiaco: 0,
        recuperacionOtroProcedimientoNoCardiaco: 0,
        txHIV: 0,
        HIV: 0,
        transplateHepaticoDeDonanteVivo: 0,
        fechaCreacion: "date",
        codigoMedico: 0,
        usuario: "string",
        pim: 0,
        probMuerte: 0
      }
];

// parse body as json

app.use(bodyParser.json());


// all requests

app.use((req, res, next) => {

    console.log(`${req.method}: ${req.path} - ${moment().format(moment.HTML5_FMT.DATETIME_LOCAL_MS)}`);

    next();

});



// get home

app.get('/', (req, res) => {

    let list = [];

    _pacientes.forEach((c) => {

        list.push(`<li>${c.nombre} con id: ${c.id}</li>`);

    });

    res.send(
        `<html>
            <head>
                <title>Title</title>
            </head>
            <body>
                <ul>
                    ${list.join('')}
                </ul>            
            </body>
        </html>`
    );

});



/////////////////////////servicios pacientes/////////////////////////////////


app.get('/api/pacientes', (req, res) => {

    res.json(_pacientes);

});



// get pacientes by historiaClinica

app.get('/api/pacientes/:historiaClinica', (req, res) => {
    
    var hc= req.params.historiaClinica;

    if(isNaN(hc)){
        res.status(400).end();
    }
    
    let pac = _pacientes.find(c => c.historiaClinica == hc);

    if(pac) {
        res.json(pac);
    }
    else {
        res.status(404).end();
    }
});


app.post('/api/pacientes', (req, res) => {

    _pacientes.push(req.body);

    res.status(201).send(req.body);

});


app.put('/api/pacientes/:historiaClinica', (req, res) => {

    //_pacientes.save(req.body);
    var hc= req.params.historiaClinica;

    if(isNaN(hc)){
        res.status(400).end();
    }

    let pac = _pacientes.find(c => c.historiaClinica == req.params.historiaClinica);
    
    if(pac) {
        res.status(200).end();
    }
    else {
        res.status(404).end();
    }

});


app.delete('/api/pacientes/:historiaClinica', (req, res) => {
    
    var hc= req.params.historiaClinica;

    if(isNaN(hc)){
        res.status(400).end();
    }
    _pacientes = _pacientes.filter(c => c.historiaClinica != hc);

    res.status(204).end();

});

/////////////////////////////servicios pims//////////////////////////////////

app.get('/api/pacientes/:historiaClinica/pims', (req, res) => {
    var hc= req.params.historiaClinica;
    if(isNaN(hc)){
        res.status(400).end();
    }
    res.json(_pims);

});


app.get('/api/pacientes/:historiaClinica/pims/:idPim', (req, res) => {
    var hc= req.params.historiaClinica;
    var idPim = req.params.idPim;
    
    if(isNaN(idPim || isNaN(hc))){
        res.status(400).end();
    }

    let pims = _pims.find(i => i.idPim == idPim && i.historiaClinica == hc);

    if(pims) {
        //calcular pim
        pims.pim=calcPim.calcularPim(pims);
        res.json(pims);
    }
    else {
        res.status(404).end();
    }
});


app.post('/api/pacientes/:historiaClinica/pim', (req, res) => {

    _pims.push(req.body);

    res.status(201).send(req.body);

});


app.put('/api/pacientes/:historiaClinica', (req, res) => {

    //_pacientes.save(req.body);

    let pac = _pacientes.find(c => c.historiaClinica == req.params.historiaClinica);
    
    if(pac) {
        res.status(200).end();
    }
    else {
        res.status(404).end();
    }

});


app.delete('/api/pacientes/:historiaClinica', (req, res) => {

    _pacientes = _pacientes.filter(c => c.historiaClinica != req.params.historiaClinica);

    res.status(204).end();

});


// start server

app.listen(process.env.PORT || 8080, function () {

    console.log('API andando con express...');

});