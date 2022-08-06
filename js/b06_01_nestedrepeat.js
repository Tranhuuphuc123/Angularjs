// phần học về repeat drrective lồng nhau nested

(function(){
    var myApp=angular.module('myApp',[]);

    myApp.controller('myController',['$scope',function($scope){
        var countries =[
            {
                name: 'UK',
                cities :[
                    {name: 'london'},
                    {name: 'paris'},
                    {name:'tokyo'}
                ]
            },
            {
                name: 'UK',
                cities :[
                    {name: 'london'},
                    {name: 'paris'},
                    {name:'tokyo'}
                ]
            },
            {
                name: 'UK',
                cities :[
                    {name: 'london'},
                    {name: 'paris'},
                    {name:'tokyo'}
                ]
            },
            {
                name: 'UK',
                cities :[
                    {name: 'london'},
                    {name: 'paris'},
                    {name:'tokyo'}
                ]
            }
        ];
        $scope.countries=countries;
    }]);
})();