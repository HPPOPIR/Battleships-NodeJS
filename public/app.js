 angular.module('BattleShip', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when({redirectTo: '/single',templateUrl: 'public/main/single.html',
            controller: 'SingleCtrl'});
         $routeProvider.when({redirectTo: '/multi',templateUrl: 'public/multi/multi.html',
             controller: 'MultiCtrl'});
         $routeProvider.otherwise({redirectTo: '/main',templateUrl: 'public/main/main.html',
            controller: 'MainCtrl'});
    }]);

