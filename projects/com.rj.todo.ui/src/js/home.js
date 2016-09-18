var app = angular.module('rj.todo.app');

app.controller('homeCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {

  $scope.update = _update;
  $scope.firstName = "";

  function _update() {
    $scope.firstName = $scope.firstName + " " + $scope.lastName;
  }
}]);
