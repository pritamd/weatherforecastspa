'use strict';
// Setup routes
weatherApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    // route for the home page
    .when('/', {
        templateUrl : './pages/home.htm',
        controller : 'homeController'
    })
    // route for the forecast page 
    .when('/forecast', {
        templateUrl : './pages/forecast.htm',
        controller: 'forecastController'        
    }) 
    .when('/forecast/:days', {
        templateUrl : 'pages/forecast.htm',
        controller: 'forecastController'        
    });
}]); 
 
