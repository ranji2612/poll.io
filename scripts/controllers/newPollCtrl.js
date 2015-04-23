app.controller('newPollCtrl', function ($scope, $location, Poll, Choice) {
	
	$scope.errorMessage = '';
	//By default 2 choices
	$scope.choiceListCount = [0,1];
	$scope.choiceList = [];
	$scope.addChoice = function() {
		$scope.errorMessage = '';
		
		var x = $scope.choiceListCount.length;
		if (1){ //$scope.choiceList.length == x ) {
			$scope.choiceListCount.push(x);
		} else {
			$scope.errorMessage = 'An Empty Field exists';
			//console.log('An Empty Field exists');
		}
	};
	$scope.print = function() {
		console.log($scope.choiceList);
	};
	
	//Validating poll data - before publishing
	$scope.validateFormData = function(data) {
		$scope.errorMessage = '';
		if ((typeof(data.title)=='undefined') || (data.title === ''))
			$scope.errorMessage = "'Title' is mandatory...";
		if (data.choices.length === 0)
			$scope.errorMessage += 'Atleast give users 2 choices :P ';
		if ($scope.errorMessage.length>0)
			return false;
		return true;
	};
	
	//Publishing new Poll
	$scope.publishPoll = function() {
		var formData = {title: $scope.newPollTitle, choices : $scope.choiceList};
		if ($scope.validateFormData(formData)) {
			Poll.addNew(formData)
			.success( function(data) {
				//Data is the id
				$scope.pollId = data;
				//Creating the choices collection
				var i, t = Date.now(), choiceListInsertion = [];
				
				for(i in $scope.choiceList) {
					choiceListInsertion.push( { pollId : data, choice : $scope.choiceList[i], votes : 0, lastUpd : t } );
				}
				Choice.addChoices(choiceListInsertion)
				.success( function(data) {
					$location.path('/poll/'+$scope.pollId.slice(1,-1) );
				})
				.error(function(err) {
					console.log(err);
				});
				
			})
			.error( function(err) {
			});
		}
	};
	
});
