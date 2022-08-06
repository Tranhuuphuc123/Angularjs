// xây dựng module và controller nhúng vào html theo kiểu tường minh

        // tạo module
        var myApp = angular.module('Huuphuc', []);

        // tạo một controller
        myApp.controller ('Huuphuc_2',myController);

        // xây dựng hàm huuphuc_2 để hiển thị nội dung cần view

        function myController($scope){
            // $cope dùng để lk controller và view
            $scope.message='tập làm quen với anguller và controller';
        }


// xây dựng controller theo kiểu ẩn danh gút gọn
    myApp.controller('Huuphuc_3', function($scope){
        $scope.message="khai bao nặc danh  kiểu tinh gọn nha";
    })

// controller nâng cao với binding --->
/*  Ràng buộc (binding) dữ liêu là phản ánh logic hoặc biến của một đối tượng trên view của ứng dụng.
 Bất cứ khi nào có sự thay đổi thì view cũng phải cập nhật các DOM với các giá trị mới . Angular framwork có 
 nhưng các ràng buộc dữ liệu mạnh mẽ. */

        myApp.controller("Huuphuc_4", function($scope){
            var tennv ={
                FirstName: 'Tran',
                LastName: 'Phuc',
                Gender: 'Male'
            }
            $scope.tennv =tennv;
        })