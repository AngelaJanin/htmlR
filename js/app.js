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
		.when('/registrar',{
					templateUrl: "registrar.html",
					controller: "registrarCtrl"})					
}]);
