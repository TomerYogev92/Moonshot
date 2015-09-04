app.controller('taskController', function($scope, taskFactory){
	
	$scope.tasks = taskFactory.getTasks();

});