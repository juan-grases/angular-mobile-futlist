var services = angular.module('FutlistMobile.services', [])

.factory('futlistData', function($http, myConfig) {
		var url = myConfig.url + ':' + myConfig.port;
		return {
			sportCenters: function() {
				return $http.get(url + '/establecimientos.json');
			},
			fields: function(sportCtrId, fieldId) {
				return $http.get(url + '/establecimientos/' + sportCtrId + '/canchas.json');
			},
			games: function(sportCtrId, fieldId, params) {
				params = params || {};
				console.log(params);
				return $http.get(url + '/establecimientos/' + sportCtrId + '/canchas/' + fieldId + '/juegos.json', {params: params});
			}
		}
	})
	.factory('nestedData', ['futlistData', '$q', function(futlistData, $q) {
		return {
			/**
			* Get all fields and games of a SportCenter on the current day in Costa Rica.
			*
			*/
			fieldsAndGames: function(sportCtrId) {
				var list;
				return futlistData.fields(sportCtrId).then(function(data) {
					list = data.data;
				}).then(function() {
					var asyncGameData = [];
					for (var i = 0; i < list.length; i++) {
						asyncGameData.push(futlistData.games(sportCtrId, list[i].id));
					}
					return $q.all(asyncGameData);
				}).then(function(games) {
					for (var i = 0; i < list.length; i++) {
						list[i].games = games[i].data;
					}
					console.log(list);
					return list;
				});
			}
		}
	}])