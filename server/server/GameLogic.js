/**
 * Created by Todor Todorin on 2/20/2015.
 */

'use strict';

var _ = require('underscore');

var stateEnum = {
    'empty': 'empty',
    'hit': 'hit',
    'miss': 'miss'
};


var firstPlayerShipsCoordinates = [
    {ship2: [
        {x: 1, y: 6, hit: false},
        {x: 2, y: 6, hit: false}
    ]},
    {ship31: [
        {x: 1, y: 6, hit: false},
        {x: 1, y: 6, hit: false},
        {x: 1, y: 6, hit: false}
    ]},
    {ship32: [
        {x: 1, y: 6, hit: false},
        {x: 1, y: 6, hit: false},
        {x: 1, y: 6, hit: false}
    ]},
    {ship4: [
        {x: 1, y: 6, hit: false},
        {x: 1, y: 6, hit: false},
        {x: 1, y: 6, hit: false},
        {x: 1, y: 6, hit: false}
    ]},
    {ship5: [
        {x: 6, y: 6, hit: false},
        {x: 6, y: 7, hit: false},
        {x: 6, y: 5, hit: false},
        {x: 6, y: 8, hit: false},
        {x: 6, y: 9, hit: false}
    ]}
];

var secondPlayerShipsCoordinates = [ // Player or CPU
    {ship2: {}},
    {ship3: {}},
    {ship4: {}},
    {ship5: {}}
];

var mainGridData = [],
    secondGridData = [];

function generateGridData(arr) {
    var y = 0;
    for (; y < 10; y++) {
        arr[y] = [ // first and second are coordinates and third is is cell checked or ship or hit ship.
            {x: 0, state: stateEnum.empty, isShip: false},
            {x: 1, state: stateEnum.empty, isShip: false},
            {x: 2, state: stateEnum.empty, isShip: false},
            {x: 3, state: stateEnum.empty, isShip: false},
            {x: 4, state: stateEnum.empty, isShip: false},
            {x: 5, state: stateEnum.empty, isShip: false},
            {x: 6, state: stateEnum.empty, isShip: false},
            {x: 7, state: stateEnum.empty, isShip: false},
            {x: 8, state: stateEnum.empty, isShip: false},
            {x: 9, state: stateEnum.empty, isShip: false}
        ];
    }
    return mainGridData;
}

function addShips(coordinates, gridData) {
    _.each(coordinates, function (obj) {
        _.each(gridData[obj.y], function (cell) {
            if (cell.x === obj.x) {
                cell.isShip = true;
                cell.state = stateEnum.empty;
            }
        });
    });
}

function checkCell(coords, isFirstPlayer) {
    var gridData = isFirstPlayer ? secondGridData : mainGridData;

    _.each(gridData[coords.y], function (cell) {
        if(cell.x === coords.x && cell.isShip) {
            cell.state = stateEnum.hit;
            return true;
        } else if (cell.x === coords.x && !cell.isShip){
            cell.state = stateEnum.miss;
            return false;
        }
    });
}

module.exports.addShipToTable = function (req, res, next) {
    var coordinates = req.param('coordinates'),
        firstPlayer = req.param('firstPlayer');

    addShips(coordinates, firstPlayer ? mainGridData : secondGridData);

    res.json(true)
};

module.exports.getFirstPlayerShips = function (req, res) {

};

module.exports.shot = function (req, res) {
    var coordinates = req.param('coordinates'),
        isHit = checkCell(coordinates);

    res.json(isHit);
};

module.exports.getGridData = function (req, res) {
    res.json(generateGridData(mainGridData));
};