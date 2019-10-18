snakeApp.controller("ingresarCtrl", function($rootScope, snakeService, $window){
  $rootScope.dataLogin = {};
  $rootScope.dataLogin.correo = "";
  $rootScope.dataLogin.password = "";

  $rootScope.entrar = function(formIngresar){
    var urlIngresar = "https://givemecoffeeplease.tk/cafe/login";
    
    var promesa = snakeService.ingresar(urlIngresar, "POST", JSON.stringify($rootScope.dataLogin))
    .then(function(result){
      
      console.log(result);
      $window.location.href = "/snake.html";
      
    }).catch(e => {
      console.log(e);
    })
  }
});