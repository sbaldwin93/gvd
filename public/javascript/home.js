(function() {
	angular.module('gvd', []);
	var mainController = function($scope, $http) {
		console.log("hello from main.js");
		$http.get('/api/me').then(function(returnData) {
			$scope.user = returnData.data;
		});
		function getPosts() {
			var data = {};
			$http.get('/api/post/get', data).success(function(response) {
				$scope.posts = response;
			})
		};
		getPosts();
	};
	angular.module('gvd')
		.controller('mainController', mainController);
}());