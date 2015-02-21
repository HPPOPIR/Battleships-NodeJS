/**
 * Created by OPIR on 20.2.2015 г..
 */
angular.module('BattleShip')
    .controller('SingleCtrl', function mainController($scope, $http) {
        $scope.formData = 'Single';

        $scope.startGame = function () {
            // ai bii se
        };

        $scope.getShips = function () {
            $http.get('/api/getGridData')
                .success(function (response) {
                    $scope.gridData = response;
                })
                .error(function (err) {
                    console.log(err);
                })
        };

        $scope.shot = function (elem, y) {
            var x = elem.$parent.$index;
            var shotCoordinates = {coordinates:{y: y, x: x}};
            $http.post('/api/shot', shotCoordinates)
                .success(function (response) {
                    if(response == true){
                        alert('Hit!')
                    }
                })
                .error(function (err) {
                    console.log(err);
                });
            console.log(shotCoordinates);
        };
        $scope.getShips();
    }

);
