app.factory('Choice',function($http) {
	
	return {
		addChoices : function(choiceArray) {
			return $http.post('/api/choice/addChoice', { choiceArray : choiceArray });
		}
	};
	
});
