angular.module('FutlistMobile', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'FutlistMobile.controllers.Main',
  'FutlistMobile.services',
  'FutlistMobile.directives'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html'
  });
  $routeProvider.when('/sportcenters', {
    templateUrl: 'sport-centers.html',
    controller: 'SportCenterListCtrl'
  });
  $routeProvider.when('/sportcenters/:sportCtrId/fields', {
    templateUrl: 'games.html',
    controller: 'GamesListCtrl',
    resolve: {
      fieldList: function($route, nestedData) {
        return nestedData.fieldsAndGames($route.current.params.sportCtrId)
      }
    }
  });
})

.constant("myConfig", {
  "url": "http://192.168.1.5",
  "port": "3001"
})