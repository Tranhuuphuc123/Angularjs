// ta bắt sự kiện click với bảng table tăng giảm giá trị trong controller và ng-click

var myApp=angular.module('myApp', []);

myApp.controller('myController',['$scope', function($scope){
    var technologies =[
        {name:'C#',like:0, disklike:0,},
        {name:'C#',like:0, disklike:0},
        {name:'C#',like:0, disklike:0},
        {name:'C#',like:0, disklike:0}
    ];
    $scope.technologies=technologies;
    $scope.increaselike=function(technologies){
        technologies.like++;
    }
    $scope.increasedisklike=function(technologies){
        technologies.disklike++;
    }
}])