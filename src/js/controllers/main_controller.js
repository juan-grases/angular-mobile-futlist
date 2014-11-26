angular.module('FutlistMobile.controllers.Main', [])

.controller('MainController', function($scope){
 
})
.controller('SportCenterListCtrl', function($scope, $http, futlistData){
	$scope.list;

	futlistData.sportCenters().then(function (data){
		$scope.list = data.data;
		console.log(data);
	});
});