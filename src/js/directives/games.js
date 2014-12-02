angular.module('FutlistMobile.directives', [])

.directive('ftGame', function() {
	return {
		restrict: 'E',
		scope: {game: '=info'},
		templateUrl: 'ft-game.html'
	};
});