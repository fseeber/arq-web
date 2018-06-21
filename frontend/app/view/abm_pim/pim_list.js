'use strict';

angular.module('app.pim_list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/paciente_list', {templateUrl: 'view/abm_pacinte/paciente_list.html'});
}])

.controller('PimListCtrl', ['$scope', '$http', '$window', '$location', 'PimService', 'Utils',
	                                   function($scope, $http, $window, $location, PimService, Utils) {

	
	$scope.init = function(){
		$scope.pims = {};
		
		PimService.findAll()
			.success(function (data) {
				$scope.pims = data;
			});
	}
	
	$scope.search = function(){
		PimService.findById($scope.pims._id)
			.success(function (data) {
				$scope.pims.pims = data;
			});
	}
	
	$scope.deletePim = function(id){
		PimService.delete(id)
		.success(function () {
			$location.path('/pim_list');
			toastr.warning("El pim fue eliminado con éxito", null, Utils.opts);
		});
		$scope.init();
	}

	$scope.clear = function(){
		$scope.pims
		$scope.init();
		
	}

	$scope.init();
	
}]);