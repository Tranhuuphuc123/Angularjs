// bài này ta sẽ tìm hiểu về sắp xếp dữ liệu trong angularjs

var myApp = angular.module('myModule',[]);

myApp.controller('myController',['$scope', function($scope){
    var employees =[
        {name: 'tuấn', birthDate: '22/09/2022', salary:4500000, gender:'MALE', myFilter:true},
        {name: 'Hùng', birthDate: '10/09/2022', salary:500000, gender:'MALE', myFilter:true},
        {name: 'Vi', birthDate: '23/05/2022', salary:2500000, gender:'FEMALE', myFilter:false},
        {name: 'Long', birthDate: '02/01/2022', salary:500000, gender:'MALE', myFilter:false},
        {name: 'An', birthDate: '22/11/2022', salary:1000000, gender:'FEMALE', myFilter:true}
    ];
    $scope.employees=employees;
    $scope.set_orderBy='name';
}]);

// filter tự xây dựng.
myApp.filter('myFilter', function(){
    return function(input){
        if(input==true)
            return 'kích hoạt';
        else
            return 'khóa';
    }
})
