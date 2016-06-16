// Jasmine unit tests

describe('Hello message:', function(){
    
    beforeEach(module('weatherApp'));
    
  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));   
    
    
      
    
    beforeEach(inject(function(){
        var homeCtrl; 
        homeCtrl = $controller('homeController');
    }));    
    

    it('should be green', function(){
        var green = 'green';
        console.log(green);
        alert(green);
        expect(green).toBe('green');
        
    });
    
});
 

/*
describe('Controller: homeController', function() {
   
    beforeEach(module('weatherApp'));
    
    var homeCtrl;
    
    // Instantiate a new instance of home controller 
    beforeEach(inject(function($controller){
        homeCtrl = $controller('homeController');
    }));
    
    it('it should be green', function(){
       
        var message = 'green';
        expect(message).toBe('green');
    });

    it('should have the city set correctly', function(){
       expect(homeCtrl.testdata).toEqual([
        {id:1, label: 'First'},
        {id:2, label: 'Second'}           
       ]); 
    });    
});  */