const express    = require('express');
const bodyParser = require('body-parser');
const moment     = require('moment');

const app = express();

var _pacientes = [

    {historiaClinica: 1, nombre: 'Federico', apellido:"Seeber", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" },
    {historiaClinica: 2, nombre: 'Mario', apellido:"Gomez", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" },
    {historiaClinica: 3, nombre: 'Juan', apellido:"Ruiz", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" },
    {historiaClinica: 4, nombre: 'Jimena', apellido:"Gonzalez", fechaNacimiento:"07-05-1988", sexo:"M", ultimoPeso: "02-05-2018", superficieCorporal: "2.16 m2", fechaUltimoCambioUF: "02-05-2018" }

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



// api


app.get('/api/pacientes', (req, res) => {

    res.json(_pacientes);

});



// get pacientes by historiaClinica

app.get('/api/pacientes/:historiaClinica', (req, res) => {

    let pac = _pacientes.find(c => c.historiaClinica == req.params.historiaClinica);
    
    if(pac) {

        res.json(pac);

    }
    
    else {

        res.status(404).end();
    }
});



// add new client - Content Type: json

app.post('/api/pacientes', (req, res) => {

    _pacientes.push(req.body);

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