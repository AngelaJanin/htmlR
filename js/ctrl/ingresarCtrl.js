snakeApp.controller("ingresarCtrl", function($rootScope, snakeService, $window){
  $rootScope.dataLogin = {};
  $rootScope.dataLogin.username = "";
  $rootScope.dataLogin.password = "";

  $rootScope.entrar = function(formIngresar){
    var urlIngresar = "http://localhost/publibookApi/login";
    
    var promesa = snakeService.ingresar(urlIngresar, "POST", JSON.stringify($rootScope.dataLogin))
    .then(function(result){
      
      console.log(result);
      if(result.length == 0 || result == null) alert("Usuario y/o contraseña incorrecta.")
      $window.location = "#/juego";
      
    }).catch(e => {
      console.log(e);
    })
  }
});