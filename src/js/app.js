angular.module('FutlistMobile', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'FutlistMobile.controllers.Main',
  'FutlistMobile.services'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'home.html'});
  $routeProvider.when('/sportcenters', {templateUrl: 'sport-centers.html',
											controller: 'SportCenterListCtrl'});
  $routeProvider.when('/sportcenters/:sportCtrId/fields/:fieldId/games',
   {templateUrl: 'games.html', controller: 'GamesListCtrl'});  
})

.constant("myConfig", {
        "url": "http://192.168.1.6",
        "port": "3001"
    })