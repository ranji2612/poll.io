app.factory('SelHist', function($http) {
	return {
		getAll : function() {
			return $http.get('/api/selHist/all');
		}
	};
});