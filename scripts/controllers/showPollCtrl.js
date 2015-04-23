app.controller('showPollCtrl', ['$scope', '$routeParams', 'Poll',
   function ($scope, $routeParams, Poll) {
	
	$scope.init = function() {
		Poll.getPoll( $routeParams.id )
		.success( function(data) {
				$scope.poll = data[0];
		})
		.error( function(err) {
		});
	};
	$scope.init();						
}]);