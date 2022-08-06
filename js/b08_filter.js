// hướng dẫn sử dụng filter trong angularjs
/* bài tập đề ra là tạo bảng nv gồm tên, date, salarry, và gender hiển thị bảng table bằng repeat directive,
controller và cách xây sựng code với cách viết tinh gọn khi khai báo iject trong repeat directive
*/

var myApp =angular.module('myModule', []);

myApp.controller('filterController',['$scope', function($scope){
    var informations =[
        {name: 'tuấn', birthDate: '22/09/2022', salary:4500000, gender:'MALE', myFilter:true},
        {name: 'tuấn', birthDate: '01/09/2022', salary:4500000, gender:'MALE', myFilter:true},
        {name: 'tuấn', birthDate: '05/23/2022', salary:4500000, gender:'MALE', myFilter:false},
        {name: 'tuấn', birthDate: '02/19/2022', salary:4500000, gender:'MALE', myFilter:false},
        {name: 'tuấn', birthDate: '22/2022/09', salary:4500000, gender:'MALE', myFilter:true}
        
    ];
    $scope.informations=informations;

    // chức năng limitTo giới hạn sự xuất hiện và view hiển thị của thành phần mảng repeat directive
    $scope.limitRow=3;
  }    
]);

// xây dựng filter tự định nghĩa

    myApp.filter('myFilter', function(){
        return function(input){
            if(input==true)
                return 'kích hoạt';
            else  
                return 'khóa';
        }
    });




