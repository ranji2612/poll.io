app.controller('showPollCtrl', ['$scope', '$routeParams', 'Poll', 'Choice', function ($scope, $routeParams, Poll, Choice) {
	
	//Embed
	
	//General
	$scope.isVoted = false;
	$scope.selectedChoice = {
		text: ''
	};
	
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
		.error( function(err) {console.log(err);});
	}();

	$scope.castVote = function() {
		//Atleast one selected Choice
		if ($scope.selectedChoice.text.length > 0) {
			console.log($scope.selectedChoice);
			$scope.isVoted = true;
			//Cast the vote
			Choice.upVote($scope.poll._id, $scope.selectedChoice.text)
			.success(function(data) {})
			.error( function(err) {console.log(err);});
		} else {
			console.log("Pls select atleast one option");
		}
	};
	
}]);