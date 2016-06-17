(function() {
	angular.module('gvd', []);
	var mainController = function($scope, $http) {
		console.log("hello from inquiry.js");
		var refreshPost = function() {
			$scope.sendPost = function() {

					var request = {
						name: $scope.post.name,
						email: $scope.post.email,
						number: $scope.post.number,
						company: $scope.post.company,
						description: $scope.post.description
					}
					$http.post('/api/post/posts', request).success(function(response) {
						console.log(response);
						$scope.posts = response;
						//$scope.newPost = "";
						$scope.post.name = "";
						$scope.post.email = "";
						$scope.post.number = "";
						$scope.post.company = "";
						$scope.post.description = "";
					}).error(function(error) {
						console.error(error);
					});
				};

		};
		refreshPost();
		function getPosts() {
			var data = {};
			$http.get('/api/post/get', data).success(function(response) {
				$scope.posts = response;
			})
		}
		getPosts();
	};
	angular.module('gvd')
		.controller('mainController', mainController);
}());