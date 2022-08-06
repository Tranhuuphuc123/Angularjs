// ng-repeat trong controller

var myApp =angular.module('myApp', []);

myApp.controller('myController', myController);

// khởi tạo repeat directive

myController.$inject =['$scope'];


// khởi tạo nội dung controller và repeat directive
function myController($scope){
    var employees =[
        {firstName: 'Phuc', lastName:'Tran', gender:'male', zipCode:'0710'},
        {firstName: 'Phuc', lastName:'Tran', gender:'male', zipCode:'0710'},
        {firstName: 'Phuc', lastName:'Tran', gender:'male', zipCode:'0710'},
        {firstName: 'Phuc', lastName:'Tran', gender:'male', zipCode:'0710'}
    ]
    $scope.employees=employees;
}



// nested repeat lồng nhau trong controller
