angular.module('app.services', [])


.factory('authInterceptor', function($rootScope, $q, $window, Utils) {
    return {
        request : function(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.authorization = $window.sessionStorage.token;
            }
            return config;
        },
        responseError : function(rejection) {
            if (rejection.status === 401) {
                // handle the case where the user is not authenticated
            }
            if (rejection.status === 404) {
                toastr.warning("No se han encontrado resultados", null, Utils.opts);
            }
            if (rejection.status === 500) {
                toastr.warning("Internal Server error", null, Utils.opts);
            }
            return $q.reject(rejection);
        }
    };
})

.factory('Utils', function() {
    var Utils = {
        opts : {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-bottom-left",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    };
    
    var IP = "localhost";
    var PORT = "8080";
    
	Utils.serviceHost= "http://" + IP + ":" + PORT;

	return Utils;
})
;