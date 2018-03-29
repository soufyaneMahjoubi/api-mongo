var Elevator = require('../models/elevator.model.js');

exports.create = function(req, res) {
    // Create and Save a new Elevator
    if (!req.body.etage) {
        return res.status(400).send({ message: "Elevator can not be empty" });
    }

    var elevator = new Elevator({ title: req.body.title || "Untitled Elevator", etage: req.body.etage });

    elevator.save(function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the Elevator." });
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all elevators from the database.
    Elevator.find(function(err, elevators) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retrieving elevators." });
        } else {
            res.send(elevators);
        }
    });
};