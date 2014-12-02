angular.module('FutlistMobile.controllers.Main', [])

.controller('MainController', function($scope){
 
})
.controller('SportCenterListCtrl', function($scope,$location, futlistData){
	$scope.list;

	$scope.goToField = function(id){
		$location.path('/sportcenters/'+id+'/fields')
	}
	futlistData.sportCenters().then(function (data){
		$scope.list = data.data;
		console.log(data);
	});
})
.controller('GamesListCtrl', function($scope, $q, fieldList, futlistData){
	$scope.list = fieldList;
	$scope.list[0].default = 'active';
	$scope.todayDate = new Date();
	$scope.currentDate = new Date();

	$scope.goToNextDay = function(){
		$scope.currentDate = addDays($scope.currentDate, 1);
		console.log(format($scope.currentDate));
		updateGames();
	}

	$scope.goToPrevDay = function(){
		$scope.currentDate = addDays($scope.currentDate, -1);
		console.log(format($scope.currentDate));
		updateGames();
	}

	function updateGames(){
		var arrayPromises = [];
		for(var i = 0 ; i < $scope.list.length; i++){
			var field = $scope.list[i];
			arrayPromises.push(futlistData.games(field.establecimientoId, field.id, {day: format($scope.currentDate)}));
		}
		$q.all(arrayPromises)
		.then(function(games){
			for (var i = 0; i < $scope.list.length; i++) {
				$scope.list[i].games = games[i].data;
			}
			console.log($scope.list);
		});
		
	}
	function addDays(date, days) {
	    var result = new Date(date);
	    result.setDate(date.getDate() + days);
	    return result;
	}

	function format(d){
		var curr_date = d.getDate();
		if(curr_date.toString().length == 1){
			curr_date = '0'+curr_date.toString();
		}
		var curr_month = d.getMonth() + 1;
		var curr_year = d.getFullYear();
		return curr_year + "-" + curr_month 
		+ "-" + curr_date;
	}
});