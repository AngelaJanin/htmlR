snakeApp.controller("regresarCtrl", function($rootScope, snakeService, $window){
$rootScope.dataLogin = {};
$rootScope.dataLogin.correo = "";
$rootScope.dataLogin.password = "";

$rootScope.entrar = function(formRegistrar){
    var urlIngresar = "https://givemecoffeeplease.tk/cafe/altaUsuario";
    
    var promesa = snakeService.ingresar(urlIngresar, "POST", JSON.stringify($rootScope.dataLogin))
    .then(function(result){
        console.log(result);
        alert("Usuario registrado")
        $window.location = "#/";
    }).catch(e => {
    console.log(e);
    })
}
  });