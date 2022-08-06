// tìm hiểu về $scope và $rootscope

var myApp = angular.module('mymodule', []); // tạo model lk với html thông quan ng-app

myApp.controller('myController', function($scope){
    $scope.name='tran huu phuc';
    $scope.click=function(){
        $scope.name= $scope.name + 'alo 123';
    }
})


// tạo rootscope một biến tổng quát chứa nhiều controller và có thể đc share dữ liệu controller với nhau

myApp.controller('myController01', myController01);
myApp.controller('myController02', myController02);


function myController01($scope, $rootScope){
    $rootScope.name='day la vi du ve rootScope';
};

/* ta có thể tạo nhiều controller nhưng chỉ cần khai báo value cần view một lần ở một controller đầu thui
thì các controller sau vẫn có thể share dữ liệu cùng một value đều đc nhờ vào biến $rootscope.
*/
function myController02($scope, $rootScope){
   // không cần khai báo value cotroller 02 vẫn ghi nhận value của controller 1 nhờ rootscope
};




