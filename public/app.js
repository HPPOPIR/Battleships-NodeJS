 angular.module('BattleShip', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/main'});
    }]);

