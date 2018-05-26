function calcularPim(pim){
    var scorePim;
    var fio2_pao2;

/*
idPim: 1,
historiaClinica: 1,
diagnosticoMuyAltoRiesgo: 0,
diagnosticoAltoRiesgo: 0,
diagnosticoBajoRiesgo: 0,
presionSistolica: 0,
excesoDeBaseEnSangre: 0,
fiO2: 0,
paO2: 0,
adminisionElectivaUci: 0,
midriasisBilateral: 0,
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
*/
    if (pim.diagnosticoMuyAltoRiesgo!=0){
        if(pim.diagnosticoMuyAltoRiesgo=5 && pim.txHIV==1){
            pim.diagnosticoMuyAltoRiesgo=0;
        }else{
            pim.diagnosticoMuyAltoRiesgo=1;
        }
    }
    if(pim.diagnosticoAltoRiesgo!=0){
        pim.diagnosticoAltoRiesgo=1;
    }
    if(pim.diagnosticoBajoRiesgo!=0){
        pim.diagnosticoBajoRiesgo=1;
    }

    if ((pim.fio2==null || pim.fio2==0) || (pim.pao2==null || pim.pao2==0)){
        fio2_pao2 = 0.23;
    }else{
        fio2_pao2 = pim.fio2 / pim.pao2;
    }
    
    scorePim =
        ((pim.adminisionElectivaUci * -0.5378)
           + (pim.midriasisBilateral * 3.8233)
           + (pim.asistenciaRespiracionMecanica * 0.9763)
           +  Math.abs(pim.excesoDeBaseEnSangre * 0.0671)
           + (pim.presionSistolica * -0.0431)
           + ((pim.presionSistolica * pim.presionSistolica / 1000) * 0.1716)
           +

           + (pim.recuperacionByPassCardiaco * -1.2246)
           + (pim.recuperacionProcCardSinByPassCardiaco * -0.8762)
           + (pim.recuperacionOtroProcedimientoNoCardiaco * -1.5164)
           +
             (pim.diagnosticoMuyAltoRiesgo * 1.6225)
           + (pim.diagnosticoAltoRiesgo * 1.0725)
           + (pim.diagnosticoBajoRiesgo * -2.1766)
           - 1.7928,5
        );
 
    return scorePim;
}
exports.calcularPim=calcularPim;
