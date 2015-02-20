 angular.module('BattleShip', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/main',templateUrl: 'public/controllers/main.html',
            controller: 'MainCtrl'});
    }]);

