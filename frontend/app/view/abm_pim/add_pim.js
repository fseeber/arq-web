'use strict';

angular.module('app.add_pim', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/add_pim/:id', {templateUrl: 'view/abm_pim/add_pim.html'});
	$routeProvider.when('/edit_pim/:id', {templateUrl: 'view/abm_pim/add_pim.html'});
}])

.controller('AddPimCtrl', ['$scope', '$routeParams', '$http', '$window', '$location', 'Utils','PimService', 'PacienteService',
	                                   function($scope, $routeParams, $http, $window, $location, Utils, PimService, PacienteService) {
	
	$scope.pimId = null;
	$scope.pim = {};
	
	$scope.save = function(){

		PimService.add($scope.pacienteId, $scope.paciente.pim)
		.success(function () {
			$scope.pim = {};
			toastr.warning("El pim fue ingresado con éxito", null, Utils.opts);
		});
	};

	if($routeParams.id != undefined){
	   $scope.pacienteId = $routeParams.id;
	   PimService.findById($scope.pacienteId)
		   .success(function (data) {
			   $scope.paciente = data[0];
		   })
	}
	
	
	$scope.generalPattern = /^[a-zA-Z0-9-_]{3,254}$/i;
	
	
	
	$scope.deletePaciente = function(id){
		PimService.delete(id)
		.success(function () {
			$location.path('/paciente_list');
			toastr.warning("El paciente fue eliminado con éxito", null, Utils.opts);
		});
	}

	$scope.back = function(){
		$location.path('/paciente_list');
	};

}]);