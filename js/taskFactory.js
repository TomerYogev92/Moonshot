app.factory('taskFactory', function($scope){

	var factory = {};
	var tasks = [];
	
	factory.getTasks = function(){

		if(typeof(Storage) !== "undefined"){
	  
		  if(localStorage.getItem('tasks') != null){

		  	tasks = JSON.parse(localStorage.getItem('tasks'));
		    
		  }
	   
		}

	};

	factory.setTask = function(){

		tasks.push({id: tasks.length + 1,
								title: $scope.title,
								description: $scope.description
							});

		if(typeof(Storage) !== "undefined"){

				localStorage.setItem('tasks', JSON.stringify(tasks));

		}	

	};

	factory.editTask = function(id){

		if(typeof(Storage) !== "undefined"){

			tasks[id - 1] = {id: id,
											 title: $scope.title,
											 description: $scope.description
											};

		}

	};

	return factory;

});