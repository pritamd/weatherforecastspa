'use strict';

// Jasmine unit tests
describe('Weather Forecast App:', function(){
    
    beforeEach(module('weatherApp'));

    var $controller;
    var $rootScope;
    var cityService;
    var weatherAppService;

    beforeEach(inject(function(_$controller_, _$rootScope_, _cityService_, _weatherAppService_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        cityService = _cityService_;
        weatherAppService = _weatherAppService_;
    }));   
    
    var homeCtrl; 
    var $scope = {};
    var forecastCtrl;
    
    // instantiate controllers
    beforeEach(function(){
            $scope = $rootScope.$new();
            homeCtrl = $controller('homeController', { $scope: $scope });   
            forecastCtrl = $controller('forecastController', { $scope: $scope });  
    });
    
    // unit tests for Home controller
    describe(' Home Controller:', function(){
        it('should validate options', function(){
            expect($scope.options).toEqual({
                                        country: 'us',
                                        types: '(cities)'
                                        });
        });
        
        it('should validate the default city setting', function(){
            expect(cityService.city).toEqual("Redmond, WA, United States");
        });
    });  
    
    // unit tests for Weather App Service controller
    describe(' Weather App Service Controller:', function(){
       it('should validate default days value', function(){
            expect($scope.days).toBe('2');
       });
        
        it('should validate convertToFahrenheit():', function(){
            expect($scope.convertToFahrenheit(290)).toBe(63); 
            expect($scope.convertToFahrenheit(300)).toBe(81); 
            expect($scope.convertToFahrenheit(273)).toBe(32);   
            expect($scope.convertToFahrenheit(241)).toBe(-26); 
            expect($scope.convertToFahrenheit(250)).toBe(-9); 
        });
        
        it('should validate convertToDate():', function(){
            var expectedDate = $scope.convertToDate(1000000000);
            expect(expectedDate.getDate()).toEqual(8);
            expect(expectedDate.getDay()).toEqual(6);
            expect(expectedDate.getFullYear()).toEqual(2001);
        });
    });     
});
