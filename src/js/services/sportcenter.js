var services = angular.module('FutlistMobile.services', []);

services.factory('futlistData', function ($http, myConfig) {
	return {
		sportCenters: function(){
			var url = myConfig.url+':'+myConfig.port
			return $http.get(url+'/establecimientos.json');
		}
	}
});