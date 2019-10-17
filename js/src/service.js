snakeApp.service("snakeService", function($http, $window, $rootScope){
	return{
		ingresar : function(urlRequest, typeRequest, jsonData){
			return new Promise((resolve, reject) => {
				$.ajax({
					type: typeRequest,
					dataType: "json",
					contentType: "application/json; charset=utf-8",
					url: urlRequest,
					data: jsonData,
					crossDomain: false,
					timeout: 50000,
					success: function(result){
						resolve(result);
					},
					error:function(jqXHR, exception){
						var msg = '';
						if (jqXHR.status === 0) {
							msg = 'Sin conexión.\nPor favor, reinicie conexión e inténtalo nuevamente.';
						} else if (jqXHR.status == 500) {
							msg = 'Error en el servidor. Contacte a TI.';
						} else if (exception === 'parsererror') {
							msg = 'Lectura de json erróneo. Contacte a TI.';
						} else if (exception === 'timeout') {
							msg = 'Se ha agotado el tiempo de respuesta del servidor.\nVerifique su conexión. Si el problema persiste, contacte a TI.';
						} else if (exception === 'abort') {
							msg = 'Petición abortada. Contacte a TI.';
						} else {
							msg =jqXHR;
						}
						reject(msg)
					}
				});
			});
		},
	};
});
