angular.module("FinalApp",["ngRoute","ngResource"])
.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
		.when("/",{
			controller: "MainController",
			templateUrl: "vistas/home.html"
		})
		.when("/post/:id",{
			controller: "MainController",
			templateUrl: "vistas/post.html"
		})
		.when("/user/",{
			controller: "UserController",
			templateUrl: "vistas/user.html"
		})
		.when("/post/new",{
			controller: "NewpostController",
			templateUrl: "vistas/form.html"
		})
})