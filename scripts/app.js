var app = angular.module('mainApp', ['ngRoute']);
  

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
	.when('/new', {
		  templateUrl	:	'html/newPoll.html',
		  controller	:	'newPollCtrl'
	})
	.when('/poll/:id', {
		  templateUrl	:	'html/showPoll.html',
		  controller	:	'showPollCtrl'
	})
	.when('/search', {
		  templateUrl	:	'html/searchPoll.html',
		  controller	:	'searchPollCtrl'
	})
	.otherwise({
		  redirectTo	: '/search'
	});
	// use the HTML5 History API
	$locationProvider.html5Mode(true);
});


app.controller('homeCtrl', function ($scope,$http,$location) {
	
    
});


