'use strict';

angular.module('app.paciente_list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/paciente_list', {templateUrl: 'view/abm_pacinte/paciente_list.html'});
}])

.controller('PacienteListCtrl', ['$scope', '$http', '$window', '$location', 'PacienteService', 'PimService', 'Utils', 
	                                   function($scope, $http, $window, $location, PacienteService, PimService, Utils) {

	
	$scope.init = function(){
		$scope.pacientes = {};
		
		PacienteService.findAll()
			.success(function (data) {
				$scope.pacientes = data;
			});
	}
	
	$scope.search = function(){
		PacienteService.findById($scope.paciente._id)
			.success(function (data) {
				$scope.pacientes.pacientes = data;
			});
	}
	
	$scope.deletePaciente = function(id){
		PacienteService.delete(id)
		.success(function () {
			$location.path('/paciente_list');
			toastr.warning("El paciente fue eliminado con éxito", null, Utils.opts);
		});
		$scope.init();
	}

	$scope.deletePim = function(idPaciente, idPim){
		PimService.delete(idPaciente, idPim)
		.success(function () {
			$location.path('/paciente_list');
			toastr.warning("El pim fue eliminado con éxito", null, Utils.opts);
		});
		$scope.init();
		$scope.init2();
	}

	$scope.clear = function(){
		$scope.paciente._id=''; 
		$scope.pacientes;
		$scope.init();
		$scope.init2();
	}
	
	
	$scope.init2 = function(){
		$scope.pims = {};
		
		PimService.findAll()
			.success(function (data) {
				$scope.pims = data;
			});
	}
	$scope.init();
	$scope.init2();
	console.log($scope);
	
}]);