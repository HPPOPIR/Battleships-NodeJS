angular.module('BattleShip', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/single',{ templateUrl: 'public/single/single.html',
            controller: 'SingleCtrl', reloadOnSearch: false})
            .when('/multi',{ templateUrl: 'public/multi/multi.html',
                controller: 'MultiCtrl', reloadOnSearch: false})
            .otherwise({redirectTo: '/main', templateUrl: 'public/main/main.html',
                controller: 'MainCtrl', reloadOnSearch: false});
    }]);

