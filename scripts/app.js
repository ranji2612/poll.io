var app = angular.module('mainApp', ['ngRoute']);
  

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
	.when('/', {
		  templateUrl	:	'html/index.html',
		  controller	:	'indexCtrl'
	})
	.when('/poll/:pid', {
		  templateUrl	:	'html/poll.html',
		  controller	:	'pollCtrl'
	})
	.otherwise({
		  redirectTo	: '/'
	});
	// use the HTML5 History API
	$locationProvider.html5Mode(true);
});


app.controller('homeCtrl', function ($scope,$http,$location) {
	
    
	//For menu
	$scope.gotoHome =function() {
		$scope.menuButtonClick(0);
		$location.path('/home');
	};
	$scope.menuBarButton=['menuSelected','',''];
	$scope.menuButtonClick = function(a) {
		
		$scope.menuBarButton=["","",""];
		$scope.menuBarButton[a]="menuSelected";
	};
	
});

