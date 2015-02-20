app.controller('indexCtrl', function ($scope, $http) {
	$scope.message= "Hello World";
	$http.get('/api/poll')
		.success(function(data) {
			$scope.polls = data;
		})
		.error(function(err){
			console.log(err);
		});
});