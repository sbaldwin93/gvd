(function() {
	angular.module('gvd', ['ngRoute']);
	var mainController = function($scope, $http) {
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
					$scope.posts = response;
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
		$http.get('/api/me').then(function(returnData) {
			$scope.user = returnData.data;
		});
	};
	angular.module('gvd')
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl : '/html/main.html',
					controller : 'mainController'
				})
				.when('/gvd', {
					templateUrl : '/html/main.html',
					controller : 'mainController'
				})
				.when('/services', {
					templateUrl : '/html/services.html',
					controller : 'mainController'
				})
				.when('/pricing', {
					templateUrl : '/html/pricing.html', 
					controller : 'mainController'
				})
				.when('/contact', {
					templateUrl : '/html/contact.html',
					controller : 'mainController'
				})
				.when('/carousel-example-generic', {
					templateUrl : '/html/main.html',
					controller : 'mainController'
				})
				.when('/inquiry', {
					templateUrl : '/html/inquiry.html',
					controller : 'mainController'
				})
				.when('/submit', {
					templateUrl: '/html/inquiry.html', 
					controller : 'mainController'
				})
				.when('/tech', {
					templateUrl: 'html/tech.html',
					controller: 'mainController'
				})		
		}])
	angular.module('gvd')
		.controller('mainController', mainController);	
}());