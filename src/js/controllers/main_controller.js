angular.module('FutlistMobile.controllers.Main', [])

.controller('MainController', function($scope){
 
})
.controller('SportCenterListCtrl', function($scope,$location, futlistData){
	$scope.list;

	$scope.getFirstField = function(id){
		futlistData.fields(id).then(function(data){
			console.log(data.data[0].id)
			firstField = data.data[0].id;
			$location.path('/sportcenters/'+id+'/fields/'+firstField+'/games')
		});
	}


	futlistData.sportCenters().then(function (data){
		$scope.list = data.data;
		console.log(data);
	});
})
.controller('GamesListCtrl', function($scope, $routeParams, futlistData){
	$scope.list;

	var sportCtrId = $routeParams.sportCtrId;
	var fieldId = $routeParams.fieldId;
	futlistData.games(sportCtrId, fieldId).then(function (data){
		$scope.list = data.data;
		console.log(data);
	});


});