/**
 * Created by OPIR on 21.2.2015 г..
 */

angular.module('BattleShip')
    .service('config', function () {
        var consts = {};
        consts.AVAILABLE_SHIPS = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolboat'];
// You are player 0 and the computer is player 1
// The virtual player is used for generating temporary ships
// for calculating the probability heatmap
        consts.HUMAN_PLAYER = 0;
        consts.COMPUTER_PLAYER = 1;
        consts.VIRTUAL_PLAYER = 2;
// Possible values for the parameter `type` (string)
        consts.CSS_TYPE_EMPTY = 'empty';
        consts.CSS_TYPE_SHIP = 'ship';
        consts.CSS_TYPE_MISS = 'miss';
        consts.CSS_TYPE_HIT = 'hit';
        consts.CSS_TYPE_SUNK = 'sunk';
// Grid code:
        consts.TYPE_EMPTY = 0; // 0 = water (empty)
        consts.TYPE_SHIP = 1; // 1 = undamaged ship
        consts.TYPE_MISS = 2; // 2 = water with a cannonball in it (missed shot)
        consts.TYPE_HIT = 3; // 3 = damaged ship (hit shot)
        consts.TYPE_SUNK = 4; // 4 = sunk ship

// TODO: Make this better OO code. CONST.AVAILABLE_SHIPS should be an array
//       of objects rather than than two parallel arrays. Or, a better
//       solution would be to store "USED" and "UNUSED" as properties of
//       the individual ship object.
// These numbers correspond to CONST.AVAILABLE_SHIPS
// 0) 'carrier' 1) 'battleship' 2) 'destroyer' 3) 'submarine' 4) 'patrolboat'
// This variable is only used when DEBUG_MODE === true.

        consts.USED = 1;
        consts.UNUSED = 0;

        return consts;
    }
);