angular.module('app.paciente_service', [])
    .factory('PacienteService', ['$http', 'Utils', function($http, Utils) {

    var PacienteService = {};

    PacienteService.findAll = function () {
        return $http.get(Utils.serviceHost+'/api/pacientes/');
    };

    PacienteService.findById = function (id) {
        return $http.get(Utils.serviceHost+'/api/pacientes/'+id);
    };
    
    PacienteService.add = function (params) {
        return $http.post(Utils.serviceHost+'/api/pacientes', params);
    };
    
    PacienteService.update = function (id, params) {
        return $http.put(Utils.serviceHost+'/api/pacientes/'+id, params);
    };
    
    PacienteService.delete = function (id) {
        return $http.delete(Utils.serviceHost+'/api/pacientes/'+id);
    };
    
    return PacienteService;
}]);