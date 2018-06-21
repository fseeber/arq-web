'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'view/home/home.html'});
}])

.controller('homeCtrl', ['$scope', function($scope) {

}]);