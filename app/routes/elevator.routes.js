module.exports = function(app) {

    var elevator = require('../controllers/elevator.controller.js');

    // Create a new Note
    app.post('/elevators', elevator.create);

    // Retrieve all Notes
    app.get('/elevators', elevator.findAll);

}