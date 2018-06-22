'use strict';

angular.module('app.add_paciente', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/add_paciente', {templateUrl: 'view/abm_paciente/add_paciente.html'});
	$routeProvider.when('/edit_paciente/:id', {templateUrl: 'view/abm_paciente/add_paciente.html'});
}])

.controller('AddPacienteCtrl', ['$scope', '$routeParams', '$http', '$window', '$location', 'Utils','PacienteService',
	                                   function($scope, $routeParams, $http, $window, $location, Utils, PacienteService) {
	
	$scope.pacienteId = null;
	$scope.paciente = {};
	
	if($routeParams.id != undefined){
	   $scope.pacienteId = $routeParams.id;
	   PacienteService.findById($scope.pacienteId)
	   .success(function (data) {
		   $scope.paciente.historiaClinica = data.pacientes.historiaClinica;
		   $scope.paciente.nombre = data.pacientes.nombre;
		   $scope.paciente.apellido = data.pacientes.apellido;
		   $scope.paciente.fechaNacimiento = data.pacientes.fechaNacimiento;
		   $scope.paciente.sexo = data.pacientes.sexo;
	   });
	}
	console.log($scope);
	
	$scope.save = function(){
			console.log($scope);
			if ($scope.pacienteId != undefined){
				PacienteService.update($scope.pacienteId, $scope.paciente)
				.success(function () {
					$scope.paciente = {};
					toastr.warning("El paciente fue actualizado con éxito", null, Utils.opts);
				});
			}else{
				PacienteService.add($scope.paciente)
				.success(function () {
					$scope.paciente = {};
					toastr.warning("El paciente fue ingresado con éxito", null, Utils.opts);
				});
			}
			
	};
	
	$scope.back = function(){
		$location.path('/paciente_list');
	};

}]);