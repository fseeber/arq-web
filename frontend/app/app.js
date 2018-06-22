'use strict';

angular.module('app', ['ngRoute', 'app.services', 'app.directives',  
							'app.paciente_service',
							'app.pim_service',
							'app.adminIndex', 'app.home',
							'app.add_paciente', 'app.paciente_list',
							'app.add_pim', 'app.pim_list'
							
])

.constant('PAGE_SIZE', 8)

.config([ '$routeProvider', function($routeProvider) {
	/*
	$routeProvider.otherwise({
		redirectTo : '/home',
		//templateUrl : 'view/home/home.html'
		templateUrl : 'view/abm_paciente/add_paciente.html'
	});
	*/
	$routeProvider.when('/paciente_list', {templateUrl: 'view/abm_paciente/paciente_list.html'});
	$routeProvider.when('/edit_paciente', {templateUrl: 'view/abm_paciente/add_paciente.html'});
	$routeProvider.when('/add_pim', {templateUrl: 'view/abm_pim/add_pim.html'});
	$routeProvider.when('/edit_pim/:idPaciente/:idPim', {templateUrl: 'view/abm_pim/add_pim.html'});
	$routeProvider.when('/pim_list', {templateUrl: 'view/abm_pim/pim_list.html'});
}])

.config(function($httpProvider) {
	$httpProvider.interceptors.push('authInterceptor');
})

;