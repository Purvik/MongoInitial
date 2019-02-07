var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    age: number,
    favouriteFoods: [String]
});

module.exports = mongoose.model('Person', personSchema);
