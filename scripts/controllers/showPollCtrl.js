app.controller('showPollCtrl', ['$scope', '$routeParams', 'Poll',
   function ($scope, $routeParams, Poll) {
	
	$scope.init = function() {
		//Load the poll
		Poll.getPoll( $routeParams.id )
		.success( function(data) {
				$scope.poll = data[0];
		})
		.error( function(err) {
		});
		
		//Increment the view
		Poll.incView( $routeParams.id )
		.success(function(data) {})
		.error( function(err) {});
	};
	$scope.init();						
}]);