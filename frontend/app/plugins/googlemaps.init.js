angular.module('googlemaps.init', [])

.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDR0BVaP87eYzcAcAKxFmCK3ljIFRtDtrA',
        libraries: 'weather,geometry,visualization'
    });
}])

.directive('creatorMapComponent', ['uiGmapGoogleMapApi', '$timeout',

    /*
        Do not remove this directive, it is what powers the Creator Drag & Drop Component.
    */

    function(uiGmapGoogleMapApi, $timeout) {

        return {
            restrict: 'E',
            scope: true,
            link: function($scope, $element, $attr, _c, transclude) {
            
                $scope.map = {};
                
                if ($attr.marker=="true"){
                    $scope.map.marker = {
                        id: 0
                    }
                }
                
                $attr.$observe('location', function(){
                    
                    uiGmapGoogleMapApi.then(function(maps){
                            $scope.map.zoom = parseInt($attr.zoom);
                            $timeout(function(){
                                $scope.map.center = {
                                    latitude: $attr.lat,
                                    longitude: $attr.lng
                                };  
                            });
                            $scope.map.options = JSON.parse($attr.options);
                            
                            if ($attr.marker=="true"){
                                $scope.map.marker.coords = {
                                    latitude: $attr.lat,
                                    longitude: $attr.lng
                                }
                            }
                    });
                            
                });
            
            }
      
        };
}]);