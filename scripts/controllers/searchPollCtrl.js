app.controller('searchPollCtrl', function($scope, Poll) {
	$scope.message = 'Hello World..';
	$scope.results = [];
	
	$scope.getResults = function() {
		Poll.search($scope.searchKeywords)
		.success( function(data) {
			$scope.results = data;
		})
		.error(function(err) {
		});
	};
});