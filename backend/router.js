var express = require("express");
var router = express.Router();
const Paciente = require('./models/pacientes');
const Pim = require('./models/pims');
const calcPim = require('./calcularPim');

//API PACIENTES

router.get('/pacientes', (req, res) => {
    Paciente.find({}, (err, pacientes) =>{
        if(err) return res.status(500).send('Error al realizar la peticion' + err);
        if(!pacientes) return res.status(404).send('No existen pacientes');
        
        res.status(200).send({pacientes});
    });

});

router.get('/pacientes/:id', (req, res) => {
    let id= req.params.id;
    Paciente.findById(id, (err, pacientes)=>{
        if(err) return res.status(500).send('Error al realizar la peticion' + err);
        if(!pacientes) return res.status(404).send('No existe el pacientes');
        
        res.status(200).send({ pacientes });
    })
});

router.post('/pacientes', (req, res) => {

    let paciente = new Paciente();
    paciente.historiaClinica = req.body.historiaClinica;
    paciente.nombre = req.body.nombre;
    paciente.apellido = req.body.apellido;
    paciente.fechaNacimiento = req.body.fechaNacimiento;
    paciente.sexo = req.body.sexo;
    paciente.ultimoPeso = req.body.ultimoPeso;
    paciente.superficieCorporal = req.body.superficieCorporal;
    paciente.fechaUltimoCambioUF = req.body.fechaUltimoCambioUF;
    console.log(paciente);
    paciente.save((err, pacienteStored)  => {
        if (err){
            res.status(500).send({message: 'Error'+err})
        } 
        res.status(200).send({paciente: pacienteStored})
    });
});

router.put('/pacientes/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    console.log(body);
    Paciente.findByIdAndUpdate(id, body, (err, pacienteStored)=>{
        if(err) return res.status(500).send('Error al actualizar el paciente' + err)
        res.status(200).send({paciente: pacienteStored})
    })
});

router.delete('/pacientes/:id', (req, res) => { 
    let id= req.params.id;
    Paciente.findByIdAndRemove(id, (err, pacientes)=>{
        if(err) return res.status(500).send('Error al buscar el paciente' + err)
        //if(!pacientes) return res.status(404).send('No existe el pacientes');
    })
    res.status(200).send( 'paciente eliminado' );
});




//API PIM
router.get('/pims', (req, res) => {
    Pim.find({}, (err, pims) =>{
        if(err) return res.status(500).send('Error al realizar la peticion' + err);
        if(!pims) return res.status(404).send('No existen el pim para esos pacientes');
        for (var i in pims){
            pims[i].pim=calcPim.calcularPim(pims);
            console.log("entro al for " + pims[i]._id +' '+ [i]);
        }
        res.status(200).send({pims});
    });
});

router.get('/pacientes/:id/pims', (req, res) => {
    Pim.find({}, (err, pims) =>{
        if(err) return res.status(500).send('Error al realizar la peticion' + err);
        if(!pims) return res.status(404).send('No existen el pim para esos pacientes');
        pims[0].pim=calcPim.calcularPim(pims);
        res.status(200).send({pims});
    });
});

router.get('/pacientes/:idPaciente/pims/:idPim', (req, res) => {
    let idPaciente= req.params.idPaciente;
    let idPim= req.params.idPim;
    Pim.findById(idPim, (err, pims)=>{
        if(err) return res.status(500).send('Error al realizar la peticion' + err);
        if(!pims) return res.status(404).send('No existe el pims para ese paciente');
        pims.pim=calcPim.calcularPim(pims);
        res.status(200).send({ pacientes });
    })
});

router.post('/pacientes/:id/pims', (req, res) => {

    let idPaciente = req.params.id;
    let pim = new Pim();
    pim.paciente = idPaciente;
    pim.idPim = req.body.idPim,
    pim.historiaClinica = req.body.historiaClinica,
    pim.diagnosticoMuyAltoRiesgo = req.body.diagnosticoMuyAltoRiesgo,
    pim.diagnosticoAltoRiesgo = req.body.diagnosticoAltoRiesgo,
    pim.diagnosticoBajoRiesgo = req.body.diagnosticoBajoRiesgo,
    pim.presionSistolica = req.body.presionSistolica,
    pim.excesoDeBaseEnSangre = req.body.excesoDeBaseEnSangre,
    pim.fiO2 = req.body.fiO2,
    pim.paO2 = req.body.paO2,
    pim.adminisionElectivaUci = req.body.adminisionElectivaUci,
    pim.midriasisBilateral = req.body.midriasisBilateral,
    pim.asistenciaRespiracionMecanica = req.body.asistenciaRespiracionMecanica,
    pim.recuperacionPostQX = req.body.recuperacionPostQX,
    pim.recuperacionByPassCardiaco = req.body.recuperacionByPassCardiaco,
    pim.recuperacionProcCardSinByPassCardiaco = req.body.recuperacionProcCardSinByPassCardiaco,
    pim.recuperacionOtroProcedimientoNoCardiaco = req.body.recuperacionOtroProcedimientoNoCardiaco,
    pim.txHIV = req.body.txHIV,
    pim.HIV = req.body.HIV,
    pim.transplateHepaticoDeDonanteVivo = req.body.transplateHepaticoDeDonanteVivo,
    pim.fechaCreacion = req.body.fechaCreacionDate,
    pim.codigoMedico = req.body.codigoMedico,
    pim.usuario = req.body.usuario,
    pim.pim = req.body.pim,
    pim.probMuerte = req.body.probMuerte
    console.log(pim);
    pim.save((err, pimStored)  => {
        if (err){
            res.status(500).send({message: 'Error'+err})
        } 
        res.status(200).send({pim: pimStored})
    });
});

router.put('/pacientes/:idPaciente/pims/:idPim', (req, res) => {
    let idPim = req.params.idPim;
    let body = req.body;
    Pim.findByIdAndUpdate(idPim, body, (err, pimStored)=>{
        if(err) return res.status(500).send('Error al actualizar el pim' + err)
        res.status(200).send({pim: pimStored})
    })
});

router.delete('/pacientes/:idPaciente/pims/:idPim', (req, res) => {

    let idPim= req.params.idPim;
    Pim.findByIdAndRemove(idPim, (err, pims)=>{
        if(err) return res.status(500).send('Error al buscar el pim' + err)
        //if(!pacientes) return res.status(404).send('No existe el pacientes');
    })
    res.status(200).send( 'pim eliminado' );
    
});

module.exports = router