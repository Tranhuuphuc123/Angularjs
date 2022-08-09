// luyện tập code orderBy sắp xếp dữ liệu với header click trên table


var myApp = angular.module('myApp', []);

myApp.controller('myController',['$scope', function($scope){
    var employees =[
        {name:'Phúc', birthDate:  new Date('01/22/1995'), salary:50000000, gender:'male', myFilter:true},
        {name:'Tuấn', birthDate: new Date('10/03/197'), salary:30000000, gender:'male', myFilter:true},
        {name:'Phương', birthDate: new Date('05/10/1993'), salary:100000000, gender:'female', myFilter:false},
        {name:'Linh', birthDate: new Date('09/23/1996'), salary:200000, gender:'female', myFilter:false},
        {name:'Hào', birthDate: new Date('12/22/2004'), salary:7000000, gender:'male', myFilter:true},
    ];
    $scope.employees=employees;


    // sắp xếp dữ liệu của thuộc tính orderBy
    $scope.sapxepdulieu='name';
    $scope.reserve=false;


    // code định nghĩa bắt sự kiện ng-click

    $scope.dataclick=function(column){
        if($scope.sapxepdulieu==column) //phg thức $scope liên kết giữa model html và biến trong controler
            {
                $scope.reserve= !$scope.reserve;// giá trị sẽ đảo lại khi nhấn nhầm tạo tính năng chuyển khi ấn 
            }  
        else{
            $scope.reserve=false;
        }
        $scope.sapxepdulieu=column;
    }
   

    // code định nghĩa bắt sự kiện ng-class tạo thêm nút hiển thị với css html

     $scope.dataclass=function(column){
        if($scope.sapxepdulieu==column){
             return $scope.reserve?'arow-up':'arow-down';
        }else{
            return '';
        }
     }

}]);





// filter chuyển đổi dữ liệu tự định nghĩa

myApp.filter('myfil', function(){
    return function(input){
        if(input==true)
                return 'kích hoạt';
        else
               return 'khóa';
    }
})
