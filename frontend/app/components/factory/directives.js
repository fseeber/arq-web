angular.module('app.directives', [])


.directive('unlogged', function() {
    if (window.sessionStorage.token == null) {
        return {
            restrict : 'C',
            //templateUrl : 'view/adminIndex/loggin.html'
            templateUrl : 'view/adminIndex/template.html'
        };
    } else {
        return {
            restrict : 'C',
            templateUrl : 'view/adminIndex/template.html'
        };
    }
})

.directive('logged', function() {
    if (window.sessionStorage.token == null) {
        return {
            restrict : 'C',
            //templateUrl : 'view/adminIndex/loggin.html'
            templateUrl : 'view/adminIndex/template.html'
        };
    } else {
        return {
            restrict : 'C',
            templateUrl : 'view/adminIndex/template.html'
        };
    }
})
;