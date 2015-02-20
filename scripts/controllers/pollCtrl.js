app.controller('pollCtrl', function ($scope, $http, $routeParams) {
	$scope.message= $routeParams.pid;
	$http.get('/api/poll/'+$routeParams.pid)
		.success(function(data) {
			$scope.poll = data[0];
		})
		.error(function(err){
			console.log(err);
		});
});