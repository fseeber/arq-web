'use strict';

angular.module('app.add_pim', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/add_pim/:id', {templateUrl: 'view/abm_pim/add_pim.html'});
	$routeProvider.when('/edit_pim/:id', {templateUrl: 'view/abm_pim/add_pim.html'});
}])

.controller('AddPimCtrl', ['$scope', '$routeParams', '$http', '$window', '$location', 'Utils','PimService', 'PacienteService',
	                                   function($scope, $routeParams, $http, $window, $location, Utils, PimService, PacienteService) {
	
	$scope.pimId = null;
	$scope.pacienteId = null;
	$scope.pim = {};
	$scope.pimId = $routeParams.idPim;
	$scope.pacienteId = $routeParams.idPaciente;
	console.log($routeParams);
	if($routeParams.idPim != undefined){

		PimService.findById($scope.pacienteId, $scope.pimId)
		.success(function (data) {
			console.log(data);
			/*
			"diagnosticoMuyAltoRiesgo": 2,
            "diagnosticoAltoRiesgo": 2,
            "diagnosticoBajoRiesgo": 2,
            "presionSistolica": 2,
            "excesoDeBaseEnSangre": 2,
            "fiO2": 2,
            "paO2": 2,
            "adminisionElectivaUci": 2,
            "midriasisBilateral": 2,
            "asistenciaRespiracionMecanica": 2,
            "recuperacionByPassCardiaco": 2,
            "recuperacionProcCardSinByPassCardiaco": 2,
            "recuperacionOtroProcedimientoNoCardiaco": 2,
            "txHIV": 2,
            "HIV": 2,
			"transplateHepaticoDeDonanteVivo": 2,
			*/
			$scope.pim.diagnosticoMuyAltoRiesgo = data.pims.diagnosticoMuyAltoRiesgo;
			$scope.pim.diagnosticoAltoRiesgo = data.pims.diagnosticoAltoRiesgo;
			$scope.pim.diagnosticoBajoRiesgo = data.pims.diagnosticoBajoRiesgo;
			$scope.pim.presionSistolica = data.pims.presionSistolica;
			$scope.pim.excesoDeBaseEnSangre = data.pims.excesoDeBaseEnSangre;
			$scope.pim.fiO2 = data.pims.fiO2;
			$scope.pim.paO2 = data.pims.paO2;
			$scope.pim.adminisionElectivaUci = data.pims.adminisionElectivaUci;
			$scope.pim.midriasisBilateral = data.pims.midriasisBilateral;
			$scope.pim.recuperacionPostQX = data.pims.recuperacionPostQX;
			$scope.pim.asistenciaRespiracionMecanica = data.pims.asistenciaRespiracionMecanica;
			$scope.pim.recuperacionByPassCardiaco = data.pims.recuperacionByPassCardiaco;
			$scope.pim.recuperacionProcCardSinByPassCardiaco = data.pims.recuperacionProcCardSinByPassCardiaco;
			$scope.pim.recuperacionOtroProcedimientoNoCardiaco = data.pims.recuperacionOtroProcedimientoNoCardiaco;
			$scope.pim.txHIV = data.pims.txHIV;
			$scope.pim.HIV = data.pims.HIV;
			$scope.pim.transplateHepaticoDeDonanteVivo = data.pims.transplateHepaticoDeDonanteVivo;
		});
	}

	$scope.save = function(){
		$scope.pacienteId = $routeParams.idPaciente;
		$scope.pimId = $routeParams.idPim;
		console.log($scope);
		if ($scope.pimId != undefined){
			PimService.update($scope.pacienteId, $scope.pimId, $scope.pim)
			.success(function () {
				$scope.pim = {};
				toastr.warning("El pim fue actualizado con éxito", null, Utils.opts);
				$location.path('/paciente_list');
			});
		}else{
			$scope.pacienteId = $routeParams.id;
			PimService.add($scope.pacienteId, $scope.pim)
			.success(function () {
				$scope.pim = {};
				toastr.warning("El pim fue ingresado con éxito", null, Utils.opts);
				$location.path('/paciente_list');
			});
		}

	};
	
	$scope.generalPattern = /^[a-zA-Z0-9-_]{3,254}$/i;

	$scope.back = function(){
		$location.path('/paciente_list');
	};

}]);