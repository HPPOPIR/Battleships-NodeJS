/**
 * Created by OPIR on 21.2.2015 г..
 */

angular.module('BattleShip')
    .service('config', function () {
        var consts = {};
        consts.AVAILABLE_SHIPS = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolboat'];
        consts.HUMAN_PLAYER = 0;
        consts.COMPUTER_PLAYER = 1;
        consts.VIRTUAL_PLAYER = 2;
        consts.CSS_TYPE_EMPTY = 'empty';
        consts.CSS_TYPE_SHIP = 'ship';
        consts.CSS_TYPE_MISS = 'miss';
        consts.CSS_TYPE_HIT = 'hit';
        consts.CSS_TYPE_SUNK = 'sunk';
        consts.TYPE_EMPTY = 0; // 0 = water (empty)
        consts.TYPE_SHIP = 1; // 1 = undamaged ship
        consts.TYPE_MISS = 2; // 2 = water with a cannonball in it (missed shot)
        consts.TYPE_HIT = 3; // 3 = damaged ship (hit shot)
        consts.TYPE_SUNK = 4; // 4 = sunk ship.
        consts.USED = 1;
        consts.UNUSED = 0;

        return consts;
    }
);