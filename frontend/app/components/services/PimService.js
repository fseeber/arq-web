angular.module('app.pim_service', [])
    .factory('PimService', ['$http', 'Utils', function($http, Utils) {

    var PimService = {};

    PimService.findAll = function () {
        return $http.get(Utils.serviceHost+'/api/pims/');
    };

    PimService.findById = function (idPaciente, idPim) {
        return $http.get(Utils.serviceHost+'/api/pacientes/'+idPaciente+'/pims/'+idPim);
    };
    
    PimService.add = function (idPaciente, params) {
        return $http.post(Utils.serviceHost+'/api/pacientes/'+idPaciente+'/pims/', params);
    };
    
    PimService.update = function (idPaciente, idPim, params) {
        return $http.put(Utils.serviceHost+'/api/pacientes/'+idPaciente+'/pims/'+idPim, params);
    };
    
    PimService.delete = function (idPaciente, idPim) {
        return $http.delete(Utils.serviceHost+'/api/pacientes/'+idPaciente+'/pims/'+idPim);
    };
    
    return PimService;
}]);