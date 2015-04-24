app.controller('searchPollCtrl', function($scope, $routeParams, $location, Poll) {
	$scope.message = 'Hello World..';
	$scope.results = [];
	
	
	$scope.getResults = function() {
		Poll.search($scope.searchKeywords)
		.success( function(data) {
			$scope.results = data;
			
		})
		.error(function(err) {
		});
		
		//Change URL
		$location.search({ q : $scope.searchKeywords});
	};
	
	//If users directly search from URL
	$scope.urlSearchParams = function() {
		if ( $routeParams.q ) {
			$scope.searchKeywords = $routeParams.q;
			
			$scope.getResults();
		}
	}();
	
});