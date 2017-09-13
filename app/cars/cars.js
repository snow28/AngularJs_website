
'use strict';

angular.module('carStore.cars', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cars', {
    templateUrl: 'cars/cars.html',
    controller: 'carsCtrl'
  }).when('/cars/:carID', {
    templateUrl: 'cars/carDetails.html',
    controller: 'carDetails'
  });
}])

.controller('carsCtrl', ['$scope' , '$http' ,function($scope,$http) {
	console.log("carsCtrl Activated!\n");

	$http.get('json/cars.json').then(function(response){
        $scope.cars = response.data;
        console.log($scope.cars);
    });
}]).controller('carDetails',['$routeParams' , '$scope' , '$http',function($routeParams , $scope,$http){
	console.log('carDetails ctrl activated!!');;
	var carID=$routeParams.carID;
	console.log('Car ID : '+carID);
	$http.get('json/cars.json').then(function(response){
		$scope.imageName=response['data'][carID-1].images[0].name;
		$scope.currentCarData = response['data'][carID-1];
		console.log($scope.currentCarData.name);
	});
}]);