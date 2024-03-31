var app = angular.module("ShoppingListApp",[]);
app.controller("ListController",function($scope){
   $scope.list =["Milk","cheese","eggs"];
   $scope.addItem = function(z){
    $scope.list.push(z);
    $scope.newItem = "";
   }
   $scope.removeItem = function(y){
     var removeItem = $scope.list.indexOf(y);
     $scope.list.splice(removeItem,1);
     
   }
});