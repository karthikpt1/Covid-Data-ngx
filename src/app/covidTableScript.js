var app = angular.module("covidData", []);

app.controller("CovidTableCtrl", function($scope) {
  $scope.data = [];

  function LoadData(resp) {
    $scope.allProducts = [];
    angular.forEach(resp.data.regional, function(item, index) {
      angular.forEach(item.products, function(item2, index) {
        if ($scope.allProducts.indexOf(item2.consummable) == -1) {
          $scope.allProducts.push(item2);
        }
      });
    });
  }
});
