var app = angular.module('rj.todo.app');

app.directive("todoTask", function() {
  return {
    replace: true,
    restrict: "E",
    templateUrl: 'partials/task.tpl.html'
  };
});