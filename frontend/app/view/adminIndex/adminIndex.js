'use strict';

angular.module('app.adminIndex', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/loggin', {templateUrl: 'view/adminIndex/loggin.html'});
    $routeProvider.when('/loggin', {templateUrl: 'abm_paciente/add_paciente.html'});
}])

.controller('IndexCtrl', ['$scope', '$http', '$window', '$location', 'Utils',
    function($scope, $http, $window, $location, Utils) {

    $scope.inputLogginPattern = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/;

    if ($window.sessionStorage.token == null){
        $scope.isAuthenticated = false;
        document.getElementById("loginStatus").className="unlogged";
    }else{
        $scope.isAuthenticated = true;
        document.getElementById("loginStatus").className="logged";
    }

    $scope.login = function () {
        //$window.sessionStorage.token = data.token;
        //$window.sessionStorage.setItem("user", JSON.stringify(data.user));
        $scope.isAuthenticated = true;
        document.getElementById("loginStatus").className="logged";
        window.location.href = "/home";
        /*
        AuthenticatorService.authenticate($scope.user)
            .success(function (data) {
                $window.sessionStorage.token = data.token;
                $window.sessionStorage.setItem("user", JSON.stringify(data.user));
                $scope.isAuthenticated = true;
                document.getElementById("loginStatus").className="logged";
                window.location.href = "/";
            })
            .error(function() {
                toastr.warning("Nombre de grupo o password invalidos.", null, Utils.opts);
                delete $window.sessionStorage.token;
                $scope.isAuthenticated = false;
                document.getElementById("loginStatus").className="unlogged";
                $scope.error = 'Error: Invalid group or password';
            });
        */
    };

    $scope.logout = function () {
        $scope.isAuthenticated = false;
        delete $window.sessionStorage.token;
        document.getElementById("loginStatus").className="unlogged";
        window.location.href = "/";
    };
}]);