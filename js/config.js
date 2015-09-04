app.config(function($routeProvider){
	
	$routeProvider
		.when('/main.html',

			{

				controller: 'taskController',
				templateUrl: 'main.html'

			})

		.when('/task/:id',

			{

				controller: 'taskController',
				templateUrl: ''

			})

		.otherwise({redirectTo: '/main.html'});

});