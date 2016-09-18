var app = angular.module('rj.todo.app');
app.controller('myCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {
  $scope.print = _print;
  function _print() {
    $scope.newText = "Its a new name";
  }
}]);
