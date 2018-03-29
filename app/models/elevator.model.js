var mongoose = require('mongoose');

var ElevatorSchema = mongoose.Schema({
    title: String,
    etage: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Elevator', ElevatorSchema);