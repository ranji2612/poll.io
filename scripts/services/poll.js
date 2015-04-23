app.factory('Poll',function($http) {
	
	return {
		addNew : function(formData) {
			return $http.post('/api/poll/addNew',formData);
		},
		getPoll : function(id) {
			return $http.get('/api/poll/' + id);
		},
		search : function(query) {
			return $http.get('/api/poll/search/'+query);
		}
	};
	
});
