var app = angular.module('rj.todo.app', []);

app.run(['$templateCache', '$rootScope', function($templateCache, $rootScope) {
  $rootScope.appTitle = "RJist | Todo List";
}]);

var app = angular.module('rj.todo.app', []);
