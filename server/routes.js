/**
 * Created by Todor Todorin on 2/20/2015.
 */

var path = require('path'),
    gameLogic = require('./server/GameLogic');

module.exports = function (app) {

    // api ---------------------------------------------------------------------

    app.get('/api/getGridData', gameLogic.getGridData);
    app.get('/api/getFirstPlayerShips', gameLogic.getFirstPlayerShips);
    app.post('/api/shot', gameLogic.shot);

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
//        res.sendfile('../index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });


};
