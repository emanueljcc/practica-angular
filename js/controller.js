angular.module("FinalApp")
.controller("MainController",function($scope,$resource,PostResource,$routeParams){
	$scope.posts = PostResource.query();
	$scope.obteners = PostResource.get({id: $routeParams.id});
	console.log($scope.obteners);
})
.controller("UserController",function($scope,$resource,UserResource){
	$scope.users = UserResource.query();
})
.controller("NewpostController",function($scope,$resource,PostResource,$location){
	$scope.title = "Crear";
	$scope.post = {};
	$scope.crearForm = function(){
		PostResource.save({data: $scope.post},function(data){
			console.log(data);
			$location.path("/");
		});
	}
})