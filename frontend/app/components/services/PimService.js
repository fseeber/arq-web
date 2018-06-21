angular.module('app.pim_service', [])
    .factory('PimService', ['$http', 'Utils', function($http, Utils) {

    var PimService = {};

    PimService.findAll = function () {
        return $http.get(Utils.serviceHost+'/api/pims/');
    };

    PimService.findById = function (id) {
        return $http.get(Utils.serviceHost+'/api/pacientes/'+id);
    };
    
    PimService.add = function (id, params) {
        return $http.post(Utils.serviceHost+'/api/pacientes/'+id+'/pims/', params);
    };
    
    PimService.update = function (id, params) {
        return $http.put(Utils.serviceHost+'/api/pacientes/'+id, params);
    };
    
    PimService.delete = function (id) {
        return $http.delete(Utils.serviceHost+'/api/pacientes/'+id);
    };
    
    return PimService;
}]);