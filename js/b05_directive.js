// ta sẽ tạo các directive trong angular
var myApp=angular.module('demo', []);

myApp.controller('myController', function($scope){
    // không cần khởi tạo value view chỉ cần dùng ng-init ngay trong html ta có thể khởi tạo value trong html
    // như vậy nếu không cần định nghĩa trong controller trên js thì ta có thể định nghĩa thông qua ng-init khởi tạo trong html luôn
});



// directive tự tạo

myApp.controller('myController1', function($scope){

}).directive('textDirective', function(){
    return{
        template:'<h1>day la vi du ve directive tu tao<h1>'
        // có thể đem html vào trong js
    }
})