/*
 * Aplicación: publibook
 */

//Aplicación
var snakeApp = angular.module('snake',['ngRoute']);

//Rutas
snakeApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/',{
    				templateUrl: "ingresar.html",
                    controller: "ingresarCtrl"})
		.when('/misRecetas',{
    				templateUrl: "snake.html",
					controller: "snakeCtrl"})		
}]);
