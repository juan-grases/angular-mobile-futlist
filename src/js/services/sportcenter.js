var services = angular.module('FutlistMobile.services', [])

.factory('futlistData', function ($http, myConfig) {
	var url = myConfig.url+':'+myConfig.port;
	return {
		sportCenters: function(){
			return $http.get(url+'/establecimientos.json');
		},
		fields: function(sportCtrId, fieldId){
			return $http.get(url+'/establecimientos/'+sportCtrId+'/canchas.json');
		},
		games: function(sportCtrId, fieldId){
			return $http.get(url+'/establecimientos/'+sportCtrId+'/canchas/'+fieldId+'/juegos.json');
		}
	}
});