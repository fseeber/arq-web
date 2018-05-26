
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PimSchema = Schema({
    idPim: Number,
    historiaClinica: String,
    diagnosticoMuyAltoRiesgo: Number,
    diagnosticoAltoRiesgo: Number,
    diagnosticoBajoRiesgo: Number,
    presionSistolica: Number,
    excesoDeBaseEnSangre: Number,
    fiO2: Number,
    paO2: Number,
    adminisionElectivaUci: Number,
    midriasisBilateral: Number,
    asistenciaRespiracionMecanica: Number,
    recuperacionPostQX: Number,
    recuperacionByPassCardiaco: Number,
    recuperacionProcCardSinByPassCardiaco: Number,
    recuperacionOtroProcedimientoNoCardiaco: Number,
    txHIV: Number,
    HIV: Number,
    transplateHepaticoDeDonanteVivo: Number,
    fechaCreacion: Date,
    codigoMedico: Number,
    usuario: String,
    pim: Number,
    probMuerte: Number,
    paciente : { type: Schema.Types.ObjectId, ref: 'Paciente' }
})

module.exports =  mongoose.model('Pim', PimSchema);
/*
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
        usuario: "Pepo",
        pim: 2,
        probMuerte: 0
      },
      { 
        idPim: 2,
        historiaClinica: 2,
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
        usuario: "Pepo",
        pim: 2,
        probMuerte: 0
      }
];
*/