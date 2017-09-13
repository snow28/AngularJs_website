'use strict';

// Declare app level module which depends on views, and components
angular.module('carStore', [
  'ngRoute',
  'carStore.view1',
  'carStore.view2',
  'carStore.cars'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  /*$locationProvider.hashPrefix('!');*/

  $routeProvider.otherwise({redirectTo: '/cars'});
}]);
