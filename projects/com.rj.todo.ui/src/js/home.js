var app = angular.module('rj.todo.app');

app.controller('homeCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {

  $scope.removeTask = _removeTask;
  $scope.addTask = _addTask;
  _init();

  function _init() {
    $scope.tasks = [
      {
        title: "First Sample task"
      }
    ];
  }

  function _removeTask(taskIndex) {
    $scope.tasks.splice(taskIndex, 1);
  }

  function _addTask() {
    $scope.tasks.push({title: $scope.newTaskTitle});
    $scope.newTaskTitle = null;
  }
}]);
