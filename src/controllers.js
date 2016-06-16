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
    
    $scope.submit = function() {
      $location.path("/forecast");  
    };
    
    var self = this;
    
    self.testdata = [
        {id:1, label: 'First'},
        {id:2, label: 'Second'}
    ];   
    
}]);

weatherApp.controller('forecastController', ['$scope', '$location', '$log', '$resource','$routeParams', 'cityService', 'weatherAppService', function($scope, $location, $log, $resource, $routeParams, cityService, weatherAppService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.details = '';
    $scope.weatherResult = weatherAppService.GetWeather($scope.city, $scope.days)
    $scope.convertToFahrenheit = function(degK) {
        return (Math.round((1.8 * (degK - 273)) + 32));
    };
    
    $scope.convertToDate = function(dt) {
    
        return new Date(dt * 1000);
    
    };

    
}]);