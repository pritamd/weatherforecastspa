// Create controller
weatherApp.controller('homeController', ['$scope', '$location', '$log', 'cityService',  function($scope, $location, $log, cityService){
    $scope.city = cityService.city;
    $scope.result = '';
    $scope.options = {
        country: 'us',
        types: '(cities)'
    };
    $scope.$watch('city', function(){
       cityService.city = $scope.city; 
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$location', '$log', '$resource','$routeParams', 'cityService', function($scope, $location, $log, $resource, $routeParams, cityService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.details = '';
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city,
                                                  cnt: $scope.days,
                                                  appid: "<API ID>"});
    $scope.convertToFahrenheit = function(degK) {
        return (Math.round((1.8 * (degK - 273)) + 32));
    };
    
    $scope.convertToDate = function(dt) {
    
        return new Date(dt * 1000);
    
    };

    
}]);